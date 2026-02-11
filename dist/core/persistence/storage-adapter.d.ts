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
export declare function loadCurrentThreadId(storageKey: string): string | null;
export declare function saveCurrentThreadId(storageKey: string, threadId: string | null): void;
