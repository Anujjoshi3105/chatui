export declare function useAutoScroll(dependencies: React.DependencyList): {
    containerRef: import('react').RefObject<HTMLDivElement | null>;
    scrollToBottom: () => void;
    handleScroll: () => void;
    shouldAutoScroll: boolean;
    handleTouchStart: () => void;
    isScrollable: boolean;
};
