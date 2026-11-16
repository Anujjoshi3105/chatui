import { readFile, readdir, mkdir, writeFile } from "node:fs/promises"
import { gzipSync } from "node:zlib"
import assert from "node:assert/strict"

const manifest = JSON.parse(await readFile("dist-app/.vite/manifest.json", "utf8"))
const initial = new Set()
function visit(key) {
  const item = manifest[key]
  assert(item, "Missing application manifest entry: " + key)
  if (initial.has(item.file)) return
  initial.add(item.file)
  for (const imported of item.imports ?? []) visit(imported)
}
visit("index.html")
async function sizes(root, files) {
  return Promise.all([...files].filter(f => f.endsWith(".js")).map(async file => {
    const source = await readFile(root + "/" + file)
    return { file, bytes: source.length, gzip: gzipSync(source).length }
  }))
}
const app = await sizes("dist-app", initial)
const lib = await sizes("dist", (await readdir("dist")).filter(f => f.endsWith(".js")))
const libInitial = new Set()
async function visitLibrary(file) {
  if (libInitial.has(file)) return
  libInitial.add(file)
  const source = await readFile("dist/" + file, "utf8")
  for (const match of source.matchAll(/(?:from\s*|import\s*)["']\.\/([^"']+\.js)["']/g)) await visitLibrary(match[1])
}
await visitLibrary("chatui.es.js")
const report = {
  appInitial: app, appInitialGzip: app.reduce((n, f) => n + f.gzip, 0),
  largestAppInitialBytes: Math.max(...app.map(f => f.bytes)),
  library: lib,
  libraryInitialGzip: lib.filter(f => libInitial.has(f.file)).reduce((n, f) => n + f.gzip, 0),
  libraryEsmEntryGzip: lib.find(f => f.file === "chatui.es.js")?.gzip,
  libraryUmdGzip: lib.find(f => f.file === "chatui.umd.js")?.gzip,
}
await mkdir("artifacts", { recursive: true })
await writeFile("artifacts/bundle-sizes.json", JSON.stringify(report, null, 2))
console.log(JSON.stringify(report, null, 2))
// Previous measured app: 168,270 gzip bytes / 543,710 largest chunk bytes.
// These app gates enforce at least a 20% reduction from that recorded build.
assert(report.appInitialGzip <= 134616, "Application initial gzip budget exceeded")
assert(report.largestAppInitialBytes <= 434968, "Application largest initial chunk budget exceeded")
assert(report.libraryEsmEntryGzip <= 60000, "Library ESM entry budget exceeded")
assert(report.libraryInitialGzip <= 180000, "Library complete static import graph budget exceeded")
assert(report.libraryUmdGzip <= 275000, "Library UMD compatibility build budget exceeded")
for (const file of initial) assert(!/markdown-renderer|voice.sdk|audio-visualizer|setting-|chat-history-sheet|file-preview|tool-result/.test(file), "Optional feature on initial demo path: " + file)
console.log("Application and library budgets passed.")
