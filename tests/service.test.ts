import { afterEach, expect, it, vi } from "vitest"
import { ChatService, clearChatServiceMetadataCache } from "../src/core/services/chat-service"
const client = (apiKey = "a") => new ChatService({ baseUrl: "https://api.test", apiKey, defaultAgent: "test", defaultModel: "test" })
afterEach(() => { vi.unstubAllGlobals(); clearChatServiceMetadataCache() })
it("deduplicates metadata, isolates credentials, and retries failures", async () => {
  const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ agents: [] })))
  vi.stubGlobal("fetch", fetch)
  await Promise.all([client().getMetadata(), client().getMetadata()])
  expect(fetch).toHaveBeenCalledTimes(1)
  fetch.mockResolvedValueOnce(new Response(JSON.stringify({ agents: [] })))
  await client("b").getMetadata()
  expect(fetch).toHaveBeenCalledTimes(2)
  clearChatServiceMetadataCache()
  fetch.mockRejectedValueOnce(new Error("offline"))
  await expect(client().getMetadata()).rejects.toThrow()
  fetch.mockResolvedValueOnce(new Response(JSON.stringify({ agents: [] })))
  await expect(client().getMetadata()).resolves.toEqual({ agents: [] })
})
it("deduplicates in-flight history but never caches completed history", async () => {
  const fetch = vi.fn().mockImplementation(() => Promise.resolve(new Response('{"messages":[]}')))
  vi.stubGlobal("fetch", fetch)
  const service = client()
  await Promise.all([service.getHistory("thread", "user"), service.getHistory("thread", "user")])
  expect(fetch).toHaveBeenCalledTimes(1)
  await service.getHistory("thread", "user")
  expect(fetch).toHaveBeenCalledTimes(2)
})
it("aborts invoke and history on disposal", async () => {
  const signals: AbortSignal[] = []
  vi.stubGlobal("fetch", vi.fn((_url, options) => {
    signals.push(options.signal)
    return new Promise((_resolve, reject) => options.signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError"))))
  }))
  const service = client()
  const invoke = service.invoke("Hi").catch(() => {})
  const history = service.getHistory("thread", "user").catch(() => {})
  service.abortAll()
  await Promise.all([invoke, history])
  expect(signals.every(signal => signal.aborted)).toBe(true)
})

it("parses split CRLF events and the final event without a trailing separator", async () => {
  const encoder = new TextEncoder()
  const body = new ReadableStream({
    start(controller) {
      for (const part of ['data: {"type":"token","content":"Hel', 'lo"}\r\n', '\r\ndata:{"type":"token","content":" world"}']) controller.enqueue(encoder.encode(part))
      controller.close()
    },
  })
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(body)))
  const received = []
  for await (const event of client().stream("Hi", {})) received.push(event)
  expect(received).toEqual([{ type: "token", content: "Hello" }, { type: "token", content: " world" }, { type: "error", content: "The connection ended before the response completed." }])
})
