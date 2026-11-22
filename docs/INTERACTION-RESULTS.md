# Frontend interaction implementation results

Date: 27 September 2026. Scope: the existing frontend working tree, preserving prior optimization changes. No backend endpoint or deployment was changed.

## Phase delivery

| Phase | Delivered | Remaining boundary |
|---|---|---|
| 0: baseline | Existing full check run before editing; backend route/schema inventory; deterministic failure fixtures; task-based manual validation script below | No pre-change browser trace or screen-reader recording was captured in this request |
| 1: reliability | Explicit send acceptance, preserved drafts, message lifecycle states, partial-output retention, interrupted-stream detection, contextual metadata/history/feedback recovery, safe editable resend, clearer New chat behavior | Automatic/idempotent replay requires a backend contract |
| 2: accessibility/mobile | Native suggestion buttons, named/selected ratings, visible message actions, larger primary touch targets, scoped form/button resets, reduced motion, mobile padding, readable connection/progress states | Automated keyboard/viewport checks do not replace real mobile keyboards, contrast audit, and assistive-technology sessions |
| 3: guided interaction | Configurable purpose/starter prompts, prefill/send modes, deduplication and busy/draft guards, answer refinements, real activity labels, working demo entry points and controlled popup API | Portfolio-specific copy/destinations remain host configuration |
| 4: richer answers | Typed and validated cards/sources, inline tool summaries, message-specific follow-ups, editable resend as a new turn, New chat in history, local Markdown export | No server history rewriting, regenerate/branch, rename/pin, or public sharing was enabled without supporting contracts |
| 5: voice/files | Visible voice errors/interim transcripts, editable recognition, cancellation restoring the draft, capture cleanup, speech cancellation on conversation changes; optional upload adapter with validation/progress/cancel/failure retention, durable references, history rendering, and preview URL cleanup | Production uploads require a host adapter and a file-aware agent; hosted transcription requires an authenticated host callback; real speech/device coverage remains manual |
| 6: validation/release | Content-free optional analytics events, test coverage for failure paths, package/API checks, enforced bundle budgets, integration/migration documentation | Five representative user sessions and production outcome measurements cannot be performed by automated fixtures |

See [the interaction guide](INTERACTION-GUIDE.md) for exact props, defaults, payloads, and compatibility behavior. Unchecked items in [PLAN.md](../PLAN.md) remain explicit rather than being marked complete without evidence.

## Verified backend boundaries

Inspected `backend/src/service/router.py` and `backend/src/schema/schema.py` in the sibling backend:

- Supported: metadata, invoke/stream, feedback, history retrieval/list/search/deletion, voice transcription/synthesis routes.
- `UserInput.agent_config` is available for agent-specific configuration. It does not itself implement file upload or file access.
- No general upload route, idempotency key, branch/regenerate operation, or rename/pin API was found in those contracts.
- Structured UI metadata is an optional `custom_data` contract. Fixtures verify rendering; the frontend does not generate or claim authoritative source data.

Consequently, attachments default to off. The adapter explicitly maps uploaded file references into `agent_config`; server history must echo them through `custom_data.attachments`. The fixture upload endpoint exists only in mocked tests. Recovery uses an editable new turn instead of silently rerunning a request or mutating server history.

## Validation evidence

Before changes, `npm run check` passed on the existing working tree (24 tests plus build/package/bundle checks). After implementation, the full check passes with 32 unit tests. The added tests cover busy-send rejection, draft retention, partial output, history retry, attachment-adapter rejection, privacy of events, suggestion semantics, safe cards/sources, and feedback retry. Existing cancellation, stale response, persistence, rendering, and transport tests remain in place.

Commands:

```powershell
npm run check
npm run test:browser
npm run test:consumer
```

`npm run check` includes typecheck, lint, unit tests, app build, library build, consumer types/imports, and bundle budgets. The consumer fixture exercises both old exports and new interaction props/types.

