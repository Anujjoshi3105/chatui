"use client"

import { ChatProvider } from "./context"
import type { ChatProviderProps } from "./context"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"
import { useEffect } from "react"
import { useSpeechStore } from "@/store/speech-store"

export function ChatRoot(props: ChatProviderProps) {
  useEffect(() => () => {
    window.speechSynthesis?.cancel()
    useSpeechStore.getState().stop()
  }, [props.config.threadId, props.config.agent])
  return <MotionConfig reducedMotion="user"><LazyMotion features={domAnimation}><ChatProvider {...props} /></LazyMotion></MotionConfig>
}

ChatRoot.displayName = "Chat.Root"
