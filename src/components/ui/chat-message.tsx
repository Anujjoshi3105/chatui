import React, { useMemo, useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { Ban, ChevronRight, Terminal } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { FilePreview } from "@/components/ui/file-preview"
import { LazyMarkdownRenderer } from "@/components/ui/lazy-markdown-renderer"
import { TypingIndicator } from "@/components/ui/typing-indicator"
import { ToolResult } from "@/components/ui/tool-result"

const chatBubbleVariants = cva(
  "group/message relative rounded-lg p-4 text-sm shadow-sm transition-all duration-200 hover:shadow-md",
  {
    variants: {
      isUser: {
        true: "chat-bubble-user",
        false: "chat-bubble-bot",
      },
      animation: {
        none: "",
        slide: "duration-300 animate-in fade-in-0",
        scale: "duration-300 animate-in fade-in-0 zoom-in-95",
        fade: "duration-500 animate-in fade-in-0",
      },
    },
    compoundVariants: [
      {
        isUser: true,
        animation: "slide",
        class: "slide-in-from-right",
      },
      {
        isUser: false,
        animation: "slide",
        class: "slide-in-from-left",
      },
      {
        isUser: true,
        animation: "scale",
        class: "origin-bottom-right",
      },
      {
        isUser: false,
        animation: "scale",
        class: "origin-bottom-left",
      },
    ],
  }
)

type Animation = VariantProps<typeof chatBubbleVariants>["animation"]

interface Attachment {
  name?: string
  contentType?: string
  url: string
}

interface PartialToolCall {
  state: "partial-call"
  toolName: string
}

interface ToolCall {
  state: "call"
  toolName: string
}

interface ToolResult {
  state: "result"
  toolName: string
  result: any
}

type ToolInvocation = PartialToolCall | ToolCall | ToolResult

interface ReasoningPart {
  type: "reasoning"
  reasoning: string
}

interface ToolInvocationPart {
  type: "tool-invocation"
  toolInvocation: ToolInvocation
}

interface TextPart {
  type: "text"
  text: string
}

// For compatibility with AI SDK types, not used
interface SourcePart {
  type: "source"
  source?: any
}

interface FilePart {
  type: "file"
  mimeType: string
  data: string
}

interface StepStartPart {
  type: "step-start"
}

type MessagePart =
  | TextPart
  | ReasoningPart
  | ToolInvocationPart
  | SourcePart
  | FilePart
  | StepStartPart

export interface Message {
  id: string
  role: "user" | "assistant" | (string & {})
  content: string
  createdAt?: Date
  experimental_attachments?: Attachment[]
  toolInvocations?: ToolInvocation[]
  parts?: MessagePart[]
  custom_data?: Record<string, any>
}

export interface ChatMessageProps extends Message {
  showTimeStamp?: boolean
  animation?: Animation
  actions?: React.ReactNode
  isGenerating?: boolean
}

export function ChatMessageBubble({
  isUser,
  animation,
  actions,
  isGenerating,
  children,
}: {
  isUser: boolean
  animation?: Animation
  actions?: React.ReactNode
  isGenerating?: boolean
  children?: React.ReactNode
}) {
  return (
    <div className={cn(chatBubbleVariants({ isUser, animation }))}>
      {isGenerating && !children ? (
        <TypingIndicator />
      ) : (
        <LazyMarkdownRenderer>{typeof children === "string" ? children : ""}</LazyMarkdownRenderer>
      )}
      {actions ? (
        <div className="absolute -bottom-6 right-2 flex space-x-1 rounded-lg border bg-background/95 backdrop-blur-sm p-1 text-foreground opacity-0 transition-all duration-200 group-hover/message:opacity-100 shadow-sm">
          {actions}
        </div>
      ) : null}
    </div>
  )
}

export function ChatMessageTimestamp({
  createdAt,
  animation = "scale"
}: {
  createdAt?: Date
  animation?: Animation
}) {
  if (!createdAt) return null

  const formattedTime = createdAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <time
      dateTime={createdAt.toISOString()}
      className={cn(
        "mt-1 block px-1 text-xs opacity-60",
        animation !== "none" && "duration-500 animate-in fade-in-0"
      )}
    >
      {formattedTime}
    </time>
  )
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  role,
  content,
  createdAt,
  showTimeStamp = false,
  animation = "scale",
  actions,
  experimental_attachments,
  toolInvocations,
  parts,
  isGenerating = false,
}) => {
  const isUser = role === "user"

  const files = useMemo(() => {
    return experimental_attachments?.map((attachment) => {
      const dataArray = dataUrlToUint8Array(attachment.url)
      return new File([dataArray], attachment.name ?? "Unknown", {
        type: attachment.contentType,
      })
    })
  }, [experimental_attachments])

  return (
    <div className={cn("flex flex-col gap-3 min-w-0", isUser ? "items-end ml-auto max-w-[85%] pr-4" : "items-start mr-auto max-w-[85%] pl-4")}>

      {files && files.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {files.map((file, index) => (
            <FilePreview file={file} key={index} />
          ))}
        </div>
      )}

      {toolInvocations && toolInvocations.length > 0 && (
        <ToolCall toolInvocations={toolInvocations} />
      )}

      {parts && parts.length > 0 ? (
        parts.map((part, index) => {
          if (part.type === "text") {
            return (
              <div key={`text-${index}`} className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
                <ChatMessageBubble isUser={isUser} animation={animation} actions={actions}>
                  {part.text}
                </ChatMessageBubble>
                {showTimeStamp && <ChatMessageTimestamp createdAt={createdAt} animation={animation} />}
              </div>
            )
          } else if (part.type === "reasoning") {
            return <ReasoningBlock key={`reasoning-${index}`} part={part} />
          } else if (part.type === "tool-invocation") {
            return <ToolCall key={`tool-${index}`} toolInvocations={[part.toolInvocation]} />
          }
          return null
        })
      ) : (
        (content || isGenerating) ? (
          <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
            <ChatMessageBubble isUser={isUser} animation={animation} actions={actions} isGenerating={isGenerating}>
              {content}
            </ChatMessageBubble>
            {showTimeStamp && <ChatMessageTimestamp createdAt={createdAt} animation={animation} />}
          </div>
        ) : (
          showTimeStamp && <ChatMessageTimestamp createdAt={createdAt} animation={animation} />
        )
      )}
    </div>
  )
}

