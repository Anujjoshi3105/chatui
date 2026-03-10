interface WordHighlighterProps {
    /** The plain-text version of the message (already markdown-stripped) */
    text: string;
    /** charOffset from the store (seek position) */
    charOffset: number;
    /** currentCharIndex from the store (onBoundary value, relative to slice) */
    currentCharIndex: number;
    className?: string;
}
export declare const WordHighlighter: import('react').NamedExoticComponent<WordHighlighterProps>;
export {};
