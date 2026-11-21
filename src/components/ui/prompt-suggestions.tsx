import { useMemo } from "react"
import { Badge } from "./badge"

interface PromptSuggestionsProps {
  append: (message: { role: "user"; content: string }) => void
  suggestions: string[]
  disabled?: boolean
  mode?: "send" | "prefill"
}

export function PromptSuggestions({
  append,
  suggestions,
  disabled = false,
}: PromptSuggestionsProps) {
  const cleanedSuggestions = useMemo(() => {
    const seen = new Set<string>()
    const result: string[] = []
    for (const s of suggestions) {
      const trimmed = s?.trim()
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed)
        result.push(trimmed)
        if (result.length === 3) break
      }
    }
    return result
  }, [suggestions])

  return (
    <div className="flex flex-wrap gap-1 px-4 py-2">
      {cleanedSuggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          role="button"
          aria-label={`Ask: ${suggestion}`}
          disabled={disabled}
          onClick={() => {
            if (!disabled) {
              append({ role: "user", content: suggestion })
            }
          }}
          className="focus:outline-none"
        >
          <Badge className="cursor-pointer hover:scale-[0.99]">
            <p>{suggestion}</p>
          </Badge>
        </button>
      ))}
    </div>
  )
}
