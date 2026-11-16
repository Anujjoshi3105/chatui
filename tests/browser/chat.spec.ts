import { test, expect } from "@playwright/test"

test("production demo loads without optional chatbot features", async ({ page }, info) => {
  const scripts: string[] = []
  page.on("request", request => { if (request.resourceType() === "script") scripts.push(request.url()) })
  await page.goto("http://127.0.0.1:4174")
  await expect(page.getByRole("heading", { name: "Modern Chat UI Voice Enabled" })).toBeVisible()
  await expect(page.getByRole("button", { name: "Open chat" })).toBeVisible()
  expect(scripts.some(url => /\/(chatbot-|markdown-renderer|setting-|voice.sdk|file-preview|tool-result)/.test(url))).toBe(false)
  const timing = await page.evaluate(() => performance.getEntriesByType("paint").map(e => ({ name: e.name, ms: e.startTime })))
  await info.attach("demo-paint", { body: JSON.stringify({ scripts, timing }, null, 2), contentType: "application/json" })
})

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("chatbot-consent", "true"))
  await page.route("**/api/**", async route => {
    const url = route.request().url()
    if (url.endsWith("/info")) return route.fulfill({ json: { agents: [{ key: "test", description: "Test" }], models: ["test"], default_agent: "test", default_model: "test" } })
    if (url.endsWith("/health")) return route.fulfill({ json: { status: "ok" } })
    if (url.includes("/history/threads")) return route.fulfill({ json: { threads: [{ thread_id: "history", preview: "Conversation" }], total: 1 } })
    if (url.includes("/history")) return route.fulfill({ json: { messages: [] } })
    if (url.endsWith("/stream")) return route.fulfill({ contentType: "text/event-stream", body: 'data: {"type":"token","content":"Hello from the assistant"}\n\ndata: [DONE]\n\n' })
    return route.fulfill({ json: {} })
  })
})

test("popup opens with keyboard; sends, opens settings/history, maximizes and closes", async ({ page }, info) => {
  const requests: string[] = []
  page.on("request", req => requests.push(req.url()))
  const errors: string[] = []
  page.on("pageerror", error => errors.push(error.message))
  await page.goto("/tests/browser/fixture.html?mode=popup")
  const open = page.getByRole("button", { name: "Open chat", exact: true })
  await open.focus(); await page.keyboard.press("Enter")
  const input = page.getByRole("textbox")
  await expect(input).toBeVisible()
  expect(requests.some(url => /\/(markdown-renderer|setting-|voice.sdk|audio-visualizer|file-preview|tool-result)/.test(url))).toBe(false)
  await input.fill("Hi"); await input.press("Enter")
  await expect(page.getByText("Hello from the assistant", { exact: true }).last()).toBeVisible()
  await page.getByRole("button", { name: "Settings", exact: true }).click()
  await expect(page.getByText("Configuration", { exact: true }).first()).toBeVisible()
  await page.keyboard.press("Escape")
  await page.getByRole("button", { name: "Chat history", exact: true }).click()
  await expect(page.getByText("Conversation", { exact: true })).toBeVisible()
  await page.keyboard.press("Escape")
  await page.getByRole("button", { name: "Maximize", exact: true }).click()
  await expect(page.getByRole("button", { name: "Minimize", exact: true })).toBeVisible()
  await page.getByRole("button", { name: "Close", exact: true }).click()
  await expect(open).toBeVisible()
  await expect(open).toBeFocused()
  expect(errors).toEqual([])
  await info.attach("network", { body: JSON.stringify(requests, null, 2), contentType: "application/json" })
  const profile = await page.evaluate(() => (window as unknown as { __chatProfile: unknown[] }).__chatProfile)
  await info.attach("react-profile", { body: JSON.stringify(profile, null, 2), contentType: "application/json" })
})

