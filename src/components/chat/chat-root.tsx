"use client"

import { ChatProvider } from "./context"
import type { ChatProviderProps } from "./context"

export function ChatRoot(props: ChatProviderProps) {
  return <ChatProvider {...props} />
}

ChatRoot.displayName = "Chat.Root"
