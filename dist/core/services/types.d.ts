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
export interface ApiChatMessage {
    type: "human" | "ai" | "tool" | "custom";
    name?: string;
    content: string;
    tool_calls?: Array<{
        name: string;
        args: Record<string, unknown>;
        id?: string;
    }>;
    tool_call_id?: string;
    run_id?: string;
    response_metadata?: Record<string, unknown>;
    custom_data?: Record<string, unknown>;
}
export interface StreamEvent {
    type: "message" | "token" | "error" | "update" | "done";
    content?: ApiChatMessage | string | Record<string, unknown>;
    node?: string;
    updates?: Record<string, unknown>;
}
export interface StreamOptions {
    threadId?: string;
    userId?: string;
    streamTokens?: boolean;
}
export interface ThreadSummary {
    thread_id: string;
    updated_at?: string | null;
    preview?: string | null;
}
export interface GetThreadsOptions {
    limit?: number;
    offset?: number;
    search?: string | null;
}
export interface ThreadListResponse {
    threads: ThreadSummary[];
    total?: number;
}