test("100-message history remains virtualized and responsive under reduced motion on mobile", async ({ page }, info) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.route("**/api/history?**", route => route.fulfill({ json: { messages: Array.from({ length: 100 }, (_, i) => ({
    type: i % 2 ? "ai" : "human", content: "History message " + i, run_id: String(i),
  })) } }))
  await page.goto("/tests/browser/fixture.html")
  await expect(page.getByText("History message 99", { exact: true }).last()).toBeVisible()
  expect(await page.locator("[data-index]").count()).toBeLessThan(30)
  const scrolling = page.locator(".overflow-y-auto").first()
  await scrolling.evaluate(el => { el.scrollTop = 0 })
  await expect(page.getByText("History message 0", { exact: true })).toBeVisible()
  await page.getByRole("button", { name: "Scroll to latest message" }).click()
  await expect(page.getByText("History message 99", { exact: true }).last()).toBeVisible()
  const metrics = await page.evaluate(() => ({
    paint: performance.getEntriesByType("paint").map(e => ({ name: e.name, ms: e.startTime })),
    overflow: document.documentElement.scrollWidth > innerWidth,
    mountedRows: document.querySelectorAll("[data-index]").length,
  }))
  expect(metrics.overflow).toBe(false)
  const frames = await scrolling.evaluate(async el => {
    const times: number[] = []
    let previous = performance.now()
    for (let i = 0; i < 60; i++) {
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
      const now = performance.now(); times.push(now - previous); previous = now
      el.scrollTop = (el.scrollHeight - el.clientHeight) * (i / 59)
    }
    times.sort((a, b) => a - b)
    return { p50FrameMs: times[30], p95FrameMs: times[57], maxFrameMs: times[59] }
  })
  await info.attach("scroll-frames", { body: JSON.stringify(frames, null, 2), contentType: "application/json" })
  await info.attach("performance", { body: JSON.stringify(metrics, null, 2), contentType: "application/json" })
})

test("storage denial leaves text chat usable", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException("Denied", "SecurityError") }
    Storage.prototype.setItem = () => { throw new DOMException("Denied", "SecurityError") }
  })
  await page.goto("/tests/browser/fixture.html")
  await page.getByRole("button", { name: "Accept & Continue" }).click()
  await page.getByRole("textbox").fill("Hello offline storage")
  await page.getByRole("textbox").press("Enter")
  await expect(page.getByText("Hello from the assistant", { exact: true }).last()).toBeVisible()
})

test("markdown and tool results stay usable in a virtual history and attachments preview on demand", async ({ page }) => {
  await page.route("**/api/history?**", route => route.fulfill({ json: { messages: [
    ...Array.from({ length: 100 }, (_, i) => ({ type: i % 2 ? "ai" : "human", content: "History message " + i })),
    { type: "human", content: "Run a tool" },
    { type: "ai", content: "", tool_calls: [{ id: "call", name: "search", args: {} }] },
    { type: "tool", content: "Tool result text", tool_call_id: "call" },
    { type: "ai", content: "## Answer\n\n`code sample`\n\n**Formatted content**" },
  ] } }))
  await page.goto("/tests/browser/fixture.html?attachments=1")
  await expect(page.getByRole("heading", { name: "Answer", exact: true })).toBeVisible()
  await page.getByRole("button", { name: "View search result" }).focus()
  await page.keyboard.press("Enter")
  await expect(page.getByText("Tool result text", { exact: true })).toBeVisible()
  await page.keyboard.press("Escape")
  const chooser = page.waitForEvent("filechooser")
  await page.getByRole("button", { name: "Attach a file" }).click()
  await (await chooser).setFiles({ name: "example.txt", mimeType: "text/plain", buffer: Buffer.from("Attachment preview") })
  await expect(page.getByText("example.txt", { exact: true })).toBeVisible()
})

test("long paste remains text, keyboard suggestions send once and unsupported attachments stay hidden", async ({ page }) => {
  const sent: string[] = []
  page.on("request", request => { if (request.url().endsWith("/stream")) sent.push(request.postDataJSON().message) })
  await page.goto("/tests/browser/fixture.html")
  await expect(page.getByRole("button", { name: "Attach a file" })).toHaveCount(0)
  const suggestion = page.getByRole("button", { name: "Ask: Explain this topic" })
  await suggestion.focus(); await page.keyboard.press("Enter")
  await expect(page.getByText("Hello from the assistant", { exact: true }).last()).toBeVisible()
  expect(sent).toEqual(["Explain this topic"])
  const input = page.getByRole("textbox", { name: "Write your prompt here" })
  const longText = "An important research question. ".repeat(40)
  const prevented = await input.evaluate((el, text) => {
    const data = new DataTransfer(); data.setData("text/plain", text)
    return !el.dispatchEvent(new ClipboardEvent("paste", { clipboardData: data, bubbles: true, cancelable: true }))
  }, longText)
  expect(prevented).toBe(false)
  // Synthetic paste has no browser default insertion; fill verifies the preserved text submission.
  await input.fill(longText); await input.press("Enter")
  await expect.poll(() => sent.length).toBe(2)
  expect(sent[1]).toBe(longText.trim())
})

