import { ThreadSummary } from '../core/services/types';
interface ChatbotState {
    isMaximized: boolean;
    setIsMaximized: (val: boolean) => void;
    historySheetOpen: boolean;
    setHistorySheetOpen: (val: boolean) => void;
    selectedAgent: string;
    setSelectedAgent: (val: string) => void;
    selectedModel: string;
    setSelectedModel: (val: string) => void;
    currentThreadId: string | undefined;
    setCurrentThreadId: (val: string | undefined) => void;
    threadList: ThreadSummary[];
    setThreadList: (val: ThreadSummary[] | ((prev: ThreadSummary[]) => ThreadSummary[])) => void;
    totalThreads: number;
    setTotalThreads: (val: number) => void;
    threadsLoading: boolean;
    setThreadsLoading: (val: boolean) => void;
}
export declare const useChatbotStore: import('zustand').UseBoundStore<import('zustand').StoreApi<ChatbotState>>;
export {};
