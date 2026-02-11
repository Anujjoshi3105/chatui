"use client"

import { useMemo, useCallback } from "react"
import { useChatContext } from "./context"
import { MessageList } from "@/components/ui/message-list"
import {
  ChatMessages as ChatMessagesScroll,
  ChatContainer,
} from "@/components/ui/chat"
import { CopyButton } from "@/components/ui/copy-button"
import { SpeakButton } from "@/components/ui/speak-button"
import Feedback from "@/components/ui/feedback"
import type { Message as UIMessage } from "@/components/ui/chat-message"

export function ChatMessages({ className }: { className?: string }) {
  const {
    messages,
    isGenerating,
    rateResponse,
    voiceConfig,
  } = useChatContext()

  const lastMessage = messages.at(-1)
  const isEmpty = messages.length === 0
  const isTyping = lastMessage?.role === "user"

  const displayMessages = useMemo(() => {
    if (isGenerating && (isEmpty || lastMessage?.role === "user")) {
      return [
        ...messages,
        {
          id: "typing",
          role: "assistant" as const,
          content: "",
          createdAt: new Date(),
        },
      ]
    }
    return messages
  }, [messages, isGenerating, isEmpty, lastMessage])

  const messageOptions = useCallback(
    (message: UIMessage) => ({
      actions: (
        <div className="flex items-center gap-1">
          <CopyButton content={message.content} copyMessage="Copied to clipboard!" />
          {message.content && (
            <SpeakButton content={message.content} voiceConfig={voiceConfig} />
          )}
          {message.content && message.role === "assistant" && (
            <Feedback messageId={message.id} onRateResponse={rateResponse} />
          )}
        </div>
      ),
      isGenerating:
        isGenerating && message.role === "assistant" && !message.content,
    }),
    [rateResponse, isGenerating, voiceConfig]
  )

  return (
    <ChatContainer className={className}>
      <ChatMessagesScroll messages={displayMessages as UIMessage[]}>
        <MessageList
          messages={displayMessages as UIMessage[]}
          isTyping={isTyping}
          messageOptions={messageOptions}
        />
      </ChatMessagesScroll>
    </ChatContainer>
  )
}
