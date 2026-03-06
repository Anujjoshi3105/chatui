import { useCallback, useEffect, useMemo, memo } from "react"
import { Header } from "./header"
import { AgentSelector } from "./agent-selector"
import { Chat, useChatContext } from "@/components/chat"
import { ChatHistorySheet } from "./chat-history-sheet"
import { cn } from "@/lib/utils"
import { useChatSessionStore, useChatUIStore } from "@/store/chatbot-store"
import Footer from "./footer"
import { useVoice } from "@/hooks/use-voice"
import { Disclaimer } from "./disclaimer"
import type { ChatRuntimeConfig } from "@/core/runtime/chat-state"
import type { ServiceMetadata } from "@/core/services/types"
export interface ChatbotHeaderProps {
  show?: boolean
  title?: string
  titleUrl?: string
  subtitle?: string
  avatar?: string
  allowMaximize?: boolean
  onMaximizeToggle?: (isMaximized: boolean) => void
  onClose?: () => void
  onRefresh?: () => void
  onHome?: () => void
}

export interface ChatbotFooterProps {
  show?: boolean
  text?: string
  subtitle?: string
}

export interface ChatbotStarterProps {
  message?: string
  suggestions?: string[]
}

export interface ChatbotProps {
  url: string
  agent?: string
  model?: string
  placeholder?: string
  threadId?: string
  userId?: string
  apiKey?: string
  stream?: boolean
  className?: string
  header?: ChatbotHeaderProps
  footer?: ChatbotFooterProps
  starter?: ChatbotStarterProps
  isMaximized?: boolean
}

const MemoizedChatMessages = memo(Chat.Messages)
const MemoizedChatInput = memo(Chat.Input)
const MemoizedChatSuggestions = memo(Chat.Suggestions)


