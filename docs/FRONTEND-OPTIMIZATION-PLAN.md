# Frontend Optimization Plan

Status: implementation complete; verification and measurement limits recorded in OPTIMIZATION-RESULTS.md  
Scope: `frontend/`  
Objective: improve load performance, runtime responsiveness, maintainability, and release confidence without breaking the chatbot package API.

## Baseline Findings

- The project supports both an application build and a library build through `BUILD_LIB`.
- The Vite config already supports bundle analysis through `ANALYZE=true`, but no budget is enforced.
- Chat lifecycle logic exists in `core/runtime`; separate Zustand stores also expose session/UI state.
- The demo landing page and package widget are composed in one `App.tsx` entrypoint.
- The dependency set includes motion, markdown, voice/audio, Radix primitives, and file/tool UI; these are likely candidates for deferred loading.
- `@tanstack/react-virtual` is installed, so a virtualization path is available.
- `dist/` is present under `frontend/`; generated output should be intentionally ignored or explicitly treated as release output.
- A combined build/lint command was started during inspection but did not produce completion output within the observation window; establish a clean baseline before changing code.

## Success Metrics

The first recorded production build is the recovery baseline. A pre-change browser trace was not captured; retrospective timing comparisons cannot be claimed. See OPTIMIZATION-RESULTS.md for the exact limits and repeatable current measurements.

| Metric | Initial target | Measurement |
|---|---:|---|
| Initial JS transferred for demo route | Reduce by 20% from baseline | Vite output + browser network panel |
| Largest initial JS chunk | Reduce by 20% from baseline | `ANALYZE=true` bundle report |
| First contentful paint | Target < 1.8s on mid-tier mobile; pre-change comparison unavailable | Lighthouse/WebPageTest-style repeatable run |
| Time to interactive chat input | Target < 3s on mid-tier mobile | Browser performance trace |
| Streaming update render cost | Keep active-message updates under 16ms when possible | React Profiler/performance marks |
| 100-message history scroll | No visible jank; target 60fps during ordinary scroll | Performance trace |
| Typecheck/lint/build | All pass in CI | npm scripts |
| Public API breakage | Zero unplanned breaks | Type fixture/consumer test |

## Prioritized Workstreams

### Phase 0 — Establish a trustworthy baseline

Priority: P0  
Estimate: 0.5–1 day  
Owner: frontend maintainer

- [x] Run `npm ci`, `npm run build`, and `npm run lint` independently and record results.
- [x] Add a `typecheck` script (`tsc -b --pretty false`) if the existing build command is too opaque.
- [x] Run `ANALYZE=true npm run build` and save the report outside source control or as a documented artifact.
- [x] Capture a production browser trace for initial load, opening the popup, sending a message, streaming, and scrolling history.
- [x] Record current chunk sizes, route/widget load time, and message render counts.
- [x] Decide whether `frontend/dist/` is release output; if so, ignore it by default and generate it in release workflows.

Exit criteria: baseline table is filled, current failures are known, and no optimization claim is made without a before/after measurement.

### Phase 1 — Separate product boundaries

Priority: P0  
Estimate: 1–2 days

- [x] Move demo-only sections and content from `App.tsx` into `src/app/` or `src/demo/`.
- [x] Keep `src/lib.ts` as the only package barrel and ensure demo code is not imported by it.
- [x] Add explicit app and library build entrypoints/configuration rather than inferring behavior from scattered imports.
- [x] Replace `crypto.randomUUID()` at render time with a stable user/session identity hook or configuration value.
- [x] Document which components are public and which are internal.

Exit criteria: a library consumer can build/import the package without demo-only modules; the demo still renders unchanged. Build, lint, package-consumer and browser verification are configured; see OPTIMIZATION-RESULTS.md for results.

### Phase 2 — Make runtime ownership explicit

Priority: P0  
Estimate: 2–4 days

- [x] Map every message, thread, generation, error, feedback, agent, and model field to one owner.
- [x] Route chat lifecycle changes through `core/runtime` actions/reducer/use cases.
- [x] Move API-to-UI message normalization into a tested pure module under `core/runtime` or `core/services`.
- [x] Replace broad context reads with selector-based subscriptions where practical.
- [x] Remove duplicated session setters/global session state from `Chatbot`; retain the store exports temporarily for package compatibility.
- [x] Add tests for send, cancel, stream completion, stream error, tool call/result merge, thread switch, persistence restore, and clear.

Exit criteria: `Chatbot` no longer consumes the duplicated session store; runtime remains the owner of message/request lifecycle. Reducer, hook, persistence and transport tests run under Vitest.

### Phase 3 — Reduce initial bundle cost

Priority: P0  
Estimate: 1–3 days

