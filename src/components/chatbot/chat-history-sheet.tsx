import { useState, useEffect, useRef, useCallback } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useChatbotStore } from "@/store/chatbot-store"
import { useChatContext } from "@/components/chat"

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

export function ChatHistorySheet() {
  const store = useChatbotStore(s => s)
  const { getThreads, deleteThread: contextDeleteThread, loadThread, setThreadId } = useChatContext()

  const [searchInput, setSearchInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [loadingMore, setLoadingMore] = useState(false)
  const [threadToDelete, setThreadToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const loadMoreSentinelRef = useRef<HTMLLIElement>(null)
  const loadingMoreRef = useRef(false)
  const threadListLengthRef = useRef(store.threadList.length)
  threadListLengthRef.current = store.threadList.length

  useEffect(() => {
    if (!store.historySheetOpen) {
      setSearchInput("")
      setSearchQuery("")
    }
  }, [store.historySheetOpen])

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
      store.setHistorySheetOpen(nextOpen)
      if (!nextOpen) {
        store.setThreadList([])
        store.setTotalThreads(0)
        setSearchInput("")
        setSearchQuery("")
        setThreadToDelete(null)
      }
    },
    [store]
  )

  const handleSelectThread = useCallback(
    (threadIdToLoad: string) => {
      store.setHistorySheetOpen(false)
      loadThread(threadIdToLoad, store.userId)
      store.setCurrentThreadId(threadIdToLoad)
      setThreadId(threadIdToLoad)
    },
    [store, loadThread, setThreadId]
  )

  useEffect(() => {
    if (!store.historySheetOpen || !store.userId?.trim()) return
    let cancelled = false
    store.setThreadsLoading(true)
    store.setThreadList([])
    store.setTotalThreads(0)
    getThreads({ limit: PAGE_SIZE, offset: 0, search: searchQuery })
      .then(({ threads, total }) => {
        if (!cancelled) {
          store.setThreadList(threads)
          store.setTotalThreads(total ?? 0)
        }
      })
      .finally(() => {
        if (!cancelled) store.setThreadsLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [
    store.historySheetOpen,
    store.userId,
    searchQuery,
    getThreads,
  ])

  useEffect(() => {
    if (
      !store.historySheetOpen ||
      !store.userId?.trim() ||
      store.threadsLoading ||
      store.threadList.length >= store.totalThreads ||
      store.totalThreads <= 0
    )
      return
    const el = loadMoreSentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || loadingMoreRef.current) return
        const offset = threadListLengthRef.current
        if (offset >= store.totalThreads) return
        loadingMoreRef.current = true
        setLoadingMore(true)
        getThreads({
          limit: PAGE_SIZE,
          offset,
          search: searchQuery || undefined,
        })
          .then(({ threads }) => {
            store.setThreadList((prev) => [...prev, ...threads])
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
    store.historySheetOpen,
    store.userId,
    store.threadsLoading,
    store.threadList.length,
    store.totalThreads,
    searchQuery,
    getThreads,
    store,
  ])

  const handleDeleteConfirm = useCallback(async () => {
    if (!threadToDelete || !contextDeleteThread) return
    setIsDeleting(true)
    try {
      await contextDeleteThread(threadToDelete)
      store.setThreadList((prev) => {
        return prev.filter((t: any) => t.thread_id !== threadToDelete)
      })
      store.setTotalThreads(Math.max(0, store.totalThreads - 1))
      setThreadToDelete(null)
    } catch (e) {
      console.error("Failed to delete thread", e)
    } finally {
      setIsDeleting(false)
    }
  }, [threadToDelete, contextDeleteThread, store])

  return (
    <Sheet open={store.historySheetOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="flex flex-col" onInteractOutside={(e) => e.preventDefault()}>
        <SheetHeader>
          <SheetTitle>Chat history</SheetTitle>
          <SheetDescription>
            {store.userId?.trim()
              ? "Select a conversation to load."
              : "Sign in to see your conversations."}
          </SheetDescription>
        </SheetHeader>
        {store.userId?.trim() ? (
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
          {!store.userId?.trim() ? null : store.threadsLoading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading conversations…</span>
            </div>
          ) : store.threadList.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-8">
              {searchQuery
                ? "No conversations match your search."
                : "No conversations yet."}
            </p>
          ) : (
            <ul className="space-y-1">
              {store.threadList.map((t) => {
                const preview =
                  t.preview?.trim().slice(0, 60) ||
                  (t.updated_at
                    ? `Conversation · ${formatThreadDate(t.updated_at)}`
                    : "Conversation")

                return (
                  <li key={t.thread_id} className="group relative flex items-center pr-2 group">
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex-1 justify-start font-normal h-auto py-2 flex flex-col items-start pr-8",
                        t.thread_id === store.currentThreadId && "bg-muted"
                      )}
                      onClick={() => handleSelectThread(t.thread_id)}
                    >
                      <span className="truncate w-full text-left text-sm">
                        {preview
                          .replace(/```[\s\S]*?```|`([^`]*)`|!\[.*?\]\(.*?\)|\[(.*?)\]\(.*?\)|(\*\*|__|\*|_|~~)(.*?)\3|^#{1,6}\s*|^>\s*|^\s*[-*+]\s+|^\s*\d+\.\s+|<[^>]+>/gm, "$1$2$4")
                          .slice(0, 60)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {t.thread_id}
                      </span>
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute right-2 group-hover:opacity-100 opacity-0 transition-opacity focus:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation()
                        setThreadToDelete(t.thread_id)
                      }}
                      aria-label="Delete conversation"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                )
              })}
              {store.threadList.length < store.totalThreads ? (
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

      <Dialog open={!!threadToDelete} onOpenChange={(open) => !open && !isDeleting && setThreadToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete conversation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this conversation? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 flex sm:justify-end">
            <Button
              variant="outline"
              disabled={isDeleting}
              onClick={() => setThreadToDelete(null)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={isDeleting}
              onClick={handleDeleteConfirm}
              className="mt-2 sm:mt-0"
            >
              {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sheet>
  )
}
