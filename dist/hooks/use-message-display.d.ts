import { Message } from '../components/ui/chat-message';
interface UseMessageDisplayProps {
    messages: Message[];
    isGenerating: boolean;
}
export declare function useMessageDisplay({ messages, isGenerating }: UseMessageDisplayProps): {
    displayMessages: Message[];
    isTyping: boolean;
    isEmpty: boolean;
};
export {};
