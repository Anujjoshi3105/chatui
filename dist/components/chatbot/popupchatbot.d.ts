import { default as React } from 'react';
import { ChatbotProps } from './chatbot';
export interface PopupChatbotProps extends ChatbotProps {
    buttonClassName?: string;
    buttonStyle?: React.CSSProperties;
    popupClassName?: string;
    children?: React.ReactNode;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    width?: number | string;
    height?: number | string;
    tooltip?: string;
    tooltipDelay?: number;
}
export declare function PopupChatbot({ buttonClassName, buttonStyle, popupClassName, children, position, width, height, tooltip, tooltipDelay, ...chatbotProps }: PopupChatbotProps): import("react/jsx-runtime").JSX.Element;
