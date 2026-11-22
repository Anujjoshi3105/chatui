"use client"

import { useCallback, useState, lazy, Suspense } from "react"
import { useChatSelector } from "./context"
import { useShallow } from "zustand/react/shallow"
import { MessageInput } from "@/components/ui/message-input"
import { QueuedMessages } from "./queued-messages"
import { cn } from "@/lib/utils"

const AttachmentInput = lazy(() => import("./attachment-input"))

export interface ChatInputProps {
  attachments?: import("@/core/services/interaction-types").AttachmentAdapter
  placeholder?: string
  className?: string
  transcribeAudio?: (blob: Blob) => Promise<string>
}

export function ChatInput({
  placeholder = "Hi, how can I help you?",
  className,
  transcribeAudio,
  attachments,
}: ChatInputProps) {
  const {
    hasMessages,
    historyLoading,
    input,
    setInput,
    submitMessage,
    forcePass,
    stopGeneration,
    isGenerating,
    isListening,
    startListening,
    stopListening,
    isSpeechSupported,
  } = useChatSelector(useShallow(s => ({
    hasMessages: s.messages.length > 0, input: s.input, setInput: s.setInput,
    historyLoading: s.historyLoading,
    submitMessage: s.submitMessage, forcePass: s.forcePass, stopGeneration: s.stopGeneration, isGenerating: s.isGenerating,
    isListening: s.isListening, startListening: s.startListening,
    stopListening: s.stopListening, isSpeechSupported: s.isSpeechSupported,
  })))

  const [error, setError] = useState<string | null>(null)
  const handleSubmit = useCallback(
    async (event?: { preventDefault?: () => void }) => {
      event?.preventDefault?.()
      if (historyLoading) return
      const text = input.trim()
      if (!text) return
      const result = submitMessage(text)
      if (result.accepted) {
        setError(null)
        if (result.queued) {
          setInput("")
        }
      } else {
        setError(result.reason ?? "Could not send. Your draft has been kept.")
      }
    },
    [input, submitMessage, setInput, historyLoading]
  )

  const handleForcePass = useCallback(() => {
    const text = input.trim()
    if (!text) return
    setError(null)
    setInput("")
    forcePass(text)
  }, [input, forcePass, setInput])

  const handleStop = stopGeneration

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value)
    },
    [setInput]
  )

  if (attachments) return <Suspense fallback={<p role="status">Loading composer…</p>}><AttachmentInput adapter={attachments} placeholder={placeholder} transcribeAudio={transcribeAudio} className={className} /></Suspense>

  return (
    <form
      className={cn(
        "chat-input-container",
        hasMessages ? "py-4" : "py-2",
        className
      )}
      onSubmit={handleSubmit}
    >
      <QueuedMessages />
      <MessageInput
        disabled={historyLoading}
        value={input}
        onChange={handleInputChange}
        allowAttachments={false}
        stop={handleStop}
        forcePass={handleForcePass}
        isGenerating={isGenerating}
        transcribeAudio={transcribeAudio}
        placeholder={placeholder}
        isListening={isListening}
        startListening={startListening}
        stopListening={stopListening}
        isSpeechSupported={transcribeAudio ? undefined : isSpeechSupported}
      />
      {error && <p role="alert" className="px-4 text-sm text-destructive">{error}</p>}
      <p className="px-4 pt-1 text-xs text-muted-foreground">
        {isGenerating
          ? "Enter to queue · Ctrl+Enter to force pass"
          : "Enter to send · Shift+Enter for a new line"}
      </p>
    </form>
  )
}

