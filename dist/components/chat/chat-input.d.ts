export interface ChatInputProps {
    placeholder?: string;
    className?: string;
    transcribeAudio?: (blob: Blob) => Promise<string>;
}
export declare function ChatInput({ placeholder, className, transcribeAudio, }: ChatInputProps): import("react/jsx-runtime").JSX.Element;
