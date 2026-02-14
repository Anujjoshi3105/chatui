export interface PersistedMessage {
    id: string;
    role: string;
    content: string;
    createdAt?: string;
    custom_data?: Record<string, unknown>;
    toolInvocations?: unknown[];
    parts?: unknown[];
}
export declare function loadMessages(storageKey: string): PersistedMessage[] | null;
/** Accepts messages with Date or string createdAt; JSON.stringify serializes Dates. */
export declare function saveMessages(storageKey: string, messages: (Omit<PersistedMessage, "createdAt"> & {
    createdAt?: string | Date;
})[]): void;
export declare function clearMessages(storageKey: string): void;
/**
 * Storage key for a thread's messages. Use this with loadMessages/saveMessages/clearMessages
 * so each thread has its own history (no merging).
 */
export declare function getThreadMessagesKey(baseKey: string, threadId: string): string;
export declare function loadCurrentThreadId(storageKey: string): string | null;
export declare function saveCurrentThreadId(storageKey: string, threadId: string | null): void;
