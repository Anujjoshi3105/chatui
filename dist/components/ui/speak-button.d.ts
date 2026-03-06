import { VoiceConfig } from '../../lib/voice.sdk';
interface SpeakButtonProps {
    content: string;
    voiceConfig?: Partial<VoiceConfig>;
    className?: string;
    size?: "sm" | "default" | "icon";
    variant?: "ghost" | "outline" | "default";
}
export declare function SpeakButton({ content, voiceConfig, className, size, variant, }: SpeakButtonProps): import("react/jsx-runtime").JSX.Element | null;
interface SpeakButtonInlineProps {
    content: string;
    voiceConfig?: Partial<VoiceConfig>;
    className?: string;
}
export declare function SpeakButtonInline({ content, voiceConfig, className, }: SpeakButtonInlineProps): import("react/jsx-runtime").JSX.Element | null;
export {};
