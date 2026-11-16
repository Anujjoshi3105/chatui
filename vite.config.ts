import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import dts from "vite-plugin-dts"
import { visualizer } from "rollup-plugin-visualizer"

// Keep the browser UMD filename while making require() valid in a type:module package.
const commonjsCompatibility: Plugin = {
  name: "commonjs-compatibility",
  generateBundle(options, bundle) {
    if (options.format !== "umd") return
    const chunk = bundle["chatui.umd.js"]
    if (chunk?.type === "chunk") this.emitFile({ type: "asset", fileName: "chatui.umd.cjs", source: chunk.code })
  },
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode.startsWith("lib") || process.env.BUILD_LIB === "true"
  const analyze = mode.endsWith("analyze") || process.env.ANALYZE === "true"

  return {
    plugins: [
      react(),
      tailwindcss(),
      isLib && commonjsCompatibility,
      isLib && dts({
        insertTypesEntry: true,
        rollupTypes: true,
        tsconfigPath: "./tsconfig.app.json",
        exclude: ["src/app/**", "src/App.tsx", "src/main.tsx", "src/entrypoints/**"],
      }),
      analyze && visualizer({ open: false, filename: `artifacts/${isLib ? "lib" : "app"}-stats.html`, gzipSize: true, brotliSize: true }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        ...(mode === "test" ? { "react-dom/client": path.resolve(__dirname, "node_modules/react-dom/profiling.js") } : {}),
      },
    },
    build: isLib ? {
      lib: {
        entry: path.resolve(__dirname, "src/lib.ts"),
        name: "Chatui",
        formats: ["es", "umd"],
        fileName: (format) => `chatui.${format}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
          "react-is",
          "tailwindcss",
          "use-sync-external-store",
          /^use-sync-external-store\/.*/,
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
            tailwindcss: "tailwindcss",
            "use-sync-external-store": "useSyncExternalStore",
            "use-sync-external-store/shim": "useSyncExternalStore",
          },
        },
      },
      outDir: "dist",
      emptyOutDir: true,
      chunkSizeWarningLimit: 250,
    } : {
      rollupOptions: {
        input: path.resolve(__dirname, mode === "test" ? "tests/browser/fixture.html" : "index.html"),
      },
      outDir: mode === "test" ? "dist-browser" : "dist-app",
      manifest: true,
      emptyOutDir: true,
      chunkSizeWarningLimit: 250,
    },
  }
})

