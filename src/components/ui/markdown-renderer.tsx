import React from "react"
import Markdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/ui/copy-button"

interface MarkdownRendererProps {
  children: string
  className?: string
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (React.isValidElement(node)) {
    const children = (node.props as { children?: React.ReactNode }).children
    return extractText(children)
  }
  return ""
}

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode
}

function CodeBlock({
  children,
  className,
  ...props
}: CodeBlockProps) {
  const code = extractText(children)

  return (
    <div className="group relative my-4">
      <pre
        className={cn(
          "overflow-x-auto rounded-md border bg-muted/40 p-4 font-mono text-sm",
          className
        )}
        {...props}
      >
        <code>{code}</code>
      </pre>

      <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
        <CopyButton content={code} copyMessage="Copied code to clipboard" />
      </div>
    </div>
  )
}

function withClass(
  Tag: keyof React.JSX.IntrinsicElements,
  className: string
) {
  const Component = ({ node, className: propClassName, ...props }: any) =>
    React.createElement(Tag, {
      ...props,
      className: cn(className, propClassName)
    })

  Component.displayName = Tag
  return Component
}

const components: Components = {
  h1: withClass("h1", "text-2xl font-semibold mb-4"),
  h2: withClass("h2", "text-xl font-semibold mb-3"),
  h3: withClass("h3", "text-lg font-semibold mb-2"),
  h4: withClass("h4", "text-base font-semibold mb-2"),
  h5: withClass("h5", "text-sm font-medium mb-1"),

  p: withClass("p", "whitespace-pre-wrap mb-4 last:mb-0"),
  strong: withClass("strong", "font-semibold"),
  a: withClass("a", "text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"),
  hr: withClass("hr", "my-6 border-foreground/20"),

  blockquote: withClass(
    "blockquote",
    "border-l-2 border-primary pl-4 italic my-4"
  ),

  ul: withClass("ul", "list-disc space-y-2 pl-6 my-4"),
  ol: withClass("ol", "list-decimal space-y-2 pl-6 my-4"),
  li: withClass("li", "my-1.5"),

  table: withClass(
    "table",
    "w-full border-collapse overflow-hidden rounded-md border border-foreground/20 my-4"
  ),
  th: withClass(
    "th",
    "border border-foreground/20 bg-muted px-4 py-2 text-left font-semibold"
  ),
  td: withClass(
    "td",
    "border border-foreground/20 px-4 py-2"
  ),
  tr: withClass("tr", "even:bg-muted/40"),

  code({ node, className, children, ...props }: any) {
    const isBlock = className?.includes("language-")

    if (isBlock) {
      return (
        <CodeBlock className={className} {...props}>
          {children}
        </CodeBlock>
      )
    }

    return (
      <code
        className={cn("rounded bg-muted px-1 py-0.5 font-mono text-sm", className)}
        {...props}
      >
        {children}
      </code>
    )
  },

  pre({ children }) {
    return <>{children}</>
  },
}

export default function MarkdownRenderer({ children, className }: MarkdownRendererProps) {
  return (
    <div className={cn("prose-sm max-w-none", className)}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {children}
      </Markdown>
    </div>
  )
}

