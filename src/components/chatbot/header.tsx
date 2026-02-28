import { useState } from "react"
import { RefreshCw, X, Maximize2, Minimize2, Home, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ServiceMetadata } from "@/hooks/use-chatbot-api"
import Setting from "./setting"
import type { VoiceConfig } from "@/lib/voice.sdk"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useChatbotStore } from "@/store/chatbot-store"

interface HeaderProps {
  metadata: ServiceMetadata | null
  onClose?: () => void
  onRefresh?: () => void
  onHome?: () => void
  onHistory?: () => void
  className?: string

  onVoiceConfigChange?: (config: Partial<VoiceConfig>) => void
  availableVoices?: SpeechSynthesisVoice[]
  selectedVoice?: SpeechSynthesisVoice | null
  onVoiceChange?: (voice: SpeechSynthesisVoice | null) => void
}

export function Header({
  metadata,
  onClose,
  onRefresh,
  onHome,
  onHistory,
  className,
  onVoiceConfigChange,
  availableVoices,
  selectedVoice,
  onVoiceChange,
}: HeaderProps) {
  const store = useChatbotStore(s => s)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    if (isRefreshing) return

    setIsRefreshing(true)
    onRefresh?.()

    // stop animation after a few seconds
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  const title = store.headerTitle || "Portfolio Assistant"

  const TitleContent = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <Avatar className="size-9 border border-border/40 shadow-sm transition-transform group-hover:scale-105">
          <AvatarImage src={store.avatar} />
          <AvatarFallback>{title}</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-background shadow-sm animate-pulse" />
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-semibold text-foreground/90 tracking-tight leading-none group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-[11px] text-muted-foreground font-medium leading-none capitalize">
          {store.headerSubtitle || store.selectedAgent.replace(/-/g, " ")}
        </p>
      </div>
    </div>
  )

  return (
    <TooltipProvider delayDuration={300}>
      <div
        className={cn(
          "flex items-center justify-between border-b border-border/40 bg-background/80 p-3.5 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
          className
        )}
      >
        {/* Left */}
        {store.headerTitleUrl ? (
          <a
            href={store.headerTitleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:outline-none rounded-md"
          >
            <TitleContent />
          </a>
        ) : (
          <TitleContent />
        )}

        {/* Right */}
        <div className="flex items-center gap-0.5">
          {onHome && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onHome}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>
          )}

          {onHistory && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onHistory}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <History className="h-4 w-4" />
                  <span className="sr-only">Chat history</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Chat history</TooltipContent>
            </Tooltip>
          )}

          {store.allowMaximize && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => store.toggleMaximize()}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  {store.isMaximized ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {store.isMaximized ? "Minimize" : "Maximize"}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{store.isMaximized ? "Minimize" : "Maximize"}</TooltipContent>
            </Tooltip>
          )}

          <Setting
            metadata={metadata}
            selectedAgent={store.selectedAgent}
            selectedModel={store.selectedModel}
            onAgentChange={store.setSelectedAgent}
            onModelChange={store.setSelectedModel}
            voiceConfig={store.voiceConfig}
            onVoiceConfigChange={onVoiceConfigChange}
            availableVoices={availableVoices}
            selectedVoice={selectedVoice}
            onVoiceChange={onVoiceChange}
            autoSpeak={store.autoSpeak}
            onAutoSpeakChange={store.setAutoSpeak}
          />

          {onRefresh && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RefreshCw
                    className={cn(
                      "h-4 w-4",
                      isRefreshing && "animate-spin text-primary"
                    )}
                  />
                  <span className="sr-only">Refresh Chat</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Restart</TooltipContent>
            </Tooltip>
          )}

          {onClose && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full h-8 w-8 hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors ml-1"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Close Chat</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
