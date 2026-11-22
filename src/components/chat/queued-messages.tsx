"use client"

import { AnimatePresence, m as motion } from "motion/react"
import { useChatSelector } from "./context"
import { useShallow } from "zustand/react/shallow"
import { Button } from "@/components/ui/button"
import { Zap, X, Paperclip, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function QueuedMessages({ className }: { className?: string }) {
  const {
    messageQueue,
    forcePassQueuedMessage,
    removeQueuedMessage,
    clearQueue,
    isGenerating,
  } = useChatSelector(
    useShallow((s) => ({
      messageQueue: s.messageQueue,
      forcePassQueuedMessage: s.forcePassQueuedMessage,
      removeQueuedMessage: s.removeQueuedMessage,
      clearQueue: s.clearQueue,
      isGenerating: s.isGenerating,
    }))
  )

  if (!messageQueue || messageQueue.length === 0) return null

  return (
    <div className={cn("px-4 pb-2 w-full", className)}>
      <div className="rounded-lg border border-border/80 bg-muted/60 backdrop-blur-sm p-2.5 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground px-1">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary animate-pulse" />
            <span>Queued ({messageQueue.length})</span>
            {isGenerating && (
              <span className="text-[11px] text-muted-foreground/80 font-normal">
                · Will send automatically when current response finishes
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={clearQueue}
            className="text-[11px] text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {messageQueue.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-between gap-2 rounded-md bg-background/90 border border-border/50 px-2.5 py-1.5 text-xs text-foreground shadow-2xs"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="font-mono text-[10px] text-muted-foreground/70 shrink-0">
                    #{index + 1}
                  </span>
                  <span className="truncate flex-1 font-normal">
                    {item.text || "(Attachment only)"}
                  </span>
                  {item.attachments && item.attachments.length > 0 && (
                    <span className="inline-flex items-center gap-0.5 rounded px-1 py-0.5 text-[10px] bg-muted text-muted-foreground shrink-0">
                      <Paperclip className="h-2.5 w-2.5" />
                      {item.attachments.length}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => forcePassQueuedMessage(item.id)}
                    className="h-6 px-2 text-[11px] font-medium gap-1 text-primary hover:bg-primary/10 hover:text-primary cursor-pointer"
                    title="Interrupt current response and send this message immediately"
                    aria-label={`Force pass message ${index + 1}`}
                  >
                    <Zap className="h-3 w-3 fill-current" />
                    Force pass
                  </Button>
                  <button
                    type="button"
                    onClick={() => removeQueuedMessage(item.id)}
                    className="h-6 w-6 flex items-center justify-center rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
                    title="Remove from queue"
                    aria-label={`Remove message ${index + 1} from queue`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
