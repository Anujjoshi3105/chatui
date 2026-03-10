import React, { memo, useMemo } from "react"
import Markdown, { type Components } from "react-markdown"
import { useSpeechStore } from "@/store/speech-store"
import { stripMarkdownForSpeech } from "@/lib/voice.sdk"
import remarkGfm from "remark-gfm"

import rehypeRaw from "rehype-raw"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/ui/copy-button"
import { LinkPreview } from "@/components/ui/link-preview"

export interface MarkdownRendererProps {
  children: string
  className?: string
  messageId?: string
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
  const languageClass = React.isValidElement(children) ? (children.props as { className?: string }).className : className

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
  const Component = ({ className: propClassName, ...props }: React.HTMLAttributes<HTMLElement>) =>
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
  a({ className, children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children?: React.ReactNode }) {
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

  table({ className, children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
    return (
      <div className="my-4 w-full overflow-x-auto rounded-md border border-foreground/20 shadow-sm">
        <table className={cn("border-collapse ", className)} {...props}>
          {children}
        </table>
      </div>
    )
  },
  th: withClass("th", "border border-foreground/20 bg-muted px-4 py-2 text-left font-semibold"),
  td: withClass("td", "border border-foreground/20 px-4 py-2"),
  tr: withClass("tr", "even:bg-muted/40"),

  code({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return <code className={cn("rounded bg-muted px-1 py-0.5 font-mono text-sm", className)} {...props}>{children}</code>
  },
  pre({ children }) {
    return <CodeBlock>{children}</CodeBlock>
  },
}

export default memo(function MarkdownRenderer({ children, className, messageId }: MarkdownRendererProps) {
  const { speakingMessageId, currentCharIndex } = useSpeechStore()
  const isSpeaking = messageId === speakingMessageId

  // If we are speaking, we might want to highlight the word.
  // However, mapping direct charIndex to complex markdown nodes is hard.
  // We'll use a CSS-based approach or a text-node replacement if active.

  const content = useMemo(() => {
    if (!isSpeaking || !children) return children

    // Simplified approach: find the word at currentCharIndex in the stripped text
    // and try to highlight it. Since perfect mapping is hard, we'll use a semi-accurate
    // approach by injecting a <mark> into the raw text if it matches.
    // WARNING: This is a bit hacky but works for the "text layer" requirement.

    // For now, let's just use the markdown as is, but we'll add a class to the container
    // and use the browser's ability to potentially find it? No, that's not good.

    return children
  }, [children, isSpeaking])

  return (
    <div className={cn(
      "prose-sm max-w-none transition-all duration-300",
      className,
      isSpeaking && "is-speaking"
    )}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          ...components,
          p: ({ children, ...props }) => {
            if (!isSpeaking) return <p {...props} className={cn("whitespace-pre-wrap mb-4 last:mb-0", props.className)}>{children}</p>

            return (
              <p {...props} className={cn("whitespace-pre-wrap mb-4 last:mb-0", props.className)}>
                <WordHighlighter globalIndex={currentCharIndex} fullText={stripMarkdownForSpeech(extractText(children))}>
                  {children}
                </WordHighlighter>
              </p>
            )
          }
        }}
      >
        {content}
      </Markdown>
    </div>
  )
})

function WordHighlighter({ children, globalIndex, fullText }: { children: React.ReactNode, globalIndex: number, fullText: string }) {
  const currentWord = useMemo(() => {
    if (globalIndex < 0 || globalIndex >= fullText.length) return ""

    let start = globalIndex
    while (start > 0 && !/\s/.test(fullText[start - 1])) start--

    let end = globalIndex
    while (end < fullText.length && !/\s/.test(fullText[end])) end++

    return fullText.slice(start, end).trim()
  }, [globalIndex, fullText])

  if (!currentWord) return <>{children}</>

  const highlightWord = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      const parts = node.split(new RegExp(`(\\b${currentWord}\\b)`, 'gi'))
      return parts.map((part, i) =>
        part.toLowerCase() === currentWord.toLowerCase()
          ? <mark key={i} className="bg-primary/30 text-foreground rounded px-0.5">{part}</mark>
          : part
      )
    }
    if (React.isValidElement(node)) {
      const children = (node.props as any).children
      return React.cloneElement(node, {
        ...(node.props as any),
        children: React.Children.map(children, highlightWord)
      } as any)
    }
    return node
  }

  return <>{React.Children.map(children, highlightWord)}</>
}

