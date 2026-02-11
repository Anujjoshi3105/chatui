"use client"

import { useCallback } from "react"
import { useChatContext } from "./context"
import { PromptSuggestions } from "@/components/ui/prompt-suggestions"

export function ChatSuggestions() {
  const { suggestions, sendMessage } = useChatContext()

  const append = useCallback(
    (message: { role: "user"; content: string }) => {
      void sendMessage(message.content)
    },
    [sendMessage]
  )

  if (suggestions.length === 0) return null

  return <PromptSuggestions append={append} suggestions={suggestions} />
}
