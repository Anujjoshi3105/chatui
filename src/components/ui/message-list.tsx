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
  if (prevProps.variant !== nextProps.variant) return false

  // Deep compare toolInvocations length and states
  const prevTools = prevProps.toolInvocations || []
  const nextTools = nextProps.toolInvocations || []
  if (prevTools.length !== nextTools.length) return false

  for (let i = 0; i < prevTools.length; i++) {
    if (prevTools[i].state !== nextTools[i].state) return false
    // Use optional chaining since PartialToolCall doesn't have toolCallId
    if ((prevTools[i] as { toolCallId?: string }).toolCallId !== (nextTools[i] as { toolCallId?: string }).toolCallId) return false
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
  "use no memo"
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

            const prevMessage = messages[virtualRow.index - 1]
            const nextMessage = messages[virtualRow.index + 1]

            const isPrevSameRole = prevMessage && prevMessage.role === message.role
            const isNextSameRole = nextMessage && nextMessage.role === message.role

            let variant: "single" | "first" | "middle" | "last" = "single"
            if (isPrevSameRole && isNextSameRole) {
              variant = "middle"
            } else if (isPrevSameRole) {
              variant = "last"
            } else if (isNextSameRole) {
              variant = "first"
            }

            const marginBottom = isNextSameRole ? "0.25rem" : "1rem"

            return (
              <div
                key={message.id}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                style={{ marginBottom }}
              >
                <MemoizedChatMessage
                  showTimeStamp={showTimeStamps}
                  {...message}
                  variant={variant}
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
    <div className="flex flex-col">
      {messages.map((message, index) => {
        const additionalOptions = getMessageOptions(message)

        const prevMessage = messages[index - 1]
        const nextMessage = messages[index + 1]

        const isPrevSameRole = prevMessage && prevMessage.role === message.role
        const isNextSameRole = nextMessage && nextMessage.role === message.role

        let variant: "single" | "first" | "middle" | "last" = "single"
        if (isPrevSameRole && isNextSameRole) {
          variant = "middle"
        } else if (isPrevSameRole) {
          variant = "last"
        } else if (isNextSameRole) {
          variant = "first"
        }

        const mtClass = index === 0 ? "mt-0" : (isPrevSameRole ? "mt-1" : "mt-4")

        return (
          <div key={message.id} className={mtClass}>
            <MemoizedChatMessage
              showTimeStamp={showTimeStamps}
              {...message}
              variant={variant}
              {...additionalOptions}
            />
          </div>
        )
      })}
      {isTyping && (
        <div className={messages.length > 0 && messages[messages.length - 1].role === "assistant" ? "mt-1" : "mt-4"}>
          <TypingIndicator />
        </div>
      )}
    </div>
  )
})

MessageList.displayName = "MessageList"
