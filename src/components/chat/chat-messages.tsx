"use client"

import { useCallback, useEffect } from "react"
import { useMessageDisplay } from "@/hooks/use-message-display"
import { useAutoScroll } from "@/hooks/use-auto-scroll"
import { useChatSelector } from "./context"
import { useShallow } from "zustand/react/shallow"
import { MessageList } from "@/components/ui/message-list"
import { useSpeechStore } from "@/store/speech-store"
import { MessageActions } from "./message-actions"
import { CopyButton } from "@/components/ui/copy-button"
import { SpeakButton } from "@/components/ui/speak-button"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Feedback from "@/components/ui/feedback"
import type { Message as UIMessage } from "@/components/ui/chat-message"

export function ChatMessages({ className }: { className?: string }) {
  const {
    messages,
    isGenerating,
    rateResponse,
    voiceConfig,
    emitEvent,
    currentThreadId,
  } = useChatSelector(useShallow(s => ({ messages: s.messages, isGenerating: s.isGenerating, rateResponse: s.rateResponse, voiceConfig: s.voiceConfig, emitEvent: s.emitEvent, currentThreadId: s.currentThreadId })))

  const latestQuestionId = messages.filter(m => m.role === "user").at(-1)?.id
  useEffect(() => {
    window.speechSynthesis?.cancel()
    useSpeechStore.getState().stop()
  }, [currentThreadId, latestQuestionId])

  const { displayMessages, isTyping } = useMessageDisplay({
    messages: (messages as UIMessage[]) || [],
    isGenerating,
  })

  const {
    containerRef,
    scrollToBottom,
    handleScroll,
    shouldAutoScroll,
    handleTouchStart,
    isScrollable,
  } = useAutoScroll([displayMessages])

  const shouldVirtualize = displayMessages.length >= 50

  const messageOptions = useCallback(
    (message: UIMessage) => ({
      onCardAction: () => emitEvent({ type: "card_action" }),
      actions: (
        <div className="flex items-center gap-1">
          <MessageActions message={message} />
          <CopyButton content={message.content} copyMessage="Copied to clipboard!" />
          {message.content && (
            <SpeakButton content={message.content} voiceConfig={voiceConfig} messageId={message.id} />
          )}
          {message.content && rateResponse && message.role === "assistant" && message.status !== "streaming" && message.status !== "submitting" && (
            <Feedback
              localOnly={!message.runId && typeof message.custom_data?.run_id !== "string"}
              messageId={message.id}
              onRateResponse={rateResponse}
              rating={message.rating}
              comment={message.comment}
            />
          )}
        </div>
      ),
      isGenerating:
        isGenerating && message.role === "assistant" && (message.status === "submitting" || message.status === "streaming") && !message.content,
    }),
    [rateResponse, isGenerating, voiceConfig, emitEvent]
  )

  const hasMessages = displayMessages.length > 0

  return (
    <div className={cn("flex flex-col h-full w-full", className)}>
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">{isGenerating ? "Assistant is responding" : messages.at(-1)?.content}</div>
      <div className="flex-1 relative overflow-hidden">
        <div
          className={cn(
            "h-full w-full overflow-y-auto",
            hasMessages && "py-4"
          )}
          ref={containerRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
        >
          <MessageList
            messages={displayMessages as UIMessage[]}
            isTyping={isTyping}
            messageOptions={messageOptions}
            virtualize={shouldVirtualize}
            scrollRef={containerRef}
          />
        </div>
        {isScrollable && !shouldAutoScroll && (
          <div className="absolute bottom-4 right-6 pointer-events-auto z-10">
            <Button
              aria-label="Scroll to latest message"
              onClick={scrollToBottom}
              className="h-9 w-9 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl animate-in fade-in-0 slide-in-from-bottom-2"
              size="icon"
              variant="default"
            >
              <ArrowDown /><span className="sr-only">New response below</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

