interface PromptSuggestionsProps {
    append: (message: {
        role: "user";
        content: string;
    }) => void;
    suggestions: string[];
}
export declare function PromptSuggestions({ append, suggestions, }: PromptSuggestionsProps): import("react/jsx-runtime").JSX.Element;
export {};
