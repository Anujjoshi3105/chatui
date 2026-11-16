import { useShallow } from "zustand/react/shallow"
import { useChatSelector } from "./context"
import { Button } from "@/components/ui/button"

export function ChatStatus() {
  const { error, errorKind, historyLoading, metadataLoading, retryError, dismissError, isGenerating, messages } = useChatSelector(useShallow(s => ({
    error: s.error, errorKind: s.errorKind, historyLoading: s.historyLoading, metadataLoading: s.metadataLoading,
    retryError: s.retryError, dismissError: s.dismissError, isGenerating: s.isGenerating, messages: s.messages,
  })))
  const active = messages.at(-1)
  const tool = active?.toolInvocations?.find(t => t.state === "call")
  const status = historyLoading ? "Loading conversation…" : metadataLoading ? "Connecting to assistant…"
    : isGenerating ? tool ? /search/i.test(tool.toolName) ? "Searching sources…" : "Working on your request…"
      : active?.content ? "Writing response…" : "Preparing response…" : null
  return <>
    {/*status && <p role="status" className="px-4 py-2 text-xs text-muted-foreground">{status}</p> */}
    {error && errorKind !== "message" && <div className="m-3 rounded-lg border border-destructive/40 p-3 text-sm">
      <p role="alert">{error}</p>
      <div className="flex gap-2 mt-2">
        {(errorKind === "metadata" || errorKind === "history") && <Button size="sm" disabled={historyLoading || metadataLoading} onClick={() => void retryError()}>{errorKind === "metadata" ? "Try connecting again" : "Retry history"}</Button>}
        <Button size="sm" variant="ghost" onClick={dismissError}>Dismiss</Button>
      </div>
    </div>}
  </>
}
