import React, { Suspense } from "react"
import type { MarkdownRendererProps } from "./markdown-renderer"

const MarkdownRenderer = React.lazy(() => import("./markdown-renderer"))

export function LazyMarkdownRenderer({ children, className, messageId }: MarkdownRendererProps) {
    return (
        <Suspense fallback={<div className="animate-pulse h-4 bg-muted/50 rounded w-1/2" />}>
            <MarkdownRenderer className={className} messageId={messageId}>{children}</MarkdownRenderer>
        </Suspense>
    )
}
