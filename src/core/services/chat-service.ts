import type {
  ServiceMetadata,
  ApiChatMessage,
  StreamEvent,
  StreamOptions,
  ThreadSummary,
  GetThreadsOptions,
  ThreadListResponse,
  ChatHistoryResponse,
  GetHistoryOptions,
  HealthStatus,
} from "./types"

const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

const metadataCache = new Map<
  string,
  { data: ServiceMetadata; timestamp: number; promise?: Promise<ServiceMetadata> }
>()

function getCachedMetadata(baseUrl: string): ServiceMetadata | null {
  const cached = metadataCache.get(baseUrl)
  if (cached?.data && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data
  }
  return null
}

function setCachedMetadata(baseUrl: string, data: ServiceMetadata): void {
  metadataCache.set(baseUrl, { data, timestamp: Date.now() })
}

export function clearChatServiceMetadataCache(): void {
  metadataCache.clear()
}

function normalizeStreamEvent(parsed: Record<string, unknown>): StreamEvent | null {
  if (parsed.type === "message") {
    return { type: "message", content: parsed.content as ApiChatMessage }
  }
  if (parsed.type === "token") {
    return { type: "token", content: parsed.content as string }
  }
  if (parsed.type === "error") {
    return { type: "error", content: parsed.content as string }
  }
  if (parsed.type === "update" || parsed.node) {
    return {
      type: "update",
      node: parsed.node as string,
      updates: (parsed.updates ?? {}) as Record<string, unknown>,
      content: (parsed.updates ?? parsed) as Record<string, unknown>,
    }
  }
  return null
}

export interface ChatServiceConfig {
  baseUrl: string
  defaultAgent: string
  defaultModel: string
  apiKey?: string
}

export class ChatService {
  private config: ChatServiceConfig
  private abortController: AbortController | null = null
  private lifetime = new AbortController()
  private historyLifetime = new AbortController()
  private historyRequests = new Map<string, Promise<ChatHistoryResponse>>()
  private get cacheKey() { return JSON.stringify([this.config.baseUrl, this.config.apiKey ?? ""]) }

  /** Bound non-stream operations; streams have a separate five-minute limit. */
  private request(url: string, init: RequestInit = {}): Promise<Response> {
    return fetch(url, { ...init, signal: AbortSignal.any([this.lifetime.signal, AbortSignal.timeout(30_000), ...(init.signal ? [init.signal] : [])]) })
  }

  abortAll(): void {
    this.abortStream()
    this.abortHistory()
    this.lifetime.abort()
    this.lifetime = new AbortController()
    this.historyRequests.clear()
  }

  abortHistory(): void {
    this.historyLifetime.abort()
    this.historyLifetime = new AbortController()
    this.historyRequests.clear()
  }

  constructor(config: ChatServiceConfig) {
    this.config = config
  }

  private getHeaders(): HeadersInit {
    const headers: Record<string, string> = { "Content-Type": "application/json" }
    if (this.config.apiKey) {
      headers["Authorization"] = `Bearer ${this.config.apiKey}`
    }
    return headers
  }

  getMetadataFromCache(): ServiceMetadata | null {
    return getCachedMetadata(this.cacheKey)
  }

  async getMetadata(force = false): Promise<ServiceMetadata> {
    if (!force) {
      const cached = getCachedMetadata(this.cacheKey)
      if (cached) return cached
    }

    const existing = metadataCache.get(this.cacheKey)
    if (existing?.promise) {
      try {
        return await existing.promise
      } catch {
        // fall through to new request
      }
    }

    const fetchPromise = (async () => {
      const response = await fetch(`${this.config.baseUrl}/info`, {
        signal: AbortSignal.timeout(30_000),
        headers: this.getHeaders(),
      })
      if (!response.ok) {
        throw new Error(`Failed to fetch metadata: ${response.statusText}`)
      }
      return (await response.json()) as ServiceMetadata
    })()

    const entry = metadataCache.get(this.cacheKey) ?? {
      data: null as unknown as ServiceMetadata,
      timestamp: 0,
    }
    metadataCache.set(this.cacheKey, {
      ...entry,
      promise: fetchPromise,
      timestamp: 0,
      data: entry.data,
    })

    try {
      const data = await fetchPromise
      setCachedMetadata(this.cacheKey, data)
      return data
    } catch (error) {
      if (metadataCache.get(this.cacheKey)?.promise === fetchPromise) metadataCache.delete(this.cacheKey)
      throw error
    }
  }

