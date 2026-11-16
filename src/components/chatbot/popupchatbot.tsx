import React, { useState, useRef, useCallback, useEffect, lazy, Suspense } from "react"
import { MessageCircle } from "lucide-react"
import type { ChatbotProps } from "./chatbot"
const Chatbot = lazy(() => import("./chatbot").then(m => ({ default: m.Chatbot })))
import { cn } from "@/lib/utils"
import { m as motion, AnimatePresence, LazyMotion, domAnimation, MotionConfig } from "motion/react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { useFocusScope } from "@/hooks/use-focus-scope"

import { emitChatEvent } from "@/core/services/interaction-types"

export interface PopupChatbotProps extends ChatbotProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  buttonClassName?: string
  buttonStyle?: React.CSSProperties
  popupClassName?: string
  children?: React.ReactNode
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  width?: number | string
  height?: number | string
  tooltip?: string
  tooltipDelay?: number
  defaultOpen?: boolean
}

const positionClasses = {
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
}

export function PopupChatbot({
  buttonClassName,
  buttonStyle,
  popupClassName,
  children,
  position = "bottom-right",
  width = 450,
  height = 600,
  tooltip,
  tooltipDelay = 0,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  ...chatbotProps
}: PopupChatbotProps) {
  const [localOpen, setLocalOpen] = useState(defaultOpen)
  const isOpen = controlledOpen ?? localOpen
  const setIsOpen = useCallback((next: boolean) => { setLocalOpen(next); onOpenChange?.(next) }, [onOpenChange])
  const onEventRef = useRef(chatbotProps.onEvent)
  useEffect(() => { onEventRef.current = chatbotProps.onEvent }, [chatbotProps.onEvent])
  useEffect(() => { if (isOpen) emitChatEvent(onEventRef.current, { type: "chat_opened" }) }, [isOpen])
  const [isMaximized, setIsMaximized] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile(Number(width))
  const close = useCallback(() => setIsOpen(false), [setIsOpen])
  useFocusScope(containerRef, isOpen, close)

  const isFullScreen = isMobile || isMaximized


  const w = typeof width === "number" ? `${width}px` : width
  const h = typeof height === "number" ? `${height}px` : height

  const handleMaximizeToggle = useCallback((maximized: boolean) => {
    if (!isMobile) {
      setIsMaximized(maximized)
    }
  }, [isMobile])

  return (
    <MotionConfig reducedMotion="user"><LazyMotion features={domAnimation}>
      {/* Toggle Button */}
      {tooltip && !isOpen ? (
        <TooltipProvider delayDuration={tooltipDelay}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                aria-label="Open chat"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors",
                  positionClasses[position],
                  buttonClassName
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: "56px", height: "56px", ...buttonStyle }}
              >
                {children || <MessageCircle className="h-6 w-6" />}
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="top" className="chatbot-theme">
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <motion.button
          aria-label="Open chat"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "chatbot-theme fixed z-50 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors",
            positionClasses[position],
            isOpen && "hidden",
            buttonClassName
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ width: "56px", height: "56px", ...buttonStyle }}
        >
          {children || <MessageCircle className="h-6 w-6" />}
        </motion.button>
      )}

      {/* Popup Chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label={chatbotProps.header?.title ?? "Chat assistant"}
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "chatbot-theme fixed z-40 bg-background overflow-hidden border shadow-2xl transition-all duration-300 ease-in-out",
              isFullScreen
                ? "inset-0 z-50 h-dvh w-dvw max-h-dvh max-w-dvw rounded-none m-0 border-0"
                : cn("rounded-lg", positionClasses[position]),
              popupClassName
            )}
            style={isFullScreen ? {} : { width: w, height: h, maxWidth: "calc(100vw - 2rem)", maxHeight: "calc(100dvh - 2rem)" }}
          >
            <Suspense fallback={<div role="status" className="p-4">Loading chat…</div>}><Chatbot
              {...chatbotProps}
              header={{
                ...chatbotProps.header,
                onClose: () => setIsOpen(false),
                allowMaximize: !isMobile,
                onMaximizeToggle: handleMaximizeToggle,
              }}
              className="h-full"
              isMaximized={isFullScreen}
            /></Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </LazyMotion></MotionConfig>
  )
}

