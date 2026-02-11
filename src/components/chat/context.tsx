"use client"

import React, { createContext, useContext, useMemo, type ReactNode } from "react"
import { useChatRuntime } from "@/core/runtime/use-chat-runtime"
import type { ChatRuntimeConfig } from "@/core/runtime/chat-state"

export type VoiceContextOverrides = {
  voiceConfig?: import("@/lib/voice.sdk").VoiceConfig
  isListening?: boolean
  startListening?: () => void
  stopListening?: () => void
  isSpeechSupported?: boolean
}

export type ChatContextValue = ReturnType<typeof useChatRuntime> & {
  /** Resolved suggestions: follow-up prompts or starter suggestions when no user messages yet. */
  suggestions: string[]
} & VoiceContextOverrides

const ChatContext = createContext<ChatContextValue | null>(null)

export interface ChatProviderProps extends VoiceContextOverrides {
  config: ChatRuntimeConfig
  children: ReactNode
  /** When provided, used as suggestions when there are no user messages (overrides config.starterSuggestions). */
  initialSuggestions?: string[]
  /** Called when metadata is loaded (e.g. to sync default agent/model to parent state). */
  onMetadata?: (metadata: NonNullable<ChatContextValue["metadata"]>) => void
}

export function ChatProvider({
  config,
  children,
  initialSuggestions,
  voiceConfig,
  isListening,
  startListening,
  stopListening,
  isSpeechSupported,
  onMetadata,
}: ChatProviderProps) {
  const runtime = useChatRuntime(config)
  const hasUserMessages = runtime.messages.some((m) => m.role === "user")
  React.useEffect(() => {
    if (runtime.metadata) onMetadata?.(runtime.metadata)
  }, [runtime.metadata, onMetadata])
  const suggestions = useMemo(() => {
    if (runtime.followUpPrompts.length > 0) return runtime.followUpPrompts
    if (hasUserMessages) return []
    return initialSuggestions ?? config.starterSuggestions ?? []
  }, [
    runtime.followUpPrompts,
    hasUserMessages,
    initialSuggestions,
    config.starterSuggestions,
  ])

  const value = useMemo<ChatContextValue>(
    () => ({
      ...runtime,
      suggestions,
      voiceConfig,
      isListening,
      startListening,
      stopListening,
      isSpeechSupported,
    }),
    [
      runtime,
      suggestions,
      voiceConfig,
      isListening,
      startListening,
      stopListening,
      isSpeechSupported,
    ]
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChatContext(): ChatContextValue {
  const ctx = useContext(ChatContext)
  if (!ctx) {
    throw new Error("useChatContext must be used within ChatProvider")
  }
  return ctx
}
