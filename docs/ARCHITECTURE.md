# Frontend Architecture

Status: implemented optimization architecture  
Scope: frontend React package and demo application  
Updated: 2026-09-27

## Entrypoints and builds

- `index.html -> src/entrypoints/app.tsx -> src/app/DemoPage.tsx` builds the demo into `dist-app/`.
- `src/lib.ts` is the only public package barrel, built into `dist/` as ESM and UMD, with a bundled `lib.d.ts`.
- `src/App.tsx` and `src/main.tsx` remain compatibility application entrypoints.
- The demo imports the popup component directly to avoid eager reachability through the composed-widget barrel.
- `vite --mode app` and `vite --mode lib` are explicit build modes. The legacy `BUILD_LIB=true` environment flag remains recognized.
- Browser fixtures use a separate `dist-browser/` output and React's production profiling build. They are never shipped in the package or deployed demo.

## Dependency direction

```text
Demo
  -> composed widgets (Chatbot, PopupChatbot, FullChatbot)
    -> Chat components and UI primitives
      -> ChatProvider selectors / useChatRuntime
        -> pure runtime reducer and message normalizer
        -> ChatService (HTTP/SSE, cache, cancellation)
        -> persistence adapter (versioning, validation, browser storage)
```

The reducer and normalizer have no React, DOM, storage or HTTP-client dependencies.
They use shared API event types from `core/services/types.ts`; concrete fetch
behavior stays in `ChatService`. Browser storage is accessed only through the
persistence adapter. The widget shell uses the adapter's guarded preference methods.

The public API comprises only exports from `src/lib.ts`. UI primitives and deep
module paths are internal. Legacy Zustand session/UI stores remain exported for
compatibility; the composed chatbot does not consume the duplicated session store.

## State ownership

| State | Owner |
| --- | --- |
| Messages, active thread, draft input, generation, follow-ups, errors, feedback | Runtime reducer and useChatRuntime actions |
| Agent/model configuration | Composed widget configuration, or runtime selection actions for direct hook consumers |
| Thread summaries and pagination | History feature; service deduplicates requests but does not cache completed history |
| Attachment draft | Input feature |
| Popup visibility | Popup component |
| Shared maximize/disclaimer/auto-speak preferences | Existing narrow UI store selectors, retained for compatibility |
| Active speech session and word position | Existing speech store and voice capability |
| Persisted conversation and preferences | Guarded persistence adapter |

`ChatProvider` bridges the runtime to a per-provider Zustand vanilla store.
Internal components use selectors and shallow equality. The public
`useChatContext()` still returns the full compatible context value.

## Lifecycle invariants

- A synchronous busy ref prevents double sends before React commits the loading state.
- Every operation belongs to a monotonically increasing revision. Cancel, clear,
  thread/agent change and unmount invalidate older completions.
- Cancellation aborts stream/invoke and history requests. Old finalizers cannot
  stop a newer stream or invoke its completion callback.
- History is restored before persistence is enabled and input submission resumes.
  Empty history clears the previous thread; failure falls back to validated local data.
- Tokens accumulate outside React and commit at most once per 32 ms, with a final flush.
  Tool events flush pending text before the reducer merges their result.
- Completed and pending tool invocations remain part of their assistant message.
  Cancellation marks pending tools as cancelled results.
- A failed feedback request rolls back the optimistic rating and exposes a safe error.
- Health checks stop scheduling after unmount.

## Persistence and transport

The persisted schema is `{ version: 1, messages: [...] }`. Legacy arrays and
legacy colon-separated thread keys are read and migrated on subsequent writes.
New namespace keys use a JSON tuple of URL, user and agent to avoid delimiter
collisions. Unknown versions, invalid roles/content/dates/tools and malformed
JSON are ignored.

Writes debounce for 250 ms; unchanged serialized payloads are not written again.
The last captured thread snapshot is flushed on cancellation, pagehide and unmount.
Quota/private-mode/storage errors leave the live runtime working in memory.

Metadata has a five-minute cache keyed by URL and API credential. Concurrent
requests share a promise; failures evict the promise; force refresh bypasses
completed cache data. History shares only in-flight requests and is discarded
after resolution or cancellation. User-safe runtime errors do not reveal server
response details.

Ordinary requests are limited to 30 seconds and streams to five minutes.
SSE parsing handles fragmented data, LF/CRLF separators and a final unterminated event.

## Rendering and optional capabilities

- The closed popup does not import the composed chatbot.
- Plain text bypasses the markdown parser. Markdown and its GFM/raw/sanitization
  plugins load when rich formatting appears. Sanitization removes executable HTML.
- Settings load on click; history loads when opened.
- Voice managers/SDK and audio recording load on listening/speaking intent.
  Support and available-voice discovery remain lightweight browser capability checks.
- File previews, audio visualization, speech controls and tool result views have
  dynamic import boundaries with local Suspense fallbacks.
- Motion uses `m` and `LazyMotion/domAnimation` on the core path. Rich link preview's
  animation module is reached only through the deferred markdown renderer.
- Memoized message rows receive immutable message references and stable action
  factories, so token changes do not rerender completed rows.
- Histories of 50 or more messages use measured-height virtualization with stable
  message keys and three rows of overscan. Padding is included in measured rows.
  A resize observer maintains the bottom anchor when rich content changes height.
- Virtualized rows can unmount without cancelling speech. Closing Chat.Root owns
  playback cleanup.

## Accessibility and style boundaries

Widget tokens and resets are scoped to `.chatbot-theme`; portaled primitives
carry that class. Demo preflight and demo-only utility scanning live in
`src/app/demo.css` and are excluded from the package CSS source scope.

The popup has a named dialog region, initial focus, keyboard scope, Escape close
and trigger focus return. Portaled settings/history/disclaimer dialogs use Radix
focus management. Streaming announces a busy status followed by completed content,
rather than announcing each token. Reduced motion is respected by MotionConfig
and scoped CSS. Code, tables, attachments and popup dimensions have overflow limits.

## Verification and release

`npm run check` runs typecheck, ESLint, Vitest, both builds, the published-style
NodeNext type consumer and application/library bundle budgets.
`npm run test:browser` builds production fixtures and demo and runs Chromium
interaction, responsive, storage-denial and optional-loading tests.

CI runs both commands and uploads traces, browser measurements and bundle analysis.
Generated directories are ignored and are no longer tracked. Release builds
recreate the package output; publishing/deployment is a separate action.

See [OPTIMIZATION-RESULTS.md](OPTIMIZATION-RESULTS.md) for exact budgets,
measurement limits and migration notes. No pre-change browser trace exists, so
only the recorded bundle recovery baseline supports before/after claims.

