import React, { useMemo } from "react"

export interface OpenUINode {
  id: string
  type: string
  props: Record<string, any>
  children: OpenUINode[]
  indent: number
}

/**
 * Tokenizes and parses attributes from a line string:
 * Supports key="val", key='val', key=val, and bare flags.
 * Tolerant of unclosed quotes during streaming.
 */
export function parseAttributes(attrString: string): Record<string, any> {
  const props: Record<string, any> = {}
  let i = 0
  const len = attrString.length

  while (i < len) {
    // Skip whitespace
    while (i < len && /\s/.test(attrString[i])) i++
    if (i >= len) break

    // Read key name
    const keyStart = i
    while (i < len && /[a-zA-Z0-9_\-]/.test(attrString[i])) i++
    const key = attrString.slice(keyStart, i)
    if (!key) {
      i++
      continue
    }

    // Skip whitespace before '='
    while (i < len && /\s/.test(attrString[i])) i++

    if (i < len && attrString[i] === "=") {
      i++ // Skip '='
      while (i < len && /\s/.test(attrString[i])) i++

      if (i >= len) {
        props[key] = ""
        break
      }

      const quoteChar = attrString[i]
      if (quoteChar === '"' || quoteChar === "'") {
        i++ // Skip quote
        let val = ""
        let escaped = false
        while (i < len) {
          const ch = attrString[i]
          if (escaped) {
            val += ch
            escaped = false
          } else if (ch === "\\") {
            escaped = true
          } else if (ch === quoteChar) {
            i++ // Skip closing quote
            break
          } else {
            val += ch
          }
          i++
        }
        props[key] = val
      } else {
        // Unquoted value
        const valStart = i
        while (i < len && !/\s/.test(attrString[i])) i++
        const rawVal = attrString.slice(valStart, i)
        if (rawVal === "true") props[key] = true
        else if (rawVal === "false") props[key] = false
        else if (!isNaN(Number(rawVal)) && rawVal.trim() !== "") props[key] = Number(rawVal)
        else props[key] = rawVal
      }
    } else {
      // Bare boolean flag
      props[key] = true
    }
  }

  return props
}

/**
 * Line-based parser for OpenUI DSL.
 * Builds an AST of nodes with nesting support based on indentation.
 */
export function parseOpenUIDSL(source: string): OpenUINode[] {
  if (!source || !source.trim()) return []

  const lines = source.split(/\r?\n/)
  const rootNodes: OpenUINode[] = []
  const stack: OpenUINode[] = []

  lines.forEach((line, lineIndex) => {
    // Ignore empty lines or comments
    if (!line.trim() || line.trim().startsWith("#") || line.trim().startsWith("//")) {
      return
    }

    const leadingSpaces = line.search(/\S/)
    const trimmed = line.trim()

    // First word is component name
    const match = trimmed.match(/^([a-zA-Z0-9_\-]+)(.*)$/)
    if (!match) return

    const [, type, rest] = match
    const props = parseAttributes(rest)

    const node: OpenUINode = {
      id: `openui-${lineIndex}-${type}`,
      type,
      props,
      children: [],
      indent: leadingSpaces,
    }

    // Find parent in stack based on indentation
    while (stack.length > 0 && stack[stack.length - 1].indent >= leadingSpaces) {
      stack.pop()
    }

    if (stack.length === 0) {
      rootNodes.push(node)
    } else {
      stack[stack.length - 1].children.push(node)
    }

    stack.push(node)
  })

  return rootNodes
}

export interface OpenUIParserProps {
  source: string
  components: Record<string, React.ComponentType<any>>
  fallback?: React.ReactNode
  className?: string
}

export function OpenUIParser({
  source,
  components,
  fallback = <div className="animate-pulse text-xs text-muted-foreground py-2">Rendering interface...</div>,
  className,
}: OpenUIParserProps) {
  const nodes = useMemo(() => parseOpenUIDSL(source), [source])

  if (!nodes.length) {
    return <>{fallback}</>
  }

  function renderNode(node: OpenUINode): React.ReactNode {
    const Component = components[node.type]
    if (!Component) {
      return null
    }

    const children = node.children.length ? node.children.map(renderNode) : undefined
    return (
      <Component key={node.id} {...node.props}>
        {children}
      </Component>
    )
  }

  return <div className={className || "openui-container w-full space-y-1"}>{nodes.map(renderNode)}</div>
}
