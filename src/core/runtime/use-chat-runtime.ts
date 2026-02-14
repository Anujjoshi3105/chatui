import { useReducer, useCallback, useRef, useEffect, useMemo } from "react"
import { ChatService } from "@/core/services/chat-service"
import type { ApiChatMessage } from "@/core/services/types"
import {
  loadMessages,
  saveMessages,
  clearMessages,
  getThreadMessagesKey,
  loadCurrentThreadId,
  saveCurrentThreadId,
} from "@/core/persistence"
import type { PersistedMessage } from "@/core/persistence"
import {
  chatRuntimeReducer,
  getInitialChatState,
  type Message,
  type ToolInvocation,
  type ChatRuntimeState,
  type ChatRuntimeConfig,
} from "./chat-state"

function generateThreadId(): string {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `thread-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
}

function getStorageBaseKey(config: ChatRuntimeConfig): string {
  const url = (config.url ?? "").replace(/\/$/, "")
  const userId = config.userId?.trim() ?? "anon"
  const agent = config.agent?.trim() ?? "default"
  return `${url}:${userId}:${agent}`
}

function persistedToMessages(parsed: PersistedMessage[] | null): Message[] | null {
  if (!parsed || !Array.isArray(parsed) || parsed.length === 0) return null
  return parsed.map((p) => ({
    id: p.id,
    role: p.role === "user" || p.role === "assistant" ? p.role : "user",
    content: p.content,
    createdAt: p.createdAt ? new Date(p.createdAt) : undefined,
    custom_data: p.custom_data,
    toolInvocations: p.toolInvocations as ToolInvocation[] | undefined,
    parts: p.parts,
  }))
}

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
          const existingCall = existingCallIndex >= 0 ? toolInvocations[existingCallIndex] as { toolName?: string } : undefined
          const resolvedToolName =
            (toolName && toolName !== "Tool") ? toolName : (existingCall?.toolName ?? toolName)
          const resultInv = {
            state: "result" as const,
            toolName: resolvedToolName,
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
  clearChat: (options?: { keepStarter?: boolean; createNewThread?: boolean }) => void
  setAgent: (agent: string) => void
  setModel: (model: string) => void
  setThreadId: (threadId: string | undefined) => void
  loadThread: (threadId: string, userId?: string) => Promise<void>
  rateResponse: (
    messageId: string,
    rating: "thumbs-up" | "thumbs-down"
  ) => Promise<void>
  refetchMetadata: () => Promise<void>
  getThreads: (
    options?: import("@/core/services/types").GetThreadsOptions
  ) => Promise<import("@/core/services/types").ThreadListResponse>
  getHistory: (
    threadId: string,
    options?: import("@/core/services/types").GetHistoryOptions
  ) => Promise<import("@/core/services/types").ChatHistoryResponse>
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
        apiKey: configRef.current.apiKey,
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
      apiKey: config.apiKey,
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

  const storageBaseKey = useMemo(
    () => getStorageBaseKey(config),
    [config.url, config.userId, config.agent]
  )
  const initialThreadDoneRef = useRef<string | null>(null)

  // Thread init: when threadId is provided, load history; when not, restore from storage or create new thread
  useEffect(() => {
    const key = `${storageBaseKey}:${config.threadId ?? "none"}`
    if (initialThreadDoneRef.current === key) return
    initialThreadDoneRef.current = key

    const baseKey = storageBaseKey
    const threadIdFromConfig = config.threadId

    if (threadIdFromConfig !== undefined && threadIdFromConfig !== null && threadIdFromConfig !== "") {
      dispatch({ type: "SET_THREAD_ID", payload: threadIdFromConfig })
      const loadForThread = async (tid: string) => {
        const uid = configRef.current.userId?.trim()
        if (uid) {
          try {
            const svc = getService()
            const { messages } = await svc.getHistory(tid, uid)
            if (messages.length > 0) {
              dispatch({ type: "SET_MESSAGES", payload: apiMessagesToUiMessages(messages) })
            }
          } catch {
            const msgKey = getThreadMessagesKey(baseKey, tid)
            const local = loadMessages(msgKey)
            const ui = persistedToMessages(local as PersistedMessage[] | null)
            if (ui && ui.length > 0) dispatch({ type: "SET_MESSAGES", payload: ui })
          }
        } else {
          const msgKey = getThreadMessagesKey(baseKey, tid)
          const local = loadMessages(msgKey)
          const ui = persistedToMessages(local as PersistedMessage[] | null)
          if (ui && ui.length > 0) dispatch({ type: "SET_MESSAGES", payload: ui })
        }
      }
      loadForThread(threadIdFromConfig)
      return
    }

    const savedThreadId = loadCurrentThreadId(baseKey)
    if (savedThreadId) {
      dispatch({ type: "SET_THREAD_ID", payload: savedThreadId })
      const loadForThread = async (tid: string) => {
        const uid = configRef.current.userId?.trim()
        if (uid) {
          try {
            const svc = getService()
            const { messages } = await svc.getHistory(tid, uid)
            if (messages.length > 0) {
              dispatch({ type: "SET_MESSAGES", payload: apiMessagesToUiMessages(messages) })
            }
          } catch {
            const msgKey = getThreadMessagesKey(baseKey, tid)
            const local = loadMessages(msgKey)
            const ui = persistedToMessages(local as PersistedMessage[] | null)
            if (ui && ui.length > 0) dispatch({ type: "SET_MESSAGES", payload: ui })
          }
        } else {
          const msgKey = getThreadMessagesKey(baseKey, tid)
          const local = loadMessages(msgKey)
          const ui = persistedToMessages(local as PersistedMessage[] | null)
          if (ui && ui.length > 0) dispatch({ type: "SET_MESSAGES", payload: ui })
        }
      }
      loadForThread(savedThreadId)
    } else {
      const newId = generateThreadId()
      saveCurrentThreadId(baseKey, newId)
      dispatch({ type: "SET_THREAD_ID", payload: newId })
    }
  }, [storageBaseKey, config.threadId, getService])

  // Persist current thread id when it changes
  useEffect(() => {
    if (!storageBaseKey) return
    const tid = state.currentThreadId
    saveCurrentThreadId(storageBaseKey, tid ?? null)
  }, [storageBaseKey, state.currentThreadId])

  // Persist messages for the current thread (do not merge threads)
  useEffect(() => {
    if (!storageBaseKey || !state.currentThreadId) return
    if (state.messages.length === 0) {
      clearMessages(getThreadMessagesKey(storageBaseKey, state.currentThreadId))
      return
    }
    saveMessages(
      getThreadMessagesKey(storageBaseKey, state.currentThreadId),
      state.messages
    )
  }, [storageBaseKey, state.currentThreadId, state.messages])

  // When agent changes: create new thread and clear messages (do not merge)
  const prevAgentRef = useRef<string | undefined>(undefined)
  useEffect(() => {
    const nextAgent = config.agent ?? ""
    const prevAgent = prevAgentRef.current
    const isSwitch = prevAgent !== undefined && prevAgent !== nextAgent
    prevAgentRef.current = nextAgent
    if (isSwitch) {
      const newId = generateThreadId()
      saveCurrentThreadId(storageBaseKey, newId)
      dispatch({ type: "SET_THREAD_ID", payload: newId })
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
  }, [config.agent, config.starterMessage, storageBaseKey])

  const sendMessage = useCallback(
    async (text: string) => {
      if (state.isGenerating) return
      const meta = state.metadata
      const agent = configRef.current.agent ?? meta?.default_agent
      const model = configRef.current.model ?? meta?.default_model
      if (!agent) return

      let threadIdToUse = state.currentThreadId
      if (!threadIdToUse) {
        threadIdToUse = generateThreadId()
        dispatch({ type: "SET_THREAD_ID", payload: threadIdToUse })
        saveCurrentThreadId(getStorageBaseKey(configRef.current), threadIdToUse)
      }

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
          threadId: threadIdToUse,
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
    (options?: { keepStarter?: boolean; createNewThread?: boolean }) => {
      const baseKey = getStorageBaseKey(configRef.current)
      if (options?.createNewThread) {
        const newId = generateThreadId()
        saveCurrentThreadId(baseKey, newId)
        dispatch({ type: "SET_THREAD_ID", payload: newId })
      }
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
    async (threadId: string, explicitUserId?: string) => {
      const uid = (explicitUserId ?? configRef.current.userId)?.trim()
      if (!uid) return
      const svc = getService()
      try {
        const { messages } = await svc.getHistory(threadId, uid)
        dispatch({ type: "SET_MESSAGES", payload: apiMessagesToUiMessages(messages) })
        dispatch({ type: "SET_THREAD_ID", payload: threadId })
        dispatch({ type: "SET_ERROR", payload: null })
      } catch (err) {
        console.error("Failed to load thread history:", err)
        dispatch({
          type: "SET_ERROR",
          payload: err instanceof Error ? err.message : "Failed to load conversation",
        })
      }
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
    async (
      threadId: string,
      options?: import("@/core/services/types").GetHistoryOptions
    ) => {
      const svc = getService()
      return svc.getHistory(threadId, configRef.current.userId, options)
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
