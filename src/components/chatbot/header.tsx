import { useState, lazy, Suspense } from "react"
import { RefreshCw, X, Maximize2, Minimize2, Home, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ServiceMetadata } from "@/core/services/types"
import type { VoiceConfig } from "@/lib/voice.sdk"

const Setting = lazy(() => import("./setting"))
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface HeaderProps {
  metadata: ServiceMetadata | null
  selectedAgent: string
  selectedModel: string
  onAgentChange: (agent: string) => void
  onModelChange: (model: string) => void
  onClose?: () => void
  onRefresh?: () => void
  onHome?: () => void
  onHistory?: () => void
  className?: string

  title?: string
  titleUrl?: string
  subtitle?: string
  // Voice props
  voiceConfig?: VoiceConfig
  onVoiceConfigChange?: (config: Partial<VoiceConfig>) => void
  availableVoices?: SpeechSynthesisVoice[]
  selectedVoice?: SpeechSynthesisVoice | null
  onVoiceChange?: (voice: SpeechSynthesisVoice | null) => void
  autoSpeak?: boolean
  onAutoSpeakChange?: (enabled: boolean) => void
  isMaximized?: boolean
  onMaximize?: () => void
  avatar?: string
  backendStatus?: import("@/core/services/types").HealthStatus
}

function TitleContent({
  avatar,
  title,
  backendStatus,
  subtitle,
  selectedAgent,
}: {
  avatar?: string
  title: string
  backendStatus?: import("@/core/services/types").HealthStatus
  subtitle?: string
  selectedAgent: string
}) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <Avatar className="size-9 border border-border/40 shadow-sm transition-transform group-hover:scale-105">
          <AvatarImage src={avatar} />
          <AvatarFallback>{title}</AvatarFallback>
        </Avatar>
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              className={cn(
                "absolute bottom-0 right-0 size-2.5 rounded-full ring-2 ring-background shadow-sm transition-colors duration-500",
                backendStatus?.status === "ok" ? "bg-emerald-500 animate-pulse" :
                  backendStatus?.status === "error" ? "bg-rose-500" :
                    "bg-amber-400 animate-bounce"
              )}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center" className="text-[10px] py-1 px-2">
            {backendStatus?.status === "ok" ? "Backend Online" :
              backendStatus?.status === "error" ? "Backend Offline" :
                "Checking Status..."}
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-semibold text-foreground/90 tracking-tight leading-none group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-[11px] text-muted-foreground font-medium leading-none capitalize">
          {subtitle || selectedAgent.replace(/-/g, " ")}
        </p>
      </div>
    </div>
  )
}

export function Header({
  metadata,
  selectedAgent,
  selectedModel,
  onAgentChange,
  onModelChange,
  onClose,
  onRefresh,
  onHome,
  onHistory,
  className,
  title = "Portfolio Assistant",
  titleUrl,
  subtitle,
  voiceConfig,
  onVoiceConfigChange,
  availableVoices,
  selectedVoice,
  onVoiceChange,
  autoSpeak,
  onAutoSpeakChange,
  isMaximized,
  onMaximize,
  avatar,
  backendStatus,
}: HeaderProps) {
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


  return (
    <TooltipProvider delayDuration={300}>
      <div
        className={cn(
          "flex items-center justify-between border-b border-border/40 bg-background/80 p-3.5 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
          className
        )}
      >
        {/* Left */}
        {titleUrl ? (
          <a
            href={titleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:outline-none rounded-md"
          >
            <TitleContent avatar={avatar} title={title} backendStatus={backendStatus} subtitle={subtitle} selectedAgent={selectedAgent} />
          </a>
        ) : (
          <TitleContent avatar={avatar} title={title} backendStatus={backendStatus} subtitle={subtitle} selectedAgent={selectedAgent} />
        )}

        {/* Right */}
        <div className="flex items-center gap-1">
          {/* Group 1: Navigation & Discovery */}
          {onHome && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onHome}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>Home View</TooltipContent>
            </Tooltip>
          )}

          <Suspense fallback={<div className="h-8 w-8 rounded-full bg-muted animate-pulse" />}>
            <Setting
              metadata={metadata}
              selectedAgent={selectedAgent}
              selectedModel={selectedModel}
              onAgentChange={onAgentChange}
              onModelChange={onModelChange}
              voiceConfig={voiceConfig}
              onVoiceConfigChange={onVoiceConfigChange}
              availableVoices={availableVoices}
              selectedVoice={selectedVoice}
              onVoiceChange={onVoiceChange}
              autoSpeak={autoSpeak}
              onAutoSpeakChange={onAutoSpeakChange}
            />
          </Suspense>

          {onHistory && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onHistory}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <History className="h-4 w-4" />
                  <span className="sr-only">Chat history</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>Chat History</TooltipContent>
            </Tooltip>
          )}

          {/* Group 2: Session Actions */}
          {onRefresh && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <RefreshCw
                    className={cn(
                      "h-4 w-4",
                      isRefreshing && "animate-spin text-primary"
                    )}
                  />
                  <span className="sr-only">Restart Chat</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>Restart Chat</TooltipContent>
            </Tooltip>
          )}

          {/* Group 3: Window Management */}
          {onMaximize && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onMaximize}
                  className="rounded-full h-8 w-8 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  {isMaximized ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {isMaximized ? "Minimize" : "Maximize"}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>
                {isMaximized ? "Minimize View" : "Maximize View"}
              </TooltipContent>
            </Tooltip>
          )}

          {onClose && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full h-8 w-8 hover:bg-destructive/10 text-muted-foreground hover:text-destructive flex items-center justify-center transition-all duration-200"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>Close Assistant</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
