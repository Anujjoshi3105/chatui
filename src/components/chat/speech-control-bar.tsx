"use client"

import { Play, Pause, Square, X, Volume2 } from "lucide-react"
import { useSpeechStore } from "@/store/speech-store"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { m as motion, AnimatePresence } from "motion/react"
import { useCallback } from "react"

function formatTime(chars: number, totalChars: number): string {
    // Average English speech rate ~14 chars/second
    const charsPerSec = 14
    const elapsed = Math.max(0, chars / charsPerSec)
    const total = Math.max(0, totalChars / charsPerSec)
    const fmt = (s: number) => {
        const m = Math.floor(s / 60)
        const sec = Math.floor(s % 60)
        return `${m}:${sec.toString().padStart(2, "0")}`
    }
    return `${fmt(elapsed)} / ${fmt(total)}`
}

export function SpeechControlBar() {
    const {
        speakingMessageId,
        currentCharIndex,
        charOffset,
        isPaused,
        activeText,
        setCharOffset,
        setIsPaused,
        stop: stopStore,
    } = useSpeechStore()

    const absoluteIndex = charOffset + currentCharIndex
    const progress = activeText.length > 0 ? (absoluteIndex / activeText.length) * 100 : 0
    const isVisible = !!speakingMessageId

    // All these call the global window.speechSynthesis — works regardless of which
    // hook instance created the active utterance.
    const handleTogglePlay = useCallback(() => {
        if (!window.speechSynthesis) return
        if (isPaused) {
            window.speechSynthesis.resume()
            setIsPaused(false)
        } else {
            window.speechSynthesis.pause()
            setIsPaused(true)
        }
    }, [isPaused, setIsPaused])

    const handleStop = useCallback(() => {
        if (window.speechSynthesis) window.speechSynthesis.cancel()
        stopStore()
    }, [stopStore])

    const handleSliderChange = useCallback((value: number[]) => {
        if (!activeText || !speakingMessageId) return
        const newCharIndex = Math.floor((value[0] / 100) * activeText.length)

        // Cancel current utterance
        if (window.speechSynthesis) window.speechSynthesis.cancel()

        // Update store offset — boundary events from the new utterance start counting from 0
        setCharOffset(newCharIndex)

        // Create and fire a new utterance for the remaining text
        const slice = activeText.slice(newCharIndex)
        if (!slice) return

        const utterance = new SpeechSynthesisUtterance(slice)

        // Copy active voice if any
        const voices = window.speechSynthesis.getVoices()
        if (voices.length > 0) {
            // Prefer an English voice, fallback to first
            const preferred = voices.find(v => v.lang.startsWith("en")) ?? voices[0]
            utterance.voice = preferred
        }

        utterance.onboundary = (event) => {
            useSpeechStore.getState().setCurrentCharIndex(event.charIndex)
        }

        utterance.onend = () => {
            useSpeechStore.getState().stop()
        }

        utterance.onerror = () => {
            useSpeechStore.getState().stop()
        }

        utterance.onpause = () => {
            useSpeechStore.getState().setIsPaused(true)
        }

        utterance.onresume = () => {
            useSpeechStore.getState().setIsPaused(false)
        }

        window.speechSynthesis.speak(utterance)
    }, [activeText, speakingMessageId, setCharOffset])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="speech-control-bar"
                    initial={{ y: 80, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 80, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg"
                >
                    <div className="speech-control-bar relative bg-background/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl shadow-black/20 p-3 flex items-center gap-3 overflow-hidden">
                        {/* Animated background pulse when playing */}
                        {!isPaused && (
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-primary/5 pointer-events-none"
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        )}

                        {/* Volume icon with pulse ring */}
                        <div className="relative flex items-center justify-center h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary">
                            <Volume2 className="h-4 w-4" />
                            {!isPaused && (
                                <motion.span
                                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                />
                            )}
                        </div>

                        {/* Progress section */}
                        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                            <Slider
                                value={[progress]}
                                max={100}
                                step={0.1}
                                onValueChange={handleSliderChange}
                                className="w-full"
                                aria-label="Playback position"
                            />
                            <div className="flex justify-between text-[10px] text-muted-foreground/70 font-mono tabular-nums px-0.5">
                                <span>{formatTime(absoluteIndex, activeText.length)}</span>
                                <span className="text-muted-foreground/40">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-1 shrink-0">
                            {/* Play / Pause */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors"
                                onClick={handleTogglePlay}
                                aria-label={isPaused ? "Resume" : "Pause"}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {isPaused ? (
                                        <motion.span
                                            key="play"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <Play className="h-4 w-4 fill-current" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="pause"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <Pause className="h-4 w-4 fill-current" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Button>

                            {/* Stop */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-8 w-8 hover:bg-destructive/10 hover:text-destructive transition-colors"
                                onClick={handleStop}
                                aria-label="Stop"
                            >
                                <Square className="h-3.5 w-3.5 fill-current" />
                            </Button>

                            {/* Dismiss */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-8 w-8 hover:bg-muted transition-colors"
                                onClick={stopStore}
                                aria-label="Close"
                            >
                                <X className="h-3.5 w-3.5" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
