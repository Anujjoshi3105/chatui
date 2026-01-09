import { VoiceConfig } from '../../lib/voice.sdk';
interface VoiceSettingsProps {
    voiceConfig: VoiceConfig;
    onConfigChange: (config: Partial<VoiceConfig>) => void;
    availableVoices: SpeechSynthesisVoice[];
    selectedVoice: SpeechSynthesisVoice | null;
    onVoiceChange: (voice: SpeechSynthesisVoice | null) => void;
    autoSpeak?: boolean;
    onAutoSpeakChange?: (enabled: boolean) => void;
    className?: string;
}
export declare function VoiceSettings({ voiceConfig, onConfigChange, availableVoices, selectedVoice, onVoiceChange, autoSpeak, onAutoSpeakChange, className, }: VoiceSettingsProps): import("react/jsx-runtime").JSX.Element | null;
export {};
