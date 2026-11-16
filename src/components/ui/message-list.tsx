import { memo } from "react"
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

// Memoize at the message boundary, before constructing action elements.
const MessageRow = memo(function MessageRow({ message, options, variant, showTimeStamp }: {
  message: Message; options?: MessageListProps["messageOptions"];
  variant: ChatMessageProps["variant"]; showTimeStamp: boolean
}) {
  return <ChatMessage {...message} variant={variant} showTimeStamp={showTimeStamp}
    {...(typeof options === "function" ? options(message) : options)} />
})

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

  // This component deliberately opts out of compiler memoization above.
  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: messages.length,
    getItemKey: index => messages[index].id,
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
      <div style={{ width: "100%" }}>
        <div
          style={{
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${Math.max(0, paddingBottom)}px`,
          }}
        >
          {virtualItems.map((virtualRow) => {
            const message = messages[virtualRow.index]


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
                style={{ paddingBottom: marginBottom }}
              >
                <MessageRow
                  showTimeStamp={showTimeStamps}
                  message={message}
                  variant={variant}
                  options={messageOptions}
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
            <MessageRow
              showTimeStamp={showTimeStamps}
              message={message}
              variant={variant}
              options={messageOptions}
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
