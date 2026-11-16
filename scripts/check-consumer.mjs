import assert from "node:assert/strict"
import { createRequire } from "node:module"
const esm = await import("chatui")
const commonjs = createRequire(import.meta.url)("chatui")
const expected = ["Chat", "ChatProvider", "ChatService", "Chatbot", "FullChatbot", "Header", "PopupChatbot",
  "clearChatServiceMetadataCache", "useChatContext", "useChatRuntime", "useChatSessionStore",
  "useChatUIStore", "useChatVoice", "useMessageDisplay"]
for (const name of expected) {
  assert(name in esm, "Missing ESM public export: " + name)
  assert(name in commonjs, "Missing CommonJS public export: " + name)
}
console.log("ESM and CommonJS public exports passed.")
