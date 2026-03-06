import { ThreadSummary, ServiceMetadata } from '../core/services/types';
interface ChatSessionState {
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
    metadata: ServiceMetadata | null;
    setMetadata: (val: ServiceMetadata | null) => void;
}
export declare const useChatSessionStore: import('zustand').UseBoundStore<import('zustand').StoreApi<ChatSessionState>>;
interface ChatUIState {
    isMaximized: boolean;
    setIsMaximized: (val: boolean) => void;
    historySheetOpen: boolean;
    setHistorySheetOpen: (val: boolean) => void;
    autoSpeak: boolean;
    setAutoSpeak: (val: boolean) => void;
    showDisclaimer: boolean;
    setShowDisclaimer: (val: boolean) => void;
}
export declare const useChatUIStore: import('zustand').UseBoundStore<import('zustand').StoreApi<ChatUIState>>;
export {};
