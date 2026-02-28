"use client"

import { useCallback } from "react"
import { useMessageDisplay } from "@/hooks/use-message-display"
import { useAutoScroll } from "@/hooks/use-auto-scroll"
import { useChatContext } from "./context"
import { MessageList } from "@/components/ui/message-list"
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
  } = useChatContext()

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

  const messageOptions = useCallback(
    (message: UIMessage) => ({
      actions: (
        <div className="flex items-center gap-1">
          <CopyButton content={message.content} copyMessage="Copied to clipboard!" />
          {message.content && (
            <SpeakButton content={message.content} voiceConfig={voiceConfig} />
          )}
          {message.content && rateResponse && message.role === "assistant" && (
            <Feedback
              messageId={message.id}
              onRateResponse={rateResponse}
              rating={message.rating}
              comment={message.comment}
            />
          )}
        </div>
      ),
      isGenerating:
        isGenerating && message.role === "assistant" && !message.content,
    }),
    [rateResponse, isGenerating, voiceConfig]
  )

  const hasMessages = displayMessages.length > 0

  return (
    <div className={cn("flex flex-col h-full w-full", className)}>
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
            />
        </div>
        {isScrollable && !shouldAutoScroll && (
            <div className="absolute bottom-4 right-6 pointer-events-auto z-10">
            <Button
                onClick={scrollToBottom}
                className="h-9 w-9 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:shadow-xl animate-in fade-in-0 slide-in-from-bottom-2"
                size="icon"
                variant="default"
            >
                <ArrowDown />
            </Button>
            </div>
        )}
      </div>
    </div>
  )
}