test("partial stream failure preserves output and allows editable recovery without automatic replay", async ({ page }) => {
  let requests = 0
  await page.route("**/api/test/stream", route => {
    requests++
    return route.fulfill({ contentType: "text/event-stream", body: 'data: {"type":"token","content":"Useful partial answer"}\n\ndata: {"type":"error","content":"offline"}\n\n' })
  })
  await page.goto("/tests/browser/fixture.html")
  await page.getByRole("textbox").fill("Keep this question"); await page.getByRole("textbox").press("Enter")
  await expect(page.getByText("Useful partial answer", { exact: true }).last()).toBeVisible()
  await expect(page.getByRole("alert")).toContainText("Unable to complete")
  await page.getByRole("button", { name: "More message actions" }).last().click()
  await page.getByRole("menuitem", { name: "Edit and resend as a new message" }).click()
  await expect(page.getByRole("textbox")).toHaveValue("Keep this question")
  expect(requests).toBe(1)
})

test("history failure has a working retry and New chat retains the selected agent", async ({ page }) => {
  let failed = true
  await page.route("**/api/history/threads", route => failed ? route.fulfill({ status: 503, body: "offline" })
    : route.fulfill({ json: { threads: [{ thread_id: "saved", preview: "Recovered conversation" }], total: 1 } }))
  await page.goto("/tests/browser/fixture.html")
  await page.getByRole("textbox").fill("Unsent draft")
  await page.getByRole("button", { name: "Chat history", exact: true }).click()
  await expect(page.getByRole("alert")).toContainText("Could not load conversations")
  failed = false
  await page.getByRole("button", { name: "Retry conversations" }).click()
  await expect(page.getByText("Recovered conversation")).toBeVisible()
  await page.getByRole("button", { name: "New chat", exact: true }).last().click()
  await expect(page.getByRole("textbox", { name: "Write your prompt here" })).toHaveValue("Unsent draft")
})

test("attachments reach the outbound contract and render again from history", async ({ page }) => {
  let payload: { agent_config?: { attachments: unknown[] } } | undefined
  page.on("request", request => { if (request.url().endsWith("/stream")) payload = request.postDataJSON() })
  await page.goto("/tests/browser/fixture.html?attachments=1")
  const chooser = page.waitForEvent("filechooser")
  await page.getByRole("button", { name: "Attach a file" }).click()
  await (await chooser).setFiles({ name: "example.txt", mimeType: "text/plain", buffer: Buffer.from("Attachment content") })
  await page.getByRole("textbox").fill("Read this file")
  await page.getByRole("button", { name: "Send message" }).click()
  await expect(page.getByText("Hello from the assistant", { exact: true }).last()).toBeVisible()
  expect(payload?.agent_config?.attachments).toEqual([{ id: "uploaded-file", name: "example.txt", contentType: "text/plain", size: 18 }])
  await page.route("**/api/history?**", route => route.fulfill({ json: { messages: [
    { type: "human", content: "Read this file", custom_data: { attachments: payload?.agent_config?.attachments } },
    { type: "ai", content: "File answer" },
  ] } }))
  await page.reload()
  await expect(page.getByText("Attachment: example.txt")).toBeVisible()
})

test("token-disabled requests render the complete message and rich sources", async ({ page }) => {
  await page.route("**/api/test/stream", route => {
    expect(route.request().postDataJSON().stream_tokens).toBe(false)
    return route.fulfill({ contentType: "text/event-stream", body: `data: ${JSON.stringify({ type: "message", content: { type: "ai", content: "Complete answer", custom_data: {
      cards: [{ type: "project", title: "Featured project", description: "Project details", action: { label: "Visit project", url: "https://example.com/project" } }],
      sources: [{ title: "Reference", url: "https://example.com/reference" }],
    } } })}\n\ndata: [DONE]\n\n` })
  })
  await page.goto("/tests/browser/fixture.html?noTokens=1")
  await page.getByRole("textbox").fill("Show a project"); await page.getByRole("textbox").press("Enter")
  await expect(page.getByRole("heading", { name: "Featured project" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Visit project" })).toHaveAttribute("href", "https://example.com/project")
  await page.getByText("Sources for this answer (1)").click()
  await expect(page.getByRole("link", { name: "Reference" })).toBeVisible()
})

test("320px and 390px mobile layouts retain a visible composer and usable actions", async ({ page }, info) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 740 })
    await page.goto("/tests/browser/fixture.html?mode=popup")
    await page.getByRole("button", { name: "Open chat" }).click()
    const input = page.getByRole("textbox")
    await expect(input).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await input.fill("Hello"); await input.press("Enter")
    await expect(page.getByRole("button", { name: "More message actions" }).last()).toBeVisible()
    await page.screenshot({ path: `artifacts/chat-mobile-${width}.png` })
    await info.attach(`mobile-${width}`, { path: `artifacts/chat-mobile-${width}.png`, contentType: "image/png" })
  }
})

