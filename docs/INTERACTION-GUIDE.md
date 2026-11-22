# Interaction features and host contracts

The library keeps text chat usable without optional services. Existing `Chatbot`, `FullChatbot`, `PopupChatbot`, `Chat.Root`, and `sendMessage()` integrations remain supported. `sendMessage()` still returns `Promise<void>`; the new `submitMessage()` reports immediate acceptance for composers.

## Guided starts and controlled popup

```tsx
const [open, setOpen] = useState(false);

<PopupChatbot
  url="/api"
  agent="research-assistant"
  open={open}
  onOpenChange={setOpen}
  header={{ title: "Research assistant", show: true }}
  starter={{
    message: "Explore a topic, compare approaches, or ask for an explanation.",
    suggestions: ["Help me research a topic", "Compare two approaches"],
    suggestionMode: "prefill",
  }}
/>
```

`open`/`onOpenChange` are optional; `defaultOpen` continues to support uncontrolled use. A host can use `setOpen(true)` for its call to action. `suggestionMode` defaults to `send`; `prefill` lets the visitor edit a prompt first. Suggestions are trimmed, deduplicated, limited to three, and unavailable while restoring/generating or when a draft already exists.

Refinement actions draft an explicit question quoting the selected answer. “Edit and resend as a new message” creates a new turn after the user reviews and sends it. It does not rewrite server history or silently replay an action. The bundled backend has no branch, regenerate, or idempotent retry contract, so those operations are not advertised.

New chat preserves the chosen assistant/model and the unsent text draft. The previous conversation remains saved. History switching deliberately starts a separate draft; selected files and active recording are scoped to the current composer and cleared on a thread change.

## Attachments: off unless explicitly configured

The bundled backend accepts `agent_config`, but it has **no general file-upload route or built-in file consumption contract**. Do not enable attachments just because this field exists. Provide an `AttachmentAdapter` only when your host uploads files and its agent resolves their IDs.

```tsx
import type { AttachmentAdapter } from "chatui";

const attachments: AttachmentAdapter = {
  accept: "text/plain,.md,application/pdf",
  maxFiles: 3,
  maxBytes: 5 * 1024 * 1024,
  allowFileOnly: false,
  upload: hostUpload,             // (file, { signal, onProgress }) => Promise<AttachmentReference>
  toAgentConfig: files => ({ attachments: files }),
  discard: hostDiscardUpload,     // optional cleanup for uploaded files never sent
};

<Chatbot url="/api" agent="document-assistant" attachments={attachments} />
```

Keep the adapter instance stable, for example at module scope or with `useMemo`. Its reference shape is `{ id, name, contentType, size }`. `upload` must honor the AbortSignal, report percentage progress, and return durable IDs rather than file bodies or credentials. Implement `discard` and/or server expiry for abandoned uploads. The host owns authentication, limits enforcement, retention, and user-facing retention information; browser validation is an early usability check.

Files are validated before upload. A failed upload leaves the files and text selected. Completed uploads are reused when retrying the same selection. Sending places the adapter output in `agent_config`; only references are stored in local history. Server history must return the references in the human message's `custom_data.attachments` to restore their display across devices. Once a request is accepted, its references belong to the conversation and are not discarded when the composer clears.

The browser suite's `/api/upload-fixture` is a mocked test route, not a production backend endpoint. Without an adapter, file controls are hidden and pasted text remains editable text.

## Structured answers

An AI message can supply optional `custom_data`:

```json
{
  "type": "ai",
  "content": "Here is the relevant project and supporting reference.",
  "custom_data": {
    "cards": [{
      "type": "project",
      "title": "Example project",
      "description": "What the project does and why it is relevant.",
      "action": { "label": "View project", "url": "https://example.com/project" }
    }],
    "sources": [{
      "title": "Project documentation",
      "url": "https://example.com/docs",
      "excerpt": "Optional supporting context for this answer."
    }]
  }
}
```

Supported card types are `project`, `resource`, and `contact`. Unknown/malformed cards are ignored, while the normal answer text remains. Always include a readable `content` fallback. Links permit HTTP, HTTPS, and mailto URLs; executable and data URLs are rejected. Sources are associated with their answer, not invented by the client; the host must supply trustworthy source metadata. Cards and sources are rendered for both streamed AI messages and restored history.

## Voice

Native browser recognition is detected at runtime. Listening text, interim transcripts, permission failures, and cancellation are visible in the composer. Recognized text stays editable and is never automatically sent. Cancel voice restores the draft present before recording began.

For hosted transcription, pass `transcribeAudio: (blob: Blob) => Promise<string>` on a chatbot or `Chat.Input`. The bundled backend exposes `/voice/transcribe`; the host callback is responsible for constructing its authenticated upload request and handling that endpoint's configured limits. Supplying the callback enables the recording path on supported devices. Text input remains available when voice is unsupported. Real device/browser coverage is still necessary.

## Errors, feedback, and export

- Response failures preserve partial content and show an editable resend action. A stream that closes without the protocol's `[DONE]` marker is treated as interrupted.
- Metadata/history operations expose Retry; a failed history switch keeps the current conversation or a cached copy visible.
- Feedback waits for the server, retains the comment after failure, and labels device-only ratings when the answer has no run ID.
- Export conversation downloads a Markdown file locally, including readable cards, source URLs, attachment names, and interrupted/stopped markers. It does not publish a conversation.

## Optional analytics

`onEvent?: (event: ChatEvent) => void` is a host callback. No collector or network endpoint is built in. Events include `chat_opened` (popup), `send_accepted`, `first_content`, `response_completed`, `response_failed`, `response_stopped`, `suggestion_selected`, `feedback_saved`, `feedback_failed`, `card_action`, and `conversation_exported`.

Only event type and optional elapsed milliseconds are emitted. They omit prompts, answers, files, recordings, credentials, thread IDs, and user IDs. The host decides whether/how to collect these events. Throwing callbacks cannot break chat. Local-only ratings do not emit remote feedback success. Completion timing includes backend and network time; it is not a frontend-only latency claim.

## Compatibility notes

- Use `header={{ show: true }}`, not the old README's unsupported `showHeader` prop.
- Session persistence is automatically scoped by backend URL, user, agent, and thread. `storageKey` was not in the implemented `ChatbotProps`; it is not a supported new option.
- `stream={false}` disables token streaming on the stream endpoint. It does not select the invoke endpoint.
- `submitMessage(text, references?)` returns `{ accepted, reason? }`. It clears the runtime draft only after acceptance. Existing asynchronous `sendMessage()` and `invoke()` remain available.
- Scoped widget resets apply to chatbot content and portals. Importing the package does not reset the host document's body.
- No server history rewrite, rename, pin, cross-device memory, or public sharing endpoint was added. The existing backend does not provide those contracts.
