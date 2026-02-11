import { useRef, useState } from "react"
import { Code2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import MarkdownRenderer from "@/components/ui/markdown-renderer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const HOVER_CLOSE_DELAY = 150

export interface ToolResultProps {
  toolName: string
  result: unknown
}

export function ToolResult({ toolName, result }: ToolResultProps) {
  const [open, setOpen] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const handleTriggerEnter = () => {
    clearCloseTimeout()
    setOpen(true)
  }

  const handleTriggerLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false)
      closeTimeoutRef.current = null
    }, HOVER_CLOSE_DELAY)
  }

  const handleContentEnter = () => {
    clearCloseTimeout()
  }

  const handleContentLeave = () => {
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) setOpen(false)
      }}
    >
      <PopoverTrigger asChild>
        <Badge
          variant="outline"
          className="cursor-pointer hover:scale-[0.95]"
          onMouseEnter={handleTriggerEnter}
          onMouseLeave={handleTriggerLeave}
        >
          <Code2 className="size-3" />
          {toolName}
        </Badge>
      </PopoverTrigger>
      <PopoverContent
        className="max-h-[80vh] w-96 max-w-[min(90vw,24rem)] flex flex-col p-0"
        align="start"
        sideOffset={8}
        onMouseEnter={handleContentEnter}
        onMouseLeave={handleContentLeave}
      >
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <Code2 className="size-5 text-primary shrink-0" />
          <span className="font-semibold text-sm">
            Tool Result: {toolName}
          </span>
        </div>
        <div className="flex-1 overflow-auto rounded-b-md bg-muted/30 p-4">
          {typeof result === "string" ? (
            <MarkdownRenderer>
              {result.replace(/\\n/g, "\n")}
            </MarkdownRenderer>
          ) : (
            <pre className="whitespace-pre-wrap text-xs md:text-sm font-mono leading-relaxed">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
