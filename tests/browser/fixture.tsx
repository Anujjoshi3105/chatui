import { createRoot } from "react-dom/client"
import { Profiler } from "react"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"
import { Chatbot } from "../../src/components/chatbot/chatbot"
import { PopupChatbot } from "../../src/components/chatbot/popupchatbot"
import "../../src/index.css"
import type { AttachmentAdapter } from "../../src/core/services/interaction-types"
const mode = new URLSearchParams(location.search).get("mode")
const params = new URLSearchParams(location.search)
const attachments: AttachmentAdapter = {
  accept: "text/plain", maxFiles: 2, maxBytes: 1024,
  upload: async (file, { signal, onProgress }) => {
    onProgress(10)
    const response = await fetch("/api/upload-fixture", { method: "POST", body: file, signal })
    if (!response.ok) throw new Error("File upload failed. Try sending again.")
    onProgress(100)
    return { id: "uploaded-file", name: file.name, contentType: file.type, size: file.size }
  },
  toAgentConfig: files => ({ attachments: files }),
}
const profile: { phase: string; duration: number }[] = []
Object.defineProperty(window, "__chatProfile", { value: profile })
const props = { url: "/api", agent: "test", userId: "browser-user", threadId: "history",
  attachments: params.has("attachments") ? attachments : undefined,
  stream: !params.has("noTokens"),
  starter: { message: "Welcome to chat", suggestions: ["Explain this topic", "Compare approaches", "Give an example"] }, header: { title: "Test assistant", allowMaximize: true } }
createRoot(document.getElementById("root")!).render(
  <Profiler id="chat" onRender={(_id, phase, duration) => profile.push({ phase, duration })}><MotionConfig reducedMotion="user"><LazyMotion features={domAnimation}>
    {mode === "popup" ? <PopupChatbot {...props} /> : <div style={{ height: "95dvh" }}><Chatbot {...props} /></div>}
  </LazyMotion></MotionConfig></Profiler>
)
