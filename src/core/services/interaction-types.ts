/** Optional host contracts. No capability is inferred from the presence of a UI. */
export interface AttachmentReference {
  id: string
  name: string
  contentType: string
  size: number
}

export interface AttachmentAdapter {
  accept: string
  maxFiles: number
  maxBytes: number
  allowFileOnly?: boolean
  upload: (file: File, options: { signal: AbortSignal; onProgress: (percent: number) => void }) => Promise<AttachmentReference>
  /** The host's agent must consume these references and return them in history custom_data.attachments. */
  toAgentConfig: (files: AttachmentReference[]) => Record<string, unknown>
  /** Remove an uploaded file that was canceled before being sent. */
  discard?: (file: AttachmentReference) => Promise<void>
}

export interface ResponseCard {
  type: "project" | "resource" | "contact"
  title: string
  description: string
  action?: { label: string; url: string }
}

export interface ResponseSource {
  title: string
  url: string
  excerpt?: string
}

export type ChatEvent = {
  type: "chat_opened" | "send_accepted" | "first_content" | "response_completed" | "response_failed" | "response_stopped" | "suggestion_selected" | "feedback_saved" | "feedback_failed" | "card_action" | "conversation_exported"
  elapsedMs?: number
}

/** Telemetry is optional and must not be able to break chat. No content or identity is emitted. */
export function emitChatEvent(callback: ((event: ChatEvent) => void) | undefined, event: ChatEvent) {
  try { callback?.(event) } catch { /* Host callbacks are isolated from conversation state. */ }
}

export function safeActionUrl(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined
  try {
    const url = new URL(value)
    return ["https:", "http:", "mailto:"].includes(url.protocol) ? url.href : undefined
  } catch { return undefined }
}

export function readCards(value: unknown): ResponseCard[] {
  if (!Array.isArray(value)) return []
  return value.filter((card): card is ResponseCard => !!card &&
    ["project", "resource", "contact"].includes(card.type) && typeof card.title === "string" && typeof card.description === "string")
    .slice(0, 10)
}

export function readSources(value: unknown): ResponseSource[] {
  if (!Array.isArray(value)) return []
  return value.filter((source): source is ResponseSource => !!source && typeof source.title === "string" && !!safeActionUrl(source.url))
    .slice(0, 20)
}

export function readAttachments(value: unknown): AttachmentReference[] {
  if (!Array.isArray(value)) return []
  return value.filter((file): file is AttachmentReference => !!file && typeof file.id === "string" && typeof file.name === "string" &&
    typeof file.contentType === "string" && typeof file.size === "number" && Number.isFinite(file.size) && file.size >= 0)
}
