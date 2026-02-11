import { ChatMessageProps, Message } from './chat-message';
type AdditionalMessageOptions = Omit<ChatMessageProps, keyof Message>;
interface MessageListProps {
    messages: Message[];
    showTimeStamps?: boolean;
    isTyping?: boolean;
    messageOptions?: AdditionalMessageOptions | ((message: Message) => AdditionalMessageOptions);
    /** When true and scrollRef is provided, only visible messages are rendered (for long threads). */
    virtualize?: boolean;
    /** Ref to the scrollable parent element. Required when virtualize is true. */
    scrollRef?: React.RefObject<HTMLElement | null>;
    /** Estimated height per message in px for virtualization. Default 120. */
    estimateSize?: number;
}
export declare const MessageList: import('react').NamedExoticComponent<MessageListProps>;
export {};
