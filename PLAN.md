# Chatbot frontend improvement plan

Status: frontend implementation delivered across Phases 0-6; backend-dependent extensions and manual user/device validation remain explicitly gated. See [implementation results](docs/INTERACTION-RESULTS.md) and the [host integration guide](docs/INTERACTION-GUIDE.md).  
Reviewed: 27 September 2026.  
Scope: the React chatbot library, popup/full-page experiences, and demo in `frontend/`.

## Implementation boundary

Checked items are implemented in code or recorded in the results document. Unchecked items require real device/screen-reader/user sessions, host content, or an absent backend contract; they are not claimed complete. The attachment path is implemented and tested through an explicit host adapter, but the bundled backend has no general upload endpoint. Server-side branching, history rename/pin, and public sharing remain unavailable; editable resend creates a new turn without rewriting history.

## Goal and approach

Make it easier to start a useful conversation, understand what the assistant is doing, refine an answer, and recover when something goes wrong. Prioritize reliable interactions before adding more controls or animation.

This plan is based on source inspection of the current working tree, including existing uncommitted changes. It is not a live-browser usability evaluation. Visual quality, device behavior, and performance must be measured in Phase 0. The existing [optimization plan](docs/FRONTEND-OPTIMIZATION-PLAN.md) and [results](docs/OPTIMIZATION-RESULTS.md) cover completed architecture/performance work; preserve that foundation rather than repeating it.

The code currently presents a general-purpose assistant library and a research-assistant demo. Portfolio-specific examples below are optional host configuration, not a proposed hardcoded change to the library.

## What already exists

- Popup, maximized, and full-page chat layouts; agent/model selection.
- Streaming responses, typing indicators, Stop, markdown, and tool-result views.
- Starter suggestions and backend-provided follow-up prompts.
- Autosizing input, Enter/Shift+Enter handling, and IME composition protection.
- File selection, drag/drop, and local previews, but no complete attachment send path.
- Speech recognition, read-aloud, voice settings, and playback controls.
- Copy and response ratings; searchable, paginated history with date groups and deletion confirmation.
- Local conversation persistence, scroll-to-latest, virtualization from 50 displayed messages, lazy loading, reduced-motion configuration, and focus handling.
- Unit, browser, package-consumer, and bundle-budget checks.

## Source-backed priorities

Severity: 1 = cosmetic, 2 = minor friction, 3 = major task failure, 4 = core task blocked. These ratings describe affected journeys, not every chat session.

| Finding | Evidence | Impact / severity | First action |
|---|---|---|---|
| Attachments can appear ready without being transmitted | `src/components/chat/chat-input.tsx`: attachments are enabled; `ChatForm` passes files, but `handleSubmit` only calls `sendMessage(text)` | File-based questions cannot complete as represented; 4 | Hide attachment controls until transport capability exists |
| Long pasted text unexpectedly becomes a file | `src/components/ui/message-input.tsx`: paste over 500 characters becomes a `File` | A normal text question enters the unsupported attachment path; 3 | Keep pasted text editable; make conversion explicit and optional |
| Error recovery is incomplete | Runtime exposes `error`, but chat layout does not render it; history list requests have no catch UI; deletion errors are console-only | Metadata/history/feedback failures can leave users without a recovery path; 3 | Add contextual failure states and Retry |
| A stream failure replaces the partial answer | `src/core/runtime/chat-state.ts`: `STREAM_ERROR` overwrites message content | Useful output disappears after a connection failure; 3 | Preserve partial output and store failure separately |
| Suggestions are not native controls | `prompt-suggestions.tsx` attaches clicks to `Badge`, which renders a `span`; no busy/loading guard | Keyboard users cannot activate suggestions; busy clicks may be silently ignored; 3 | Render buttons and explain unavailable states |
| Message actions favor mouse discovery | `chat-message.tsx`: action bar uses opacity zero until hover/focus-within | Touch users may not discover copy, speech, or feedback; 2 | Provide a visible action menu on touch layouts |
| Feedback completion is ambiguous | `feedback.tsx` closes immediately; rating buttons lack individual accessible names; runtime can record only locally when no run ID exists | Users cannot reliably tell whether feedback was submitted; 3 | Label controls and show pending/saved/failed/local-only states |
| Voice progress and failures are not surfaced in the composer | Voice hook returns `interimTranscript` and `error`; `MessageInput` does not consume them | A silent microphone failure feels like a broken control; 3 | Show live transcript and actionable voice status |
| New-chat behavior needs clearer intent | Header uses refresh affordance; default handler clears chat and resets agent selection | Starting again can feel like a page reload or lost context; 2 | Name it “New chat” and define retention behavior |
| Demo entry points are incomplete | `src/app/DemoPage.tsx`: primary buttons lack actions, footer has placeholder links, version badge differs from package version | Visitors cannot follow the advertised path; 2 | Wire demo actions and use accurate product copy |

