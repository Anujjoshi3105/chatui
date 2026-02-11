import { useState, useEffect } from "react"

/**
 * Hook to detect if viewport is below breakpoint
 */
export function useIsMobile(breakpoint: number): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        if (typeof window === "undefined") return false
        return window.innerWidth < breakpoint || window.innerHeight < breakpoint
    })

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < Math.max(768, breakpoint) || window.innerHeight < Math.max(640, breakpoint))
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [breakpoint])

    return isMobile
}
