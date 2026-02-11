import { ApiChatMessage } from '../services/types';
import { Message, ChatRuntimeState, ChatRuntimeConfig } from './chat-state';
export interface ChatRuntimeActions {
    setInput: (value: string) => void;
    sendMessage: (text: string) => Promise<void>;
    stopGeneration: () => void;
    setMessages: (messages: Message[] | ((prev: Message[]) => Message[])) => void;
    clearChat: (options?: {
        keepStarter?: boolean;
    }) => void;
    setAgent: (agent: string) => void;
    setModel: (model: string) => void;
    setThreadId: (threadId: string | undefined) => void;
    loadThread: (threadId: string) => Promise<void>;
    rateResponse: (messageId: string, rating: "thumbs-up" | "thumbs-down") => Promise<void>;
    refetchMetadata: () => Promise<void>;
    getThreads: (options?: import('../services/types').GetThreadsOptions) => Promise<import('../services/types').ThreadListResponse>;
    getHistory: (threadId: string) => Promise<ApiChatMessage[]>;
}
export type UseChatRuntimeReturn = ChatRuntimeState & ChatRuntimeActions;
export declare function useChatRuntime(config: ChatRuntimeConfig): UseChatRuntimeReturn;
