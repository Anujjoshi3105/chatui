export { ChatProvider, useChatContext } from "./context"
export type { ChatContextValue, ChatProviderProps, VoiceContextOverrides } from "./context"
export { ChatRoot } from "./chat-root"
export { ChatMessages } from "./chat-messages"
export { ChatInput } from "./chat-input"
export type { ChatInputProps } from "./chat-input"
export { ChatSuggestions } from "./chat-suggestions"

import { ChatRoot } from "./chat-root"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { ChatSuggestions } from "./chat-suggestions"

/** Compound Chat component: Root + Messages + Suggestions + Input in default layout. */
export const Chat = {
  Root: ChatRoot,
  Messages: ChatMessages,
  Input: ChatInput,
  Suggestions: ChatSuggestions,
}
