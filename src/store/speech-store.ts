import { create } from "zustand"

interface SpeechState {
    speakingMessageId: string | null
    /** Character index reported by the onBoundary event (relative to the current speak slice) */
    currentCharIndex: number
    /** Accumulated offset when seek is performed — the absolute position = charOffset + currentCharIndex */
    charOffset: number
    isPaused: boolean
    activeText: string

    // Actions
    setSpeaking: (messageId: string | null, text?: string) => void
    setCurrentCharIndex: (index: number) => void
    setCharOffset: (offset: number) => void
    setIsPaused: (paused: boolean) => void
    stop: () => void
}

export const useSpeechStore = create<SpeechState>((set) => ({
    speakingMessageId: null,
    currentCharIndex: 0,
    charOffset: 0,
    isPaused: false,
    activeText: "",

    setSpeaking: (messageId, text = "") => set({
        speakingMessageId: messageId,
        activeText: text,
        currentCharIndex: 0,
        charOffset: 0,
        isPaused: false,
    }),

    setCurrentCharIndex: (index) => set({ currentCharIndex: index }),

    setCharOffset: (offset) => set({ charOffset: offset, currentCharIndex: 0 }),

    setIsPaused: (paused) => set({ isPaused: paused }),

    stop: () => set({
        speakingMessageId: null,
        currentCharIndex: 0,
        charOffset: 0,
        isPaused: false,
        activeText: "",
    }),
}))
