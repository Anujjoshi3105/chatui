/**
 * @deprecated Use `useChatRuntime` from `@/core/runtime` with `ChatService` from `@/core/services` instead.
 * This hook is kept for backward compatibility and will be removed in a future major version.
 */
export interface AgentInfo {
    key: string;
    description: string;
    prompts?: string[];
}
export interface ServiceMetadata {
    agents: AgentInfo[];
    models: string[];
    default_agent: string;
    default_model: string;
}
export interface ChatMessage {
    type: "human" | "ai" | "tool" | "custom";
    name?: string;
    content: string;
    tool_calls?: Array<{
        name: string;
        args: Record<string, any>;
        id?: string;
    }>;
    tool_call_id?: string;
    run_id?: string;
    response_metadata?: Record<string, any>;
    custom_data?: Record<string, any>;
}
export interface StreamEvent {
    type: "message" | "token" | "error" | "update" | "done";
    content?: ChatMessage | string | Record<string, any>;
    node?: string;
    updates?: Record<string, any>;
}
export interface ChatbotApiOptions {
    url: string;
    agent?: string;
    model?: string;
    threadId?: string;
    userId?: string;
    stream?: boolean;
}
export declare function clearMetadataCache(): void;
/**
 * @deprecated Use `useChatRuntime` from `@/core/runtime` for new code. This hook is kept for backward compatibility.
 */
export declare function useChatbotApi({ url, agent: optionsAgent, model: optionsModel, threadId, userId, stream: optionsStream, }: ChatbotApiOptions): {
    metadata: ServiceMetadata | null;
    loading: boolean;
    error: string | null;
    streamMessage: (message: string, onUpdate?: (event: StreamEvent) => void) => AsyncGenerator<StreamEvent, void, unknown>;
    stopStream: () => void;
    sendFeedback: (runId: string, key: string, score: number) => Promise<any>;
    getHistory: (threadId: string, requestUserId?: string) => Promise<ChatMessage[]>;
    getThreads: (requestUserId?: string) => Promise<{
        threads: {
            thread_id: string;
        }[];
    }>;
    refetchMetadata: () => Promise<void>;
};