Provisional source-based usability score: **3/10**, not a measured satisfaction score. Starting at 10, deduct 2 each for unreliable core input, incomplete recovery, and inaccessible interaction controls, plus 1 for touch discovery. The other findings are grouped into these deductions to avoid double counting. Existing identity, composer visibility, history search, Stop, and loading indicators are strengths. Reaching a 9–10 heuristic score requires resolving all severity 3–4 issues, fixing touch discovery, and validating those journeys with users; shipping features alone does not establish that score.

## Delivery sequence

Estimates are planning ranges for one frontend developer with design/QA support, excluding backend delivery and time recruiting users. Re-estimate after Phase 0.

| Phase | Outcome | Priority | Estimate | Dependency |
|---|---|---|---|---|
| 0 | Reproducible UX baseline and feature contracts | P0 | 1–2 days | None |
| 1 | Trustworthy composer and recovery | P0 | 3–5 days | Phase 0 |
| 2 | Accessible, comfortable mobile interaction | P0 | 3–4 days | Phase 1 state model |
| 3 | Guided starts and useful follow-ups | P1 | 2–4 days | Phases 1–2 |
| 4 | Rich answers and conversation control | P1 | 4–6 days | Phases 1–3; some backend contracts |
| 5 | Complete voice and optional attachment flows | P2 | 4–6 frontend days | Phase 1 capability gating; upload support for attachments |
| 6 | Measured refinement and release | P1 | 2–3 days | Selected features complete |

Total indicative frontend effort: **19–30 working days**. Ship Phases 0–3 as the first useful release (9–15 days). Phases 4–5 can be feature-flagged independently; do not delay reliability/accessibility fixes for backend work. Apply the relevant Phase 6 release checks to each increment.

## Phase 0 — Establish the baseline

Owner: frontend maintainer, with product/design input.

- [ ] Record popup, maximized, and full-page journeys: first visit, first send, follow-up, Stop, history restore, service failure, rating, and voice permission denial.
- [ ] Capture desktop and narrow-screen screenshots, keyboard navigation, and a short screen-reader walkthrough. Include 320px and 390px viewports, 200% zoom, touch input, and the mobile keyboard.
- [ ] Extend the existing browser fixture with deterministic slow, offline, empty-metadata, failed-feedback, and mid-stream-disconnect scenarios.
- [x] Inventory capabilities the service actually supports: uploads, structured cards, sources, retry deduplication, conversation branching, and thread mutation. Mark unknowns as unsupported until verified.
- [x] Choose three representative tasks for usability checks. For a portfolio host: find a relevant project, understand technical experience, and find a contact route.
- [x] Record current checks and bundle measurements from this working tree; distinguish current results from historical results in `docs/OPTIMIZATION-RESULTS.md`.

Files: `tests/browser/fixture.tsx`, `tests/browser/chat.spec.ts`, `src/core/services/types.ts`, existing optimization documents.

Exit criteria: reproducible baseline, a capability/dependency checklist, and an agreed task set. No new UI should promise a capability without a working contract or documented fallback.

## Phase 1 — Make every interaction trustworthy

Owner: frontend; backend consultation for safe retry semantics.

