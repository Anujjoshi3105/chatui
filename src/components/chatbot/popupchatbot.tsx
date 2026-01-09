import React, { useState, useRef, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { Chatbot, type ChatbotProps } from "./chatbot"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface PopupChatbotProps extends ChatbotProps {
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
  ...chatbotProps
}: PopupChatbotProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [isMaximized, setIsMaximized] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if maximized or already closed
      if (isMaximized || !isOpen) return

      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        // Check if the click target or any parent is a Radix portal element
        // (common for dropdowns, popovers, tooltips that render outside the container)
        const target = event.target as HTMLElement
        const isPortal =
          target.closest?.("[data-radix-portal]") ||
          target.closest?.('[role="menu"]') ||
          target.closest?.('[role="listbox"]') ||
          target.closest?.('[role="dialog"]') ||
          target.closest?.("[data-radix-dialog-overlay]") ||
          target.closest?.(".radix-themes")

        if (isPortal) return

        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, isMaximized])

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  }

  // Convert number to px if needed
  const w = typeof width === "number" ? `${width}px` : width
  const h = typeof height === "number" ? `${height}px` : height

  return (
    <>
      {/* Toggle Button */}
      {tooltip && !isOpen ? (
        <TooltipProvider delayDuration={tooltipDelay}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
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
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "chatbot-theme fixed z-40 bg-background overflow-hidden border shadow-2xl transition-all duration-300 ease-in-out",
              isMaximized
                ? "inset-0 z-50 h-full w-full rounded-none m-0 border-0"
                : cn("rounded-lg", positionClasses[position]),
              popupClassName
            )}
            style={isMaximized ? {} : { width: w, height: h }}
          >
            <Chatbot
              {...chatbotProps}
              header={{
                ...chatbotProps.header,
                onClose: () => setIsOpen(false),
                allowMaximize: true,
                onMaximizeToggle: setIsMaximized,
              }}
              className="h-full"
              isMaximized={isMaximized}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

