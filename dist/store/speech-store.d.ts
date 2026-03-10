interface SpeechState {
    speakingMessageId: string | null;
    /** Character index reported by the onBoundary event (relative to the current speak slice) */
    currentCharIndex: number;
    /** Accumulated offset when seek is performed — the absolute position = charOffset + currentCharIndex */
    charOffset: number;
    isPaused: boolean;
    activeText: string;
    setSpeaking: (messageId: string | null, text?: string) => void;
    setCurrentCharIndex: (index: number) => void;
    setCharOffset: (offset: number) => void;
    setIsPaused: (paused: boolean) => void;
    stop: () => void;
}
export declare const useSpeechStore: import('zustand').UseBoundStore<import('zustand').StoreApi<SpeechState>>;
export {};
