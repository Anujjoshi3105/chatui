import { act, cleanup, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, expect, it, vi } from "vitest"
import { useChatRuntime } from "../src/core/runtime/use-chat-runtime"
import { ChatService } from "../src/core/services/chat-service"
import type { StreamEvent } from "../src/core/services/types"

const metadata = { agents: [{ key: "test", description: "Test" }], models: ["test"], default_agent: "test", default_model: "test" }
beforeEach(() => {
  localStorage.clear()
  vi.spyOn(ChatService.prototype, "getMetadata").mockResolvedValue(metadata)
  vi.spyOn(ChatService.prototype, "healthCheck").mockResolvedValue({ status: "ok" })
  vi.spyOn(ChatService.prototype, "getHistory").mockResolvedValue({ messages: [] })
})
afterEach(() => { cleanup(); vi.restoreAllMocks() })
const setup = () => renderHook(() => useChatRuntime({ url: "/api", agent: "test" }))

it("sends once, batches tokens, completes and retains stable action callbacks", async () => {
  const stream = vi.spyOn(ChatService.prototype, "stream").mockImplementation(async function* () {
    yield { type: "token", content: "Hello " }; yield { type: "token", content: "world" }
  })
  const { result } = setup()
  await waitFor(() => expect(result.current.metadata).toEqual(metadata))
  const send = result.current.sendMessage
  await act(async () => { await Promise.all([send("Hi"), send("duplicate")]) })
  expect(stream).toHaveBeenCalledTimes(1)
  expect(result.current.messages.map(m => m.content)).toEqual(["Hi", "Hello world"])
  expect(result.current.isGenerating).toBe(false)
  expect(result.current.sendMessage).toBe(send)
})

it("ignores a cancelled stream's finalizer while a newer stream is running", async () => {
  let release!: () => void
  const pending = new Promise<void>(resolve => { release = resolve })
  let calls = 0
  vi.spyOn(ChatService.prototype, "stream").mockImplementation(async function* (): AsyncGenerator<StreamEvent> {
    calls++
    if (calls === 1) { await pending; yield { type: "token", content: "stale" } }
    else { yield { type: "token", content: "new" }; await new Promise(() => {}) }
  })
  const { result } = setup()
  await waitFor(() => expect(result.current.metadata).toEqual(metadata))
  let first!: Promise<void>
  act(() => { first = result.current.sendMessage("one") })
  act(() => result.current.stopGeneration())
  act(() => { void result.current.sendMessage("two") })
  await act(async () => { release(); await first })
  expect(result.current.isGenerating).toBe(true)
  expect(result.current.messages.some(m => m.content === "stale")).toBe(false)
})

it("late history cannot replace a more recently selected thread", async () => {
  let release!: (v: { messages: [] }) => void
  vi.mocked(ChatService.prototype.getHistory).mockImplementation(tid => tid === "old"
    ? new Promise(resolve => { release = resolve }) : Promise.resolve({ messages: [{ type: "ai", content: "Newest" }] }))
  const { result } = setup()
  await waitFor(() => expect(result.current.metadata).toEqual(metadata))
  let old!: Promise<void>
  act(() => { old = result.current.loadThread("old", "user") })
  await act(async () => { await result.current.loadThread("new", "user") })
  await act(async () => { release({ messages: [] }); await old })
  expect(result.current.currentThreadId).toBe("new")
  expect(result.current.messages[0].content).toBe("Newest")
})

it("clearing aborts an invoke and its eventual result does not repopulate messages", async () => {
  let release!: (v: { type: "ai"; content: string }) => void
  vi.spyOn(ChatService.prototype, "invoke").mockImplementation(() => new Promise(resolve => { release = resolve }))
  const { result } = setup()
  await waitFor(() => expect(result.current.metadata).toEqual(metadata))
  let request!: Promise<void>
  act(() => { request = result.current.invoke("Hi") })
  act(() => result.current.clearChat())
  await act(async () => { release({ type: "ai", content: "late" }); await request })
  expect(result.current.messages).toEqual([])
  expect(result.current.isGenerating).toBe(false)
})

