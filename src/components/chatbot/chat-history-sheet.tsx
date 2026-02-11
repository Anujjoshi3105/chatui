import { useState, useEffect, useRef, useCallback } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Loader2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type {
  ThreadSummary,
  GetThreadsOptions,
  ThreadListResponse,
} from "@/core/services/types"

const PAGE_SIZE = 20
const SEARCH_DEBOUNCE_MS = 300

function formatThreadDate(iso: string | null | undefined): string {
  if (!iso) return ""
  try {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return ""
    const now = new Date()
    const sameDay =
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    if (sameDay) {
      return d.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
      })
    }
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    })
  } catch {
    return ""
  }
}

export interface ChatHistorySheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userId: string | undefined
  threadList: ThreadSummary[]
  setThreadList: (
    list: ThreadSummary[] | ((prev: ThreadSummary[]) => ThreadSummary[])
  ) => void
  totalThreads: number
  setTotalThreads: (n: number) => void
  threadsLoading: boolean
  setThreadsLoading: (v: boolean) => void
  currentThreadId: string | undefined
  onSelectThread: (threadId: string) => void
  getThreads: (options?: GetThreadsOptions) => Promise<ThreadListResponse>
}

export function ChatHistorySheet({
  open,
  onOpenChange,
  userId,
  threadList,
  setThreadList,
  totalThreads,
  setTotalThreads,
  threadsLoading,
  setThreadsLoading,
  currentThreadId,
  onSelectThread,
  getThreads,
}: ChatHistorySheetProps) {
  const [searchInput, setSearchInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [loadingMore, setLoadingMore] = useState(false)
  const loadMoreSentinelRef = useRef<HTMLDivElement>(null)
  const loadingMoreRef = useRef(false)
  const threadListLengthRef = useRef(threadList.length)
  threadListLengthRef.current = threadList.length

  useEffect(() => {
    if (!open) {
      setSearchInput("")
      setSearchQuery("")
    }
  }, [open])

  useEffect(() => {
    if (!searchInput.trim()) {
      setSearchQuery("")
      return
    }
    const t = setTimeout(() => setSearchQuery(searchInput.trim()), SEARCH_DEBOUNCE_MS)
    return () => clearTimeout(t)
  }, [searchInput])

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      onOpenChange(nextOpen)
      if (!nextOpen) {
        setThreadList([])
        setTotalThreads(0)
      }
    },
    [onOpenChange, setThreadList, setTotalThreads]
  )

  useEffect(() => {
    if (!open || !userId?.trim()) return
    let cancelled = false
    setThreadsLoading(true)
    setThreadList([])
    setTotalThreads(0)
    getThreads({ limit: PAGE_SIZE, offset: 0, search: searchQuery })
      .then(({ threads, total }) => {
        if (!cancelled) {
          setThreadList(threads)
          setTotalThreads(total ?? 0)
        }
      })
      .finally(() => {
        if (!cancelled) setThreadsLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [
    open,
    userId,
    searchQuery,
    getThreads,
    setThreadList,
    setTotalThreads,
    setThreadsLoading,
  ])

  useEffect(() => {
    if (
      !open ||
      !userId?.trim() ||
      threadsLoading ||
      threadList.length >= totalThreads ||
      totalThreads <= 0
    )
      return
    const el = loadMoreSentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || loadingMoreRef.current) return
        const offset = threadListLengthRef.current
        if (offset >= totalThreads) return
        loadingMoreRef.current = true
        setLoadingMore(true)
        getThreads({
          limit: PAGE_SIZE,
          offset,
          search: searchQuery || undefined,
        })
          .then(({ threads }) => {
            setThreadList((prev) => [...prev, ...threads])
          })
          .finally(() => {
            loadingMoreRef.current = false
            setLoadingMore(false)
          })
      },
      { root: null, rootMargin: "100px", threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [
    open,
    userId,
    threadsLoading,
    threadList.length,
    totalThreads,
    searchQuery,
    getThreads,
    setThreadList,
  ])

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Chat history</SheetTitle>
          <SheetDescription>
            {userId?.trim()
              ? "Select a conversation to load."
              : "Sign in to see your conversations."}
          </SheetDescription>
        </SheetHeader>
        {userId?.trim() ? (
          <div className="relative flex items-center border rounded-md px-3 py-2 mt-2 bg-muted/50">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search conversations…"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 bg-transparent border-0 outline-none text-sm ml-2 placeholder:text-muted-foreground"
              aria-label="Search conversations"
            />
          </div>
        ) : null}
        <div className="flex-1 overflow-y-auto py-4 min-h-0">
          {!userId?.trim() ? null : threadsLoading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading conversations…</span>
            </div>
          ) : threadList.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-8">
              {searchQuery
                ? "No conversations match your search."
                : "No conversations yet."}
            </p>
          ) : (
            <ul className="space-y-1">
              {threadList.map((t) => {
                const preview =
                  t.preview?.trim().slice(0, 60) ||
                  (t.updated_at
                    ? `Conversation · ${formatThreadDate(t.updated_at)}`
                    : "Conversation")
                const shortId = t.thread_id.slice(0, 8)
                return (
                  <li key={t.thread_id}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start font-normal h-auto py-2 flex flex-col items-start gap-0.5",
                        t.thread_id === currentThreadId && "bg-muted"
                      )}
                      onClick={() => onSelectThread(t.thread_id)}
                    >
                      <span className="truncate w-full text-left text-sm">
                        {preview}
                        {preview.length >= 60 ? "…" : ""}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {shortId}
                      </span>
                    </Button>
                  </li>
                )
              })}
              {threadList.length < totalThreads ? (
                <li ref={loadMoreSentinelRef} className="py-2 flex justify-center">
                  {loadingMore ? (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  ) : null}
                </li>
              ) : null}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
