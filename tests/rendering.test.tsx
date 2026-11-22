import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { afterEach, expect, it, vi } from "vitest"
import MarkdownRenderer from "../src/components/ui/markdown-renderer"
import { MessageList } from "../src/components/ui/message-list"
import { LazyMotion, domAnimation } from "motion/react"
import { PromptSuggestions } from "../src/components/ui/prompt-suggestions"
import { OpenUIBlock } from "../src/components/openui"
import Feedback from "../src/components/ui/feedback"
const renders = vi.hoisted(() => new Map<string, number>())
vi.mock("../src/components/ui/chat-message", async importOriginal => {
  const original = await importOriginal<typeof import("../src/components/ui/chat-message")>()
  return { ...original, ChatMessage: (props: import("../src/components/ui/chat-message").ChatMessageProps) => {
    renders.set(props.id, (renders.get(props.id) ?? 0) + 1)
    return <original.ChatMessage {...props} />
  } }
})

afterEach(cleanup)

it("deduplicates suggestions, limits choices and prevents disabled sends", () => {
  const append = vi.fn()
  const view = render(<PromptSuggestions suggestions={[" First ", "First", "Second", "Third", "Fourth"]} append={append} />)
  expect(screen.getAllByRole("button")).toHaveLength(3)
  fireEvent.click(screen.getByRole("button", { name: "Ask: First" }))
  expect(append).toHaveBeenCalledWith({ role: "user", content: "First" })
  view.rerender(<PromptSuggestions disabled suggestions={["First"]} append={append} />)
  fireEvent.click(screen.getByRole("button"))
  expect(append).toHaveBeenCalledTimes(1)
})

it("renders OpenUI components, parses attributes and tolerates malformed lines", () => {
  const code = `
ProjectCard title="ChatUI Library" description="React chatbot library" tags="React,Tailwind" demo="https://demo.example.com" repo="https://github.com/anuj/chatui"
SkillGroup category="Backend" skills="Python,LangGraph,PostgreSQL"
Experience role="Full Stack Engineer" company="Tech Corp" period="2023-Present"
ContactAction type="email" label="Reach out" address="anuj@example.com"
UnknownComponent title="Should safely be ignored"
  `
  render(<OpenUIBlock code={code} />)
  expect(screen.getByText("ChatUI Library")).toBeTruthy()
  expect(screen.getByText("React chatbot library")).toBeTruthy()
  expect(screen.getByText("React")).toBeTruthy()
  expect(screen.getByText("Tailwind")).toBeTruthy()
  expect(screen.getByLabelText("Open ChatUI Library live demo").getAttribute("href")).toBe("https://demo.example.com")
  expect(screen.getByLabelText("View ChatUI Library repository").getAttribute("href")).toBe("https://github.com/anuj/chatui")
  expect(screen.getByText("Backend")).toBeTruthy()
  expect(screen.getByText("Python")).toBeTruthy()
  expect(screen.getByText("Full Stack Engineer")).toBeTruthy()
  expect(screen.getByText("Tech Corp")).toBeTruthy()
  expect(screen.getByText("Reach out")).toBeTruthy()
  expect(screen.queryByText("Should safely be ignored")).toBeNull()
})

it("retains feedback comment on a failed save and announces a successful retry", async () => {
  const save = vi.fn().mockRejectedValueOnce(new Error("offline")).mockResolvedValueOnce(undefined)
  render(<Feedback messageId="m" onRateResponse={save} />)
  fireEvent.click(screen.getByRole("button", { name: "Rate response" }))
  fireEvent.click(screen.getByRole("button", { name: "4 out of 5" }))
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "Keep my comment" } })
  fireEvent.click(screen.getByRole("button", { name: "Submit" }))
  await screen.findByRole("alert")
  expect((screen.getByRole("textbox") as HTMLTextAreaElement).value).toBe("Keep my comment")
  fireEvent.click(screen.getByRole("button", { name: "Retry" }))
  await screen.findByText("Feedback saved")
  expect(save).toHaveBeenLastCalledWith("m", .8, "Keep my comment")
})
it("retains markdown while stripping executable HTML and unsafe URLs", () => {
  const { container } = render(<MarkdownRenderer>{'# Heading\n\n**bold**\n\n<script>alert(1)</script><img src="x" onerror="alert(1)"><a href="javascript:alert(1)">unsafe</a>\n\n' + '`code`'}</MarkdownRenderer>)
  expect(screen.getByRole("heading").textContent).toBe("Heading")
  expect(container.querySelector("strong")?.textContent).toBe("bold")
  expect(container.querySelector("script")).toBeNull()
  expect(container.querySelector("[onerror]")).toBeNull()
  expect(container.querySelector('[href^="javascript:"]')).toBeNull()
})
it("updates a row's actions and tool result when message content has not changed", async () => {
  const options = vi.fn(() => ({ actions: <button>First action</button> }))
  const messages = [{ id: "m", role: "assistant", content: "Same content" }]
  const view = render(<LazyMotion features={domAnimation}><MessageList messages={messages} messageOptions={options} /></LazyMotion>)
  expect(screen.getByRole("button", { name: "First action" })).toBeTruthy()
  view.rerender(<LazyMotion features={domAnimation}><MessageList messages={messages} messageOptions={() => ({ actions: <button>Updated action</button> })} /></LazyMotion>)
  expect(screen.getByRole("button", { name: "Updated action" })).toBeTruthy()
  await waitFor(() => expect(screen.queryByRole("button", { name: "First action" })).toBeNull())
})

it("100-message token updates do not render the other 99 rows", () => {
  renders.clear()
  const messages = Array.from({ length: 100 }, (_, i) => ({ id: String(i), role: i % 2 ? "assistant" : "user", content: "Message " + i }))
  const view = render(<LazyMotion features={domAnimation}><MessageList messages={messages} /></LazyMotion>)
  for (let token = 0; token < 10; token++) {
    const next = [...messages]
    next[99] = { ...next[99], content: "Streaming token " + token }
    view.rerender(<LazyMotion features={domAnimation}><MessageList messages={next} /></LazyMotion>)
  }
  expect(renders.get("99")).toBe(11)
  expect([...renders].filter(([id]) => id !== "99").every(([, count]) => count === 1)).toBe(true)
})