it("agent and model actions survive renders and control the next request", async () => {
  const invoke = vi.spyOn(ChatService.prototype, "invoke").mockResolvedValue({ type: "ai", content: "ok" })
  const { result } = setup()
  await waitFor(() => expect(result.current.metadata).toEqual(metadata))
  act(() => { result.current.setAgent("other"); result.current.setModel("custom") })
  await waitFor(() => expect(result.current.historyLoading).toBe(false))
  act(() => result.current.setInput("draft"))
  await act(async () => { await result.current.invoke("Hello") })
  expect(invoke).toHaveBeenCalledWith("Hello", expect.objectContaining({ agent: "other", model: "custom" }))
})

it("rejects busy submissions without clearing the draft and keeps partial answers on failure", async () => {
  let release!: () => void
  const pending = new Promise<void>(resolve => { release = resolve })
  vi.spyOn(ChatService.prototype, "stream").mockImplementation(async function* (): AsyncGenerator<StreamEvent> {
    yield { type: "token", content: "Useful partial answer" }
    await pending
    throw new Error("Disconnected")
  })
  const { result } = setup()
  await waitFor(() => expect(result.current.historyLoading).toBe(false))
  act(() => { expect(result.current.submitMessage("First").accepted).toBe(true) })
  act(() => result.current.setInput("Keep my next draft"))
  act(() => { expect(result.current.submitMessage("duplicate").accepted).toBe(false) })
  expect(result.current.input).toBe("Keep my next draft")
  await act(async () => { release() })
  await waitFor(() => expect(result.current.isGenerating).toBe(false))
  expect(result.current.messages.at(-1)).toMatchObject({ content: "Useful partial answer", status: "failed" })
  expect(result.current.messages.filter(m => m.role === "user")).toHaveLength(1)
})

it("retains the current conversation when another history request fails and can retry", async () => {
  const { result } = setup()
  await waitFor(() => expect(result.current.historyLoading).toBe(false))
  act(() => result.current.setMessages([{ id: "keep", role: "assistant", content: "Keep this answer" }]))
  vi.mocked(ChatService.prototype.getHistory).mockRejectedValueOnce(new Error("offline"))
  await act(async () => { await result.current.loadThread("unavailable", "user") })
  expect(result.current.messages[0].content).toBe("Keep this answer")
  expect(result.current.errorKind).toBe("history")
  vi.mocked(ChatService.prototype.getHistory).mockResolvedValue({ messages: [{ type: "ai", content: "Recovered" }] })
  await act(async () => { await result.current.retryError() })
  expect(result.current.messages[0].content).toBe("Recovered")
  expect(result.current.error).toBeNull()
})

it("starts a fresh thread while preserving the draft and prior saved conversation", async () => {
  const { result } = setup()
  await waitFor(() => expect(result.current.historyLoading).toBe(false))
  act(() => { result.current.setMessages([{ id: "old", role: "user", content: "Previous question" }]); result.current.setInput("Unsent draft") })
  const oldId = result.current.currentThreadId
  act(() => result.current.clearChat({ createNewThread: true }))
  expect(result.current.currentThreadId).not.toBe(oldId)
  expect(result.current.input).toBe("Unsent draft")
  expect(result.current.messages).toEqual([])
  expect(Object.values(localStorage).join(" ")).toContain("Previous question")
})

