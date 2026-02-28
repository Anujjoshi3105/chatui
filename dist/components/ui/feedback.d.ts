interface FeedbackProps {
    onRateResponse: (messageId: string, score: number, comment?: string) => void;
    messageId: string;
    rating?: number;
    comment?: string;
}
export default function Feedback({ onRateResponse, messageId, rating, comment: initialComment }: FeedbackProps): import("react/jsx-runtime").JSX.Element;
export {};
