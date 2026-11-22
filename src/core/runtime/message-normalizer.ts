import type { ApiChatMessage } from "@/core/services/types"
import type { Message, ToolInvocation } from "./chat-state"

/** Converts transport history into the message shape rendered by the chat UI. */
export function apiMessagesToUiMessages(apiMessages: ApiChatMessage[]): Message[] {
  const ui: Message[] = []
  let i = 0
  const ts = "history"

  while (i < apiMessages.length) {
    const m = apiMessages[i]!
    if (m.type === "human") {
      ui.push({ id: `user-${i}-${m.run_id ?? ts}`, role: "user", content: m.content ?? "", runId: m.run_id, custom_data: m.custom_data })
      i += 1
      continue
    }
    if (m.type === "ai" || m.type === "tool") {
      const startIndex = i
      let content = ""
      const toolInvocations: ToolInvocation[] = []
      let firstRunId: string | undefined
      let customData: Record<string, unknown> | undefined
      while (i < apiMessages.length && apiMessages[i]!.type !== "human") {
        const msg = apiMessages[i]!
        if (msg.type === "ai") {
          if (msg.run_id && firstRunId === undefined) firstRunId = msg.run_id
          customData = msg.custom_data
          if (msg.content) content = msg.content
          for (const call of msg.tool_calls ?? []) toolInvocations.push({ state: "call", toolName: call.name, toolCallId: call.id, args: call.args })
        } else if (msg.type === "tool") {
          const name = msg.name ?? (msg.response_metadata as { name?: string })?.name ?? (msg.custom_data as { name?: string })?.name ?? "Tool"
          const result = typeof msg.content === "string" ? msg.content.replace(/\\n/g, "\n") : msg.content
          const index = msg.tool_call_id ? toolInvocations.findIndex((inv) => inv.state === "call" && inv.toolCallId === msg.tool_call_id) : -1
          const existing = index >= 0 ? toolInvocations[index] : undefined
          const resolved = name !== "Tool" ? name : existing?.toolName ?? name
          const invocation: ToolInvocation = { state: "result", toolName: resolved, toolCallId: msg.tool_call_id, result }
          if (index >= 0) toolInvocations[index] = invocation
          else toolInvocations.push(invocation)
        }
        i += 1
      }
      ui.push({ id: `assistant-${startIndex}-${firstRunId ?? ts}`, role: "assistant", content, runId: firstRunId, custom_data: customData, toolInvocations: toolInvocations.length ? toolInvocations : undefined })
      continue
    }
    i += 1
  }
  return ui
}
