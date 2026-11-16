export interface PersistedMessage {
  id: string
  role: string
  content: string
  createdAt?: string
  custom_data?: Record<string, unknown>
  toolInvocations?: unknown[]
  parts?: unknown[]
  status?: import("@/core/runtime/chat-state").Message["status"]
  error?: string
  runId?: string
  rating?: number
  comment?: string
}

const STORAGE_VERSION = 1
type VersionedPayload = { version: number; messages: PersistedMessage[] }

const DATE_KEYS = ["createdAt"]

function reviver(_key: string, value: unknown): unknown {
  if (typeof value === "string" && DATE_KEYS.includes(_key)) {
    const d = new Date(value)
    return isNaN(d.getTime()) ? value : d
  }
  return value
}

export function loadMessages(storageKey: string): PersistedMessage[] | null {
  if (!storageKey) return null
  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return null
    const parsed = JSON.parse(raw, reviver) as unknown
    const messages = Array.isArray(parsed)
      ? parsed
      : (parsed as VersionedPayload | null)?.version === STORAGE_VERSION
        ? (parsed as VersionedPayload).messages
        : null
    if (!Array.isArray(messages) || messages.length === 0) return null
    if (!messages.every((m) => m && typeof m === "object" &&
      typeof m.id === "string" && typeof m.content === "string" &&
      (m.role === "user" || m.role === "assistant") &&
      (!m.createdAt || !isNaN(new Date(m.createdAt).getTime())) &&
      (!m.parts || Array.isArray(m.parts)) &&
      (!m.toolInvocations || (Array.isArray(m.toolInvocations) && m.toolInvocations.every(
        (tool: unknown) => tool && typeof tool === "object" && "state" in tool && "toolName" in tool &&
          typeof tool.toolName === "string" && (tool.state === "call" || tool.state === "result")
      ))))) return null
    return messages as PersistedMessage[]
  } catch {
    return null
  }
}

/** Accepts messages with Date or string createdAt; JSON.stringify serializes Dates. */
export function saveMessages(
  storageKey: string,
  messages: (Omit<PersistedMessage, "createdAt"> & { createdAt?: string | Date })[]
): void {
  if (!storageKey || messages.length === 0) return
  try {
    const serialized = JSON.stringify({ version: STORAGE_VERSION, messages })
    if (localStorage.getItem(storageKey) !== serialized) localStorage.setItem(storageKey, serialized)
  } catch (e) {
    console.error("Failed to save chat history:", e)
  }
}

/** Preferences are optional: blocked storage must never disable text chat. */
export const preferences = {
  getItem(key: string): string | null {
    try { return localStorage.getItem(key) } catch { return null }
  },
  setItem(key: string, value: string): void {
    try { localStorage.setItem(key, value) } catch { /* in-memory state remains authoritative */ }
  },
}

export function clearMessages(storageKey: string): void {
  if (!storageKey) return
  try {
    localStorage.removeItem(storageKey)
  } catch {
    // ignore
  }
}

const THREAD_KEY_PREFIX = "chatui-thread:"
const MESSAGES_KEY_PREFIX = "chatui-messages:"

/**
 * Storage key for a thread's messages. Use this with loadMessages/saveMessages/clearMessages
 * so each thread has its own history (no merging).
 */
export function getThreadMessagesKey(baseKey: string, threadId: string): string {
  if (!baseKey || !threadId) return ""
  return `${MESSAGES_KEY_PREFIX}${baseKey}:${threadId}`
}

export function loadCurrentThreadId(storageKey: string): string | null {
  if (!storageKey) return null
  try {
    return localStorage.getItem(THREAD_KEY_PREFIX + storageKey)
  } catch {
    return null
  }
}

export function saveCurrentThreadId(storageKey: string, threadId: string | null): void {
  if (!storageKey) return
  try {
    if (threadId == null) {
      localStorage.removeItem(THREAD_KEY_PREFIX + storageKey)
    } else {
      localStorage.setItem(THREAD_KEY_PREFIX + storageKey, threadId)
    }
  } catch {
    // ignore
  }
}
