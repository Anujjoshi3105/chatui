import { useEffect, useRef, useState, useCallback } from "react"

// How many pixels from the bottom of the container to enable auto-scroll
const ACTIVATION_THRESHOLD = 50
// Minimum pixels of scroll-up movement required to disable auto-scroll
const MIN_SCROLL_UP_THRESHOLD = 10
// Minimum scrollable content to show scroll button
const MIN_SCROLLABLE_CONTENT = 10

export function useAutoScroll(dependencies: React.DependencyList) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const previousScrollTop = useRef<number | null>(null)
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true)
  const [isScrollable, setIsScrollable] = useState(false)

  const checkScrollable = useCallback(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current
      // Content is scrollable if scrollHeight exceeds clientHeight by a threshold
      setIsScrollable(scrollHeight > clientHeight + MIN_SCROLLABLE_CONTENT)
    }
  }, [])

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current

      // Update scrollable state on every scroll
      setIsScrollable(scrollHeight > clientHeight + MIN_SCROLLABLE_CONTENT)

      const distanceFromBottom = Math.abs(
        scrollHeight - scrollTop - clientHeight
      )

      const isScrollingUp = previousScrollTop.current
        ? scrollTop < previousScrollTop.current
        : false

      const scrollUpDistance = previousScrollTop.current
        ? previousScrollTop.current - scrollTop
        : 0

      const isDeliberateScrollUp =
        isScrollingUp && scrollUpDistance > MIN_SCROLL_UP_THRESHOLD

      if (isDeliberateScrollUp) {
        setShouldAutoScroll(false)
      } else {
        const isScrolledToBottom = distanceFromBottom < ACTIVATION_THRESHOLD
        setShouldAutoScroll(isScrolledToBottom)
      }

      previousScrollTop.current = scrollTop
    }
  }

  const handleTouchStart = () => {
    setShouldAutoScroll(false)
  }

  useEffect(() => {
    if (containerRef.current) {
      previousScrollTop.current = containerRef.current.scrollTop
    }
  }, [])

  // Check scrollable state whenever dependencies change (e.g., messages)
  useEffect(() => {
    checkScrollable()
    if (shouldAutoScroll) {
      scrollToBottom()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  // Also check on mount and resize
  useEffect(() => {
    checkScrollable()

    const handleResize = () => checkScrollable()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [checkScrollable])

  return {
    containerRef,
    scrollToBottom,
    handleScroll,
    shouldAutoScroll,
    handleTouchStart,
    isScrollable,
  }
}
