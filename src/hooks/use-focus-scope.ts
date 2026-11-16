import { useEffect, type RefObject } from "react"

/** Keyboard scope for the popup; Radix owns focus for portaled dialogs. */
export function useFocusScope(ref: RefObject<HTMLElement | null>, active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!active || !ref.current) return
    const root = ref.current
    const previous = document.activeElement as HTMLElement | null
    let initialized = false
    const controls = () => [...root.querySelectorAll<HTMLElement>('button:not([disabled]),textarea:not([disabled]),input:not([disabled]),a[href],[tabindex="0"]')]
      .filter(el => el.offsetParent !== null)
    const focus = () => {
      if (initialized) return
      const first = root.querySelector<HTMLElement>("textarea") ?? controls()[0]
      if (first) { initialized = true; first.focus() }
    }
    focus()
    const observer = new MutationObserver(focus)
    observer.observe(root, { childList: true, subtree: true })
    const keydown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return
      if (!root.contains(event.target as Node)) return
      if (event.key === "Escape") { event.preventDefault(); onClose() }
      if (event.key === "Tab") {
        const items = controls()
        const first = items[0], last = items.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    root.addEventListener("keydown", keydown)
    return () => {
      observer.disconnect()
      root.removeEventListener("keydown", keydown)
      requestAnimationFrame(() => {
        if (previous?.isConnected) previous.focus()
        else document.querySelector<HTMLElement>('button[aria-label="Open chat"]')?.focus()
      })
    }
  }, [ref, active, onClose])
}
