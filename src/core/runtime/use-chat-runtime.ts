import { useReducer, useCallback, useRef, useEffect, useMemo } from "react"
import { ChatService } from "@/core/services/chat-service"
import type { ApiChatMessage } from "@/core/services/types"
import {
  chatRuntimeReducer,
  getInitialChatState,
  type Message,
  type ToolInvocation,
  type ChatRuntimeState,
  type ChatRuntimeConfig,
} from "./chat-state"

/**
 * Converts API history into UI messages. Merges consecutive AI + tool messages
 * into a single assistant message with toolInvocations and final content, so
 * history matches the structure used during streaming (user/assistant turns).
 */
function apiMessagesToUiMessages(apiMessages: ApiChatMessage[]): Message[] {
  const ui: Message[] = []
  let i = 0
  const ts = Date.now()

  while (i < apiMessages.length) {
    const m = apiMessages[i]!
    if (m.type === "human") {
      ui.push({
        id: m.run_id ?? `user-${ui.length}-${ts}`,
        role: "user",
        content: m.content ?? "",
        createdAt: new Date(),
        custom_data: m.custom_data,
      })
      i += 1
      continue
    }

    if (m.type === "ai" || m.type === "tool") {
      const startIndex = i
      let content = ""
      const toolInvocations: ToolInvocation[] = []
      let firstRunId: string | undefined
      let lastCustomData: Record<string, unknown> | undefined

      while (i < apiMessages.length) {
        const msg = apiMessages[i]!
        if (msg.type === "human") break
        if (msg.type !== "ai" && msg.type !== "tool") {
          i += 1
          continue
        }
        if (msg.type === "ai") {
          if (msg.run_id && firstRunId === undefined) firstRunId = msg.run_id
          lastCustomData = msg.custom_data
          const text = msg.content ?? ""
          if (text) content = text
          if (msg.tool_calls?.length) {
            for (const tc of msg.tool_calls) {
              toolInvocations.push({
                state: "call",
                toolName: tc.name,
                toolCallId: tc.id,
                args: tc.args,
              })
            }
          }
        } else {
          // tool
          const toolName =
            msg.name ??
            (msg.response_metadata as { name?: string })?.name ??
            (msg.custom_data as { name?: string })?.name ??
            "Tool"
          const rawResult = msg.content
          const result =
            typeof rawResult === "string"
              ? rawResult.replace(/\\n/g, "\n")
              : rawResult
          const toolCallId = msg.tool_call_id ?? undefined
          // Replace matching "call" with "result" if we have toolCallId
          const existingCallIndex = toolCallId
            ? toolInvocations.findIndex(
                (inv) =>
                  inv.state === "call" &&
                  (inv as { toolCallId?: string }).toolCallId === toolCallId
              )
            : -1
          const resultInv = {
            state: "result" as const,
            toolName,
            toolCallId,
            result,
          }
          if (existingCallIndex >= 0) {
            toolInvocations[existingCallIndex] = resultInv
          } else {
            toolInvocations.push(resultInv)
          }
        }
        i += 1
      }

      ui.push({
        id: firstRunId ?? `assistant-${startIndex}-${ts}`,
        role: "assistant",
        content,
        createdAt: new Date(),
        custom_data: lastCustomData,
        toolInvocations:
          toolInvocations.length > 0 ? toolInvocations : undefined,
      })
      continue
    }

    // custom or other: skip or treat as assistant with content
    if (m.type === "custom") {
      i += 1
      continue
    }
    i += 1
  }

  return ui
}

export interface ChatRuntimeActions {
  setInput: (value: string) => void
  sendMessage: (text: string) => Promise<void>
  stopGeneration: () => void
  setMessages: (messages: Message[] | ((prev: Message[]) => Message[])) => void
  clearChat: (options?: { keepStarter?: boolean }) => void
  setAgent: (agent: string) => void
  setModel: (model: string) => void
  setThreadId: (threadId: string | undefined) => void
  loadThread: (threadId: string) => Promise<void>
  rateResponse: (
    messageId: string,
    rating: "thumbs-up" | "thumbs-down"
  ) => Promise<void>
  refetchMetadata: () => Promise<void>
  getThreads: (
    options?: import("@/core/services/types").GetThreadsOptions
  ) => Promise<import("@/core/services/types").ThreadListResponse>
  getHistory: (threadId: string) => Promise<ApiChatMessage[]>
}

export type UseChatRuntimeReturn = ChatRuntimeState & ChatRuntimeActions

