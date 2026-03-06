import { create } from "zustand"
import type { ThreadSummary, ServiceMetadata } from "@/core/services/types"

interface ChatSessionState {
    selectedAgent: string
    setSelectedAgent: (val: string) => void

    selectedModel: string
    setSelectedModel: (val: string) => void

    currentThreadId: string | undefined
    setCurrentThreadId: (val: string | undefined) => void

    threadList: ThreadSummary[]
    setThreadList: (val: ThreadSummary[] | ((prev: ThreadSummary[]) => ThreadSummary[])) => void

    totalThreads: number
    setTotalThreads: (val: number) => void

    threadsLoading: boolean
    setThreadsLoading: (val: boolean) => void

    metadata: ServiceMetadata | null
    setMetadata: (val: ServiceMetadata | null) => void
}

export const useChatSessionStore = create<ChatSessionState>((set) => ({
    selectedAgent: "",
    setSelectedAgent: (val) => set({ selectedAgent: val }),

    selectedModel: "",
    setSelectedModel: (val) => set({ selectedModel: val }),

    currentThreadId: undefined,
    setCurrentThreadId: (val) => set({ currentThreadId: val }),

    threadList: [],
    setThreadList: (val) => set((state) => ({
        threadList: typeof val === "function" ? val(state.threadList) : val
    })),

    totalThreads: 0,
    setTotalThreads: (val) => set({ totalThreads: val }),

    threadsLoading: false,
    setThreadsLoading: (val) => set({ threadsLoading: val }),

    metadata: null,
    setMetadata: (val) => set({ metadata: val }),
}))

interface ChatUIState {
    isMaximized: boolean
    setIsMaximized: (val: boolean) => void

    historySheetOpen: boolean
    setHistorySheetOpen: (val: boolean) => void

    autoSpeak: boolean
    setAutoSpeak: (val: boolean) => void

    showDisclaimer: boolean
    setShowDisclaimer: (val: boolean) => void
}

export const useChatUIStore = create<ChatUIState>((set) => ({
    isMaximized: false,
    setIsMaximized: (val) => set({ isMaximized: val }),

    historySheetOpen: false,
    setHistorySheetOpen: (val) => set({ historySheetOpen: val }),

    autoSpeak: false,
    setAutoSpeak: (val) => set({ autoSpeak: val }),

    showDisclaimer: false,
    setShowDisclaimer: (val) => set({ showDisclaimer: val }),
}))