- [x] Dynamically import markdown rendering and its plugins.
- [x] Dynamically import voice recognition/synthesis controls and audio visualization.
- [x] Dynamically import file preview and non-core tool result renderers.
- [x] Load settings/history dialogs on interaction rather than initial render.
- [x] Verify motion imports use the smallest supported feature set and do not pull unnecessary animation features into the library entry.
- [x] Audit Radix imports and ensure unused primitives are not reachable from the critical path.
- [x] Compare library and demo bundle reports separately.

Exit criteria: optional features are absent from the initial text-only path, and bundle size meets the agreed budget.

### Phase 4 — Optimize message rendering and streaming

Priority: P0  
Estimate: 2–4 days

- [x] Memoize individual message rows and action groups using stable props.
- [x] Ensure stream events update only the active assistant message rather than reconstructing unrelated derived data.
- [x] Batch or throttle high-frequency token updates to an agreed cadence while preserving perceived streaming quality.
- [x] Keep callbacks stable and avoid creating large option objects for every message on every render.
- [x] Virtualize message histories above a threshold, starting with read-only history and preserving auto-scroll behavior.
- [x] Test tool invocation expansion, markdown layout changes, copy/speak actions, and scroll-to-bottom with virtualization.

Exit criteria: a 100-message conversation remains responsive during streaming and scrolling, with no broken anchor/auto-scroll behavior.

### Phase 5 — Harden persistence and network behavior

Priority: P1  
Estimate: 1–3 days

- [x] Version the persisted schema and add migration/invalid-data handling.
- [x] Debounce writes and avoid serializing unchanged threads.
- [x] Catch storage quota, private-mode, and serialization failures; continue in memory.
- [x] Abort stale requests when changing thread, agent, or unmounting.
- [x] Deduplicate metadata/history requests and cache only where invalidation is explicit.
- [x] Normalize transport errors into user-safe runtime error states.
- [x] Add timeouts or cancellation limits appropriate to the browser/API contract.

Exit criteria: reload, thread switch, offline/error, cancellation, and malformed persisted data are deterministic and tested.

### Phase 6 — CSS and accessibility pass

Priority: P1  
Estimate: 1–2 days

- [x] Confirm demo-only styles and assets do not leak into the library contract.
- [x] Audit focus order, keyboard handling, dialog labels, live regions for streaming, and reduced-motion behavior.
- [x] Ensure theme tokens are scoped to `.chatbot-theme` and do not unexpectedly override host application styles.
- [x] Check large message content, code blocks, tool results, and attachments for overflow and layout shift.
- [x] Add responsive checks for popup, maximized, and full-page modes.

Exit criteria: keyboard-only and reduced-motion smoke tests pass in all supported chat modes.

### Phase 7 — CI gates and release hygiene

Priority: P1  
Estimate: 1–2 days

- [x] Add scripts for `typecheck`, `lint`, `test`, `build`, and bundle analysis.
- [x] Add bundle-size checks for application and library outputs.
- [x] Add a consumer fixture that imports the published-style package entry and checks types.
- [x] Add a smoke test for the demo and core chat interactions.
- [x] Ensure generated `dist/` is either ignored or produced only by a release job.
- [x] Record a changelog/migration note for any public prop/type changes.

Exit criteria: every pull request runs quality gates and fails clearly when budgets or public API checks regress.

## Recommended Execution Order

```text
Baseline -> Boundaries -> Runtime ownership -> Bundle splitting
         -> Rendering/streaming -> Persistence/network -> A11y/CSS -> CI gates
```

Do not start with a broad component rewrite. The highest-leverage sequence is to make ownership and entrypoints clear, then measure the effect of code-splitting and rendering changes.

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Lazy loading causes interaction delays | Preload on intent for settings, voice, or file selection; show explicit loading states |
| Virtualization breaks scroll anchoring | Ship behind a threshold/feature flag and test streaming plus prepended history |
| Store consolidation changes behavior | Migrate one action family at a time with reducer and interaction tests |
| Markdown/raw HTML behavior changes | Add representative rendering/security fixtures before splitting the renderer |
| Library consumers rely on internal exports | Inventory current exports and add compatibility re-exports before cleanup |
| Bundle report varies by environment | Pin install/build commands and compare production artifacts from CI |

## Definition of Done

- [x] Recovery bundle baseline and post-change measurements are recorded; pre-change browser timing is unavailable.
- [x] Architecture boundaries in `ARCHITECTURE.md` match the implemented dependency direction.
- [x] Initial text-chat path does not load optional capabilities unnecessarily.
- [x] Chat lifecycle has one source of truth and pure transition tests.
- [x] Long histories and streaming have profiler evidence of acceptable responsiveness.
- [x] Persistence and cancellation failure paths are tested.
- [x] Public package imports and types remain compatible or have an explicit migration.
- [x] CI enforces typecheck, lint, build, tests, and bundle budgets.

