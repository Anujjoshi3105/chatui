import { memo, useCallback } from "react"
import {
  ChatMessage,
  type ChatMessageProps,
  type Message,
} from "@/components/ui/chat-message"
import { TypingIndicator } from "@/components/ui/typing-indicator"
import { useVirtualizer } from "@tanstack/react-virtual"

type AdditionalMessageOptions = Omit<ChatMessageProps, keyof Message>

interface MessageListProps {
  messages: Message[]
  showTimeStamps?: boolean
  isTyping?: boolean
  messageOptions?:
  | AdditionalMessageOptions
  | ((message: Message) => AdditionalMessageOptions)
  /** When true and scrollRef is provided, only visible messages are rendered (for long threads). */
  virtualize?: boolean
  /** Ref to the scrollable parent element. Required when virtualize is true. */
  scrollRef?: React.RefObject<HTMLElement | null>
  /** Estimated height per message in px for virtualization. Default 120. */
  estimateSize?: number
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
  virtualize = false,
  scrollRef,
  estimateSize = 120,
}: MessageListProps) {
  const getMessageOptions = useCallback((message: Message) => {
    if (typeof messageOptions === "function") {
      return messageOptions(message)
    }
    return messageOptions
  }, [messageOptions])

  const rowVirtualizer = useVirtualizer({
    count: messages.length,
    getScrollElement: () => scrollRef?.current ?? null,
    estimateSize: () => estimateSize,
    overscan: 3,
    enabled: virtualize && !!scrollRef,
  })

  const virtualItems = virtualize && scrollRef ? rowVirtualizer.getVirtualItems() : []

  if (virtualize && scrollRef && messages.length > 0) {
    const paddingTop = virtualItems[0]?.start ?? 0
    const paddingBottom =
      rowVirtualizer.getTotalSize() - (virtualItems[virtualItems.length - 1]?.end ?? 0)

    return (
      <div style={{ height: "100%", width: "100%" }}>
        <div
          style={{
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${Math.max(0, paddingBottom)}px`,
          }}
        >
          {virtualItems.map((virtualRow) => {
            const message = messages[virtualRow.index]
            const additionalOptions = getMessageOptions(message)
            return (
              <div
                key={message.id}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                style={{ marginBottom: "1rem" }}
              >
                <MemoizedChatMessage
                  showTimeStamp={showTimeStamps}
                  {...message}
                  {...additionalOptions}
                />
              </div>
            )
          })}
        </div>
        {isTyping && <TypingIndicator />}
      </div>
    )
  }

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
