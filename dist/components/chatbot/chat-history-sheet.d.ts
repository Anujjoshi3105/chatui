import { ThreadSummary, GetThreadsOptions, ThreadListResponse } from '../../core/services/types';
export interface ChatHistorySheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    userId: string | undefined;
    threadList: ThreadSummary[];
    setThreadList: (list: ThreadSummary[] | ((prev: ThreadSummary[]) => ThreadSummary[])) => void;
    totalThreads: number;
    setTotalThreads: (n: number) => void;
    threadsLoading: boolean;
    setThreadsLoading: (v: boolean) => void;
    currentThreadId: string | undefined;
    onSelectThread: (threadId: string) => void;
    getThreads: (options?: GetThreadsOptions) => Promise<ThreadListResponse>;
}
export declare function ChatHistorySheet({ open, onOpenChange, userId, threadList, setThreadList, totalThreads, setTotalThreads, threadsLoading, setThreadsLoading, currentThreadId, onSelectThread, getThreads, }: ChatHistorySheetProps): import("react/jsx-runtime").JSX.Element;
