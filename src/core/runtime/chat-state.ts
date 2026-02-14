/**
 * Chat runtime state and reducer.
*/

import type { ApiChatMessage, StreamEvent } from "@/core/services/types"

export interface ToolInvocationCall {
  state: "call"
  toolName: string
  toolCallId?: string
  args?: Record<string, unknown>
}

export interface ToolInvocationResult {
  state: "result"
  toolName: string
  toolCallId?: string
  result: unknown
}

export type ToolInvocation = ToolInvocationCall | ToolInvocationResult

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  createdAt?: Date
  custom_data?: Record<string, unknown>
  toolInvocations?: ToolInvocation[]
  parts?: unknown[]
}

export interface ChatRuntimeState {
  messages: Message[]
  input: string
  isGenerating: boolean
  followUpPrompts: string[]
  currentThreadId: string | undefined
  currentAssistantMessageId: string | null
  metadata: import("@/core/services/types").ServiceMetadata | null
  metadataLoading: boolean
  error: string | null
}

export type ChatRuntimeConfig = {
  url: string
  agent?: string
  model?: string
  threadId?: string
  userId?: string
  stream?: boolean
  starterMessage?: string
  starterSuggestions?: string[]
  /** Called when stream ends with the final assistant message content (e.g. for TTS). */
  onStreamEnd?: (lastContent: string) => void
  apiKey?: string
}