  async healthCheck(): Promise<HealthStatus> {
    try {
      const response = await this.request(`${this.config.baseUrl}/health`, {
        headers: this.getHeaders(),
      })
      if (!response.ok) {
        return { status: "error", details: { code: response.status } }
      }
      const data = await response.json()
      return { status: data.status === "ok" ? "ok" : "error", details: data }
    } catch (e) {
      return { status: "error", details: { error: e instanceof Error ? e.message : "Network error" } }
    }
  }

  async invoke(
    message: string,
    options: { agent?: string; model?: string; threadId?: string; userId?: string } = {}
  ): Promise<ApiChatMessage> {
    const agent = options.agent ?? this.config.defaultAgent
    const endpoint = `${this.config.baseUrl}/${agent}/invoke`
    const requestBody = {
      message,
      model: options.model ?? this.config.defaultModel,
      thread_id: options.threadId,
      user_id: options.userId,
    }

    this.abortStream()
    const controller = new AbortController()
    this.abortController = controller
    const response = await this.request(endpoint, {
      signal: controller.signal,
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error(`Invoke failed: ${response.statusText}`)
    }

    return (await response.json()) as ApiChatMessage
  }

  async *stream(
    message: string,
    options: StreamOptions & { agent?: string; model?: string }
  ): AsyncGenerator<StreamEvent, void, unknown> {
    if (this.abortController) {
      this.abortController.abort()
    }
    const controller = new AbortController()
    this.abortController = controller

    const agent = options.agent ?? this.config.defaultAgent
    const endpoint = `${this.config.baseUrl}/${agent}/stream`
    const requestBody = {
      message,
      ...((options.model ?? this.config.defaultModel) && {
        model: options.model ?? this.config.defaultModel,
      }),
      ...(options.threadId && { thread_id: options.threadId }),
      ...(options.userId && { user_id: options.userId }),
      stream_tokens: options.streamTokens ?? true,
      ...(options.agentConfig && { agent_config: options.agentConfig }),
      ...(options.force != null && { force: options.force }),
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(requestBody),
        signal: AbortSignal.any([controller.signal, this.lifetime.signal, AbortSignal.timeout(300_000)]),
      })

      if (!response.ok) {
        let errorMessage = `Stream failed: ${response.statusText}`
        try {
          const errorData = (await response.json()) as { detail?: unknown }
          if (errorData.detail !== undefined) {
            const d = errorData.detail
            if (Array.isArray(d)) {
              errorMessage = `Stream failed: ${d
                .map((err: unknown) =>
                  typeof err === "object" && err !== null && "msg" in (err as object)
                    ? `${(err as { loc?: string[] }).loc?.join(".") ?? "field"}: ${(err as { msg: string }).msg}`
                    : JSON.stringify(err)
                )
                .join(", ")}`
            } else {
              errorMessage = `Stream failed: ${typeof d === "string" ? d : JSON.stringify(d)}`
            }
          }
        } catch {
          // ignore
        }
        throw new Error(errorMessage)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      const decoder = new TextDecoder()
      let buffer = ""

      try {
        while (true) {
          const { done, value } = await reader.read()
          buffer += done ? decoder.decode() : decoder.decode(value, { stream: true })
          if (done && buffer.trim()) buffer += "\n\n"
          const lines = buffer.split(/\r?\n\r?\n/)
          buffer = lines.pop() ?? ""
          for (const line of lines) {
            const data = line.split(/\r?\n/).filter(part => part.startsWith("data:")).map(part => part.slice(5).trimStart()).join("\n")
            if (!data) continue
            if (data === "[DONE]") {
              yield { type: "done" }
              return
            }
            try {
              const parsed = JSON.parse(data) as Record<string, unknown>
              const event = normalizeStreamEvent(parsed)
              if (event) yield event
            } catch (e) {
              console.error("Error parsing SSE data:", e)
            }
          }
          if (done) {
            yield { type: "error", content: "The connection ended before the response completed." }
            break
          }
        }
      } finally {
        await reader.cancel().catch(() => {})
        reader.releaseLock()
        if (this.abortController === controller) this.abortController = null
      }
    } catch (err) {
      if (this.abortController === controller) this.abortController = null
      if (err instanceof Error && err.name === "AbortError") return
      yield {
        type: "error",
        content: err instanceof Error ? err.message : "Stream error",
      }
    }
  }

  abortStream(): void {
    if (this.abortController) {
      this.abortController.abort()
      this.abortController = null
    }
  }

