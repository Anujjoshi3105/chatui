import { memo } from "react"
import { OpenUIParser } from "./openui-parser"
import { portfolioRegistry } from "./registry"

export interface OpenUIBlockProps {
  code: string
  isStreaming?: boolean
}

export const OpenUIBlock = memo(function OpenUIBlock({ code }: OpenUIBlockProps) {
  return (
    <div className="openui-surface my-2 w-full min-w-0">
      <OpenUIParser
        source={code}
        components={portfolioRegistry}
        fallback={<div className="animate-pulse text-xs text-muted-foreground py-2">Rendering interface...</div>}
      />
    </div>
  )
})
