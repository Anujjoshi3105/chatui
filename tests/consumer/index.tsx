import { Chatbot, PopupChatbot, FullChatbot, Chat, ChatProvider, useChatContext,
  useChatRuntime, useChatVoice, useMessageDisplay, ChatService,
  clearChatServiceMetadataCache, useChatSessionStore, useChatUIStore,
  type ChatRuntimeConfig, type RuntimeMessage, type ChatEvent, type AttachmentAdapter } from "chatui"
const config: ChatRuntimeConfig = { url: "/api", userId: "consumer" }
const messages: RuntimeMessage[] = [{ id: "m", role: "assistant", content: "Hello" }]
export const consumer = <><Chatbot {...config} /><PopupChatbot {...config} /><FullChatbot {...config} />
  <ChatProvider config={config}><Chat.Messages /><Chat.Input /></ChatProvider></>
export const publicAPI = { useChatContext, useChatRuntime, useChatVoice, useMessageDisplay,
  ChatService, clearChatServiceMetadataCache, useChatSessionStore, useChatUIStore, messages }

const onEvent = (event: ChatEvent) => { void event.type }
const adapter: AttachmentAdapter = {
  accept: "text/plain", maxFiles: 1, maxBytes: 1024,
  upload: async file => ({ id: "host-file", name: file.name, size: file.size, contentType: file.type }),
  toAgentConfig: attachments => ({ attachments }),
}
export const enhancedConsumer = <PopupChatbot {...config} open={false} onOpenChange={() => {}}
  onEvent={onEvent} attachments={adapter} starter={{ suggestionMode: "prefill", suggestions: ["Ask a question"] }} />