test("speech loads on intent and copy remains usable", async ({ page }) => {
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"])
  await page.addInitScript(() => {
    const spoken: string[] = []
    Object.defineProperty(window, "__spoken", { value: spoken })
    const synthesis = Object.assign(new EventTarget(), {
      getVoices: () => [], cancel: () => {}, pause: () => {}, resume: () => {},
      speak: (utterance: SpeechSynthesisUtterance) => {
        spoken.push(utterance.text)
        utterance.onstart?.(new Event("start") as SpeechSynthesisEvent)
      },
    })
    Object.defineProperty(window, "speechSynthesis", { value: synthesis })
  })
  await page.goto("/tests/browser/fixture.html")
  await page.getByRole("button", { name: "Listen to message" }).focus()
  await page.keyboard.press("Enter")
  await expect.poll(() => page.evaluate(() => (window as unknown as { __spoken: string[] }).__spoken)).toEqual(["Welcome to chat"])
  await expect(page.getByRole("button", { name: "Stop speaking" })).toBeVisible()
  await page.getByRole("button", { name: "Copy to clipboard" }).focus()
  await page.keyboard.press("Enter")
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe("Welcome to chat")
})

test("microphone permission denial is visible and text input remains usable", async ({ page }) => {
  await page.addInitScript(() => {
    class Recognition {
      onerror?: (event: { error: string }) => void
      start() { queueMicrotask(() => this.onerror?.({ error: "not-allowed" })) }
      stop() {}
      abort() {}
    }
    Object.defineProperty(window, "SpeechRecognition", { value: Recognition })
  })
  await page.goto("/tests/browser/fixture.html")
  await page.getByRole("button", { name: "Voice input", exact: true }).click()
  await expect(page.getByRole("alert")).toContainText(/permission|denied/i)
  await page.getByRole("textbox").fill("Typed after denial")
  await page.getByRole("button", { name: "Send message" }).click()
  await expect(page.getByText("Hello from the assistant", { exact: true }).last()).toBeVisible()
})

test("remote feedback failure keeps the comment and retries successfully", async ({ page }) => {
  await page.route("**/api/history?**", route => route.fulfill({ json: { messages: [
    { type: "human", content: "A question" }, { type: "ai", content: "An answer", run_id: "rating-run" },
  ] } }))
  let failed = true
  await page.route("**/api/feedback", route => failed ? route.fulfill({ status: 503, body: "offline" }) : route.fulfill({ json: { status: "ok" } }))
  await page.goto("/tests/browser/fixture.html")
  await page.getByRole("button", { name: "Rate response" }).click()
  await page.getByRole("button", { name: "4 out of 5" }).click()
  await page.getByRole("textbox", { name: "Comment", exact: true }).fill("Keep this comment")
  await page.getByRole("button", { name: "Submit", exact: true }).click()
  await expect(page.getByRole("alert")).toContainText("Could not save feedback")
  await expect(page.getByRole("textbox", { name: "Comment", exact: true })).toHaveValue("Keep this comment")
  failed = false
  await page.getByRole("button", { name: "Retry", exact: true }).click()
  await expect(page.getByText("Feedback saved", { exact: true })).toBeVisible()
})

test("metadata failure retries and export produces a local download", async ({ page }) => {
  let failed = true
  await page.route("**/api/info", route => failed ? route.fulfill({ status: 503, body: "offline" }) : route.fulfill({ json: {
    agents: [{ key: "test", description: "Test" }], models: ["test"], default_agent: "test", default_model: "test",
  } }))
  await page.goto("/tests/browser/fixture.html")
  await expect(page.getByRole("alert")).toContainText("Could not connect")
  failed = false
  await page.getByRole("button", { name: "Try connecting again" }).click()
  await expect(page.getByRole("alert")).toHaveCount(0)
  await page.getByRole("textbox").fill("Export this conversation"); await page.getByRole("textbox").press("Enter")
  await expect(page.getByText("Hello from the assistant", { exact: true }).last()).toBeVisible()
  const download = page.waitForEvent("download")
  await page.getByRole("button", { name: "Export conversation" }).click()
  expect((await download).suggestedFilename()).toBe("conversation.md")
})

