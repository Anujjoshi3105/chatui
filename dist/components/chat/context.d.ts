import { ReactNode } from 'react';
import { useChatRuntime } from '../../core/runtime/use-chat-runtime';
import { ChatRuntimeConfig } from '../../core/runtime/chat-state';
export type VoiceContextOverrides = {
    voiceConfig?: import('../../lib/voice.sdk').VoiceConfig;
    isListening?: boolean;
    startListening?: () => void;
    stopListening?: () => void;
    isSpeechSupported?: boolean;
};
export type ChatContextValue = ReturnType<typeof useChatRuntime> & {
    /** Resolved suggestions: follow-up prompts or starter suggestions when no user messages yet. */
    suggestions: string[];
} & VoiceContextOverrides;
export interface ChatProviderProps extends VoiceContextOverrides {
    config: ChatRuntimeConfig;
    children: ReactNode;
    /** When provided, used as suggestions when there are no user messages (overrides config.starterSuggestions). */
    initialSuggestions?: string[];
    /** Called when metadata is loaded (e.g. to sync default agent/model to parent state). */
    onMetadata?: (metadata: NonNullable<ChatContextValue["metadata"]>) => void;
}
export declare function ChatProvider({ config, children, initialSuggestions, voiceConfig, isListening, startListening, stopListening, isSpeechSupported, onMetadata, }: ChatProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useChatContext(): ChatContextValue;
