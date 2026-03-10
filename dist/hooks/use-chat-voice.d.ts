import { VoiceConfig } from '../lib/voice.sdk';
export interface UseChatVoiceOptions {
    config?: Partial<VoiceConfig>;
    mode?: "native" | "record";
    transcribeAudio?: (blob: Blob) => Promise<string>;
    onTranscript?: (transcript: string, isFinal: boolean) => void;
    onTranscriptionComplete?: (text: string) => void;
    onSpeechStart?: () => void;
    onSpeechEnd?: () => void;
    onError?: (error: string) => void;
}
export interface UseChatVoiceReturn {
    isListening: boolean;
    isSpeaking: boolean;
    isRecording: boolean;
    isTranscribing: boolean;
    transcript: string;
    interimTranscript: string;
    error: string | null;
    audioStream: MediaStream | null;
    isRecognitionSupported: boolean;
    isSynthesisSupported: boolean;
    isSpeechSupported: boolean;
    startListening: () => Promise<void>;
    stopListening: () => Promise<void>;
    toggleListening: () => Promise<void>;
    clearTranscript: () => void;
    speak: (text: string, messageId?: string) => void;
    stopSpeaking: () => void;
    pauseSpeaking: () => void;
    resumeSpeaking: () => void;
    seekAndSpeak: (charIndex: number) => void;
    toggleSpeaking: (text: string, messageId?: string) => void;
    availableVoices: SpeechSynthesisVoice[];
    selectedVoice: SpeechSynthesisVoice | null;
    setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void;
    voiceConfig: VoiceConfig;
    updateConfig: (config: Partial<VoiceConfig>) => void;
}
export declare function useChatVoice(options?: UseChatVoiceOptions): UseChatVoiceReturn;
