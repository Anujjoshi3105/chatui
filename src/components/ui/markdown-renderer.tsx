import React from "react"
import Markdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"

import rehypeRaw from "rehype-raw"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/ui/copy-button"
import { LinkPreview } from "@/components/ui/link-preview"

export interface MarkdownRendererProps {
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
  const languageClass = React.isValidElement(children) ? (children.props as any).className : className

  return (
    <div className="group relative my-4">
      <pre className={cn("overflow-x-auto rounded-md border bg-muted/40 p-4 font-mono text-sm custom-scrollbar", languageClass)} {...props}>
        <code>{code}</code>
      </pre>

      <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100 z-10">
        <CopyButton content={code} copyMessage="Copied code to clipboard" />
      </div>
    </div>
  )
}

function withClass(Tag: keyof React.JSX.IntrinsicElements, className: string) {
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
  a({ node, className, children, href, ...props }: any) {
    if (!href) {
      return <a className={cn("text-primary underline underline-offset-2 hover:opacity-80 transition-opacity", className)} {...props}>{children}</a>
    }

    return <LinkPreview url={href} className={cn("text-primary underline underline-offset-2 hover:opacity-80 transition-opacity", className)}>{children}</LinkPreview>
  },
  hr: withClass("hr", "my-6 border-foreground/20"),

  blockquote: withClass("blockquote", "border-l-2 border-primary pl-4 italic my-4"),

  ul: withClass("ul", "list-disc space-y-2 pl-6 my-4"),
  ol: withClass("ol", "list-decimal space-y-2 pl-6 my-4"),
  li: withClass("li", "my-1.5"),

  table({ node, className, children, ...props }: any) {
    return (
      <div className="my-4 max-w-[90%] overflow-x-hidden rounded-md border border-foreground/20 shadow-sm">
        <table className={cn("border-collapse ", className)} {...props}>
          {children}
        </table>
      </div>
    )
  },
  th: withClass("th", "border border-foreground/20 bg-muted px-4 py-2 text-left font-semibold"),
  td: withClass("td", "border border-foreground/20 px-4 py-2"),
  tr: withClass("tr", "even:bg-muted/40"),

  code({ node, className, children, ...props }: any) {
    return <code className={cn("rounded bg-muted px-1 py-0.5 font-mono text-sm", className)} {...props}>{children}</code>
  },
  pre({ children }) {
    return <CodeBlock>{children}</CodeBlock>
  },
}

export default function MarkdownRenderer({ children, className }: MarkdownRendererProps) {
  return (
    <div className={cn("prose-sm max-w-none", className)}>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
        {children}
      </Markdown>
    </div>
  )
}

