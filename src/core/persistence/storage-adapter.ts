export interface PersistedMessage {
  id: string
  role: string
  content: string
  createdAt?: string
  custom_data?: Record<string, unknown>
  toolInvocations?: unknown[]
  parts?: unknown[]
}

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
    if (!Array.isArray(parsed) || parsed.length === 0) return null
    return parsed as PersistedMessage[]
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
    localStorage.setItem(storageKey, JSON.stringify(messages))
  } catch (e) {
    console.error("Failed to save chat history:", e)
  }
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
