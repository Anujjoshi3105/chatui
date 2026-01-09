import { Badge } from "./badge";

interface PromptSuggestionsProps {
  append: (message: { role: "user"; content: string }) => void
  suggestions: string[]
}

export function PromptSuggestions({
  append,
  suggestions,
}: PromptSuggestionsProps) {
  return (
    <div className="flex flex-wrap gap-1 px-4 py-2">
      {suggestions.map((suggestion) => (
        <Badge
          key={suggestion}
          className="cursor-pointer hover:scale-[0.99]"
          onClick={() => {
            append({ role: "user", content: suggestion })
          }}>
          <p>{suggestion}</p>
        </Badge>
      ))}
    </div>
  )
}
