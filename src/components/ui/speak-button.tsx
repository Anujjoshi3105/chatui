"use client"

import { Volume2, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { VoiceConfig } from "@/lib/voice.sdk"
import { useSpeech } from "@/hooks/use-speech"

interface SpeakButtonProps {
    content: string
    voiceConfig?: Partial<VoiceConfig>
    className?: string
    size?: "sm" | "default" | "icon"
    variant?: "ghost" | "outline" | "default"
}

export function SpeakButton({
    content,
    voiceConfig,
    className,
    size = "icon",
    variant = "ghost",
}: SpeakButtonProps) {
    const { isSupported, isSpeaking, toggle } = useSpeech(voiceConfig)

    if (!isSupported) {
        return null
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        size={size}
                        variant={variant}
                        className={cn(
                            "h-6 w-6 transition-colors",
                            isSpeaking && "text-primary bg-primary/10",
                            className
                        )}
                        onClick={() => toggle(content)}
                        aria-label={isSpeaking ? "Stop speaking" : "Listen to message"}
                    >
                        {isSpeaking ? (
                            <Square className="h-3 w-3" fill="currentColor" />
                        ) : (
                            <Volume2 />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                    {isSpeaking ? "Stop" : "Listen"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

// Alternative compact version for inline use
interface SpeakButtonInlineProps {
    content: string
    voiceConfig?: Partial<VoiceConfig>
    className?: string
}

export function SpeakButtonInline({
    content,
    voiceConfig,
    className,
}: SpeakButtonInlineProps) {
    const { isSupported, isSpeaking, toggle } = useSpeech(voiceConfig)

    if (!isSupported) {
        return null
    }

    return (
        <button
            type="button"
            onClick={() => toggle(content)}
            className={cn(
                "inline-flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted",
                isSpeaking && "text-primary",
                className
            )}
            aria-label={isSpeaking ? "Stop speaking" : "Listen to message"}
        >
            {isSpeaking ? (
                <Square className="h-3 w-3" fill="currentColor" />
            ) : (
                <Volume2 className="h-3 w-3" />
            )}
        </button>
    )
}