- [x] Default attachments to unavailable. Add an explicit host capability/adapter before exposing picker, drop, or paste-as-file behavior. Keep ordinary pasted text in the textarea.
- [x] Make submission return an explicit accepted/rejected result. Clear the draft only when accepted; preserve it on validation, loading, or busy rejection. Prevent duplicate sends from Enter, clicks, and suggestions.
- [x] Represent message delivery independently from content: submitting, streaming, complete, stopped, and failed. Keep partial output after failure or Stop.
- [x] Render operation-specific errors for metadata, history restore/list/load-more/delete, message generation, and feedback. Preserve previous content during recovery; give each error a relevant Retry or edit action.
- [x] Distinguish service unavailability from an empty agent list. Add “Try connecting again” using metadata refetch, with loading and failure handling.
- [x] Retry the failed attempt without adding duplicate user bubbles. If the server may already have accepted it, require an idempotency contract or offer “Edit and resend” with clear behavior; do not silently replay tool actions.
- [x] Replace the ambiguous refresh label with “New chat.” Preserve the current agent/model by default, retain the previous conversation, and define what happens to an unsent draft.
- [x] Make rating submission await its result; retain comments on failure. Hide unsupported remote feedback or explicitly label local-only feedback when no server run ID exists.

Files: `components/chat/chat-input.tsx`, `components/ui/message-input.tsx`, `core/runtime/chat-state.ts`, `core/runtime/use-chat-runtime.ts`, `components/chatbot/chatbot.tsx`, `header.tsx`, `agent-selector.tsx`, `chat-history-sheet.tsx`, `components/ui/feedback.tsx` (all under `src/`).

Acceptance criteria:

- Pasting 1,000 characters preserves editable text and sends that exact text once.
- Unsupported attachments are never presented as sendable; selected files are never silently discarded.
- A disconnected stream retains partial content and shows a recovery action.
- Failed history and rating operations have visible feedback without losing current content or comments.
- Repeated submission while busy neither loses the draft nor creates duplicate requests.

## Phase 2 — Make the interface accessible and comfortable

Owner: frontend/design; QA verifies real assistive technology and devices.

