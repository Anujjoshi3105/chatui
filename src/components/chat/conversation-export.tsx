import { useChatSelector } from "./context"
import { Button } from "@/components/ui/button"
import { readAttachments, readCards, readSources } from "@/core/services/interaction-types"
import type { Message } from "@/core/runtime/chat-state"

function conversationMarkdown(messages: Message[]) {
  return messages.map(message => {
    const data = message.custom_data
    const cards = readCards(data?.cards).map(card => `${card.title}\n${card.description}`).join("\n\n")
    const sources = readSources(data?.sources).map(source => `${source.title}: ${source.url}`).join("\n")
    const files = readAttachments(data?.attachments).map(file => `Attachment: ${file.name}`).join("\n")
    return [`## ${message.role === "user" ? "You" : "Assistant"}`, message.content, cards, sources, files,
      message.status === "failed" ? "[Response interrupted]" : message.status === "stopped" ? "[Response stopped]" : ""].filter(Boolean).join("\n\n")
  }).join("\n\n---\n\n")
}

export function ConversationExport() {
  const messages = useChatSelector(s => s.messages)
  const emitEvent = useChatSelector(s => s.emitEvent)
  if (!messages.some(m => m.role === "user")) return null
  return <Button type="button" size="sm" variant="ghost" onClick={() => {
    const url = URL.createObjectURL(new Blob([conversationMarkdown(messages)], { type: "text/markdown;charset=utf-8" }))
    const link = document.createElement("a")
    link.href = url; link.download = "conversation.md"; link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    emitEvent({ type: "conversation_exported" })
  }}>Export conversation</Button>
}