export function useChatRuntime(config: ChatRuntimeConfig): UseChatRuntimeReturn {
  const [state, dispatch] = useReducer(
    chatRuntimeReducer,
    getInitialChatState(config, null)
  )

  const configRef = useRef(config)
  configRef.current = config

  const chatServiceRef = useRef<ChatService | null>(null)
  const getService = useCallback((): ChatService => {
    if (!chatServiceRef.current) {
      const meta = state.metadata
      chatServiceRef.current = new ChatService({
        baseUrl: configRef.current.url,
        defaultAgent: configRef.current.agent ?? meta?.default_agent ?? "",
        defaultModel: configRef.current.model ?? meta?.default_model ?? "",
      })
    }
    return chatServiceRef.current
  }, [state.metadata])

  const streamTokensRef = useRef("")
  const pendingFollowUpRef = useRef<string[]>([])

  // Load metadata on mount / url change
  useEffect(() => {
    let cancelled = false
    const svc = new ChatService({
      baseUrl: config.url,
      defaultAgent: config.agent ?? "",
      defaultModel: config.model ?? "",
    })
    const cached = svc.getMetadataFromCache()
    if (cached) {
      dispatch({ type: "SET_METADATA", payload: cached })
      dispatch({ type: "SET_METADATA_LOADING", payload: false })
      return
    }
    dispatch({ type: "SET_METADATA_LOADING", payload: true })
    svc
      .getMetadata(false)
      .then((data) => {
        if (!cancelled) {
          dispatch({ type: "SET_METADATA", payload: data })
        }
      })
      .catch((err) => {
        if (!cancelled) {
          dispatch({
            type: "SET_ERROR",
            payload: err instanceof Error ? err.message : "Failed to fetch metadata",
          })
        }
      })
      .finally(() => {
        if (!cancelled) {
          dispatch({ type: "SET_METADATA_LOADING", payload: false })
        }
      })
    return () => {
      cancelled = true
    }
  }, [config.url])

  // Sync threadId from config
  useEffect(() => {
    if (config.threadId !== undefined) {
      dispatch({ type: "SET_THREAD_ID", payload: config.threadId })
    }
  }, [config.threadId])

  // When agent changes, clear chat and thread so the new agent gets a fresh conversation
  const prevAgentRef = useRef<string | undefined>(undefined)
  useEffect(() => {
    const nextAgent = config.agent ?? ""
    const prevAgent = prevAgentRef.current
    const isSwitch = prevAgent !== undefined && prevAgent !== nextAgent
    prevAgentRef.current = nextAgent
    if (isSwitch) {
      dispatch({ type: "SET_THREAD_ID", payload: undefined })
      if (config.starterMessage) {
        dispatch({
          type: "CLEAR_CHAT",
          payload: {
            keepStarter: {
              id: `greeting-${Date.now()}`,
              role: "assistant",
              content: config.starterMessage,
              createdAt: new Date(),
            },
          },
        })
      } else {
        dispatch({ type: "CLEAR_CHAT" })
      }
    }
  }, [config.agent, config.starterMessage])

  const sendMessage = useCallback(
    async (text: string) => {
      if (state.isGenerating) return
      const meta = state.metadata
      const agent = configRef.current.agent ?? meta?.default_agent
      const model = configRef.current.model ?? meta?.default_model
      if (!agent) return

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text,
        createdAt: new Date(),
      }
      const aiMessageId = `ai-${Date.now()}`
      const assistantMessage: Message = {
        id: aiMessageId,
        role: "assistant",
        content: "",
        createdAt: new Date(),
      }
      dispatch({
        type: "START_SEND",
        payload: { userMessage, assistantMessage },
      })
      streamTokensRef.current = ""
      pendingFollowUpRef.current = []

      const svc = getService()
      try {
        for await (const event of svc.stream(text, {
          agent,
          model,
          threadId: state.currentThreadId,
          userId: configRef.current.userId,
          streamTokens: configRef.current.stream !== false,
        })) {
          if (event.type === "token" && typeof event.content === "string") {
            streamTokensRef.current += event.content
            dispatch({
              type: "STREAM_TOKEN",
              payload: { messageId: aiMessageId, content: streamTokensRef.current },
            })
          } else if (event.type === "message" && event.content) {
            dispatch({
              type: "STREAM_MESSAGE",
              payload: { messageId: aiMessageId, event },
            })
            const msg = event.content as ApiChatMessage
            if (msg.type === "custom" && Array.isArray(msg.custom_data?.follow_up)) {
              pendingFollowUpRef.current = msg.custom_data.follow_up as string[]
            } else if (typeof msg.content === "string") {
              streamTokensRef.current = msg.content
              if (pendingFollowUpRef.current.length > 0) {
                const content =
                  streamTokensRef.current +
                  "\n\n**Follow-up suggestions:**\n" +
                  pendingFollowUpRef.current.map((s) => `- ${s}`).join("\n")
                pendingFollowUpRef.current = []
                dispatch({
                  type: "STREAM_TOKEN",
                  payload: { messageId: aiMessageId, content },
                })
              }
            }
          } else if (event.type === "update" && event.updates?.follow_up) {
            const followUp = event.updates.follow_up as string[]
            if (Array.isArray(followUp)) {
              dispatch({ type: "SET_FOLLOW_UP", payload: followUp })
              pendingFollowUpRef.current = followUp
            }
          } else if (event.type === "error") {
            dispatch({
              type: "STREAM_ERROR",
              payload: {
                messageId: aiMessageId,
                error: typeof event.content === "string" ? event.content : "Unknown error",
              },
            })
          }
        }
      } catch (err) {
        dispatch({
          type: "STREAM_ERROR",
          payload: {
            messageId: aiMessageId,
            error: err instanceof Error ? err.message : "Unknown error",
          },
        })
      } finally {
        const lastContent = streamTokensRef.current
        dispatch({ type: "STREAM_END" })
        configRef.current.onStreamEnd?.(lastContent)
      }
    },
    [state.isGenerating, state.metadata, state.currentThreadId, getService]
  )

  const stopGeneration = useCallback(() => {
    getService().abortStream()
    dispatch({ type: "STREAM_END" })
  }, [getService])

  const setInput = useCallback((value: string) => {
    dispatch({ type: "SET_INPUT", payload: value })
  }, [])

  const setMessages = useCallback(
    (payload: Message[] | ((prev: Message[]) => Message[])) => {
      if (typeof payload === "function") {
        dispatch({ type: "SET_MESSAGES", payload: payload(state.messages) })
      } else {
        dispatch({ type: "SET_MESSAGES", payload })
      }
    },
    [state.messages]
  )

  const clearChat = useCallback(
    (options?: { keepStarter?: boolean }) => {
      const keepStarter = options?.keepStarter
      if (keepStarter && configRef.current.starterMessage) {
        dispatch({
          type: "CLEAR_CHAT",
          payload: {
            keepStarter: {
              id: `greeting-${Date.now()}`,
              role: "assistant",
              content: configRef.current.starterMessage,
              createdAt: new Date(),
            },
          },
        })
      } else {
        dispatch({ type: "CLEAR_CHAT" })
      }
    },
    []
  )

  const setAgent = useCallback((_agent: string) => {
    chatServiceRef.current = null
    dispatch({ type: "SET_METADATA", payload: state.metadata })
  }, [state.metadata])

  const setModel = useCallback((_model: string) => {
    // No dedicated model state in reducer; model is passed per request from config.
    // Caller can store model in config; we just allow API to not change reducer.
  }, [])

  const setThreadId = useCallback((threadId: string | undefined) => {
    dispatch({ type: "SET_THREAD_ID", payload: threadId })
  }, [])

  const loadThread = useCallback(
    async (threadId: string) => {
      const uid = configRef.current.userId?.trim()
      if (!uid) return
      const svc = getService()
      const apiMessages = await svc.getHistory(threadId, uid)
      dispatch({ type: "SET_MESSAGES", payload: apiMessagesToUiMessages(apiMessages) })
      dispatch({ type: "SET_THREAD_ID", payload: threadId })
    },
    [getService]
  )

  const rateResponse = useCallback(
    async (messageId: string, rating: "thumbs-up" | "thumbs-down") => {
      const message = state.messages.find((m) => m.id === messageId)
      const runId = message?.custom_data?.run_id as string | undefined
      if (!runId) return
      const svc = getService()
      await svc.sendFeedback(runId, "human-feedback", rating === "thumbs-up" ? 1 : 0)
    },
    [state.messages, getService]
  )

  const refetchMetadata = useCallback(async () => {
    const svc = getService()
    const data = await svc.getMetadata(true)
    dispatch({ type: "SET_METADATA", payload: data })
  }, [getService])

  const getThreads = useCallback(
    async (options?: import("@/core/services/types").GetThreadsOptions) => {
      const uid = configRef.current.userId?.trim()
      const svc = getService()
      return svc.getThreads(uid, options)
    },
    [getService]
  )

  const getHistory = useCallback(
    async (threadId: string) => {
      const svc = getService()
      return svc.getHistory(threadId, configRef.current.userId)
    },
    [getService]
  )

  const actions: ChatRuntimeActions = useMemo(
    () => ({
      setInput,
      sendMessage,
      stopGeneration,
      setMessages,
      clearChat,
      setAgent,
      setModel,
      setThreadId,
      loadThread,
      rateResponse,
      refetchMetadata,
      getThreads,
      getHistory,
    }),
    [
      setInput,
      sendMessage,
      stopGeneration,
      setMessages,
      clearChat,
      setAgent,
      setModel,
      setThreadId,
      loadThread,
      rateResponse,
      refetchMetadata,
      getThreads,
      getHistory,
    ]
  )

  return { ...state, ...actions }
}