Browser scenarios exercise production-built fixtures with mocked network responses. They cover popup/full-page interaction, settings/history focus, 100-message virtualization, denied storage, markdown/tools, attachment preview/send/restore, long paste, keyboard suggestions, partial failure, history retry, token-disabled responses, cards/sources, 320px/390px layouts, read-aloud/copy, microphone permission denial, remote feedback retry, metadata recovery, local export, and invalid/failed uploads. Additional touch, shortened-viewport, voice-cancel, and zoom checks are recorded in the generated browser results.

Final browser run: **19 passed, 0 failed, 0 skipped, 0 flaky**. Touch and voice-cancel checks passed. The zoom check verifies reflow at the effective CSS viewport corresponding to 200% desktop zoom; actual browser zoom remains manual. An earlier CSS `zoom: 2` check was corrected because it magnified the fixture's viewport-height container beyond the viewport, unlike browser zoom's reduction of CSS viewport dimensions.

Generated evidence (ignored build artifacts, regenerated by the commands above):

- `artifacts/browser-results.json`: scenario outcomes and attachments.
- `artifacts/browser-measurements.json`: paint, React update, and scroll measurements.
- `artifacts/chat-mobile-320.png`, `artifacts/chat-mobile-390.png`: inspected narrow-screen captures.
- `artifacts/chat-desktop.png`: full-page capture.
- `artifacts/bundle-sizes.json`: exact app/library sizes.
- `interaction-check.log`, `interaction-browser.log`: command output for this implementation.

The default package's text path still defers attachment, voice SDK, markdown, settings, and tool-detail code until needed. The current enforced budgets remain unchanged: app initial gzip <=134,616 bytes, largest initial app chunk <=434,968 bytes, full static ESM graph <=180,000 gzip bytes, and UMD <=275,000 gzip bytes. New features consume some of that headroom; there is no claim of a load-time improvement over the prior optimized version.

Recorded build sizes: app initial gzip 117,640 bytes; largest initial app chunk 370,856 bytes; full static ESM graph 159,033 gzip bytes; ESM entry 2,903 gzip bytes; UMD 262,270 gzip bytes. All existing gates passed. The pre-edit static ESM graph was 141,090 gzip bytes, so these features add 17,943 bytes to that graph.

Final local browser measurements: demo first-contentful paint 288ms; popup React update p95 9.5ms (maximum 61.5ms); 100-message scroll median frame 16.6ms, p95 22.8ms, maximum 36.5ms, with eight mounted virtual rows and no horizontal overflow. The frame outliers mean this run does not establish sustained 60fps, and local paint timings do not establish a mobile production target.

Timing from local mocked fixtures is diagnostic only. It is not a claim about real network/model latency, mobile hardware, production conversion, or accessibility certification. No before/after browser comparison is claimed.

## Manual acceptance runbook

Recruit five representative visitors and use the same three tasks without suggesting which control to click:

1. Find an answer or project relevant to a stated interest.
2. Ask for an example or a shorter explanation, then recover from an intentionally interrupted response.
3. Return to a prior conversation and export it or reach a configured contact/resource action.

For a portfolio host, configure actual project and contact destinations first. For the generic research demo, use a research question, an explanation refinement, and conversation recovery/export instead.

For each participant, record unassisted task completion, time to first useful action, missed controls, recovery success, and short observations. Do not substitute message count for task completion. Proposed qualitative target: at least four of five complete the starting task without help. Five participants are not a statistically significant conversion experiment.

Still required outside the automated environment:

- NVDA/VoiceOver review of streaming announcements, keyboard navigation, and nested dialog focus.
- Real iOS/Android keyboard, safe-area, rotation, zoom, and touch checks. A shortened browser viewport is only a simulation.
- Microphone permission/recording/transcription and read-aloud checks on the actual supported browsers/devices. Mocked recognition is not a speech-quality test.
- Light/dark contrast measurements and host-site embedding checks against the site's own CSS.
- Real upload/agent integration if attachments are enabled, including server-side limits, abandoned-file cleanup, and history references.
- Production outcome/latency collection through the optional host callback, if the host chooses to configure analytics.

## Release policy

Release the frontend improvements independently of unavailable backend extensions. Keep attachments off without a verified adapter; keep unsupported history mutations absent. Resolve any manual-test blockers before claiming full completion of the plan's user/device acceptance gates. No feature should be described as working end to end solely because its fixture succeeds.
