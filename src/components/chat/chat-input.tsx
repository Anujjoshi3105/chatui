"use client"

import { useCallback } from "react"
import { useChatContext } from "./context"
import { MessageInput } from "@/components/ui/message-input"
import { ChatForm } from "@/components/ui/chat"
import { cn } from "@/lib/utils"

export interface ChatInputProps {
  placeholder?: string
  className?: string
  transcribeAudio?: (blob: Blob) => Promise<string>
}

export function ChatInput({
  placeholder = "Hi, how can I help you?",
  className,
  transcribeAudio,
}: ChatInputProps) {
  const {
    messages,
    input,
    setInput,
    sendMessage,
    stopGeneration,
    setMessages,
    isGenerating,
    isListening,
    startListening,
    stopListening,
    isSpeechSupported,
  } = useChatContext()

  const handleSubmit = useCallback(
    async (event?: { preventDefault?: () => void }) => {
      event?.preventDefault?.()
      const text = input.trim()
      if (!text) return
      setInput("")
      await sendMessage(text)
    },
    [input, setInput, sendMessage]
  )

  const handleStop = useCallback(() => {
    stopGeneration()
    if (!setMessages) return
    const latestMessages = [...messages]
    const lastAssistantMessage = latestMessages
      .slice()
      .reverse()
      .find((m) => m.role === "assistant")
    if (!lastAssistantMessage) return
    let needsUpdate = false
    let updatedMessage = { ...lastAssistantMessage }
    if (lastAssistantMessage.toolInvocations) {
      const updatedToolInvocations = lastAssistantMessage.toolInvocations.map(
        (inv: { state: string; toolName?: string; toolCallId?: string; result?: unknown }) => {
          if (inv.state === "call") {
            needsUpdate = true
            return {
              ...inv,
              state: "result" as const,
              result: { content: "Tool execution was cancelled", __cancelled: true },
            }
          }
          return inv
        }
      ) as typeof lastAssistantMessage.toolInvocations
      if (needsUpdate) {
        updatedMessage = { ...updatedMessage, toolInvocations: updatedToolInvocations }
      }
    }
    const parts = (lastAssistantMessage as { parts?: unknown[] }).parts
    if (parts?.length) {
      const updatedParts = parts.map((part: unknown) => {
        const p = part as { type: string; toolInvocation?: { state: string } }
        if (p.type === "tool-invocation" && p.toolInvocation?.state === "call") {
          needsUpdate = true
          return {
            ...p,
            toolInvocation: {
              ...p.toolInvocation,
              state: "result",
              result: { content: "Tool execution was cancelled", __cancelled: true },
            },
          }
        }
        return part
      })
      if (needsUpdate) updatedMessage = { ...updatedMessage, parts: updatedParts as unknown[] }
    }
    if (needsUpdate) {
      const idx = latestMessages.findIndex((m) => m.id === lastAssistantMessage.id)
      if (idx !== -1) {
        latestMessages[idx] = updatedMessage
        setMessages(latestMessages)
      }
    }
  }, [stopGeneration, setMessages, messages])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value)
    },
    [setInput]
  )

  return (
    <ChatForm
      className={cn(
        "mt-auto border-t border-border/50 bg-gradient-to-t from-background to-muted/10 px-6 relative",
        messages.length > 0 ? "py-4" : "py-2",
        className
      )}
      isPending={isGenerating}
      handleSubmit={handleSubmit}
    >
      {({ files, setFiles }) => (
        <MessageInput
          value={input}
          onChange={handleInputChange}
          allowAttachments
          files={files}
          setFiles={setFiles}
          stop={handleStop}
          isGenerating={isGenerating}
          transcribeAudio={transcribeAudio}
          placeholder={placeholder}
          isListening={isListening}
          startListening={startListening}
          stopListening={stopListening}
          isSpeechSupported={isSpeechSupported}
        />
      )}
    </ChatForm>
  )
}
