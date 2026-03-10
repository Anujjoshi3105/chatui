import { VoiceConfig } from '../../lib/voice.sdk';
interface SpeakButtonProps {
    content: string;
    voiceConfig?: Partial<VoiceConfig>;
    className?: string;
    size?: "sm" | "default" | "icon";
    variant?: "ghost" | "outline" | "default";
    messageId?: string;
}
export declare function SpeakButton({ content, voiceConfig, className, size, variant, messageId, }: SpeakButtonProps): import("react/jsx-runtime").JSX.Element | null;
interface SpeakButtonInlineProps {
    content: string;
    voiceConfig?: Partial<VoiceConfig>;
    className?: string;
    messageId?: string;
}
export declare function SpeakButtonInline({ content, voiceConfig, className, messageId, }: SpeakButtonInlineProps): import("react/jsx-runtime").JSX.Element | null;
export {};
