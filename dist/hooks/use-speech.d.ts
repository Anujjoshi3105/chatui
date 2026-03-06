import { VoiceConfig } from '../lib/voice.sdk';
export declare function useSpeech(voiceConfig?: Partial<VoiceConfig>): {
    isSupported: boolean;
    isSpeaking: boolean;
    speak: (content: string) => void;
    stop: () => void;
    toggle: (content: string) => void;
};
