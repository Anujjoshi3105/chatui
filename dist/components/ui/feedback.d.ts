interface FeedbackProps {
    onRateResponse: (messageId: string, rating: "thumbs-up" | "thumbs-down") => void;
    messageId: string;
}
export default function Feedback({ onRateResponse, messageId }: FeedbackProps): import("react/jsx-runtime").JSX.Element;
export {};
