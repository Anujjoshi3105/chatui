import { useRef, useState } from "react"
import { Code2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { LazyMarkdownRenderer } from "@/components/ui/lazy-markdown-renderer"
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

  const summary = typeof result === "string" ? result : result && typeof result === "object" && "summary" in result && typeof result.summary === "string" ? result.summary : null
  return (
    <div className="min-w-0 space-y-2">
    {summary && <p className="text-sm text-muted-foreground">Result: {summary.slice(0, 180)}{summary.length > 180 ? "..." : ""}</p>}
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <button type="button" aria-label={`View ${toolName} result`}>
        <Badge
          variant="outline"
          className="cursor-pointer hover:scale-[0.95]"
          onMouseEnter={handleTriggerEnter}
          onMouseLeave={handleTriggerLeave}
        >
          <Code2 className="size-3" />
          {toolName}
        </Badge></button>
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
            <LazyMarkdownRenderer>
              {result.replace(/\\n/g, "\n")}
            </LazyMarkdownRenderer>
          ) : (
            <pre className="whitespace-pre-wrap text-xs md:text-sm font-mono leading-relaxed">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      </PopoverContent>
    </Popover>
    </div>
  )
}