function ChatbotLayout({
  effectiveAgent,
  showHeader,
  headerTitle,
  headerTitleUrl,
  headerSubtitle,
  avatar,
  allowMaximize,
  onClose,
  onRefresh,
  onHome,
  showFooter,
  footerContent,
  footerSubtitle,
  placeholder,
  starterMessage,
  userId,
  voiceConfig,
  onVoiceConfigChange,
  availableVoices,
  selectedVoice,
  onVoiceChange,
  autoSpeak,
  onAutoSpeakChange,
  deleteThread,
  onMaximizeToggle,
  isMaximized: propsIsMaximized,
}: {
  effectiveAgent: string
  showHeader: boolean
  headerTitle?: string
  headerTitleUrl?: string
  headerSubtitle?: string
  avatar?: string
  allowMaximize: boolean
  onClose?: () => void
  onRefresh?: () => void
  onHome?: () => void
  showFooter: boolean
  footerContent?: string
  footerSubtitle?: string
  placeholder: string
  starterMessage?: string
  userId?: string
  voiceConfig?: import("@/lib/voice.sdk").VoiceConfig
  onVoiceConfigChange?: (config: Partial<import("@/lib/voice.sdk").VoiceConfig>) => void
  availableVoices?: SpeechSynthesisVoice[]
  selectedVoice?: SpeechSynthesisVoice | null
  onVoiceChange?: (v: SpeechSynthesisVoice | null) => void
  autoSpeak?: boolean
  onAutoSpeakChange?: (enabled: boolean) => void
  deleteThread?: (threadId: string) => Promise<void>
  onMaximizeToggle?: (isMaximized: boolean) => void
  isMaximized?: boolean
}) {
  const selectedAgent = useChatSessionStore((s) => s.selectedAgent)
  const setSelectedAgent = useChatSessionStore((s) => s.setSelectedAgent)
  const selectedModel = useChatSessionStore((s) => s.selectedModel)
  const setSelectedModel = useChatSessionStore((s) => s.setSelectedModel)
  const currentThreadId = useChatSessionStore((s) => s.currentThreadId)
  const setCurrentThreadId = useChatSessionStore((s) => s.setCurrentThreadId)
  const threadList = useChatSessionStore((s) => s.threadList)
  const setThreadList = useChatSessionStore((s) => s.setThreadList)
  const totalThreads = useChatSessionStore((s) => s.totalThreads)
  const setTotalThreads = useChatSessionStore((s) => s.setTotalThreads)
  const threadsLoading = useChatSessionStore((s) => s.threadsLoading)
  const setThreadsLoading = useChatSessionStore((s) => s.setThreadsLoading)

  const historySheetOpen = useChatUIStore((s) => s.historySheetOpen)
  const setHistorySheetOpen = useChatUIStore((s) => s.setHistorySheetOpen)
  const storeIsMaximized = useChatUIStore((s) => s.isMaximized)
  const setIsMaximized = useChatUIStore((s) => s.setIsMaximized)

  const isMaximized = propsIsMaximized ?? storeIsMaximized
  const { metadata, metadataLoading, backendStatus, clearChat, loadThread, getThreads, setThreadId, deleteThread: contextDeleteThread } =
    useChatContext()

  const effectiveDeleteThread = deleteThread ?? contextDeleteThread

  const handleAgentChange = useCallback(
    (newAgent: string) => {
      clearChat({ keepStarter: !!starterMessage })
      setCurrentThreadId(undefined)
      setThreadId(undefined)
      setSelectedAgent(newAgent)
    },
    [clearChat, starterMessage, setSelectedAgent, setCurrentThreadId, setThreadId]
  )

  const handleRefresh = useCallback(() => {
    clearChat({ keepStarter: !!starterMessage, createNewThread: true })
    setSelectedAgent("")
    setCurrentThreadId(undefined)
    setThreadId(undefined)
  }, [clearChat, starterMessage, setSelectedAgent, setCurrentThreadId, setThreadId])

  const effectiveOnRefresh = onRefresh ?? handleRefresh

  const handleOpenHistorySheet = useCallback(
    () => setHistorySheetOpen(true),
    [setHistorySheetOpen]
  )

  const handleSelectThread = useCallback(
    (threadIdToLoad: string) => {
      setHistorySheetOpen(false)
      loadThread(threadIdToLoad, userId)
      setCurrentThreadId(threadIdToLoad)
      setThreadId(threadIdToLoad)
    },
    [loadThread, setHistorySheetOpen, setCurrentThreadId, setThreadId, userId]
  )

  const toggleMaximize = useCallback(() => {
    const next = !isMaximized
    setIsMaximized(next)
    onMaximizeToggle?.(next)
  }, [isMaximized, setIsMaximized, onMaximizeToggle])

  return (
    <>
      {showHeader && (
        <Header
          metadata={metadata}
          selectedAgent={selectedAgent}
          selectedModel={selectedModel}
          onAgentChange={handleAgentChange}
          onModelChange={setSelectedModel}
          onClose={onClose}
          onRefresh={effectiveOnRefresh}
          onHome={onHome}
          onHistory={userId?.trim() ? handleOpenHistorySheet : undefined}
          voiceConfig={voiceConfig}
          onVoiceConfigChange={onVoiceConfigChange}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={onVoiceChange}
          autoSpeak={autoSpeak}
          onAutoSpeakChange={onAutoSpeakChange}
          isMaximized={isMaximized}
          onMaximize={allowMaximize ? toggleMaximize : undefined}
          title={headerTitle}
          titleUrl={headerTitleUrl}
          subtitle={headerSubtitle}
          avatar={avatar}
          backendStatus={backendStatus}
        />
      )}
      <ChatHistorySheet
        open={historySheetOpen}
        onOpenChange={setHistorySheetOpen}
        userId={userId}
        threadList={threadList}
        setThreadList={setThreadList}
        totalThreads={totalThreads}
        setTotalThreads={setTotalThreads}
        threadsLoading={threadsLoading}
        setThreadsLoading={setThreadsLoading}
        currentThreadId={currentThreadId}
        onSelectThread={handleSelectThread}
        onNewChat={effectiveOnRefresh}
        getThreads={getThreads}
        deleteThread={effectiveDeleteThread}
      />
      <div className="flex-1 overflow-hidden flex flex-col">
        {!effectiveAgent ? (
          <AgentSelector
            agents={metadata?.agents ?? []}
            loading={metadataLoading}
            onSelect={setSelectedAgent}
          />
        ) : (
          <>
            <MemoizedChatMessages className="flex-1 min-h-0" />
            <MemoizedChatSuggestions />
            <MemoizedChatInput placeholder={placeholder} />
          </>)}
      </div>
      {showFooter && (
        <Footer disclaimer={footerContent} subtitle={footerSubtitle} />
      )}
    </>
  )
}

