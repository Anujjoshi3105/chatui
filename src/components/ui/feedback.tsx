import React, { useState } from "react"
import { Button } from "./button"
import { Heart } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { cn } from "@/lib/utils"

interface FeedbackProps {
  onRateResponse: (messageId: string, score: number, comment?: string) => void
  messageId: string
  rating?: number // 0 to 1
  comment?: string
}

export default function Feedback({ onRateResponse, messageId, rating, comment: initialComment }: FeedbackProps) {
  const [open, setOpen] = useState(false)
  const [hoverValue, setHoverValue] = useState<number | null>(null)
  const [selectedValue, setSelectedValue] = useState<number | null>(rating ? rating * 5 : null)
  const [comment, setComment] = useState(initialComment || "")

  // Sync state if props change (e.g., loaded from history or optimistic update succeeds)
  React.useEffect(() => {
    setSelectedValue(rating ? rating * 5 : null)
  }, [rating])

  React.useEffect(() => {
    setComment(initialComment || "")
  }, [initialComment])

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => {
      const starValue = i + 1
      const isActive = (hoverValue ?? selectedValue ?? 0) >= starValue

      return (
        <button
          key={i}
          type="button"
          onClick={() => setSelectedValue(starValue)}
          onMouseEnter={() => setHoverValue(starValue)}
          onMouseLeave={() => setHoverValue(null)}
          className="p-1 focus:outline-none transition-transform hover:scale-110"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedValue) {
      onRateResponse(messageId, selectedValue / 5, comment.trim() || undefined)
      setOpen(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (newOpen) {
      setSelectedValue(rating ? rating * 5 : null)
      setComment(initialComment || "")
    }
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className={cn(
                  "size-6 transition-colors duration-200",
                  rating ? "text-primary bg-primary/10 hover:bg-primary/20" : "text-muted-foreground hover:text-foreground"
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

      <PopoverContent className="w-80 p-4" align="end" side="top">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-50">
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-foreground">Provide Feedback</h4>
            <p className="text-xs text-muted-foreground">
              How would you rate this response?
            </p>
          </div>
          
          <div className="flex justify-center -mx-2">
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
              disabled={!selectedValue}
            >
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}