import { readFile, writeFile } from "node:fs/promises"
const results = JSON.parse(await readFile("artifacts/browser-results.json", "utf8"))
const measurements = []
function visit(suites) {
  for (const suite of suites) {
    for (const spec of suite.specs ?? []) {
      for (const test of spec.tests ?? []) for (const result of test.results ?? []) {
        const entry = { scenario: spec.title, status: result.status, durationMs: result.duration, measurements: {} }
        for (const attachment of result.attachments ?? []) {
          if (attachment.contentType !== "application/json" || !attachment.body) continue
          const data = JSON.parse(Buffer.from(attachment.body, "base64").toString())
          if (attachment.name === "react-profile") {
            const updates = data.filter(d => d.phase !== "mount").map(d => d.duration).sort((a, b) => a - b)
            entry.measurements[attachment.name] = { commits: data.length, p95UpdateMs: updates[Math.floor(updates.length * 0.95)], maxUpdateMs: updates.at(-1) }
          } else if (attachment.name !== "network") entry.measurements[attachment.name] = data
        }
        measurements.push(entry)
      }
    }
    visit(suite.suites ?? [])
  }
}
visit(results.suites)
await writeFile("artifacts/browser-measurements.json", JSON.stringify(measurements, null, 2))
console.log(JSON.stringify(measurements, null, 2))
