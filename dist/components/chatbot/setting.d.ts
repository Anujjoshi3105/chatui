import { ServiceMetadata } from '../../hooks/use-chatbot-api';
import { VoiceConfig } from '../../lib/voice.sdk';
interface SettingProps {
    metadata: ServiceMetadata | null;
    selectedAgent: string;
    selectedModel: string;
    onAgentChange: (agent: string) => void;
    onModelChange: (model: string) => void;
    voiceConfig?: VoiceConfig;
    onVoiceConfigChange?: (config: Partial<VoiceConfig>) => void;
    availableVoices?: SpeechSynthesisVoice[];
    selectedVoice?: SpeechSynthesisVoice | null;
    onVoiceChange?: (voice: SpeechSynthesisVoice | null) => void;
    autoSpeak?: boolean;
    onAutoSpeakChange?: (enabled: boolean) => void;
}
export default function Setting({ metadata, selectedAgent, selectedModel, onAgentChange, onModelChange, voiceConfig, onVoiceConfigChange, availableVoices, selectedVoice, onVoiceChange, autoSpeak, onAutoSpeakChange, }: SettingProps): import("react/jsx-runtime").JSX.Element;
export {};
