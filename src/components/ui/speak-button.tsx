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
import { useChatVoice } from "@/hooks/use-chat-voice"

import { useSpeechStore } from "@/store/speech-store"

interface SpeakButtonProps {
    content: string
    voiceConfig?: Partial<VoiceConfig>
    className?: string
    size?: "sm" | "default" | "icon"
    variant?: "ghost" | "outline" | "default"
    messageId?: string
}

export function SpeakButton({
    content,
    voiceConfig,
    className,
    size = "icon",
    variant = "ghost",
    messageId,
}: SpeakButtonProps) {
    const { isSynthesisSupported: isSupported, isSpeaking, toggleSpeaking } = useChatVoice({ config: voiceConfig })

    const { speakingMessageId } = useSpeechStore()
    const isActive = isSpeaking && speakingMessageId === messageId

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
                            isActive && "text-primary bg-primary/10",
                            className
                        )}
                        onClick={() => toggleSpeaking(content, messageId)}
                        aria-label={isActive ? "Stop speaking" : "Listen to message"}
                    >
                        {isActive ? (
                            <Square className="h-3 w-3" fill="currentColor" />
                        ) : (
                            <Volume2 />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                    {isActive ? "Stop" : "Listen"}
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
    messageId?: string
}

export function SpeakButtonInline({
    content,
    voiceConfig,
    className,
    messageId,
}: SpeakButtonInlineProps) {
    const { isSynthesisSupported: isSupported, isSpeaking, toggleSpeaking } = useChatVoice({ config: voiceConfig })

    const { speakingMessageId } = useSpeechStore()
    const isActive = isSpeaking && speakingMessageId === messageId

    if (!isSupported) {
        return null
    }

    return (
        <button
            type="button"
            onClick={() => toggleSpeaking(content, messageId)}
            className={cn(
                "inline-flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted",
                isActive && "text-primary",
                className
            )}
            aria-label={isActive ? "Stop speaking" : "Listen to message"}
        >
            {isActive ? (
                <Square className="h-3 w-3" fill="currentColor" />
            ) : (
                <Volume2 className="h-3 w-3" />
            )}
        </button>
    )
}

