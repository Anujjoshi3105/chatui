import { ReactElement } from 'react';
import { Message } from './chat-message';
interface ChatPropsBase {
    handleSubmit: (event?: {
        preventDefault?: () => void;
    }, options?: {
        experimental_attachments?: FileList;
    }) => void;
    messages: Array<Message>;
    input: string;
    className?: string;
    handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    isGenerating: boolean;
    stop?: () => void;
    onRateResponse?: (messageId: string, rating: "thumbs-up" | "thumbs-down") => void;
    setMessages?: (messages: any[]) => void;
    transcribeAudio?: (blob: Blob) => Promise<string>;
    placeholder?: string;
    voiceConfig?: any;
    isListening?: boolean;
    startListening?: () => void;
    stopListening?: () => void;
    isSpeechSupported?: boolean;
}
interface ChatPropsWithoutSuggestions extends ChatPropsBase {
    append?: never;
    suggestions?: never;
}
interface ChatPropsWithSuggestions extends ChatPropsBase {
    append: (message: {
        role: "user";
        content: string;
    }) => void;
    suggestions: string[];
}
type ChatProps = ChatPropsWithoutSuggestions | ChatPropsWithSuggestions;
export declare function Chat({ messages, handleSubmit, input, handleInputChange, stop, isGenerating, append, suggestions, className, onRateResponse, setMessages, transcribeAudio, placeholder, voiceConfig, isListening, startListening, stopListening, isSpeechSupported, }: ChatProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Chat {
    var displayName: string;
}
export declare function ChatMessages({ messages, children, }: React.PropsWithChildren<{
    messages: Message[];
}>): import("react/jsx-runtime").JSX.Element;
export declare const ChatContainer: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & import('react').RefAttributes<HTMLDivElement>>;
interface ChatFormProps {
    className?: string;
    isPending: boolean;
    handleSubmit: (event?: {
        preventDefault?: () => void;
    }, options?: {
        experimental_attachments?: FileList;
    }) => void;
    children: (props: {
        files: File[] | null;
        setFiles: React.Dispatch<React.SetStateAction<File[] | null>>;
    }) => ReactElement;
}
export declare const ChatForm: import('react').ForwardRefExoticComponent<ChatFormProps & import('react').RefAttributes<HTMLFormElement>>;
export {};
