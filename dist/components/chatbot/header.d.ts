import { ServiceMetadata } from '../../hooks/use-chatbot-api';
import { VoiceConfig } from '../../lib/voice.sdk';
interface HeaderProps {
    metadata: ServiceMetadata | null;
    selectedAgent: string;
    selectedModel: string;
    onAgentChange: (agent: string) => void;
    onModelChange: (model: string) => void;
    onClose?: () => void;
    onRefresh?: () => void;
    className?: string;
    title?: string;
    titleUrl?: string;
    subtitle?: string;
    voiceConfig?: VoiceConfig;
    onVoiceConfigChange?: (config: Partial<VoiceConfig>) => void;
    availableVoices?: SpeechSynthesisVoice[];
    selectedVoice?: SpeechSynthesisVoice | null;
    onVoiceChange?: (voice: SpeechSynthesisVoice | null) => void;
    autoSpeak?: boolean;
    onAutoSpeakChange?: (enabled: boolean) => void;
    isMaximized?: boolean;
    onMaximize?: () => void;
    avatar?: string;
}
export declare function Header({ metadata, selectedAgent, selectedModel, onAgentChange, onModelChange, onClose, onRefresh, className, title, titleUrl, subtitle, voiceConfig, onVoiceConfigChange, availableVoices, selectedVoice, onVoiceChange, autoSpeak, onAutoSpeakChange, isMaximized, onMaximize, avatar, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
