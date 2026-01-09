import { ChatMessageProps, Message } from './chat-message';
type AdditionalMessageOptions = Omit<ChatMessageProps, keyof Message>;
interface MessageListProps {
    messages: Message[];
    showTimeStamps?: boolean;
    isTyping?: boolean;
    messageOptions?: AdditionalMessageOptions | ((message: Message) => AdditionalMessageOptions);
}
export declare const MessageList: import('react').NamedExoticComponent<MessageListProps>;
export {};