  async sendFeedback(runId: string, key: string, score: number, kwargs?: Record<string, unknown>): Promise<unknown> {
    const response = await this.request(`${this.config.baseUrl}/feedback`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ run_id: runId, key, score, kwargs }),
    })
    if (!response.ok) {
      throw new Error(`Failed to send feedback: ${response.statusText}`)
    }
    return response.json()
  }

  async deleteThread(threadId: string, userId?: string): Promise<void> {
    const uid = userId?.trim()
    if (!uid) {
      throw new Error("User ID is required to delete a thread")
    }

    const params = new URLSearchParams({
      user_id: uid,
      thread_id: threadId,
    })

    const response = await this.request(
      `${this.config.baseUrl}/history?${params.toString()}`,
      { method: "DELETE", headers: this.getHeaders() }
    )

    if (!response.ok) {
      throw new Error(`Failed to delete thread: ${response.statusText}`)
    }
  }

  getHistory(threadId: string, userId?: string, options?: GetHistoryOptions): Promise<ChatHistoryResponse> {
    const key = JSON.stringify([threadId, userId, options])
    const existing = this.historyRequests.get(key)
    if (existing) return existing
    const request = this.fetchHistory(threadId, userId, options).finally(() => {
      if (this.historyRequests.get(key) === request) this.historyRequests.delete(key)
    })
    this.historyRequests.set(key, request)
    return request
  }

  private async fetchHistory(
    threadId: string,
    userId?: string,
    options?: GetHistoryOptions
  ): Promise<ChatHistoryResponse> {
    const uid = userId?.trim()
    if (!uid) {
      return { messages: [], next_cursor: null, prev_cursor: null }
    }
    const limit = options?.limit ?? 50
    const view = options?.view ?? "full"
    const cursor = options?.cursor

    const parseResponse = (data: unknown): ChatHistoryResponse => {
      const d = data as { messages?: unknown[]; next_cursor?: string | null; prev_cursor?: string | null }
      return {
        messages: Array.isArray(d.messages) ? (d.messages as ApiChatMessage[]) : [],
        next_cursor: d.next_cursor ?? null,
        prev_cursor: d.prev_cursor ?? null,
      }
    }

    const headers = this.getHeaders()
    const signal = this.historyLifetime.signal

    try {
      const params = new URLSearchParams({
        user_id: uid,
        thread_id: threadId,
        limit: String(limit),
        view,
      })
      if (cursor != null && cursor !== "") params.set("cursor", cursor)
      const response = await this.request(
        `${this.config.baseUrl}/history?${params.toString()}`,
        { method: "GET", headers, signal }
      )
      if (response.ok) {
        return parseResponse(await response.json())
      }
      if (response.status === 404 || response.status === 405) {
        const body: Record<string, unknown> = {
          user_id: uid,
          thread_id: threadId,
          limit,
          view,
        }
        if (cursor != null && cursor !== "") body.cursor = cursor
        const postRes = await this.request(`${this.config.baseUrl}/history`, {
          method: "POST",
          signal,
          headers,
          body: JSON.stringify(body),
        })
        if (postRes.ok) return parseResponse(await postRes.json())
      }
      throw new Error(`Failed to get history: ${response.statusText}`)
    } catch (e) {
      if (e instanceof Error) throw e
      throw new Error("Failed to get history")
    }
  }

  async getThreads(
    userId?: string,
    options?: GetThreadsOptions
  ): Promise<ThreadListResponse> {
    const uid = userId?.trim()
    if (!uid) return { threads: [], total: 0 }
    try {
      const body: Record<string, unknown> = { user_id: uid }
      if (options?.limit != null) body.limit = options.limit
      if (options?.offset != null) body.offset = options.offset
      if (options?.search != null && options.search !== "")
        body.search = options.search
      const response = await this.request(`${this.config.baseUrl}/history/threads`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(body),
      })
      if (!response.ok) {
        throw new Error(`Failed to get threads: ${response.statusText}`)
      }
      const data = (await response.json()) as {
        threads?: ThreadSummary[]
        total?: number
      }
      return {
        threads: data.threads ?? [],
        total: data.total ?? (data.threads?.length ?? 0),
      }
    } catch {
      throw new Error("Could not load conversations. Please try again.")
    }
  }

  async cancelThread(threadId: string, userId?: string): Promise<boolean> {
    try {
      const url = new URL(`${this.config.baseUrl}/threads/${encodeURIComponent(threadId)}/cancel`)
      if (userId?.trim()) url.searchParams.set("user_id", userId.trim())
      const response = await this.request(url.toString(), {
        method: "POST",
        headers: this.getHeaders(),
      })
      if (!response.ok) return false
      const data = (await response.json()) as { cancelled?: boolean }
      return !!data.cancelled
    } catch {
      return false
    }
  }
}
