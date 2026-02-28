import { ServiceMetadata, ApiChatMessage, StreamEvent, StreamOptions, GetThreadsOptions, ThreadListResponse, ChatHistoryResponse, GetHistoryOptions, HealthStatus } from './types';
export declare function clearChatServiceMetadataCache(): void;
export interface ChatServiceConfig {
    baseUrl: string;
    defaultAgent: string;
    defaultModel: string;
    apiKey?: string;
}
export declare class ChatService {
    private config;
    private abortController;
    constructor(config: ChatServiceConfig);
    private getHeaders;
    getMetadataFromCache(): ServiceMetadata | null;
    getMetadata(force?: boolean): Promise<ServiceMetadata>;
    healthCheck(): Promise<HealthStatus>;
    invoke(message: string, options?: {
        agent?: string;
        model?: string;
        threadId?: string;
        userId?: string;
    }): Promise<ApiChatMessage>;
    stream(message: string, options: StreamOptions & {
        agent?: string;
        model?: string;
    }): AsyncGenerator<StreamEvent, void, unknown>;
    abortStream(): void;
    sendFeedback(runId: string, key: string, score: number, kwargs?: Record<string, any>): Promise<unknown>;
    deleteThread(threadId: string, userId?: string): Promise<void>;
    getHistory(threadId: string, userId?: string, options?: GetHistoryOptions): Promise<ChatHistoryResponse>;
    getThreads(userId?: string, options?: GetThreadsOptions): Promise<ThreadListResponse>;
}
