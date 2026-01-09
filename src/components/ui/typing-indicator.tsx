export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex space-x-0.5">
        <div className="size-2 rounded-full bg-primary/60 animate-typing-dot-bounce" />
        <div className="size-2 rounded-full bg-primary/60 animate-typing-dot-bounce [animation-delay:500ms]" />
        <div className="size-2 rounded-full bg-primary/60 animate-typing-dot-bounce [animation-delay:1000ms]" />
      </div>
    </div>
  )
}
