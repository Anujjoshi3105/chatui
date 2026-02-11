export interface ChatbotHeaderProps {
    show?: boolean;
    title?: string;
    titleUrl?: string;
    subtitle?: string;
    avatar?: string;
    allowMaximize?: boolean;
    onMaximizeToggle?: (isMaximized: boolean) => void;
    onClose?: () => void;
    onRefresh?: () => void;
    onHome?: () => void;
}
export interface ChatbotFooterProps {
    show?: boolean;
    text?: string;
    subtitle?: string;
}
export interface ChatbotStarterProps {
    message?: string;
    suggestions?: string[];
}
export interface ChatbotProps {
    url: string;
    agent?: string;
    model?: string;
    placeholder?: string;
    threadId?: string;
    userId?: string;
    stream?: boolean;
    className?: string;
    header?: ChatbotHeaderProps;
    footer?: ChatbotFooterProps;
    starter?: ChatbotStarterProps;
    isMaximized?: boolean;
}
export declare function Chatbot({ url, agent: initialAgent, model: initialModel, placeholder, threadId, userId, stream, className, header, footer, starter, isMaximized: propsIsMaximized, }: ChatbotProps): import("react/jsx-runtime").JSX.Element;
