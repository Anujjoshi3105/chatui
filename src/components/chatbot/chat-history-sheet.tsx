import { useEffect, useRef, useCallback, useState } from "react"
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
import { Loader2, Search, Trash2, Clock } from "lucide-react"
import { m as motion, AnimatePresence } from "motion/react"
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
    const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays === 0 && d.getDate() === now.getDate()) {
      return d.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
      })
    }
    if (diffDays === 1 || (diffDays === 0 && d.getDate() !== now.getDate())) {
      return "Yesterday"
    }
    if (diffDays < 7) {
      return d.toLocaleDateString(undefined, { weekday: "short" })
    }
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    })
  } catch {
    return ""
  }
}

function groupThreadsByDate(threads: ThreadSummary[]) {
  const groups: { title: string; items: ThreadSummary[] }[] = [
    { title: "Today", items: [] },
    { title: "Yesterday", items: [] },
    { title: "Previous 7 Days", items: [] },
    { title: "Older", items: [] },
  ]

  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  const lastWeek = new Date(now)
  lastWeek.setDate(lastWeek.getDate() - 7)

  threads.forEach((t) => {
    if (!t.updated_at) {
      groups[3].items.push(t)
      return
    }
    const d = new Date(t.updated_at)
    d.setHours(0, 0, 0, 0)

    if (d.getTime() === now.getTime()) {
      groups[0].items.push(t)
    } else if (d.getTime() === yesterday.getTime()) {
      groups[1].items.push(t)
    } else if (d.getTime() >= lastWeek.getTime()) {
      groups[2].items.push(t)
    } else {
      groups[3].items.push(t)
    }
  })

  return groups.filter((g) => g.items.length > 0)
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
  onNewChat?: () => void
  getThreads: (options?: GetThreadsOptions) => Promise<ThreadListResponse>
  deleteThread?: (threadId: string) => Promise<void>
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
  deleteThread,
}: ChatHistorySheetProps) {
  const [searchInput, setSearchInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [loadingMore, setLoadingMore] = useState(false)
  const [threadToDelete, setThreadToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
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
        setSearchInput("")
        setSearchQuery("")
        setThreadToDelete(null)
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

  const handleDeleteConfirm = useCallback(async () => {
    if (!threadToDelete || !deleteThread) return
    setIsDeleting(true)
    try {
      await deleteThread(threadToDelete)
      setThreadList((prev) => {
        return prev.filter((t: ThreadSummary) => t.thread_id !== threadToDelete)
      })
      setTotalThreads(Math.max(0, totalThreads - 1))
      setThreadToDelete(null)
    } catch (e) {
      console.error("Failed to delete thread", e)
    } finally {
      setIsDeleting(false)
    }
  }, [threadToDelete, deleteThread, setThreadList, totalThreads, setTotalThreads])

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="flex flex-col" onInteractOutside={(e) => e.preventDefault()}>
        <SheetHeader>
          <SheetTitle>Chat history</SheetTitle>
          <SheetDescription>
            {userId?.trim()
              ? "Select a conversation to load."
              : "Sign in to see your conversations."}
          </SheetDescription>
        </SheetHeader>
        {userId?.trim() ? (
          <div className="flex items-center bg-muted/50 rounded-lg px-2 py-1.5 focus-within:bg-background focus-within:ring-1 focus-within:ring-ring transition-all">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground ml-1" />
            <input
              type="search"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 bg-transparent border-0 outline-none text-sm ml-2 placeholder:text-muted-foreground py-0.5"
              aria-label="Search conversations"
            />
          </div>
        ) : null}
        <div className="flex-1 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40">
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
            <div className="py-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {groupThreadsByDate(threadList).map((group, groupIdx) => (
                  <motion.div
                    key={group.title}
                    className="mb-6 last:mb-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIdx * 0.05 }}
                  >
                    <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {group.title}
                    </h3>
                    <ul className="space-y-1">
                      {group.items.map((t) => {
                        const cleanPreview = (t.preview || "")
                          .replace(/```[\s\S]*?```|`([^`]*)`|!\[.*?\]\(.*?\)|\[(.*?)\]\(.*?\)|(\*\*|__|\*|_|~~)(.*?)\3|^#{1,6}\s*|^>\s*|^\s*[-*+]\s+|^\s*\d+\.\s+|<[^>]+>/gm, "$1$2$4")
                          .trim()

                        const title = cleanPreview || "New Conversation"
                        const dateStr = formatThreadDate(t.updated_at)

                        return (
                          <motion.li
                            key={t.thread_id}
                            className="group flex relative list-none"
                            layout
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                          >
                            <Button
                              variant="ghost"
                              className={cn(
                                "w-full justify-start font-normal h-auto p-3 relative transition-all duration-200 cursor-pointer",
                                t.thread_id === currentThreadId ? "bg-muted/80 shadow-sm" : "hover:bg-muted"
                              )}
                              onClick={() => onSelectThread(t.thread_id)}
                            >
                              <div className="flex items-start gap-3 w-full overflow-hidden">
                                <div className="flex flex-col items-start overflow-hidden w-full text-left">
                                  <span className={cn(
                                    "truncate w-full text-sm",
                                    t.thread_id === currentThreadId ? "font-semibold" : "font-medium"
                                  )}>
                                    {title}
                                  </span>
                                  {dateStr && (
                                    <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-muted-foreground">
                                      <Clock className="h-3 w-3" />
                                      <span>{dateStr}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Button>
                            {deleteThread && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 z-10"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setThreadToDelete(t.thread_id)
                                }}
                                aria-label="Delete conversation"
                              >
                                <Trash2 />
                              </Button>
                            )}
                          </motion.li>
                        )
                      })}
                    </ul>
                  </motion.div>
                ))}
              </AnimatePresence>
              {threadList.length < totalThreads ? (
                <div ref={loadMoreSentinelRef} className="py-4 flex justify-center">
                  {loadingMore ? (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  ) : null}
                </div>
              ) : null}
            </div>
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
