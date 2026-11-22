import { defineConfig } from "@playwright/test"
export default defineConfig({
  testDir: "./tests/browser",
  timeout: 60000,
  workers: 1,
  reporter: [["list"], ["json", { outputFile: "artifacts/browser-results.json" }]],
  use: { baseURL: "http://127.0.0.1:4173", trace: "on", screenshot: "only-on-failure" },
  webServer: [{
    command: "npx vite preview --mode test --host 127.0.0.1 --port 4173 --strictPort",
    url: "http://127.0.0.1:4173/tests/browser/fixture.html",
    timeout: 120000,
  }, {
    command: "npx vite preview --host 127.0.0.1 --port 4174 --strictPort",
    url: "http://127.0.0.1:4174",
    timeout: 120000,
  }],
})
