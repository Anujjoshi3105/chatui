import { ServiceMetadata } from '../../hooks/use-chatbot-api';
import { VoiceConfig } from '../../lib/voice.sdk';
interface HeaderProps {
    metadata: ServiceMetadata | null;
    onClose?: () => void;
    onRefresh?: () => void;
    onHome?: () => void;
    onHistory?: () => void;
    className?: string;
    onVoiceConfigChange?: (config: Partial<VoiceConfig>) => void;
    availableVoices?: SpeechSynthesisVoice[];
    selectedVoice?: SpeechSynthesisVoice | null;
    onVoiceChange?: (voice: SpeechSynthesisVoice | null) => void;
}
export declare function Header({ metadata, onClose, onRefresh, onHome, onHistory, className, onVoiceConfigChange, availableVoices, selectedVoice, onVoiceChange, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
