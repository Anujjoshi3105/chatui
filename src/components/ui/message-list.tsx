import { memo, useCallback } from "react"
import {
  ChatMessage,
  type ChatMessageProps,
  type Message,
} from "@/components/ui/chat-message"
import { TypingIndicator } from "@/components/ui/typing-indicator"

type AdditionalMessageOptions = Omit<ChatMessageProps, keyof Message>

interface MessageListProps {
  messages: Message[]
  showTimeStamps?: boolean
  isTyping?: boolean
  messageOptions?:
  | AdditionalMessageOptions
  | ((message: Message) => AdditionalMessageOptions)
}

// Memoized individual message component
const MemoizedChatMessage = memo(ChatMessage, (prevProps, nextProps) => {
  // Custom comparison to prevent unnecessary re-renders
  if (prevProps.id !== nextProps.id) return false
  if (prevProps.content !== nextProps.content) return false
  if (prevProps.role !== nextProps.role) return false
  if (prevProps.isGenerating !== nextProps.isGenerating) return false

  // Deep compare toolInvocations length and states
  const prevTools = prevProps.toolInvocations || []
  const nextTools = nextProps.toolInvocations || []
  if (prevTools.length !== nextTools.length) return false

  for (let i = 0; i < prevTools.length; i++) {
    if (prevTools[i].state !== nextTools[i].state) return false
    // Use optional chaining since PartialToolCall doesn't have toolCallId
    if ((prevTools[i] as any).toolCallId !== (nextTools[i] as any).toolCallId) return false
  }

  // Compare parts if present
  const prevParts = prevProps.parts || []
  const nextParts = nextProps.parts || []
  if (prevParts.length !== nextParts.length) return false

  return true
})

MemoizedChatMessage.displayName = "MemoizedChatMessage"

export const MessageList = memo(function MessageList({
  messages,
  showTimeStamps = true,
  isTyping = false,
  messageOptions,
}: MessageListProps) {
  // Memoize the options getter to prevent recreating objects
  const getMessageOptions = useCallback((message: Message) => {
    if (typeof messageOptions === "function") {
      return messageOptions(message)
    }
    return messageOptions
  }, [messageOptions])

  return (
    <div className="space-y-4">
      {messages.map((message) => {
        const additionalOptions = getMessageOptions(message)

        return (
          <MemoizedChatMessage
            key={message.id}
            showTimeStamp={showTimeStamps}
            {...message}
            {...additionalOptions}
          />
        )
      })}
      {isTyping && <TypingIndicator />}
    </div>
  )
})

MessageList.displayName = "MessageList"
