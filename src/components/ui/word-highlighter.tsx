import { useMemo, memo } from "react"
import { cn } from "@/lib/utils"

interface WordSegment {
    text: string
    start: number
    end: number
    isSpace: boolean
}

/**
 * Splits plain text into word + whitespace segments, each annotated with
 * its character range in the original string. Used to identify the active word.
 */
function buildWordMap(text: string): WordSegment[] {
    const segments: WordSegment[] = []
    // Match word characters OR whitespace runs
    const re = /(\S+|\s+)/g
    let match: RegExpExecArray | null
    while ((match = re.exec(text)) !== null) {
        const token = match[0]
        segments.push({
            text: token,
            start: match.index,
            end: match.index + token.length,
            isSpace: /^\s+$/.test(token),
        })
    }
    return segments
}

interface WordHighlighterProps {
    /** The plain-text version of the message (already markdown-stripped) */
    text: string
    /** charOffset from the store (seek position) */
    charOffset: number
    /** currentCharIndex from the store (onBoundary value, relative to slice) */
    currentCharIndex: number
    className?: string
}

export const WordHighlighter = memo(function WordHighlighter({
    text,
    charOffset,
    currentCharIndex,
    className,
}: WordHighlighterProps) {
    const absoluteIndex = charOffset + currentCharIndex

    const segments = useMemo(() => buildWordMap(text), [text])

    const activeSegmentIndex = useMemo(() => {
        // Find the non-space segment whose range contains absoluteIndex
        for (let i = 0; i < segments.length; i++) {
            const seg = segments[i]
            if (!seg.isSpace && absoluteIndex >= seg.start && absoluteIndex < seg.end) {
                return i
            }
        }
        // Fallback: return the last non-space segment if we've passed the end
        for (let i = segments.length - 1; i >= 0; i--) {
            if (!segments[i].isSpace) return i
        }
        return -1
    }, [segments, absoluteIndex])

    if (!text) return null

    return (
        <div
            className={cn(
                "word-highlighter text-sm leading-relaxed text-muted-foreground/80 mt-2 px-1 select-text",
                className
            )}
            aria-hidden="true"
        >
            {segments.map((seg, i) =>
                seg.isSpace ? (
                    <span key={i}>{seg.text}</span>
                ) : i === activeSegmentIndex ? (
                    <mark key={i} className="highlighting">
                        {seg.text}
                    </mark>
                ) : (
                    <span key={i}>{seg.text}</span>
                )
            )}
        </div>
    )
})
