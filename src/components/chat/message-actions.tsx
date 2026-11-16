import { useChatSelector } from "./context"
import { useShallow } from "zustand/react/shallow"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Message } from "@/components/ui/chat-message"

export function MessageActions({ message }: { message: Message }) {
  const { setInput, input, busy, question } = useChatSelector(useShallow(s => ({
    setInput: s.setInput, input: s.input, busy: s.isGenerating || s.historyLoading,
    question: s.messages.slice(0, s.messages.findIndex(m => m.id === message.id)).reverse().find(m => m.role === "user")?.content,
  })))
  const focusDraft = (text: string) => {
    if (busy || input.trim()) return
    setInput(text)
    requestAnimationFrame(() => document.querySelector<HTMLTextAreaElement>('textarea[aria-label="Write your prompt here"]')?.focus())
  }
  return <DropdownMenu>
    <DropdownMenuTrigger asChild><Button type="button" size="sm" variant="ghost" aria-label="More message actions">More</Button></DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {message.role === "assistant" && message.content && <>
        <DropdownMenuItem disabled={!!input.trim() || !!busy} onSelect={() => focusDraft(`About this answer (${message.id}):\n> ${message.content}\n\nMy follow-up: `)}>Ask a follow-up about this</DropdownMenuItem>
        {[["Make this shorter", "Summarize this answer concisely"], ["Give an example", "Give a concrete example for this answer"], ["Explain more", "Explain this answer in more detail"]].map(([label, instruction]) =>
          <DropdownMenuItem key={label} disabled={!!input.trim() || !!busy} onSelect={() => focusDraft(`${instruction}:\n\n${message.content}`)}>{label}</DropdownMenuItem>)}
      </>}
      {(message.role === "user" || question) && <DropdownMenuItem disabled={!!input.trim() || !!busy}
        onSelect={() => focusDraft(message.role === "user" ? message.content : question!)}>Edit and resend as a new message</DropdownMenuItem>}
      {input.trim() && <DropdownMenuItem disabled>Send or clear your current draft first</DropdownMenuItem>}
    </DropdownMenuContent>
  </DropdownMenu>
}
