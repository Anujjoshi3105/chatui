import React, { useCallback, memo, useId } from "react"
import { cn } from "@/lib/utils"
import type { AgentInfo } from "@/hooks/use-chatbot-api"
import { MessageSquare, Bot, Sparkles, Zap, ChevronRight } from "lucide-react"

const AGENT_ICONS = [Bot, Sparkles, MessageSquare, Zap] as const
function getAgentIcon(index: number) {
  return AGENT_ICONS[index % AGENT_ICONS.length]
}

interface AgentSelectorProps {
  agents: AgentInfo[]
  loading?: boolean
  onSelect: (agentKey: string) => void
  selectedKey?: string
  className?: string
}

function SkeletonGrid({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-1 flex-col overflow-auto p-5 sm:p-6", className)}>
      <div className="grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex h-[100px] animate-pulse flex-col gap-3 rounded-2xl border border-border/50 bg-muted/30 p-4"
            aria-hidden
          >
            <div className="flex items-center gap-3">
              <div className="size-10 shrink-0 rounded-xl bg-muted" />
              <div className="h-4 w-28 rounded bg-muted" />
            </div>
            <div className="h-3 w-full rounded bg-muted/70" />
            <div className="h-3 w-3/4 rounded bg-muted/50" />
          </div>
        ))}
      </div>
    </div>
  )
}

const AgentCard = memo(function AgentCard({
  agent,
  index,
  onSelect,
  selected,
}: {
  agent: AgentInfo
  index: number
  onSelect: (key: string) => void
  selected?: boolean
}) {
  const Icon = getAgentIcon(index)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onSelect(agent.key)
    }
  }

  return (
    <li>
      <button
        type="button"
        aria-pressed={selected}
        onClick={() => onSelect(agent.key)}
        onKeyDown={handleKeyDown}
        className={cn(
          "group relative flex min-h-[88px] w-full flex-col items-start gap-2 rounded-2xl border bg-card p-4 text-left shadow-sm transition-all duration-200",
          "hover:border-primary/30 hover:bg-primary/[0.06] hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          selected ? "border-primary/80 bg-primary/[0.04] shadow" : "border-border/60"
        )}
      >
        <div className="flex w-full items-start gap-3">
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors",
              "bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:text-primary"
            )}
          >
            <Icon className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <span className={cn("block font-semibold text-foreground transition-colors group-hover:text-primary capitalize")}>{agent.key}</span>
            {agent.description ? (
              <span className="mt-0.5 line-clamp-2 block text-[13px] leading-snug text-muted-foreground">
                {agent.description}
              </span>
            ) : (
              <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">No description</span>
            )}
          </div>
          <ChevronRight
            className={cn(
              "size-4 shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:text-primary",
              "mt-1.5"
            )}
            aria-hidden
          />
        </div>
      </button>
    </li>
  )
})
AgentCard.displayName = "AgentCard"

export function AgentSelector({ agents, loading, onSelect, selectedKey, className }: AgentSelectorProps) {
  const listId = useId()

  const handleSelect = useCallback(
    (key: string) => {
      onSelect(key)
    },
    [onSelect]
  )

  if (loading) return <SkeletonGrid className={className} />

  if (!agents?.length) {
    return (
      <div className={cn("flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center", className)}>
        <div className="flex size-14 items-center justify-center rounded-2xl bg-muted/50">
          <MessageSquare className="size-7 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <p className="font-medium text-foreground">No agents available</p>
          <p className="text-sm text-muted-foreground">Check back later or contact support.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-2 overflow-auto p-5 sm:p-6 h-full", className)}>
      <ul id={listId} role="list" className="grid gap-2">
        {agents.map((agent, index) => (
          <AgentCard
            key={agent.key}
            agent={agent}
            index={index}
            onSelect={handleSelect}
            selected={selectedKey === agent.key}
          />
        ))}
      </ul>
    </div>
  )
}

export default AgentSelector