- [x] Render prompt chips as native buttons with focus styles, wrapping text, and disabled/loading behavior. Keep only a small set visible at once.
- [x] Add accessible names and selected-state semantics to rating controls; group the rating choices appropriately and preserve a visible focus indicator.
- [x] Keep key message actions discoverable on touch. Use a visible “More actions” button when width is limited; retain desktop hover shortcuts.
- [x] Aim for 44×44 CSS-pixel touch targets for primary controls. This is a product comfort target; WCAG 2.2 AA minimum target sizing is 24×24 with defined exceptions, not a blanket 44px requirement. See [W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- [x] Add visible connection/loading/stopped/error text instead of relying on a colored dot or tooltip. Announce meaningful state changes without reading every streamed token; preserve the existing completion announcement. See [W3C status-message guidance](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).
- [ ] Verify focus returns correctly across popup, settings, history, tool popovers, confirmation dialogs, and maximization. Escape should close the topmost layer first.
- [ ] Test safe-area padding, dynamic viewport height, and composer visibility with a real mobile keyboard. Prevent horizontal overflow from suggestions, code, tables, and long URLs.
- [ ] Audit text contrast and reduced motion, including CSS pulse/bounce effects and launcher animations outside `ChatRoot`'s motion configuration.
- [x] Keep scroll position stable while reading older messages. Show “New response below” alongside the existing scroll-to-latest affordance where useful.

Files: `components/ui/prompt-suggestions.tsx`, `chat-message.tsx`, `feedback.tsx`, `message-input.tsx`, `components/chat/chat-messages.tsx`, `components/chatbot/header.tsx`, `popupchatbot.tsx`, `hooks/use-focus-scope.ts`, `hooks/use-auto-scroll.ts`, `index.css`.

Acceptance criteria: first prompt, suggestions, Stop, copy, feedback, history, and closing chat are usable by keyboard and touch; no composer obstruction at tested mobile sizes; screen-reader announcements are useful and non-repetitive. Record manual findings rather than treating automated accessibility checks as complete coverage.

## Phase 3 — Help people start and continue useful conversations

Owner: frontend/product; backend optional for dynamic recommendations.

- [x] Replace generic empty-state copy with a short purpose statement and 3–4 task-oriented starter cards, configurable by host and agent.
- [ ] For portfolio deployments, offer examples such as “Show relevant projects,” “Summarize experience,” and “How can I get in touch?” Only show actions backed by real content or configured destinations.
- [x] Allow suggestions to send a complete question or prefill an editable draft; make the distinction clear. Never overwrite an existing draft silently.
- [x] Improve existing follow-ups with deduplication, a three-item default limit, wrapping, and a stable location after the latest completed answer. Hide stale suggestions on a new request or conversation switch.
- [x] Offer contextual refinement actions such as “Make this shorter,” “Give an example,” or “Explain more.” Route them through normal chat input with explicit context; do not present frontend templates as model-generated recommendations.
- [x] Provide concise status labels driven by real events: “Preparing response,” “Searching sources” only during a search tool, and “Response stopped.” Do not invent progress percentages or expose internal reasoning as progress.
- [x] Fix demo navigation: “Try the chat” opens/focuses the widget, documentation points to actual documentation, and unsupported links/version claims are removed or corrected.
- [x] Enable token streaming in the demo when supported and verify both token-enabled and token-disabled modes. The current demo passes `stream={false}`; the runtime still uses the stream endpoint with token delivery disabled, so do not conflate that flag with an invoke endpoint switch.

Files: `components/chatbot/agent-selector.tsx`, `chatbot.tsx`, `components/chat/context.tsx`, `chat-suggestions.tsx`, `components/ui/prompt-suggestions.tsx`, `chat-message.tsx`, `src/app/DemoPage.tsx`.

Acceptance criteria: a first-time visitor understands the assistant's purpose and starts a relevant task without inventing a prompt; follow-ups stay relevant to the current conversation and cannot interrupt an active request accidentally; every demo call to action works.

## Phase 4 — Add richer answers and conversation control

Owner: frontend; backend required for authoritative structured data and history mutation.

- [x] Add a typed, optional response-card contract for project summaries, resources, and contact actions. Each card has a title, short description, optional metadata, and one primary action. Retain readable text when a client does not understand a card type.
- [x] Add source/citation rendering only when the backend supplies source metadata. Connect a source to the relevant answer section; validate link schemes and never fabricate references.
- [x] Present tool activity in plain language and summarize results inline. Keep technical payloads behind an optional details control; preserve the existing keyboard-operable result viewer.
- [x] Add “Ask a follow-up about this” to completed messages. Use message identity and explicit context so refinement still works after history restore.
- [ ] Add edit-last-question and regenerate only after agreeing on backend context semantics. Preserve the original answer or create an explicit branch; changing visible bubbles alone must not leave server history inconsistent.
- [ ] Improve history with clearer titles/previews and a working New chat action inside the sheet (`onNewChat` is currently declared but not consumed). Add rename/pin only with a persistence contract or clearly labeled device-local behavior.
- [x] Add local Markdown/text export with user-triggered download. Public sharing is a separate optional service feature, not implied by export.
- [x] Keep secondary actions in a compact menu so richer functionality does not crowd each answer.

Files: `core/services/types.ts`, `core/runtime/message-normalizer.ts`, `chat-state.ts`, `use-chat-runtime.ts`, `components/chat/chat-messages.tsx`, `components/ui/chat-message.tsx`, `tool-result.tsx`, `markdown-renderer.tsx`, `components/chatbot/chat-history-sheet.tsx`.

Acceptance criteria: unsupported response types fall back gracefully; source links correspond to backend data; every card works by touch and keyboard; export retains readable conversation order; edits/regeneration preserve consistent server and UI context. Keep dependent features disabled if these contracts are unavailable.

## Phase 5 — Finish voice and optional attachment workflows

Owner: frontend; backend owns transcription/upload contracts where needed.

Voice:

- [x] Display listening, interim transcript, transcribing, stopped, and permission/error states using the existing hook outputs.
- [x] Let users edit recognized text before sending. Keep Cancel/Stop visible and preserve the previous draft if recording is canceled or fails.
- [x] Surface actionable permission-denied, no-speech, device-unavailable, and unsupported-browser messages. Keep text input immediately available.
- [x] Consolidate ownership between composer voice state and context overrides so the microphone indicator and transcript always describe the same session.
- [ ] Verify read-aloud cancellation on message/thread/widget changes and retain explicit opt-in for automatic playback.

Attachments, only after a supported adapter exists:

- [ ] Agree on allowed file types, size/count limits, authentication, upload progress, attachment identifiers, cancellation, and cleanup with the backend.
- [x] Validate before uploading; show removable previews and per-file progress/failure/retry. Allow file-only messages only if the backend supports them.
- [x] Pass attachment IDs through the runtime/service to the request and preserve their display in restored history. Keep selected files on failed submission.
- [x] Dispose of preview object URLs, avoid persisting file bodies in local storage, and make retention behavior explicit in host configuration.

Files: `hooks/use-chat-voice.ts`, `lib/voice.sdk.ts`, `components/ui/message-input.tsx`, `file-preview.tsx`, `voice-settings.tsx`, `components/chat/chat-input.tsx`, `context.tsx`, `core/services/chat-service.ts`, `types.ts`, runtime and persistence modules.

Acceptance criteria: denied microphone access has an actionable visible state; final transcript is editable; canceled recording does not send; an attachment integration test verifies the outbound request and restored attachment, not merely its preview. Unsupported configurations remain usable as text chat.

## Phase 6 — Validate outcomes and release incrementally

Owner: frontend/QA; product reviews task outcomes.

- [x] Expose optional host analytics callbacks with a stable event schema. Useful events: chat opened, first accepted send, suggestion selected, first response content, completed/failed/stopped response, retry outcome, feedback outcome, and card action.
- [x] Do not emit prompts, answers, recordings, attachments, credentials, or user identifiers by default. Events should describe interaction outcomes; any analytics destination is host-configured.
- [ ] Measure task completion and recovery, not conversation length alone. More messages may indicate confusion.
- [ ] Run short task sessions with five representative users; record where they hesitate. Treat this as qualitative evidence, not statistically significant conversion testing.
- [x] Run relevant unit/browser coverage and the existing package/bundle release checks after implementation. Preserve lazy loading, scoped styles, virtualization, and public component compatibility.
- [x] Document new capability props, defaults, unsupported states, and migration requirements. Correct existing README examples against exported types, including stale `showHeader`/`storageKey` examples.

Proposed targets, to confirm after Phase 0:

| Outcome | Target / measurement |
|---|---|
| First useful interaction | At least 4 of 5 task participants start the intended task without assistance |
| Recoverable failure | Every scripted failure presents a relevant recovery action; no lost draft or partial answer |
| Input integrity | One accepted action produces one request; retries do not duplicate transcript entries |
| Local interaction feedback | Loading/pressed/listening acknowledgement within 100ms in the agreed test environment; measure separately from model latency |
| Response latency | Record send-to-first-content and send-to-completion separately; attribute frontend rendering separately from backend/network time |
| Accessibility | No unresolved critical keyboard/assistive-technology blockers in the defined journeys |
| Performance | Existing bundle gates pass; compare 100-message scroll/stream traces with the Phase 0 baseline |
| Task outcome | Track whether the visitor reaches the intended answer/resource/contact action; review failed journeys before adding features |

## Verification and release gates

Use existing test files rather than creating another test framework:

- `tests/runtime.test.ts` and `tests/runtime-hook.test.tsx`: send acceptance, partial failure, Stop, stale updates, thread changes, retry and branch semantics.
- `tests/service.test.ts`: capability contracts, feedback failures, attachment payloads, cancellation, deduplication where supported.
- `tests/rendering.test.tsx`: suggestions as buttons, visible error/retry states, labeled ratings, touch action menus, rich-content fallback.
- `tests/browser/chat.spec.ts`: long paste, rapid send, keyboard suggestions, failed/retried history, failed feedback, mobile composer, voice denial, and attachment send/restore once supported.

After code changes, run from `frontend/`:

```powershell
npm run check
npm run test:browser
```

Use targeted tests while implementing and the full gates for release. Browser dependencies must be available. A planning-only document change does not require rebuilding or running application tests.

For every phase, record evidence against its acceptance criteria, resolve applicable major findings, and preserve existing consumer APIs unless a migration is explicitly planned. Manual mobile and screen-reader verification remains necessary alongside automation.

## Defer until evidence supports it

- Animated avatars, decorative sound effects, and gamification.
- Automatic voice playback or surprise auto-open behavior.
- Public conversation sharing, cross-device memory, and proactive notifications without product/backend support.
- Image generation, arbitrary embedded executable content, and complex dashboards inside message bubbles.
- Broad architecture rewrites: the existing runtime, service, persistence, and rendering boundaries already support incremental improvements.

Start with **attachment capability gating, reliable paste/send behavior, partial-answer preservation, visible recovery, and keyboard-operable suggestions**. These remove concrete barriers and make later interactive features dependable.
