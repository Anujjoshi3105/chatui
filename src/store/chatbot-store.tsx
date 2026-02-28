import { createStore } from 'zustand'
import { createContext, useContext, useRef } from 'react'
import type { ThreadSummary } from "@/core/services/types"
import type { VoiceConfig } from "@/lib/voice.sdk"

export interface ChatbotState {
    // --- Props ---
    selectedAgent: string
    selectedModel: string
    isMaximized: boolean
    currentThreadId: string | undefined
    historySheetOpen: boolean
    threadsLoading: boolean
    threadList: ThreadSummary[]
    totalThreads: number
    autoSpeak: boolean
    showDisclaimer: boolean

    // Header Props
    showHeader: boolean
    headerTitle?: string
    headerTitleUrl?: string
    headerSubtitle?: string
    avatar?: string
    allowMaximize: boolean
    onClose?: () => void
    onRefresh?: () => void
    onHome?: () => void
    onMaximizeToggle?: (isMaximized: boolean) => void

    // Footer Props
    showFooter: boolean
    footerContent?: string
    footerSubtitle?: string

    // Misc
    placeholder: string
    starterMessage?: string
    starterSuggestions?: string[]
    userId?: string

    // Voice (from hook)
    availableVoices: SpeechSynthesisVoice[]
    selectedVoice: SpeechSynthesisVoice | null
    voiceConfig?: VoiceConfig

    // --- Actions ---
    setSelectedAgent: (agent: string) => void
    setSelectedModel: (model: string) => void
    setIsMaximized: (max: boolean) => void
    toggleMaximize: () => void
    setCurrentThreadId: (id: string | undefined) => void
    setHistorySheetOpen: (open: boolean) => void
    setThreadsLoading: (loading: boolean) => void
    setThreadList: (list: ThreadSummary[] | ((prev: ThreadSummary[]) => ThreadSummary[])) => void
    setTotalThreads: (total: number) => void
    setAutoSpeak: (speak: boolean) => void
    setShowDisclaimer: (show: boolean) => void

    setAvailableVoices: (voices: SpeechSynthesisVoice[]) => void
    setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void
    setVoiceConfig: (config: VoiceConfig) => void
}

export type ChatbotStore = ReturnType<typeof createChatbotStore>

export const createChatbotStore = (initProps: Partial<ChatbotState>) => {
    return createStore<ChatbotState>()((set, get) => ({
        selectedAgent: "",
        selectedModel: "",
        isMaximized: false,
        currentThreadId: undefined,
        historySheetOpen: false,
        threadsLoading: false,
        threadList: [],
        totalThreads: 0,
        autoSpeak: false,
        showDisclaimer: false,

        showHeader: true,
        allowMaximize: false,
        showFooter: true,
        placeholder: "Hi, how can I help you?",

        availableVoices: [],
        selectedVoice: null,

        ...initProps,

        setSelectedAgent: (agent) => set({ selectedAgent: agent }),
        setSelectedModel: (model) => set({ selectedModel: model }),
        setIsMaximized: (max) => {
            set({ isMaximized: max })
        },
        toggleMaximize: () => {
            const newMaximized = !get().isMaximized
            set({ isMaximized: newMaximized })
            get().onMaximizeToggle?.(newMaximized)
        },
        setCurrentThreadId: (id) => set({ currentThreadId: id }),
        setHistorySheetOpen: (open) => set({ historySheetOpen: open }),
        setThreadsLoading: (loading) => set({ threadsLoading: loading }),
        setThreadList: (list) => {
            if (typeof list === 'function') {
                const currentList = get().threadList
                set({ threadList: list(currentList) })
            } else {
                set({ threadList: list })
            }
        },
        setTotalThreads: (total) => set({ totalThreads: total }),
        setAutoSpeak: (speak) => set({ autoSpeak: speak }),
        setShowDisclaimer: (show) => set({ showDisclaimer: show }),

        setAvailableVoices: (voices) => set({ availableVoices: voices }),
        setSelectedVoice: (voice) => set({ selectedVoice: voice }),
        setVoiceConfig: (config) => set({ voiceConfig: config }),
    }))
}

const ChatbotStoreContext = createContext<ChatbotStore | null>(null)

export interface ChatbotStoreProviderProps extends React.PropsWithChildren {
    initialState: Partial<ChatbotState>
}

export function ChatbotStoreProvider({ children, initialState }: ChatbotStoreProviderProps) {
    const storeRef = useRef<ChatbotStore>(null)
    if (!storeRef.current) {
        storeRef.current = createChatbotStore(initialState)
    }
    return (
        <ChatbotStoreContext.Provider value={storeRef.current}>
            {children}
        </ChatbotStoreContext.Provider>
    )
}

import { useStore } from 'zustand'

export function useChatbotStore<T>(selector: (state: ChatbotState) => T): T {
    const store = useContext(ChatbotStoreContext)
    if (!store) {
        throw new Error('useChatbotStore must be used within ChatbotStoreProvider')
    }
    return useStore(store, selector)
}