export function Chatbot({
  url,
  agent: initialAgent,
  model: initialModel,
  placeholder = "Hi, how can I help you?",
  threadId,
  userId,
  apiKey,
  stream = true,
  className,
  header = {},
  footer = {},
  starter = {},
  isMaximized: propsIsMaximized,
}: ChatbotProps) {
  const {
    show: showHeader = true,
    title: headerTitle,
    titleUrl: headerTitleUrl,
    subtitle: headerSubtitle,
    avatar,
    allowMaximize = false,
    onMaximizeToggle,
    onClose,
    onRefresh,
    onHome,
  } = header

  const {
    show: showFooter = true,
    text: footerContent,
    subtitle: footerSubtitle,
  } = footer

  const { message: starterMessage, suggestions: starterSuggestions } = starter

  const storeIsMaximized = useChatUIStore((s) => s.isMaximized)
  const setIsMaximized = useChatUIStore((s) => s.setIsMaximized)
  const isMaximized = propsIsMaximized ?? storeIsMaximized

  const selectedAgent = useChatSessionStore((s) => s.selectedAgent)
  const setSelectedAgent = useChatSessionStore((s) => s.setSelectedAgent)
  const selectedModel = useChatSessionStore((s) => s.selectedModel)
  const setSelectedModel = useChatSessionStore((s) => s.setSelectedModel)
  const currentThreadId = useChatSessionStore((s) => s.currentThreadId)
  const setCurrentThreadId = useChatSessionStore((s) => s.setCurrentThreadId)

  useEffect(() => {
    if (initialAgent !== undefined) setSelectedAgent(initialAgent)
  }, [initialAgent, setSelectedAgent])

  useEffect(() => {
    if (initialModel !== undefined) setSelectedModel(initialModel)
  }, [initialModel, setSelectedModel])

  useEffect(() => {
    if (propsIsMaximized !== undefined) setIsMaximized(propsIsMaximized)
  }, [propsIsMaximized, setIsMaximized])

  const {
    isListening,
    startListening,
    stopListening,
    speak,
    availableVoices,
    selectedVoice,
    setSelectedVoice,
    voiceConfig,
    updateConfig,
    isRecognitionSupported,
  } = useVoice()

  const autoSpeak = useChatUIStore((s) => s.autoSpeak)
  const setAutoSpeak = useChatUIStore((s) => s.setAutoSpeak)

  const showDisclaimer = useChatUIStore((s) => s.showDisclaimer)
  const setShowDisclaimer = useChatUIStore((s) => s.setShowDisclaimer)

  useEffect(() => {
    const savedVoiceConfig = localStorage.getItem("voice-config")
    if (savedVoiceConfig) {
      try {
        updateConfig(JSON.parse(savedVoiceConfig))
      } catch (e) {
        console.error("Failed to load voice config", e)
      }
    }
    const savedAutoSpeak = localStorage.getItem("auto-speak")
    if (savedAutoSpeak) setAutoSpeak(savedAutoSpeak === "true")
    if (!localStorage.getItem("chatbot-consent")) setShowDisclaimer(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateConfig])

  const handleDisclaimerAccept = useCallback(() => {
    localStorage.setItem("chatbot-consent", "true")
    setShowDisclaimer(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem("voice-config", JSON.stringify(voiceConfig))
  }, [voiceConfig])
  useEffect(() => {
    localStorage.setItem("auto-speak", String(autoSpeak))
  }, [autoSpeak])

  const metadata = useChatSessionStore((s) => s.metadata)
  const setMetadata = useChatSessionStore((s) => s.setMetadata)

  const onMetadataLoaded = useCallback((meta: ServiceMetadata) => {
    setMetadata(meta)
    if (!selectedModel) {
      setSelectedModel(meta.default_model)
    }
  }, [selectedModel, setSelectedModel, setMetadata])

  const defaultSuggestionsForChat = useMemo(() => {
    if (starterSuggestions !== undefined) return starterSuggestions
    return metadata?.agents?.find((a) => a.key === selectedAgent)?.prompts ?? []
  }, [starterSuggestions, metadata?.agents, selectedAgent])

  const effectiveAgent =
    selectedAgent || (currentThreadId && metadata?.default_agent) || ""

  const runtimeConfig = useMemo<ChatRuntimeConfig>(
    () => ({
      url,
      agent: effectiveAgent || undefined,
      model: selectedModel || undefined,
      threadId: currentThreadId ?? threadId,
      userId,
      stream,
      starterMessage,
      starterSuggestions,
      apiKey,
      onStreamEnd: (lastContent) => {
        if (autoSpeak && lastContent && speak) speak(lastContent)
      },
    }),
    [
      url,
      selectedAgent,
      selectedModel,
      currentThreadId,
      threadId,
      userId,
      stream,
      starterMessage,
      starterSuggestions,
      autoSpeak,
      apiKey,
      speak,
    ]
  )

  useEffect(() => {
    if (threadId != null) setCurrentThreadId(threadId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadId])

  useEffect(() => {
    if (currentThreadId && !selectedAgent && metadata?.default_agent)
      setSelectedAgent(metadata.default_agent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentThreadId, selectedAgent, metadata?.default_agent])

  return (
    <div
      className={cn(
        "chatbot-theme flex flex-col h-full transition-all duration-300 ease-in-out relative",
        className,
        isMaximized &&
        "fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none rounded-none border-0"
      )}
    >
      <Disclaimer open={showDisclaimer} onAccept={handleDisclaimerAccept} />
      <Chat.Root
        config={runtimeConfig}
        initialSuggestions={defaultSuggestionsForChat}
        voiceConfig={voiceConfig}
        isListening={isListening}
        startListening={startListening}
        stopListening={stopListening}
        isSpeechSupported={isRecognitionSupported}
        onMetadata={onMetadataLoaded}
      >
        <ChatbotLayout
          effectiveAgent={effectiveAgent}
          showHeader={showHeader}
          headerTitle={headerTitle}
          headerTitleUrl={headerTitleUrl}
          headerSubtitle={headerSubtitle}
          avatar={avatar}
          allowMaximize={allowMaximize}
          onClose={onClose}
          onRefresh={onRefresh}
          onHome={onHome}
          showFooter={showFooter}
          footerContent={footerContent}
          footerSubtitle={footerSubtitle}
          placeholder={placeholder}
          starterMessage={starterMessage}
          userId={userId}
          voiceConfig={voiceConfig}
          onVoiceConfigChange={updateConfig}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={setSelectedVoice}
          autoSpeak={autoSpeak}
          onAutoSpeakChange={setAutoSpeak}
          onMaximizeToggle={onMaximizeToggle}
          isMaximized={isMaximized}
        />
      </Chat.Root>
    </div>
  )
}
