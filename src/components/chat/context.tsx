/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useMemo, useState, useLayoutEffect, type ReactNode } from "react"
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
  emitEvent: (event: ChatEvent) => void
  suggestions: string[]
} & VoiceContextOverrides

import { emitChatEvent, type ChatEvent } from "@/core/services/interaction-types"
import { createStore, type StoreApi } from "zustand/vanilla"
import { useStore } from "zustand"
const ChatContext = createContext<StoreApi<ChatContextValue> | null>(null)

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
  const hasUserMessages = useMemo(
    () => runtime.messages.some((m) => m.role === "user"),
    [runtime.messages]
  )
  React.useEffect(() => {
    if (runtime.metadata) onMetadata?.(runtime.metadata)
  }, [runtime.metadata, onMetadata])
  const suggestions = useMemo(() => {
    if (runtime.isGenerating || runtime.historyLoading) return []
    if (runtime.followUpPrompts.length > 0) return runtime.followUpPrompts
    if (hasUserMessages) return []
    return initialSuggestions ?? config.starterSuggestions ?? []
  }, [
    runtime.followUpPrompts,
    runtime.isGenerating,
    runtime.historyLoading,
    hasUserMessages,
    initialSuggestions,
    config.starterSuggestions,
  ])

  const emitEvent = React.useCallback((event: ChatEvent) => emitChatEvent(config.onEvent, event), [config.onEvent])
  const value = useMemo<ChatContextValue>(
    () => ({
      ...runtime,
      emitEvent,
      suggestions,
      voiceConfig,
      isListening,
      startListening,
      stopListening,
      isSpeechSupported,
      setInput: runtime.setInput,
    }),
    [
      runtime,
      emitEvent,
      suggestions,
      voiceConfig,
      isListening,
      startListening,
      stopListening,
      isSpeechSupported,
    ]
  )

  const [store] = useState(() => createStore<ChatContextValue>(() => value))
  useLayoutEffect(() => { store.setState(value, true) }, [store, value])
  return <ChatContext.Provider value={store}>{children}</ChatContext.Provider>
}

export function useChatSelector<T>(selector: (value: ChatContextValue) => T): T {
  const ctx = useContext(ChatContext)
  if (!ctx) {
    throw new Error("useChatContext must be used within ChatProvider")
  }
  return useStore(ctx, selector)
}

export function useChatContext(): ChatContextValue {
  return useChatSelector(value => value)
}