test("upload failure retains selected files and validates size before contacting the server", async ({ page }) => {
  let uploads = 0
  await page.route("**/api/upload-fixture", route => { uploads++; return route.fulfill({ status: 503, body: "offline" }) })
  await page.goto("/tests/browser/fixture.html?attachments=1")
  const chooser = page.waitForEvent("filechooser")
  await page.getByRole("button", { name: "Attach a file" }).click()
  await (await chooser).setFiles({ name: "large.txt", mimeType: "text/plain", buffer: Buffer.alloc(2048) })
  await page.getByRole("textbox").fill("Read this")
  await page.getByRole("button", { name: "Send message" }).click()
  await expect(page.getByRole("alert")).toContainText("maximum size")
  expect(uploads).toBe(0)
  await page.getByRole("button", { name: "Remove attachment" }).click()
  const next = page.waitForEvent("filechooser")
  await page.getByRole("button", { name: "Attach a file" }).click()
  await (await next).setFiles({ name: "small.txt", mimeType: "text/plain", buffer: Buffer.from("test") })
  await page.getByRole("button", { name: "Send message" }).click()
  await expect(page.getByRole("alert")).toContainText("File upload failed")
  await expect(page.getByText("small.txt", { exact: true })).toBeVisible()
  await expect(page.getByRole("textbox")).toHaveValue("Read this")
  expect(uploads).toBe(1)
})

test("canceling voice restores the draft and never submits a request", async ({ page }) => {
  let sends = 0
  page.on("request", request => { if (request.url().endsWith("/stream")) sends++ })
  await page.addInitScript(() => {
    class Recognition {
      onstart?: () => void
      onend?: () => void
      onresult?: (event: unknown) => void
      start() {
        this.onstart?.()
        const result = Object.assign([{ transcript: "spoken words" }], { isFinal: true })
        this.onresult?.({ resultIndex: 0, results: [result] })
      }
      stop() { this.onend?.() }
      abort() { this.onend?.() }
    }
    Object.defineProperty(window, "SpeechRecognition", { value: Recognition })
  })
  await page.goto("/tests/browser/fixture.html")
  await page.getByRole("textbox").fill("Original draft")
  await page.getByRole("button", { name: "Voice input", exact: true }).click()
  await expect(page.getByRole("textbox")).toHaveValue("Original draft spoken words")
  await page.getByRole("button", { name: "Cancel voice" }).click()
  await expect(page.getByRole("textbox")).toHaveValue("Original draft")
  expect(sends).toBe(0)
})

test.describe("touch input", () => {
  test.use({ hasTouch: true, isMobile: true, viewport: { width: 320, height: 740 } })
  test("controls remain visible with touch targets and a shortened viewport", async ({ page }) => {
    await page.goto("/tests/browser/fixture.html?mode=popup")
    await page.getByRole("button", { name: "Open chat" }).tap()
    const header = page.locator(".chat-header")
    expect(await header.evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true)
    await page.setViewportSize({ width: 320, height: 460 })
    await page.getByRole("textbox").fill("Touch question")
    const send = page.getByRole("button", { name: "Send message" })
    await expect(send).toBeInViewport()
    const bounds = await send.boundingBox()
    expect(bounds!.width).toBeGreaterThanOrEqual(44)
    expect(bounds!.height).toBeGreaterThanOrEqual(44)
    await send.tap()
    await expect(page.getByText("Hello from the assistant", { exact: true }).last()).toBeVisible()
    await page.getByRole("button", { name: "More message actions" }).last().tap()
    await expect(page.getByRole("menuitem", { name: "Give an example" })).toBeVisible()
  })
})

test("desktop and equivalent 200 percent zoom reflow preserve the composer", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 1000 })
  await page.goto("/tests/browser/fixture.html")
  await expect(page.getByRole("textbox")).toBeVisible()
  await page.screenshot({ path: "artifacts/chat-desktop.png", animations: "disabled" })
  // Browser zoom reduces the effective CSS viewport. CSS `zoom: 2` instead
  // magnifies the host's 95dvh slot beyond the viewport and is not equivalent.
  // This checks reflow; actual browser zoom remains in the manual runbook.
  await page.setViewportSize({ width: 640, height: 500 })
  await expect(page.getByRole("textbox")).toBeInViewport()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