// Reducer action types
export type ChatRuntimeAction =
  | { type: "SET_INPUT"; payload: string }
  | { type: "SET_MESSAGES"; payload: Message[] }
  | { type: "SET_THREAD_ID"; payload: string | undefined }
  | { type: "SET_METADATA"; payload: ChatRuntimeState["metadata"] }
  | { type: "SET_METADATA_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "START_SEND"; payload: { userMessage: Message; assistantMessage: Message } }
  | { type: "STREAM_TOKEN"; payload: { messageId: string; content: string } }
  | { type: "STREAM_MESSAGE"; payload: { messageId: string; event: StreamEvent } }
  | { type: "STREAM_UPDATE"; payload: { followUp?: string[] } }
  | { type: "STREAM_ERROR"; payload: { messageId: string; error: string } }
  | { type: "STREAM_END" }
  | { type: "CLEAR_CHAT"; payload?: { keepStarter?: Message } }
  | { type: "SET_FOLLOW_UP"; payload: string[] }

function updateMessageById(
  messages: Message[],
  messageId: string,
  updater: (m: Message) => Message
): Message[] {
  const idx = messages.findIndex((m) => m.id === messageId)
  if (idx === -1) return messages
  const next = [...messages]
  next[idx] = updater(next[idx]!)
  return next
}

function applyStreamMessage(
  messages: Message[],
  messageId: string,
  event: StreamEvent
): { messages: Message[]; followUp?: string[] } {
  const content = event.content
  if (!content || event.type !== "message") return { messages }

  const chatMessage = content as ApiChatMessage

  if (chatMessage.type === "tool") {
    const nameFromMessage =
      chatMessage.name ??
      (chatMessage.response_metadata as { name?: string })?.name ??
      (chatMessage.custom_data as { name?: string })?.name ??
      "Tool"
    const rawResult = chatMessage.content
    const cleanResult =
      typeof rawResult === "string" ? rawResult.replace(/\\n/g, "\n") : rawResult
    const next = updateMessageById(messages, messageId, (m) => {
      const existing = m.toolInvocations ?? []
      const matchingCallIndex = chatMessage.tool_call_id
        ? existing.findIndex(
            (inv) =>
              inv.state === "call" &&
              (inv as ToolInvocationCall).toolCallId === chatMessage.tool_call_id
          )
        : -1
      const matchingCall = matchingCallIndex >= 0 ? existing[matchingCallIndex] as ToolInvocationCall : undefined
      const toolName =
        (nameFromMessage && nameFromMessage !== "Tool")
          ? nameFromMessage
          : (matchingCall?.toolName ?? nameFromMessage)
      const toolInvocation: ToolInvocationResult = {
        state: "result",
        toolName,
        toolCallId: chatMessage.tool_call_id,
        result: cleanResult,
      }
      const filtered = existing.filter(
        (inv) => !(inv.state === "call" && (inv as ToolInvocationCall).toolCallId === chatMessage.tool_call_id)
      )
      return {
        ...m,
        toolInvocations: [...filtered, toolInvocation],
      }
    })
    return { messages: next }
  }

  if (chatMessage.tool_calls && chatMessage.tool_calls.length > 0) {
    const newCalls: ToolInvocationCall[] = chatMessage.tool_calls.map((call) => ({
      state: "call",
      toolName: call.name,
      toolCallId: call.id,
      args: call.args,
    }))
    const next = updateMessageById(messages, messageId, (m) => {
      const existing = m.toolInvocations ?? []
      const existingCalls = existing.filter(
        (inv): inv is ToolInvocationCall => inv.state === "call"
      )
      const existingResults = existing.filter((inv) => inv.state === "result")
      const existingCallIds = new Set(
        existingCalls.map((inv) => inv.toolCallId).filter(Boolean)
      )
      const mergedCalls = [...existingCalls]
      for (const call of newCalls) {
        if (call.toolCallId && !existingCallIds.has(call.toolCallId)) {
          mergedCalls.push(call)
          existingCallIds.add(call.toolCallId)
        }
      }
      const toolInvocations = [...mergedCalls, ...existingResults]
      return { ...m, toolInvocations }
    })
    return { messages: next }
  }

  if (chatMessage.type === "custom") {
    const followUp = (chatMessage.custom_data?.follow_up as string[] | undefined)
    if (Array.isArray(followUp)) {
      return { messages, followUp }
    }
    return { messages }
  }

  const text = chatMessage.content ?? ""
  const next = updateMessageById(messages, messageId, (m) => ({
    ...m,
    content: text,
    custom_data: {
      ...(m.custom_data ?? {}),
      ...(chatMessage.custom_data ?? {}),
      run_id: chatMessage.run_id,
    },
  }))
  return { messages: next }
}

export function chatRuntimeReducer(
  state: ChatRuntimeState,
  action: ChatRuntimeAction
): ChatRuntimeState {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload }
    case "SET_MESSAGES":
      return { ...state, messages: action.payload }
    case "SET_THREAD_ID":
      return { ...state, currentThreadId: action.payload }
    case "SET_METADATA":
      return { ...state, metadata: action.payload }
    case "SET_METADATA_LOADING":
      return { ...state, metadataLoading: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload }
    case "START_SEND": {
      const { userMessage, assistantMessage } = action.payload
      return {
        ...state,
        messages: [...state.messages, userMessage, assistantMessage],
        isGenerating: true,
        followUpPrompts: [],
        currentAssistantMessageId: assistantMessage.id,
        error: null,
      }
    }
    case "STREAM_TOKEN": {
      const { messageId, content } = action.payload
      return {
        ...state,
        messages: updateMessageById(state.messages, messageId, (m) => ({
          ...m,
          content,
        })),
      }
    }
    case "STREAM_MESSAGE": {
      const { messageId, event } = action.payload
      const { messages, followUp } = applyStreamMessage(state.messages, messageId, event)
      return {
        ...state,
        messages,
        ...(followUp && { followUpPrompts: followUp }),
      }
    }
    case "STREAM_UPDATE": {
      const followUp = action.payload.followUp
      if (!Array.isArray(followUp)) return state
      return { ...state, followUpPrompts: followUp }
    }
    case "STREAM_ERROR": {
      const { messageId, error } = action.payload
      return {
        ...state,
        messages: updateMessageById(state.messages, messageId, (m) => ({
          ...m,
          content: `Error: ${error}`,
        })),
      }
    }
    case "STREAM_END":
      return {
        ...state,
        isGenerating: false,
        currentAssistantMessageId: null,
      }
    case "CLEAR_CHAT": {
      const keepStarter = action.payload?.keepStarter as Message | undefined
      return {
        ...state,
        messages: keepStarter ? [keepStarter] : [],
        followUpPrompts: [],
        currentAssistantMessageId: null,
      }
    }
    case "SET_FOLLOW_UP":
      return { ...state, followUpPrompts: action.payload }
    default:
      return state
  }
}

export function getInitialChatState(
  config: ChatRuntimeConfig,
  metadata: ChatRuntimeState["metadata"]
): ChatRuntimeState {
  const starterMessage: Message | undefined = config.starterMessage
    ? {
      id: `greeting-${Date.now()}`,
      role: "assistant",
      content: config.starterMessage,
      createdAt: new Date(),
    }
    : undefined
  return {
    messages: starterMessage ? [starterMessage] : [],
    input: "",
    isGenerating: false,
    followUpPrompts: [],
    currentThreadId: config.threadId,
    currentAssistantMessageId: null,
    metadata,
    metadataLoading: !metadata,
    error: null,
  }
}
