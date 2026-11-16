import { readCards, readSources, readAttachments, safeActionUrl } from "@/core/services/interaction-types"

export function ResponseContent({ data, onAction }: { data?: Record<string, unknown>; onAction?: () => void }) {
  const cards = readCards(data?.cards)
  const sources = readSources(data?.sources)
  const files = readAttachments(data?.attachments)
  if (!cards.length && !sources.length && !files.length) return null
  return <div className="w-full min-w-0 space-y-3">
    {files.map(file => <p key={file.id} className="rounded-lg border px-3 py-2 text-sm break-words">Attachment: {file.name}</p>)}
    {cards.map((card, index) => {
      const url = safeActionUrl(card.action?.url)
      return <article key={index} className="rounded-xl border bg-card p-4 space-y-2">
        <h4 className="font-semibold break-words">{card.title}</h4>
        <p className="text-sm text-muted-foreground break-words">{card.description}</p>
        {url && typeof card.action?.label === "string" && <a href={url} target="_blank" rel="noopener noreferrer" onClick={onAction}
          className="inline-flex min-h-11 items-center text-sm underline underline-offset-4 break-all">{card.action.label}</a>}
      </article>
    })}
    {sources.length > 0 && <details className="rounded-lg border p-3 text-sm"><summary className="cursor-pointer min-h-8">Sources for this answer ({sources.length})</summary>
      <ol className="list-decimal pl-5 space-y-2">{sources.map((source, index) => <li key={index}>
        <a href={safeActionUrl(source.url)} target="_blank" rel="noopener noreferrer" className="underline break-words">{source.title}</a>
        {typeof source.excerpt === "string" && <p className="text-muted-foreground">{source.excerpt}</p>}
      </li>)}</ol>
    </details>}
  </div>
}
