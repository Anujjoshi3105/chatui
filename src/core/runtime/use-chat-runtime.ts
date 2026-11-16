import { useReducer, useCallback, useRef, useEffect, useMemo, useState } from "react"
import { ChatService } from "@/core/services/chat-service"
import { loadMessages, saveMessages, clearMessages, getThreadMessagesKey, loadCurrentThreadId, saveCurrentThreadId } from "@/core/persistence"
import { chatRuntimeReducer, getInitialChatState, type Message, type ChatRuntimeState, type ChatRuntimeConfig } from "./chat-state"
import { apiMessagesToUiMessages } from "./message-normalizer"
import { emitChatEvent, type AttachmentReference } from "@/core/services/interaction-types"
import { createTokenBatcher } from "./token-batcher"

const generateThreadId = () => globalThis.crypto?.randomUUID?.() ?? `thread-${Date.now()}-${Math.random().toString(36).slice(2)}`
const storageKey = (config: ChatRuntimeConfig) => JSON.stringify([config.url.replace(/\/$/, ""), config.userId?.trim() || "anon", config.agent?.trim() || "default"])
const legacyStorageKey = (config: ChatRuntimeConfig) => `${config.url.replace(/\/$/, "")}:${config.userId?.trim() || "anon"}:${config.agent?.trim() || "default"}`
const safeError = "Unable to complete the request. Please check your connection and try again."

export interface ChatRuntimeActions {
  submitMessage: (text: string, attachments?: AttachmentReference[]) => { accepted: boolean; reason?: string }
  retryError: () => Promise<void>
  dismissError: () => void
  setInput: (value: string) => void
  sendMessage: (text: string) => Promise<void>
  stopGeneration: () => void
  invoke: (text: string) => Promise<void>
  setMessages: (messages: Message[] | ((prev: Message[]) => Message[])) => void
  clearChat: (options?: { keepStarter?: boolean; createNewThread?: boolean }) => void
  setAgent: (agent: string) => void
  setModel: (model: string) => void
  setThreadId: (threadId: string | undefined) => void
  loadThread: (threadId: string, userId?: string) => Promise<void>
  rateResponse: (
    messageId: string,
    rating: number,
    comment?: string
  ) => Promise<void>
  refetchMetadata: () => Promise<void>
  getThreads: (
    options?: import("@/core/services/types").GetThreadsOptions
  ) => Promise<import("@/core/services/types").ThreadListResponse>
  getHistory: (
    threadId: string,
    options?: import("@/core/services/types").GetHistoryOptions
  ) => Promise<import("@/core/services/types").ChatHistoryResponse>
  deleteThread: (threadId: string, userId?: string) => Promise<void>
}

export type UseChatRuntimeReturn = ChatRuntimeState & ChatRuntimeActions


