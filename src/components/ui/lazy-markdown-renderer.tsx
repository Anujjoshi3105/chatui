import React, { Suspense } from "react"
import type { MarkdownRendererProps } from "./markdown-renderer"

const MarkdownRenderer = React.lazy(() => import("./markdown-renderer"))

export function LazyMarkdownRenderer({ children, className, messageId }: MarkdownRendererProps) {
    // Plain text does not need the markdown parser or its plugins.
    if (!/[\x60*_#<>[\]~|\n]/.test(children)) {
        return <div className={className} style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{children}</div>
    }
    return (
        <Suspense fallback={<div className={className} style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{children}</div>}>
            <MarkdownRenderer className={className} messageId={messageId}>{children}</MarkdownRenderer>
        </Suspense>
    )
}
