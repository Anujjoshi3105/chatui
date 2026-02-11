import type {
  ServiceMetadata,
  ApiChatMessage,
  StreamEvent,
  StreamOptions,
  ThreadSummary,
  GetThreadsOptions,
  ThreadListResponse,
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
}

export class ChatService {
  private config: ChatServiceConfig
  private abortController: AbortController | null = null

  constructor(config: ChatServiceConfig) {
    this.config = config
  }

  getMetadataFromCache(): ServiceMetadata | null {
    return getCachedMetadata(this.config.baseUrl)
  }

  async getMetadata(force = false): Promise<ServiceMetadata> {
    if (!force) {
      const cached = getCachedMetadata(this.config.baseUrl)
      if (cached) return cached
    }

    const existing = metadataCache.get(this.config.baseUrl)
    if (existing?.promise) {
      try {
        return await existing.promise
      } catch {
        // fall through to new request
      }
    }

    const fetchPromise = (async () => {
      const response = await fetch(`${this.config.baseUrl}/info`)
      if (!response.ok) {
        throw new Error(`Failed to fetch metadata: ${response.statusText}`)
      }
      return (await response.json()) as ServiceMetadata
    })()

    const entry = metadataCache.get(this.config.baseUrl) ?? {
      data: null as unknown as ServiceMetadata,
      timestamp: 0,
    }
    metadataCache.set(this.config.baseUrl, {
      ...entry,
      promise: fetchPromise,
      timestamp: 0,
      data: entry.data,
    })

    const data = await fetchPromise
    setCachedMetadata(this.config.baseUrl, data)
    return data
  }

  async *stream(
    message: string,
    options: StreamOptions & { agent?: string; model?: string }
  ): AsyncGenerator<StreamEvent, void, unknown> {
    if (this.abortController) {
      this.abortController.abort()
    }
    this.abortController = new AbortController()

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
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
        signal: this.abortController.signal,
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
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split("\n\n")
          buffer = lines.pop() ?? ""
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue
            const data = line.slice(6)
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
        }
      } finally {
        this.abortController = null
      }
    } catch (err) {
      this.abortController = null
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

  async sendFeedback(runId: string, key: string, score: number): Promise<unknown> {
    const response = await fetch(`${this.config.baseUrl}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ run_id: runId, key, score }),
    })
    if (!response.ok) {
      throw new Error(`Failed to send feedback: ${response.statusText}`)
    }
    return response.json()
  }

  async getHistory(threadId: string, userId?: string): Promise<ApiChatMessage[]> {
    const uid = userId?.trim()
    if (!uid) return []
    const response = await fetch(`${this.config.baseUrl}/history`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ thread_id: threadId, user_id: uid }),
    })
    if (!response.ok) {
      throw new Error(`Failed to get history: ${response.statusText}`)
    }
    const data = (await response.json()) as { messages?: ApiChatMessage[] }
    return data.messages ?? []
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
      const response = await fetch(`${this.config.baseUrl}/history/threads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      return { threads: [], total: 0 }
    }
  }
}