export function useChatRuntime(config: ChatRuntimeConfig): UseChatRuntimeReturn {
  const [selection, setSelection] = useState<{ agent?: string; model?: string; sourceAgent?: string; sourceModel?: string }>({})
  const selectedAgent = selection.sourceAgent === config.agent ? selection.agent ?? config.agent : config.agent
  const selectedModel = selection.sourceModel === config.model ? selection.model ?? config.model : config.model
  const [state, dispatch] = useReducer(chatRuntimeReducer, config, value => getInitialChatState(value, null))
  const stateRef = useRef(state)
  stateRef.current = state
  const configRef = useRef(config)
  configRef.current = { ...config, agent: selectedAgent, model: selectedModel }
  const service = useMemo(() => new ChatService({ baseUrl: config.url, apiKey: config.apiKey, defaultAgent: "", defaultModel: "" }), [config.url, config.apiKey])
  const failedHistory = useRef<{ threadId: string; userId?: string } | null>(null)
  const revision = useRef(0)
  const busy = useRef(false)
  const restored = useRef(false)
  const [restoring, setRestoring] = useState(true)
  const persistSnapshot = useRef<(() => void) | null>(null)
  const flushTokens = useRef<(() => void) | null>(null)
  const baseKey = storageKey({ ...config, agent: selectedAgent })
  const cancel = useCallback(() => {
    persistSnapshot.current?.()
    flushTokens.current?.()
    flushTokens.current = null
    revision.current++
    busy.current = false
    service.abortStream()
    service.abortHistory()
    dispatch({ type: "CANCEL" })
  }, [service])

  const stopGeneration = useCallback(() => {
    if (busy.current) emitChatEvent(configRef.current.onEvent, { type: "response_stopped" })
    cancel()
    restored.current = true
    setRestoring(false)
  }, [cancel])

  useEffect(() => {
    let active = true
    dispatch({ type: "SET_METADATA_LOADING", payload: true })
    service.getMetadata().then(metadata => {
      if (active) dispatch({ type: "SET_METADATA", payload: metadata })
    }).catch(() => {
      if (active) dispatch({ type: "SET_ERROR", payload: "Could not connect to the assistant. Try connecting again.", kind: "metadata" })
    }).finally(() => {
      if (active) dispatch({ type: "SET_METADATA_LOADING", payload: false })
    })
    let timer: ReturnType<typeof setTimeout>
    const check = async () => {
      const status = await service.healthCheck()
      if (!active) return
      dispatch({ type: "SET_BACKEND_STATUS", payload: status })
      timer = setTimeout(check, 120000)
    }
    void check()
    return () => {
      active = false
      persistSnapshot.current?.()
      clearTimeout(timer)
      // Invalidate the latest request, rather than the revision at effect setup.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      revision.current++
      busy.current = false
      service.abortAll()
    }
  }, [service])

  const restoreThread = useCallback(async (threadId: string, userId?: string) => {
    cancel()
    const current = revision.current
    restored.current = false
    setRestoring(true)
    dispatch({ type: "SET_ERROR", payload: null })
    const local = loadMessages(getThreadMessagesKey(baseKey, threadId))
      ?? loadMessages(getThreadMessagesKey(legacyStorageKey(configRef.current), threadId))
    let messages: Message[] = (local ?? []).map(message => ({
      ...message, role: message.role as Message["role"],
      status: message.status === "streaming" || message.status === "submitting" ? "stopped" : message.status,
      createdAt: message.createdAt ? new Date(message.createdAt) : undefined,
      toolInvocations: message.toolInvocations as Message["toolInvocations"],
    }))
    try {
      if (userId?.trim()) {
        const history = await service.getHistory(threadId, userId)
        messages = apiMessagesToUiMessages(history.messages)
      }
    } catch {
      if (current === revision.current) {
        failedHistory.current = { threadId, userId }
        dispatch({ type: "SET_ERROR", kind: "history", payload: local?.length
          ? "Could not refresh history. Showing the saved copy."
          : "Could not load that conversation. Your current conversation is still here." })
        if (!local?.length) {
          restored.current = true
          setRestoring(false)
          return
        }
      }
    }
    if (current !== revision.current) return
    if (!messages.length && configRef.current.starterMessage) messages = [{ id: "greeting", role: "assistant", content: configRef.current.starterMessage }]
    restored.current = true
    setRestoring(false)
    dispatch({ type: "SET_FOLLOW_UP", payload: [] })
    dispatch({ type: "SET_INPUT", payload: "" })
    dispatch({ type: "SET_THREAD_ID", payload: threadId })
    dispatch({ type: "SET_MESSAGES", payload: messages })
  }, [baseKey, cancel, service])

  useEffect(() => {
    const tid = config.threadId || loadCurrentThreadId(baseKey) || loadCurrentThreadId(legacyStorageKey(configRef.current)) || generateThreadId()
    void restoreThread(tid, config.userId)
    return () => {
      restored.current = false
      // eslint-disable-next-line react-hooks/exhaustive-deps
      revision.current++
      busy.current = false
      service.abortStream()
    }
  }, [baseKey, config.threadId, config.userId, restoreThread, service])

  useEffect(() => {
    if (restoring || !restored.current || !state.currentThreadId) return
    const tid = state.currentThreadId
    const key = getThreadMessagesKey(baseKey, tid)
    const persist = () => {
      saveCurrentThreadId(baseKey, tid)
      if (state.messages.length) saveMessages(key, state.messages)
      else clearMessages(key)
    }
    persistSnapshot.current = persist
    const timer = setTimeout(persist, 250)
    window.addEventListener("pagehide", persist)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("pagehide", persist)
    }
  }, [baseKey, state.currentThreadId, state.messages, state.isGenerating, restoring])

  const run = useCallback(async (text: string, stream: boolean, attachments: AttachmentReference[] = [], agentConfig?: Record<string, unknown>) => {
    if ((!text.trim() && !(attachments.length && configRef.current.attachments?.allowFileOnly)) || busy.current || !restored.current) return
    const cfg = configRef.current
    const meta = stateRef.current.metadata
    const agent = cfg.agent || meta?.default_agent
    if (!agent) return
    const model = cfg.model || meta?.default_model
    busy.current = true
    const started = performance.now()
    let receivedContent = false
    const contentReceived = () => {
      if (!receivedContent) { receivedContent = true; emitChatEvent(cfg.onEvent, { type: "first_content", elapsedMs: performance.now() - started }) }
    }
    emitChatEvent(cfg.onEvent, { type: "send_accepted" })
    const current = ++revision.current
    const tid = stateRef.current.currentThreadId || generateThreadId()
    const id = generateThreadId()
    dispatch({ type: "SET_THREAD_ID", payload: tid })
    dispatch({ type: "START_SEND", payload: {
      userMessage: { id: `user-${id}`, role: "user", content: text, createdAt: new Date(), custom_data: attachments.length ? { attachments } : undefined },
      assistantMessage: { id, role: "assistant", content: "", createdAt: new Date(), status: "submitting" },
    } })
    let content = ""
    let failed = false
    const batcher = createTokenBatcher(value => {
      if (current === revision.current) dispatch({ type: "STREAM_TOKEN", payload: { messageId: id, content: value } })
    })
    flushTokens.current = batcher.flush
    const options = { agent, model, threadId: tid, userId: cfg.userId, agentConfig, streamTokens: cfg.stream !== false }
    try {
      if (!stream) {
        const response = await service.invoke(text, options)
        if (current !== revision.current) return
        content = response.content
        if (content) contentReceived()
        batcher.push(content)
      } else {
        for await (const event of service.stream(text, options)) {
          if (current !== revision.current) return
          if (event.type === "token" && typeof event.content === "string") {
            if (event.content) contentReceived()
            content += event.content
            batcher.push(content)
          } else if (event.type === "message" && typeof event.content === "object" && event.content && "type" in event.content) {
            batcher.flush()
            dispatch({ type: "STREAM_MESSAGE", payload: { messageId: id, event } })
            const msg = event.content
            if (msg.type === "ai" && typeof msg.content === "string" && (!Array.isArray(msg.tool_calls) || !msg.tool_calls.length)) content = msg.content
            if (content) contentReceived()
          } else if (event.type === "update" && Array.isArray(event.updates?.follow_up)) {
            dispatch({ type: "SET_FOLLOW_UP", payload: event.updates.follow_up.filter((v): v is string => typeof v === "string") })
          } else if (event.type === "error") throw new Error(safeError)
        }
      }
      if (!content.trim() && current === revision.current) throw new Error("Empty response")
    } catch {
      if (current === revision.current) {
        emitChatEvent(cfg.onEvent, { type: "response_failed", elapsedMs: performance.now() - started })
        batcher.flush()
        failed = true
        dispatch({ type: "STREAM_ERROR", payload: { messageId: id, error: safeError } })
      }
    } finally {
      batcher.flush()
      batcher.dispose()
      if (current === revision.current) {
        flushTokens.current = null
        busy.current = false
        dispatch({ type: "STREAM_END" })
        if (!failed) {
          emitChatEvent(cfg.onEvent, { type: "response_completed", elapsedMs: performance.now() - started })
          configRef.current.onStreamEnd?.(content)
        }
      }
    }
  }, [service])
  const submitMessage = useCallback((text: string, attachments: AttachmentReference[] = []) => {
    const cfg = configRef.current
    if (busy.current || !restored.current) return { accepted: false, reason: "Wait for the current response or stop it first." }
    if (!text.trim() && !(attachments.length && cfg.attachments?.allowFileOnly)) return { accepted: false, reason: "Write a message first." }
    if (!(cfg.agent || stateRef.current.metadata?.default_agent)) return { accepted: false, reason: "Select an available assistant first." }
    if (attachments.length && !cfg.attachments) return { accepted: false, reason: "Attachments are unavailable." }
    let agentConfig: Record<string, unknown> | undefined
    try { agentConfig = attachments.length ? cfg.attachments?.toAgentConfig(attachments) : undefined }
    catch { return { accepted: false, reason: "Could not prepare the attachments. Your draft and files have been kept." } }
    void run(text, true, attachments, agentConfig).catch(() => dispatch({ type: "SET_ERROR", payload: "Could not prepare the request. Your draft has been kept." }))
    return { accepted: true }
  }, [run])
  const sendMessage = useCallback((text: string) => run(text, true), [run])
  const invoke = useCallback((text: string) => run(text, false), [run])
  const setInput = useCallback((payload: string) => dispatch({ type: "SET_INPUT", payload }), [])
  const setMessages = useCallback((payload: Message[] | ((prev: Message[]) => Message[])) => {
    const messages = typeof payload === "function" ? payload(stateRef.current.messages) : payload
    stateRef.current = { ...stateRef.current, messages }
    dispatch({ type: "SET_MESSAGES", payload: messages })
  }, [])
  const clearChat = useCallback((options?: { keepStarter?: boolean; createNewThread?: boolean }) => {
    cancel()
    restored.current = true
    setRestoring(false)
    const cfg = configRef.current
    const tid = options?.createNewThread ? generateThreadId() : stateRef.current.currentThreadId
    dispatch({ type: "SET_THREAD_ID", payload: tid })
    const draft = stateRef.current.input
    dispatch({ type: "CLEAR_CHAT", payload: { keepStarter: options?.keepStarter && cfg.starterMessage ? { id: "greeting", role: "assistant", content: cfg.starterMessage } : undefined } })
    if (options?.createNewThread) dispatch({ type: "SET_INPUT", payload: draft })
  }, [cancel])
  const setThreadId = useCallback((tid: string | undefined) => {
    if (tid === stateRef.current.currentThreadId) return
    void restoreThread(tid || generateThreadId(), configRef.current.userId)
  }, [restoreThread])
  const loadThread = useCallback((tid: string, uid?: string) => restoreThread(tid, uid ?? configRef.current.userId), [restoreThread])
  const setAgent = useCallback((agent: string) => {
    cancel()
    setSelection(previous => ({ ...previous, agent, sourceAgent: config.agent }))
    configRef.current = { ...configRef.current, agent }
  }, [cancel, config.agent])
  const setModel = useCallback((model: string) => {
    setSelection(previous => ({ ...previous, model, sourceModel: config.model }))
    configRef.current = { ...configRef.current, model }
  }, [config.model])
  const rateResponse = useCallback(async (messageId: string, rating: number, comment?: string) => {
    const message = stateRef.current.messages.find(m => m.id === messageId)
    const feedbackThread = stateRef.current.currentThreadId
    if (!message) return
    dispatch({ type: "SET_MESSAGE_RATING", payload: { messageId, rating, comment } })
    const runId = message.runId ?? message.custom_data?.run_id
    if (typeof runId !== "string") return
    try {
      await service.sendFeedback(runId, "human-feedback-stars", rating, comment ? { comment } : undefined)
      emitChatEvent(configRef.current.onEvent, { type: "feedback_saved" })
    }
    catch {
      if (stateRef.current.currentThreadId === feedbackThread) dispatch({ type: "SET_MESSAGE_RATING", payload: { messageId, rating: message.rating, comment: message.comment } })
      emitChatEvent(configRef.current.onEvent, { type: "feedback_failed" })
      throw new Error("Could not save feedback. Please try again.")
    }
  }, [service])
  const refetchMetadata = useCallback(async () => {
    dispatch({ type: "SET_METADATA_LOADING", payload: true })
    dispatch({ type: "SET_ERROR", payload: null })
    try { dispatch({ type: "SET_METADATA", payload: await service.getMetadata(true) }) }
    catch { dispatch({ type: "SET_ERROR", kind: "metadata", payload: "Could not connect to the assistant. Try connecting again." }) }
    finally { dispatch({ type: "SET_METADATA_LOADING", payload: false }) }
  }, [service])
  const dismissError = useCallback(() => dispatch({ type: "SET_ERROR", payload: null }), [])
  const retryError = useCallback(async () => {
    if (stateRef.current.errorKind === "history" && failedHistory.current) {
      await restoreThread(failedHistory.current.threadId, failedHistory.current.userId)
    } else await refetchMetadata()
  }, [restoreThread, refetchMetadata])
  const getThreads = useCallback((options?: import("@/core/services/types").GetThreadsOptions) => service.getThreads(configRef.current.userId, options), [service])
  const getHistory = useCallback((tid: string, options?: import("@/core/services/types").GetHistoryOptions) => service.getHistory(tid, configRef.current.userId, options), [service])
  const deleteThread = useCallback(async (tid: string, uid?: string) => {
    await service.deleteThread(tid, uid ?? configRef.current.userId)
    clearMessages(getThreadMessagesKey(baseKey, tid))
    if (tid === stateRef.current.currentThreadId) clearChat({ createNewThread: true, keepStarter: true })
  }, [service, baseKey, clearChat])
  return { ...state, submitMessage, retryError, dismissError, historyLoading: restoring, setInput, sendMessage, invoke, stopGeneration, setMessages, clearChat, setAgent, setModel, setThreadId, loadThread, rateResponse, refetchMetadata, getThreads, getHistory, deleteThread }
}
