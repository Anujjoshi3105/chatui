interface UseAutosizeTextAreaProps {
    ref: React.RefObject<HTMLTextAreaElement>;
    maxHeight?: number;
    borderWidth?: number;
    dependencies: React.DependencyList;
}
export declare function useAutosizeTextArea({ ref, maxHeight, borderWidth, dependencies, }: UseAutosizeTextAreaProps): void;
export {};
