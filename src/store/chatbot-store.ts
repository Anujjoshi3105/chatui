import { create } from "zustand"
import type { ThreadSummary, ServiceMetadata } from "@/core/services/types"

interface ChatbotState {
    isMaximized: boolean
    setIsMaximized: (val: boolean) => void

    historySheetOpen: boolean
    setHistorySheetOpen: (val: boolean) => void

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

    // General app state
    autoSpeak: boolean
    setAutoSpeak: (val: boolean) => void

    showDisclaimer: boolean
    setShowDisclaimer: (val: boolean) => void

    metadata: ServiceMetadata | null
    setMetadata: (val: ServiceMetadata | null) => void

    // History Sheet state
    searchInput: string
    setSearchInput: (val: string) => void

    searchQuery: string
    setSearchQuery: (val: string) => void

    loadingMore: boolean
    setLoadingMore: (val: boolean) => void

    threadToDelete: string | null
    setThreadToDelete: (val: string | null) => void

    isDeleting: boolean
    setIsDeleting: (val: boolean) => void
}

export const useChatbotStore = create<ChatbotState>((set) => ({
    isMaximized: false,
    setIsMaximized: (val) => set({ isMaximized: val }),

    historySheetOpen: false,
    setHistorySheetOpen: (val) => set({ historySheetOpen: val }),

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

    autoSpeak: false,
    setAutoSpeak: (val) => set({ autoSpeak: val }),

    showDisclaimer: false,
    setShowDisclaimer: (val) => set({ showDisclaimer: val }),

    metadata: null,
    setMetadata: (val) => set({ metadata: val }),

    searchInput: "",
    setSearchInput: (val) => set({ searchInput: val }),

    searchQuery: "",
    setSearchQuery: (val) => set({ searchQuery: val }),

    loadingMore: false,
    setLoadingMore: (val) => set({ loadingMore: val }),

    threadToDelete: null,
    setThreadToDelete: (val) => set({ threadToDelete: val }),

    isDeleting: false,
    setIsDeleting: (val) => set({ isDeleting: val }),
}))
