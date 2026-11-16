"use client"
import { useShallow } from "zustand/react/shallow"
import { useChatSelector } from "./context"
import { PromptSuggestions } from "@/components/ui/prompt-suggestions"

export function ChatSuggestions({ mode = "send" }: { mode?: "send" | "prefill" }) {
  const { suggestions, submitMessage, input, setInput, busy, emitEvent } = useChatSelector(useShallow(s => ({
    suggestions: s.suggestions, submitMessage: s.submitMessage, input: s.input, setInput: s.setInput,
    busy: s.isGenerating || s.historyLoading, emitEvent: s.emitEvent,
  })))
  if (!suggestions.length || busy) return null
  return <PromptSuggestions suggestions={suggestions} mode={mode} disabled={!!input.trim()} append={({ content }) => {
    if (input.trim()) return
    if (mode === "prefill") setInput(content)
    else if (!submitMessage(content).accepted) return
    emitEvent({ type: "suggestion_selected" })
  }} />
}
