import React, { useState } from "react"
import { Button } from "./button"
import { Heart } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { cn } from "@/lib/utils"

interface FeedbackProps {
  onRateResponse: (messageId: string, score: number, comment?: string) => void | Promise<void>
  localOnly?: boolean
  messageId: string
  rating?: number // 0 to 1
  comment?: string
}

export default function Feedback({ onRateResponse, messageId, rating, comment: initialComment, localOnly }: FeedbackProps) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  const [open, setOpen] = useState(false)
  const [hoverValue, setHoverValue] = useState<number | null>(null)
  const [selectedValue, setSelectedValue] = useState<number | null>(rating ? rating * 5 : null)
  const [comment, setComment] = useState(initialComment || "")

  // Sync state if props change (e.g., loaded from history or optimistic update succeeds)
  React.useEffect(() => {
    if (!open) setSelectedValue(rating ? rating * 5 : null)
  }, [rating, open])

  React.useEffect(() => {
    if (!open) setComment(initialComment || "")
  }, [initialComment, open])

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => {
      const starValue = i + 1
      const isActive = (hoverValue ?? selectedValue ?? 0) >= starValue

      return (
        <button
          key={i}
          type="button"
          aria-label={`${starValue} out of 5`}
          aria-pressed={selectedValue === starValue}
          disabled={pending}
          onClick={() => setSelectedValue(starValue)}
          onMouseEnter={() => setHoverValue(starValue)}
          onMouseLeave={() => setHoverValue(null)}
          className="min-h-11 min-w-11 p-2 focus-visible:outline-2 focus-visible:outline-primary transition-transform hover:scale-110"
        >
          <Heart
            className={cn(
              "size-5 transition-colors",
              isActive ? "fill-primary text-primary" : "text-muted-foreground/30"
            )}
          />
        </button>
      )
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedValue || pending) return
    setPending(true); setError(null); setSaved(false)
    try {
      await onRateResponse(messageId, selectedValue / 5, comment.trim() || undefined)
      setSaved(true)
    } catch { setError("Could not save feedback. Your comment is still here. Try again.") }
    finally { setPending(false) }
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (pending) return
    setOpen(newOpen)
    if (newOpen) {
      setSaved(false)
      setError(null)
    }
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                aria-label="Rate response"
                size="icon"
                variant="ghost"
                className={cn(
                  "size-6 transition-colors duration-200 text-primary ",
                  rating ? "bg-primary/10 hover:bg-primary/20" : "hover:text-foreground"
                )}
              >
                <Heart className={cn("size-3.5", rating && "fill-current")} />
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            Rate Response
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <PopoverContent className="w-80 max-w-[calc(100vw-2rem)] p-4" align="end" side="top">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-50">
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-foreground">Provide Feedback</h4>
            <p className="text-xs text-muted-foreground">
              {localOnly ? "Saved on this device only; this response has no server feedback ID." : "How would you rate this response?"}
            </p>
          </div>

          <div role="group" aria-label="Response rating" className="flex justify-center -mx-2">
            {renderStars()}
          </div>

          <div className="space-y-2">
            <label htmlFor={`comment-${messageId}`} className="sr-only">Comment</label>
            <textarea
              id={`comment-${messageId}`}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What could be improved? (optional)"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
          </div>

          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          {saved && <p role="status" className="text-sm">{localOnly ? "Saved on this device" : "Feedback saved"}</p>}
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              disabled={!selectedValue || pending}
            >
              {pending ? "Saving…" : error ? "Retry" : "Submit"}
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
