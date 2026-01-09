"use client"

import {
  forwardRef,
  useCallback,
  useRef,
  useState,
  useMemo,
  type ReactElement,
} from "react"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAutoScroll } from "@/hooks/use-auto-scroll"
import { Button } from "@/components/ui/button"
import { type Message } from "@/components/ui/chat-message"
import { CopyButton } from "@/components/ui/copy-button"
import { SpeakButton } from "@/components/ui/speak-button"
import { MessageInput } from "@/components/ui/message-input"
import { MessageList } from "@/components/ui/message-list"
import { PromptSuggestions } from "@/components/ui/prompt-suggestions"
import Feedback from "./feedback"

interface ChatPropsBase {
  handleSubmit: (
    event?: { preventDefault?: () => void },
    options?: { experimental_attachments?: FileList }
  ) => void
  messages: Array<Message>
  input: string
  className?: string
  handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>
  isGenerating: boolean
  stop?: () => void
  onRateResponse?: (
    messageId: string,
    rating: "thumbs-up" | "thumbs-down"
  ) => void
  setMessages?: (messages: any[]) => void
  transcribeAudio?: (blob: Blob) => Promise<string>
  placeholder?: string

  // Voice props
  voiceConfig?: any
  isListening?: boolean
  startListening?: () => void
  stopListening?: () => void
  isSpeechSupported?: boolean
}

interface ChatPropsWithoutSuggestions extends ChatPropsBase {
  append?: never
  suggestions?: never
}

interface ChatPropsWithSuggestions extends ChatPropsBase {
  append: (message: { role: "user"; content: string }) => void
  suggestions: string[]
}

type ChatProps = ChatPropsWithoutSuggestions | ChatPropsWithSuggestions

export function Chat({
  messages,
  handleSubmit,
  input,
  handleInputChange,
  stop,
  isGenerating,
  append,
  suggestions,
  className,
  onRateResponse,
  setMessages,
  transcribeAudio,
  placeholder,
  voiceConfig,
  isListening,
  startListening,
  stopListening,
  isSpeechSupported,
}: ChatProps) {
  const lastMessage = messages.at(-1)
  const isEmpty = messages.length === 0
  const isTyping = lastMessage?.role === "user"

  // Add typing message if generating and no assistant message
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

  const messagesRef = useRef(messages)
  messagesRef.current = messages

  // Enhanced stop function that marks pending tool calls as cancelled
  const handleStop = useCallback(() => {
    stop?.()

    if (!setMessages) return

    const latestMessages = [...messagesRef.current]
    const lastAssistantMessage = latestMessages
      .slice()
      .reverse()
      .find((m: Message) => m.role === "assistant")

    if (!lastAssistantMessage) return

    let needsUpdate = false
    let updatedMessage = { ...lastAssistantMessage }

    if (lastAssistantMessage.toolInvocations) {
      const updatedToolInvocations = lastAssistantMessage.toolInvocations.map(
        (toolInvocation: any) => {
          if (toolInvocation.state === "call") {
            needsUpdate = true
            return {
              ...toolInvocation,
              state: "result",
              result: {
                content: "Tool execution was cancelled",
                __cancelled: true, // Special marker to indicate cancellation
              },
            } as const
          }
          return toolInvocation
        }
      )

      if (needsUpdate) {
        updatedMessage = {
          ...updatedMessage,
          toolInvocations: updatedToolInvocations,
        }
      }
    }

    if (lastAssistantMessage.parts && lastAssistantMessage.parts.length > 0) {
      const updatedParts = lastAssistantMessage.parts.map((part: any) => {
        if (
          part.type === "tool-invocation" &&
          part.toolInvocation &&
          part.toolInvocation.state === "call"
        ) {
          needsUpdate = true
          return {
            ...part,
            toolInvocation: {
              ...part.toolInvocation,
              state: "result",
              result: {
                content: "Tool execution was cancelled",
                __cancelled: true,
              },
            },
          }
        }
        return part
      })

      if (needsUpdate) {
        updatedMessage = {
          ...updatedMessage,
          parts: updatedParts,
        }
      }
    }

    if (needsUpdate) {
      const messageIndex = latestMessages.findIndex(
        (m) => m.id === lastAssistantMessage.id
      )
      if (messageIndex !== -1) {
        latestMessages[messageIndex] = updatedMessage
        setMessages(latestMessages)
      }
    }
  }, [stop, setMessages, messagesRef])

  const messageOptions = useCallback(
    (message: Message) => ({
      actions: (
        <div className="flex items-center gap-1">
          <CopyButton
            content={message.content}
            copyMessage="Copied to clipboard!"
          />
          {message.content && (
            <SpeakButton content={message.content} voiceConfig={voiceConfig} />
          )}{onRateResponse && message.content && message.role === "assistant" && (
            <Feedback messageId={message.id} onRateResponse={onRateResponse} />
          )}
        </div>
      ),
      isGenerating:
        isGenerating && message.role === "assistant" && !message.content,
    }),
    [onRateResponse, isGenerating, voiceConfig]
  )

  return (
    <ChatContainer className={className}>
      {isEmpty && append && suggestions ? (
        <PromptSuggestions
          append={append}
          suggestions={suggestions}
        />
      ) : null}

      {displayMessages.length > 0 ? (
        <ChatMessages messages={displayMessages}>
          <MessageList
            messages={displayMessages}
            isTyping={isTyping}
            messageOptions={messageOptions}
          />
        </ChatMessages>
      ) : null}

      {suggestions && !isEmpty ? (
        <PromptSuggestions append={append} suggestions={suggestions} />
      ) : null}

      <ChatForm
        className={cn(
          "mt-auto border-t border-border/50 bg-gradient-to-t from-background to-muted/10 px-6 relative",
          messages.length > 0 ? "py-4" : "py-2"
        )}
        isPending={isGenerating || isTyping}
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
    </ChatContainer>
  )
}
Chat.displayName = "Chat"

export function ChatMessages({
  messages,
  children,
}: React.PropsWithChildren<{
  messages: Message[]
}>) {
  const {
    containerRef,
    scrollToBottom,
    handleScroll,
    shouldAutoScroll,
    handleTouchStart,
    isScrollable,
  } = useAutoScroll([messages])

  const hasMessages = messages.length > 0

  return (
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
        {children}
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
  )
}

export const ChatContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex h-full w-full flex-col", className)}
      {...props}
    />
  )
})
ChatContainer.displayName = "ChatContainer"

interface ChatFormProps {
  className?: string
  isPending: boolean
  handleSubmit: (
    event?: { preventDefault?: () => void },
    options?: { experimental_attachments?: FileList }
  ) => void
  children: (props: {
    files: File[] | null
    setFiles: React.Dispatch<React.SetStateAction<File[] | null>>
  }) => ReactElement
}

export const ChatForm = forwardRef<HTMLFormElement, ChatFormProps>(
  ({ children, handleSubmit, className }, ref) => {
    const [files, setFiles] = useState<File[] | null>(null)

    const onSubmit = (event: React.FormEvent) => {
      if (!files) {
        handleSubmit(event)
        return
      }

      const fileList = createFileList(files)
      handleSubmit(event, { experimental_attachments: fileList })
      setFiles(null)
    }

    return (
      <form ref={ref} onSubmit={onSubmit} className={className}>
        {children({ files, setFiles })}
      </form>
    )
  }
)
ChatForm.displayName = "ChatForm"

function createFileList(files: File[] | FileList): FileList {
  const dataTransfer = new DataTransfer()
  for (const file of Array.from(files)) {
    dataTransfer.items.add(file)
  }
  return dataTransfer.files
}
