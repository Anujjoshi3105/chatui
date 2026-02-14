import { useState, useCallback, useEffect, useMemo, memo } from "react"
import { Header } from "./header"
import { AgentSelector } from "./agent-selector"
import { Chat, useChatContext } from "@/components/chat"
import { ChatHistorySheet } from "./chat-history-sheet"
import { cn } from "@/lib/utils"
import Footer from "./footer"
import { useVoice } from "@/hooks/use-voice"
import { Disclaimer } from "./disclaimer"
import type { ChatRuntimeConfig } from "@/core/runtime/chat-state"
import type { ServiceMetadata, ThreadSummary } from "@/core/services/types"

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
  setSelectedAgent,
  setSelectedModel,
  selectedAgent,
  effectiveAgent,
  selectedModel,
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
  currentThreadId: _currentThreadId,
  setCurrentThreadId,
  historySheetOpen,
  setHistorySheetOpen,
  threadList,
  setThreadList,
  totalThreads,
  setTotalThreads,
  threadsLoading,
  setThreadsLoading,
  isMaximized,
  toggleMaximize,
  voiceConfig,
  onVoiceConfigChange,
  availableVoices,
  selectedVoice,
  onVoiceChange,
  autoSpeak,
  onAutoSpeakChange,
}: {
  setSelectedAgent: (a: string) => void
  setSelectedModel: (m: string) => void
  selectedAgent: string
  effectiveAgent: string
  selectedModel: string
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
  threadId?: string
  currentThreadId: string | undefined
  setCurrentThreadId: (id: string | undefined) => void
  historySheetOpen: boolean
  setHistorySheetOpen: (open: boolean) => void
  threadList: ThreadSummary[]
  setThreadList: (list: ThreadSummary[] | ((prev: ThreadSummary[]) => ThreadSummary[])) => void
  totalThreads: number
  setTotalThreads: (n: number) => void
  threadsLoading: boolean
  setThreadsLoading: (v: boolean) => void
  isMaximized: boolean
  toggleMaximize: () => void
  voiceConfig?: import("@/lib/voice.sdk").VoiceConfig
  onVoiceConfigChange?: (config: Partial<import("@/lib/voice.sdk").VoiceConfig>) => void
  availableVoices?: SpeechSynthesisVoice[]
  selectedVoice?: SpeechSynthesisVoice | null
  onVoiceChange?: (v: SpeechSynthesisVoice | null) => void
  autoSpeak?: boolean
  onAutoSpeakChange?: (enabled: boolean) => void
}) {
  const { metadata, metadataLoading, clearChat, loadThread, getThreads, setThreadId } =
    useChatContext()

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
  }, [clearChat, starterMessage])

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
        currentThreadId={_currentThreadId}
        onSelectThread={handleSelectThread}
        getThreads={getThreads}
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
    onMaximizeToggle: onMaximizeToggleProp,
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

  const [selectedAgent, setSelectedAgent] = useState(initialAgent ?? "")
  const [selectedModel, setSelectedModel] = useState(initialModel ?? "")
  const [internalIsMaximized, setInternalIsMaximized] = useState(false)
  const isMaximized = propsIsMaximized ?? internalIsMaximized
  const [currentThreadId, setCurrentThreadId] = useState<string | undefined>(threadId)
  const [historySheetOpen, setHistorySheetOpen] = useState(false)
  const [threadsLoading, setThreadsLoading] = useState(false)
  const [threadList, setThreadList] = useState<ThreadSummary[]>([])
  const [totalThreads, setTotalThreads] = useState(0)

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

  const [autoSpeak, setAutoSpeak] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)

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
  }, [updateConfig])

  const handleDisclaimerAccept = useCallback(() => {
    localStorage.setItem("chatbot-consent", "true")
    setShowDisclaimer(false)
  }, [])

  useEffect(() => {
    localStorage.setItem("voice-config", JSON.stringify(voiceConfig))
  }, [voiceConfig])
  useEffect(() => {
    localStorage.setItem("auto-speak", String(autoSpeak))
  }, [autoSpeak])

  const [metadata, setMetadata] = useState<ServiceMetadata | null>(null)

  const onMetadataLoaded = useCallback((meta: ServiceMetadata) => {
    setMetadata(meta)
    setSelectedModel((prev) => (prev ? prev : meta.default_model))
  }, [])

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
  }, [threadId])

  useEffect(() => {
    if (currentThreadId && !selectedAgent && metadata?.default_agent)
      setSelectedAgent(metadata.default_agent)
  }, [currentThreadId, selectedAgent, metadata?.default_agent])

  const toggleMaximize = useCallback(() => {
    const newState = !isMaximized
    setInternalIsMaximized(newState)
    onMaximizeToggleProp?.(newState)
  }, [isMaximized, onMaximizeToggleProp])

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
          setSelectedAgent={setSelectedAgent}
          setSelectedModel={setSelectedModel}
          selectedAgent={selectedAgent}
          effectiveAgent={effectiveAgent}
          selectedModel={selectedModel}
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
          threadId={threadId}
          currentThreadId={currentThreadId}
          setCurrentThreadId={setCurrentThreadId}
          historySheetOpen={historySheetOpen}
          setHistorySheetOpen={setHistorySheetOpen}
          threadList={threadList}
          setThreadList={setThreadList}
          totalThreads={totalThreads}
          setTotalThreads={setTotalThreads}
          threadsLoading={threadsLoading}
          setThreadsLoading={setThreadsLoading}
          isMaximized={isMaximized}
          toggleMaximize={toggleMaximize}
          voiceConfig={voiceConfig}
          onVoiceConfigChange={updateConfig}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={setSelectedVoice}
          autoSpeak={autoSpeak}
          onAutoSpeakChange={setAutoSpeak}
        />
      </Chat.Root>
    </div>
  )
}
