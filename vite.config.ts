import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
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
  },
})