function dataUrlToUint8Array(data: string) {
  const base64 = data.split(",")[1]
  const binaryString = atob(base64)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes
}

function ReasoningBlock({ part }: { part: ReasoningPart }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-3 flex flex-col items-start max-w-[85%] ml-4 mr-auto min-w-0">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="group chat-reasoning-block"
      >
        <div className="flex items-center p-3">
          <CollapsibleTrigger asChild>
            <button className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <ChevronRight className="h-3 w-3 transition-transform group-data-[state=open]:rotate-90" />
              </div>
              <span className="font-medium">Thinking</span>
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent forceMount>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { height: "auto", opacity: 1 },
              closed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="border-t border-border/30"
          >
            <div className="p-3">
              <div className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                {part.reasoning}
              </div>
            </div>
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

function ToolCall({
  toolInvocations,
}: Pick<ChatMessageProps, "toolInvocations">) {
  if (!toolInvocations?.length) return null

  return (
    <div className="flex flex-col items-start gap-3 max-w-[85%] ml-4 mr-auto min-w-0">
      {toolInvocations.map((invocation, index) => {
        const isCancelled =
          invocation.state === "result" &&
          invocation.result?.__cancelled === true

        if (isCancelled) {
          return (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive shadow-sm"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10">
                <Ban className="h-3 w-3" />
              </div>
              <span className="font-medium">
                Cancelled{" "}
                <code className="rounded bg-destructive/10 px-1.5 py-0.5 text-xs font-mono">
                  {invocation.toolName}
                </code>
              </span>
            </div>
          )
        }

        switch (invocation.state) {
          case "result":
            return (
              <ToolResult key={index} toolName={invocation.toolName} result={invocation.result} />
            )
          case "partial-call":
          case "call":
            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary shadow-sm"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Terminal className="h-3 w-3" />
                </div>
                <span className="font-medium">
                  Calling{" "}
                  <code className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-mono">
                    {invocation.toolName}
                  </code>
                </span>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}