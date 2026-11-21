import { useEffect, useRef, useState } from "react"
import { useShallow } from "zustand/react/shallow"
import { useChatSelector } from "./context"
import { MessageInput } from "@/components/ui/message-input"
import { QueuedMessages } from "./queued-messages"
import { Button } from "@/components/ui/button"
import { readAttachments, type AttachmentAdapter, type AttachmentReference } from "@/core/services/interaction-types"

function accepts(file: File, accept: string) {
  return accept.split(",").some(item => {
    const pattern = item.trim().toLowerCase()
    return pattern === "*/*" || (pattern.startsWith(".") ? file.name.toLowerCase().endsWith(pattern)
      : pattern.endsWith("/*") ? file.type.startsWith(pattern.slice(0, -1)) : file.type === pattern)
  })
}

export default function AttachmentInput({ adapter, placeholder, transcribeAudio, className }: {
  adapter: AttachmentAdapter; placeholder?: string; transcribeAudio?: (blob: Blob) => Promise<string>; className?: string
}) {
  const { input, setInput, submitMessage, forcePass, stopGeneration, isGenerating, historyLoading } = useChatSelector(useShallow(s => ({
    input: s.input, setInput: s.setInput, submitMessage: s.submitMessage, forcePass: s.forcePass, stopGeneration: s.stopGeneration,
    isGenerating: s.isGenerating, historyLoading: s.historyLoading,
  })))
  const [files, setFiles] = useState<File[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState<string | null>(null)
  const pending = useRef<AbortController | null>(null)
  const uploaded = useRef(new Map<File, AttachmentReference>())

  useEffect(() => {
    const cache = uploaded.current
    return () => {
      pending.current?.abort()
      for (const file of cache.values()) void adapter.discard?.(file).catch(() => {})
      cache.clear()
    }
  }, [adapter])

  useEffect(() => {
    for (const [file, reference] of uploaded.current) {
      if (!files?.includes(file)) {
        uploaded.current.delete(file)
        void adapter.discard?.(reference).catch(() => {})
      }
    }
  }, [files, adapter])

  const processAndSend = async (options?: { force?: boolean }) => {
    if (pending.current || historyLoading) return
    setError(null)
    if (!input.trim() && !(files?.length && adapter.allowFileOnly)) { setError("Write a message first."); return }
    const controller = new AbortController()
    pending.current = controller
    try {
      const selected = files ?? []
      if (selected.length > adapter.maxFiles) throw new Error(`Choose up to ${adapter.maxFiles} files.`)
      for (const file of selected) {
        if (!accepts(file, adapter.accept)) throw new Error(`${file.name}: supported file types are ${adapter.accept}.`)
        if (file.size > adapter.maxBytes) throw new Error(`${file.name}: maximum size is ${Math.round(adapter.maxBytes / 1024)} KB.`)
      }
      for (const file of selected) {
        if (uploaded.current.has(file)) continue
        setProgress(`Uploading ${file.name}…`)
        const reference = await adapter.upload(file, { signal: controller.signal, onProgress: percent => {
          if (!controller.signal.aborted) setProgress(`Uploading ${file.name}: ${Math.round(Math.max(0, Math.min(100, percent)))}%`)
        } })
        if (controller.signal.aborted) { void adapter.discard?.(reference).catch(() => {}); return }
        if (readAttachments([reference]).length !== 1) throw new Error("Upload returned an invalid file reference. Please try again.")
        uploaded.current.set(file, reference)
      }
      if (controller.signal.aborted) return
      const text = input.trim()
      const refs = selected.map(file => uploaded.current.get(file)!).filter(Boolean)
      const result = submitMessage(text, refs, options)
      if (!result.accepted) { setError(result.reason ?? "Could not send. Please try again."); return }
      for (const file of selected) uploaded.current.delete(file)
      setFiles(null)
      if (result.queued || options?.force) setInput("")
    } catch (cause) {
      if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : "Upload failed. Your files are still selected; try sending again.")
    } finally {
      if (pending.current === controller) { pending.current = null; setProgress(null) }
    }
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    await processAndSend()
  }

  const handleForcePass = () => {
    void processAndSend({ force: true })
  }

  return <form onSubmit={submit} className={`chat-input-container px-3 py-3 space-y-2 ${className ?? ""}`}>
    <QueuedMessages />
    <MessageInput disabled={historyLoading || !!progress} value={input} onChange={event => setInput(event.target.value)}
      allowAttachments files={files} setFiles={setFiles} allowFileOnly={adapter.allowFileOnly}
      stop={stopGeneration} forcePass={handleForcePass} isGenerating={isGenerating} transcribeAudio={transcribeAudio} placeholder={placeholder} />
    <p className="text-xs text-muted-foreground">{adapter.accept} · Up to {adapter.maxFiles} files, {Math.round(adapter.maxBytes / 1024)} KB each</p>
    {progress && <div className="flex items-center justify-between gap-2"><span role="status" className="text-sm">{progress}</span>
      <Button type="button" variant="ghost" onClick={() => {
        pending.current?.abort(); pending.current = null; setProgress(null)
      }}>Cancel upload</Button></div>}
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    <p className="text-xs text-muted-foreground">
      {isGenerating
        ? "Enter to queue · Ctrl+Enter to force pass"
        : "Enter to send · Shift+Enter for a new line"}
    </p>
  </form>
}
