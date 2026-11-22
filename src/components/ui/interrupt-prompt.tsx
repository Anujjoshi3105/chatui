import { AnimatePresence, m as motion } from "motion/react"
import { X, Zap, Plus } from "lucide-react"

interface InterruptPromptProps {
  isOpen: boolean
  close: () => void
  onForcePass?: () => void
  onQueue?: () => void
}

export function InterruptPrompt({ isOpen, close, onForcePass, onQueue }: InterruptPromptProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ top: 0, filter: "blur(5px)" }}
          animate={{
            top: -42,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              filter: { type: "tween" },
            },
          }}
          exit={{ top: 0, filter: "blur(5px)" }}
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-border/80 bg-background/95 px-3 py-1 text-center text-xs shadow-md backdrop-blur-sm z-30"
        >
          <span className="text-muted-foreground font-medium">Steering:</span>
          {onQueue && (
            <button
              type="button"
              onClick={onQueue}
              className="inline-flex items-center gap-1 text-primary hover:underline font-medium cursor-pointer"
            >
              <Plus className="h-3 w-3" />
              Enter to queue
            </button>
          )}
          <span className="text-muted-foreground/40">·</span>
          {onForcePass && (
            <button
              type="button"
              onClick={onForcePass}
              className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-600 font-medium cursor-pointer"
            >
              <Zap className="h-3 w-3 fill-current" />
              Ctrl+Enter to force pass
            </button>
          )}
          <button
            className="ml-1 text-muted-foreground hover:text-foreground flex items-center cursor-pointer"
            type="button"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-3 w-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
