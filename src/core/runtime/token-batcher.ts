/** At most one token commit every 32ms; final content is always flushed. */
export function createTokenBatcher(commit: (content: string) => void, interval = 32) {
  let pending: string | undefined
  let timer: ReturnType<typeof setTimeout> | undefined
  const flush = () => {
    clearTimeout(timer)
    timer = undefined
    if (pending !== undefined) { const value = pending; pending = undefined; commit(value) }
  }
  return {
    push(content: string) { pending = content; timer ??= setTimeout(flush, interval) },
    flush,
    dispose() { clearTimeout(timer); timer = undefined; pending = undefined },
  }
}
