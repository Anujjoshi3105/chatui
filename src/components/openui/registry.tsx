import React, { memo } from "react"
import { ExternalLink, Github, Mail, Calendar, Briefcase, Code2, Sparkles } from "lucide-react"

export interface ProjectCardProps {
  title: string
  description?: string
  tags?: string
  demo?: string
  repo?: string
  onAction?: () => void
}

export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  tags,
  demo,
  repo,
  onAction,
}: ProjectCardProps) {
  const tagList = tags
    ? tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : []

  return (
    <div className="my-3 w-full rounded-xl border border-border bg-card p-4 shadow-sm transition hover:shadow-md dark:border-border/60 dark:bg-card/90">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h4 className="text-base font-semibold text-foreground tracking-tight break-words">
            {title}
          </h4>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onAction}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-background/60 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              title="View Repository"
              aria-label={`View ${title} repository`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onAction}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition hover:bg-primary/20"
              title="Open Live Demo"
              aria-label={`Open ${title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed break-words">
          {description}
        </p>
      )}
      {tagList.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tagList.map((tag, i) => (
            <span
              key={i}
              className="rounded-md border border-border/40 bg-secondary/80 px-2 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
})

export interface SkillGroupProps {
  category: string
  skills?: string
}

export const SkillGroup = memo(function SkillGroup({ category, skills }: SkillGroupProps) {
  const skillList = skills
    ? skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : []

  return (
    <div className="my-3 w-full rounded-xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-sm dark:border-border/60">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Code2 className="h-4 w-4" />
        </div>
        <h4 className="text-sm font-semibold text-foreground tracking-tight">
          {category}
        </h4>
      </div>
      {skillList.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {skillList.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-foreground transition hover:bg-primary/10"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  )
})

export interface ExperienceProps {
  role: string
  company: string
  period?: string
  description?: string
  achievements?: string
}

export const Experience = memo(function Experience({
  role,
  company,
  period,
  description,
  achievements,
}: ExperienceProps) {
  const achievementList = achievements
    ? achievements
        .split(/[;\n]/)
        .map((a) => a.trim().replace(/^[-•*]\s*/, ""))
        .filter(Boolean)
    : []

  return (
    <div className="my-3 w-full rounded-xl border border-border bg-card p-4 shadow-sm dark:border-border/60">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Briefcase className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">{role}</h4>
            <p className="text-xs font-medium text-muted-foreground">{company}</p>
          </div>
        </div>
        {period && (
          <span className="self-start rounded-full border border-border/50 bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground sm:self-auto">
            {period}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed break-words">
          {description}
        </p>
      )}
      {achievementList.length > 0 && (
        <ul className="mt-2.5 space-y-1 pl-4 text-xs text-muted-foreground list-disc">
          {achievementList.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})

export interface ContactActionProps {
  type?: "email" | "calendar" | "link" | string
  label: string
  address?: string
  url?: string
}

export const ContactAction = memo(function ContactAction({
  type = "link",
  label,
  address,
  url,
}: ContactActionProps) {
  const href = address
    ? address.includes("@") && !address.startsWith("mailto:")
      ? `mailto:${address}`
      : address
    : url || "#"

  const isEmail = type === "email" || href.startsWith("mailto:")
  const isCalendar = type === "calendar"

  return (
    <div className="my-2 inline-block">
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        {isEmail ? (
          <Mail className="h-4 w-4" />
        ) : isCalendar ? (
          <Calendar className="h-4 w-4" />
        ) : (
          <ExternalLink className="h-4 w-4" />
        )}
        <span>{label}</span>
      </a>
    </div>
  )
})

export interface SuggestionsProps {
  chips?: string
  onSelect?: (text: string) => void
}

export const Suggestions = memo(function Suggestions({ chips, onSelect }: SuggestionsProps) {
  const chipList = chips
    ? chips
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean)
    : []

  if (!chipList.length) return null

  const handleSelect = (chip: string) => {
    if (onSelect) {
      onSelect(chip)
    } else {
      window.dispatchEvent(new CustomEvent("chatui:suggestion", { detail: chip }))
    }
  }

  return (
    <div className="my-2.5 flex flex-wrap items-center gap-1.5">
      <span className="flex items-center gap-1 text-xs text-muted-foreground mr-1">
        <Sparkles className="h-3 w-3 text-primary" /> Suggestions:
      </span>
      {chipList.map((chip, i) => (
        <button
          key={i}
          type="button"
          onClick={() => handleSelect(chip)}
          className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-foreground transition hover:bg-primary/15 hover:scale-[0.98] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          {chip}
        </button>
      ))}
    </div>
  )
})

export const portfolioRegistry: Record<string, React.ComponentType<any>> = {
  ProjectCard,
  SkillGroup,
  SkillBadgeGroup: SkillGroup,
  Experience,
  ExperienceTimeline: Experience,
  ContactAction,
  Suggestions,
  QuickReplies: Suggestions,
}
