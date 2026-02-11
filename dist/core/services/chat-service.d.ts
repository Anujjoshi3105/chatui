import { ServiceMetadata, ApiChatMessage, StreamEvent, StreamOptions, GetThreadsOptions, ThreadListResponse } from './types';
export declare function clearChatServiceMetadataCache(): void;
export interface ChatServiceConfig {
    baseUrl: string;
    defaultAgent: string;
    defaultModel: string;
}
export declare class ChatService {
    private config;
    private abortController;
    constructor(config: ChatServiceConfig);
    getMetadataFromCache(): ServiceMetadata | null;
    getMetadata(force?: boolean): Promise<ServiceMetadata>;
    stream(message: string, options: StreamOptions & {
        agent?: string;
        model?: string;
    }): AsyncGenerator<StreamEvent, void, unknown>;
    abortStream(): void;
    sendFeedback(runId: string, key: string, score: number): Promise<unknown>;
    getHistory(threadId: string, userId?: string): Promise<ApiChatMessage[]>;
    getThreads(userId?: string, options?: GetThreadsOptions): Promise<ThreadListResponse>;
}