it("rejects an attachment mapping failure before accepting or losing the draft", async () => {
  const { result } = renderHook(() => useChatRuntime({ url: "/api", agent: "test", attachments: {
    accept: "text/plain", maxBytes: 1000, maxFiles: 1, upload: vi.fn(), toAgentConfig: () => { throw new Error("bad adapter") },
  } }))
  await waitFor(() => expect(result.current.historyLoading).toBe(false))
  act(() => result.current.setInput("Question"))
  act(() => expect(result.current.submitMessage("Question", [{ id: "file", name: "a.txt", contentType: "text/plain", size: 3 }]).accepted).toBe(false))
  expect(result.current.input).toBe("Question")
  expect(result.current.messages).toEqual([])
})

it("isolates analytics exceptions and emits no conversation content or identity", async () => {
  const onEvent = vi.fn(() => { throw new Error("host analytics down") })
  vi.spyOn(ChatService.prototype, "stream").mockImplementation(async function* () { yield { type: "token", content: "Private answer" } })
  const { result } = renderHook(() => useChatRuntime({ url: "/api", agent: "test", onEvent }))
  await waitFor(() => expect(result.current.historyLoading).toBe(false))
  await act(async () => { await result.current.sendMessage("Private prompt") })
  expect(result.current.messages.at(-1)?.status).toBe("complete")
  expect(onEvent.mock.calls.map(call => call[0])).toHaveLength(3)
  expect(JSON.stringify(onEvent.mock.calls)).not.toContain("Private")
})

it("queues messages when steering is requested and processes them sequentially upon completion", async () => {
  let releaseFirst!: () => void
  const firstPending = new Promise<void>(resolve => { releaseFirst = resolve })
  const executedPrompts: string[] = []

  vi.spyOn(ChatService.prototype, "stream").mockImplementation(async function* (_message, options): AsyncGenerator<StreamEvent> {
    executedPrompts.push(_message)
    if (_message === "Turn 1") {
      yield { type: "token", content: "Answer 1" }
      await firstPending
    } else {
      yield { type: "token", content: "Answer 2" }
    }
  })

  const { result } = renderHook(() => useChatRuntime({ url: "/api", agent: "test", steering: true }))
  await waitFor(() => expect(result.current.historyLoading).toBe(false))

  // Submit Turn 1
  act(() => {
    const res = result.current.submitMessage("Turn 1")
    expect(res.accepted).toBe(true)
    expect(res.queued).toBeUndefined()
  })
  expect(result.current.isGenerating).toBe(true)

  // Submit Turn 2 while Turn 1 is active (steering queue)
  act(() => {
    const res = result.current.submitMessage("Turn 2")
    expect(res.accepted).toBe(true)
    expect(res.queued).toBe(true)
  })
  expect(result.current.messageQueue).toHaveLength(1)
  expect(result.current.messageQueue[0].text).toBe("Turn 2")

  // Release Turn 1
  await act(async () => { releaseFirst() })
  await waitFor(() => expect(result.current.messageQueue).toHaveLength(0))
  await waitFor(() => expect(executedPrompts).toEqual(["Turn 1", "Turn 2"]))
})

it("force pass interrupts the active stream and sends the new message immediately", async () => {
  let releaseStale!: () => void
  const stalePending = new Promise<void>(resolve => { releaseStale = resolve })
  const executed: string[] = []

  vi.spyOn(ChatService.prototype, "stream").mockImplementation(async function* (msg, opts): AsyncGenerator<StreamEvent> {
    executed.push(msg)
    if (msg === "Slow prompt") {
      yield { type: "token", content: "Partial..." }
      await stalePending
    } else {
      yield { type: "token", content: "Urgent steer" }
    }
  })

  const { result } = renderHook(() => useChatRuntime({ url: "/api", agent: "test" }))
  await waitFor(() => expect(result.current.historyLoading).toBe(false))

  // Start slow prompt
  act(() => { result.current.submitMessage("Slow prompt") })
  expect(result.current.isGenerating).toBe(true)

  // Force pass
  act(() => {
    const res = result.current.forcePass("Urgent steer")
    expect(res.accepted).toBe(true)
  })

  await waitFor(() => expect(executed).toContain("Urgent steer"))
  releaseStale()
})
