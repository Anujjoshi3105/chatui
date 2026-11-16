import { describe, it, expect, vi, afterEach } from "vitest"
import { chatRuntimeReducer as reduce, getInitialChatState } from "../src/core/runtime/chat-state"
import { apiMessagesToUiMessages } from "../src/core/runtime/message-normalizer"
import { createTokenBatcher } from "../src/core/runtime/token-batcher"
import { loadMessages, saveMessages, clearMessages } from "../src/core/persistence/storage-adapter"

afterEach(() => { vi.useRealTimers(); localStorage.clear() })
const initial = () => getInitialChatState({ url: "/api" }, null)
const start = () => reduce(initial(), { type: "START_SEND", payload: {
  userMessage: { id: "u", role: "user", content: "Hello" },
  assistantMessage: { id: "a", role: "assistant", content: "" },
} })

describe("runtime transitions", () => {
  it("updates only the active message and completes generation", () => {
    const before = start()
    const streamed = reduce(before, { type: "STREAM_TOKEN", payload: { messageId: "a", content: "Hi" } })
    expect(streamed.messages[0]).toBe(before.messages[0])
    expect(streamed.messages[1].content).toBe("Hi")
    expect(reduce(streamed, { type: "STREAM_END" }).isGenerating).toBe(false)
  })
  it("merges tool results and cancels pending tools", () => {
    let state = reduce(start(), { type: "STREAM_MESSAGE", payload: { messageId: "a", event: {
      type: "message", content: { type: "ai", content: "", tool_calls: [{ id: "t", name: "search", args: {} }] },
    } } })
    expect(reduce(state, { type: "CANCEL" }).messages[1].toolInvocations?.[0].state).toBe("result")
    state = reduce(state, { type: "STREAM_MESSAGE", payload: { messageId: "a", event: {
      type: "message", content: { type: "tool", content: "found", tool_call_id: "t" },
    } } })
    expect(state.messages[1].toolInvocations).toEqual([{ state: "result", toolName: "search", toolCallId: "t", result: "found" }])
  })
  it("exposes an error and clears all transient state", () => {
    const failed = reduce(start(), { type: "STREAM_ERROR", payload: { messageId: "a", error: "Offline" } })
    expect(failed.error).toBe("Offline")
    const cleared = reduce(failed, { type: "CLEAR_CHAT" })
    expect(cleared.messages).toEqual([])
    expect(cleared.isGenerating).toBe(false)
    expect(cleared.error).toBeNull()
  })
  it("normalization is deterministic, groups tools, and avoids duplicate run IDs", () => {
    const history = [
      { type: "human" as const, content: "Search", run_id: "run" },
      { type: "ai" as const, content: "", run_id: "run", tool_calls: [{ id: "t", name: "search", args: {} }] },
      { type: "tool" as const, content: "result", tool_call_id: "t" },
      { type: "ai" as const, content: "Answer", run_id: "run" },
    ]
    expect(apiMessagesToUiMessages(history)).toEqual(apiMessagesToUiMessages(history))
    const messages = apiMessagesToUiMessages(history)
    expect(messages).toHaveLength(2)
    expect(messages[0].id).not.toBe(messages[1].id)
    expect(messages[1].toolInvocations?.[0].state).toBe("result")
  })
  it("coalesces rapid tokens, flushes the final token, and discards disposed work", () => {
    vi.useFakeTimers()
    const commit = vi.fn()
    const batch = createTokenBatcher(commit)
    for (let i = 0; i < 100; i++) batch.push(String(i))
    expect(commit).not.toHaveBeenCalled()
    vi.advanceTimersByTime(32)
    expect(commit).toHaveBeenCalledExactlyOnceWith("99")
    batch.push("final"); batch.flush()
    expect(commit).toHaveBeenLastCalledWith("final")
    batch.push("stale"); batch.dispose(); vi.runAllTimers()
    expect(commit).toHaveBeenCalledTimes(2)
  })
})

describe("persistence", () => {
  const messages = [{ id: "a", role: "assistant", content: "Saved", rating: 4, toolInvocations: [{ state: "result", toolName: "search", result: "ok" }] }]
  it("migrates legacy arrays and round-trips versioned messages and feedback", () => {
    localStorage.setItem("legacy", JSON.stringify(messages))
    expect(loadMessages("legacy")).toEqual(messages)
    saveMessages("new", messages)
    expect(JSON.parse(localStorage.getItem("new")!).version).toBe(1)
    expect(loadMessages("new")).toEqual(messages)
    clearMessages("new"); expect(loadMessages("new")).toBeNull()
  })
  it.each(["{", '{"version":99,"messages":[]}', '[null]', '[{"id":"x","role":"system","content":"bad"}]', '[{"id":"x","role":"user","content":1}]'])("rejects invalid data %s", raw => {
    localStorage.setItem("bad", raw)
    expect(loadMessages("bad")).toBeNull()
  })
  it("survives storage denial and serialization failures", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("Denied") })
    vi.spyOn(console, "error").mockImplementation(() => {})
    expect(loadMessages("key")).toBeNull()
    expect(() => saveMessages("key", messages)).not.toThrow()
  })
})
