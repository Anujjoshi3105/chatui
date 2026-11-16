# Frontend optimization results

Implemented 2026-09-27. The original plan's code work spans phases 0–7.

Final validation passed: 24 unit/component/hook tests, six browser scenarios,
typecheck, lint, application and library builds, NodeNext declarations,
ESM/CommonJS runtime consumers, and application/library bundle budgets.

## Baseline and measurement limits

The earliest recorded application build in this session produced a 543.71 kB
initial JavaScript chunk (168.27 kB gzip). The library build produced a
170.86 kB ESM entry (45.37 kB gzip) and an 847.43 kB UMD file
(252.22 kB gzip). Those measurements followed the earlier partial changes;
they are a recovery baseline, not an untouched pre-project baseline.

No pre-change browser trace exists. Timing improvements or a before/after
mobile FCP regression comparison therefore cannot be established retrospectively.
The browser suite now captures production paint timings, React profiling commits,
60 animation-frame scroll samples, mounted row counts, and interaction traces.
Tests use local Chromium and mocked APIs; they do not establish real-device
mobile performance or production-backend latency.

## Changes and evidence

Latest local measurements (Chromium; mocked API; no network/CPU throttling):

| Metric | Recorded baseline | After |
| --- | ---: | ---: |
| Largest initial demo JS chunk | 543.71 kB | 369.19 kB (32% smaller) |
| Initial demo JS gzip, Vite report | 168.27 kB | 118.35 kB (30% smaller) |
| Library static ESM graph, Node gzip | Not recorded | 141.09 kB |
| Demo FCP | Not recorded | 208 ms |
| Popup interaction React updates, p95 | Not recorded | 8.4 ms |
| Popup interaction React updates, maximum | Not recorded | 62.2 ms |
| 100-message scroll frame, p50 / p95 | Not recorded | 16.5 / 30.6 ms |
| Mounted rows at bottom of 100-message history | Not recorded | 10 |
| Unchanged rows rerendered during 10 token commits | Not recorded | 0 of 99 |

The scroll test rapidly sweeps the full history in 60 animation frames. Its
median is near 60 fps, but the 30.6 ms p95 does **not** establish a steady 60 fps.
Likewise, the full popup scenario includes a 62.2 ms maximum React update despite
its 8.4 ms p95. These are measured limits, not blanket sub-16-ms claims.
Mid-tier real-device FCP/TTI and a pre-change timing comparison remain unverified.

| Phase | Implementation | Verification |
| --- | --- | --- |
| 0 | Independent install/typecheck/lint/build commands, separate analysis reports, generated output policy | Build logs; artifacts/app-stats.html and lib-stats.html |
| 1 | HTML app entry, explicit app/lib modes, independent output directories, bundled package declarations, stable demo identity | Production demo and NodeNext package consumer fixture |
| 2 | Runtime owns send/invoke/cancel/clear/thread restoration; deterministic pure history normalization; selector subscriptions | Reducer, normalizer and hook tests |
| 3 | Popup defers chatbot; plain text bypasses markdown; settings/history load on interaction; voice SDK and recorder initialize on intent; preview/audio/tools split | Browser network assertion plus manifest-based initial-load gate |
| 4 | Message-boundary memoization, stable callbacks, 32 ms token batching, measured variable-height virtualization at 50 rows, resize-aware bottom scroll | 100-message row-render test, browser history/markdown/tool/copy/speech scenarios, React profile |
| 5 | Versioned and validated storage with legacy migration, 250 ms write debounce, final/pagehide flush, credential-isolated metadata cache, in-flight history deduplication, aborts and stale-result guards, bounded requests | Storage-denial browser test and pure/hook/service failure tests |
| 6 | Scoped widget tokens/reset, separate demo preflight, reduced motion, dialog focus handling, named controls, polite completion announcements, keyboard tool expansion, overflow protection | Popup/maximized/full-page/mobile keyboard and responsive scenarios |
| 7 | Real test runner, browser suite, package type consumer, application/library budgets and CI artifact upload | npm run check and npm run test:browser |

## Reproducing results

Run from the frontend Git repository:

1. `npm ci`
2. `npm run check`
3. `npx playwright install chromium`
4. `npm run test:browser`
5. `npm run analyze && npm run analyze:lib`

`artifacts/bundle-sizes.json` records exact byte counts, including the complete
static ESM dependency graph. Do not compare only the small package barrel:
shared chunks count toward the library's initial cost. UMD remains a single
compatibility bundle and cannot defer imports at runtime.

`artifacts/browser-results.json` contains scenario results and attachments.
`artifacts/browser-measurements.json` summarizes paint, scroll and React timings.
The browser fixture uses React's production profiling build; the demo uses the
ordinary production build. Browser traces are retained under `test-results/`.

App budgets enforce <=134,616 initial gzip bytes and <=434,968 bytes in the
largest initial chunk, at least 20% below the recorded recovery baseline.
Library budgets enforce <=60,000 ESM-entry gzip bytes, <=180,000 gzip bytes across
all static ESM dependencies, and <=275,000 UMD gzip bytes.

## Compatibility and release notes

- All existing public exports are retained. `historyLoading` is an additive
  optional runtime state field. Internal module paths are not public entrypoints.
- CommonJS resolves to a generated `chatui.umd.cjs` copy. The previous `.js`
  require target returned no exports under Node's ESM package rules. The browser
  UMD `.js` filename is retained. Both module formats now have runtime consumer checks.
- Library output remains `dist/`; application output moves to `dist-app/`.
  Hosting configurations must deploy `dist-app/`. `npm run preview` uses it.
- `BUILD_LIB=true` remains supported; npm scripts use portable explicit modes.
- Message storage is version 1 and accepts legacy arrays and legacy thread keys.
  Invalid/future schemas are ignored. Storage denial leaves the live runtime usable.
- Metadata is cached for five minutes per URL and credential. Forced refresh
  bypasses completed cache data; explicit cache clearing remains exported.
  History is deduplicated only while in flight, avoiding stale completed caches.
- Ordinary requests are limited to 30 seconds; streams to five minutes.
  Cancellation errors do not overwrite a newer thread or generation.
- Raw markdown HTML is sanitized; executable HTML, event handlers, and unsafe
  URLs are removed. Safe formatting/code/tables remain supported.
- Library CSS no longer resets the host body. The package still emits Tailwind
  utility class names; applications with a competing utility system should test
  their combined cascade. Portaled UI carries the chatbot theme class.
- Generated output is ignored and removed from Git tracking. Release builds
  recreate it. No package publishing or deployment was performed.
- Native microphone permission and physical-device speech quality require a
  hardware/browser check; automated speech tests exercise a deterministic API stub.
