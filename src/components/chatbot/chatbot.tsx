import { useCallback, useEffect, useMemo, memo, useState, lazy, Suspense } from "react"
import { useShallow } from "zustand/react/shallow"
import { ChatStatus } from "@/components/chat/chat-status"
import { ConversationExport } from "@/components/chat/conversation-export"
import type { ChatEvent, AttachmentAdapter } from "@/core/services/interaction-types"
import { Header } from "./header"
import { AgentSelector } from "./agent-selector"
import { Chat } from "@/components/chat"
import { useChatSelector } from "@/components/chat/context"
const ChatHistorySheet = lazy(() => import("./chat-history-sheet").then(m => ({ default: m.ChatHistorySheet })))
import { preferences } from "@/core/persistence/storage-adapter"
import { useSpeechStore } from "@/store/speech-store"
import { cn } from "@/lib/utils"
import { useChatUIStore } from "@/store/chatbot-store"
import Footer from "./footer"
import { useChatVoice } from "@/hooks/use-chat-voice"
import { Disclaimer } from "./disclaimer"
const SpeechControlBar = lazy(() => import("@/components/chat/speech-control-bar").then(m => ({ default: m.SpeechControlBar })))
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
  suggestionMode?: "send" | "prefill"
}

export interface ChatbotProps {
  onEvent?: (event: ChatEvent) => void
  attachments?: AttachmentAdapter
  transcribeAudio?: (blob: Blob) => Promise<string>
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
  suggestionMode,
  attachments,
  transcribeAudio,
  effectiveAgent,
  selectedAgent,
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
  setCurrentThreadId,
  threadList,
  setThreadList,
  totalThreads,
  setTotalThreads,
  threadsLoading,
  setThreadsLoading,
  setSelectedAgent,
  setSelectedModel,
}: {
  suggestionMode?: "send" | "prefill"
  attachments?: AttachmentAdapter
  transcribeAudio?: (blob: Blob) => Promise<string>
  effectiveAgent: string
  selectedAgent: string
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
  voiceConfig?: import("@/lib/voice.sdk").VoiceConfig
  onVoiceConfigChange?: (config: Partial<import("@/lib/voice.sdk").VoiceConfig>) => void
  availableVoices?: SpeechSynthesisVoice[]
  selectedVoice?: SpeechSynthesisVoice | null
  onVoiceChange?: (v: SpeechSynthesisVoice | null) => void
  autoSpeak?: boolean
  onAutoSpeakChange?: (enabled: boolean) => void
  deleteThread?: (threadId: string) => Promise<void>
  currentThreadId: string | undefined
  setCurrentThreadId: (threadId: string | undefined) => void
  threadList: import("@/core/services/types").ThreadSummary[]
  setThreadList: (value: import("@/core/services/types").ThreadSummary[] | ((prev: import("@/core/services/types").ThreadSummary[]) => import("@/core/services/types").ThreadSummary[])) => void
  totalThreads: number
  setTotalThreads: (value: number) => void
  threadsLoading: boolean
  setThreadsLoading: (value: boolean) => void
  setSelectedAgent: (value: string) => void
  setSelectedModel: (value: string) => void
  onMaximizeToggle?: (isMaximized: boolean) => void
  isMaximized?: boolean
}) {
  const {
    historySheetOpen,
    setHistorySheetOpen,
    isMaximized: storeIsMaximized,
    setIsMaximized,
  } = useChatUIStore(
    useShallow((s) => ({
      historySheetOpen: s.historySheetOpen,
      setHistorySheetOpen: s.setHistorySheetOpen,
      isMaximized: s.isMaximized,
      setIsMaximized: s.setIsMaximized,
    }))
  )

  const speakingMessageId = useSpeechStore(s => s.speakingMessageId)
  const isMaximized = propsIsMaximized ?? storeIsMaximized
  const { currentThreadId: runtimeThreadId, metadata, metadataLoading, backendStatus, clearChat, loadThread, getThreads, setThreadId, deleteThread: contextDeleteThread } =
    useChatSelector(useShallow(s => ({
      currentThreadId: s.currentThreadId, metadata: s.metadata, metadataLoading: s.metadataLoading, backendStatus: s.backendStatus,
      clearChat: s.clearChat, loadThread: s.loadThread, getThreads: s.getThreads,
      setThreadId: s.setThreadId, deleteThread: s.deleteThread,
    })))

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
  }, [clearChat, starterMessage])

  const effectiveOnRefresh = onRefresh ?? handleRefresh

  const handleOpenHistorySheet = useCallback(
    () => setHistorySheetOpen(true),
    [setHistorySheetOpen]
  )

  const handleSelectThread = useCallback(
    (threadIdToLoad: string) => {
      setHistorySheetOpen(false)
      void loadThread(threadIdToLoad, userId)
    },
    [loadThread, setHistorySheetOpen, userId]
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
      {historySheetOpen && <Suspense fallback={<div role="status">Loading history…</div>}><ChatHistorySheet
        open={historySheetOpen}
        onOpenChange={setHistorySheetOpen}
        userId={userId}
        threadList={threadList}
        setThreadList={setThreadList}
        totalThreads={totalThreads}
        setTotalThreads={setTotalThreads}
        threadsLoading={threadsLoading}
        setThreadsLoading={setThreadsLoading}
        currentThreadId={runtimeThreadId}
        onSelectThread={handleSelectThread}
        onNewChat={effectiveOnRefresh}
        getThreads={getThreads}
        deleteThread={effectiveDeleteThread}
      /></Suspense>}
      <ChatStatus />
      <div className="flex-1 overflow-hidden flex flex-col relative">
        {speakingMessageId && <Suspense fallback={null}><SpeechControlBar /></Suspense>}
        {!effectiveAgent ? (
          <AgentSelector
            agents={metadata?.agents ?? []}
            loading={metadataLoading}
            onSelect={setSelectedAgent}
          />
        ) : (
          <>
            <MemoizedChatMessages className="flex-1 min-h-0" />
            <MemoizedChatSuggestions mode={suggestionMode} />
            <MemoizedChatInput key={runtimeThreadId} placeholder={placeholder} transcribeAudio={transcribeAudio} attachments={attachments} />
            <div className="px-3"><ConversationExport /></div>
          </>)}
      </div>
      {showFooter && (
        <Footer disclaimer={footerContent} subtitle={footerSubtitle} />
      )}
    </>
  )
}

export function Chatbot({
  onEvent,
  attachments,
  transcribeAudio,
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

  const { message: starterMessage, suggestions: starterSuggestions, suggestionMode } = starter

  // Derive directly at render time — no extra effect needed
  const {
    isMaximized: storeIsMaximized,
    autoSpeak,
    setAutoSpeak,
    showDisclaimer,
    setShowDisclaimer,
  } = useChatUIStore(
    useShallow((s) => ({
      isMaximized: s.isMaximized,
      autoSpeak: s.autoSpeak,
      setAutoSpeak: s.setAutoSpeak,
      showDisclaimer: s.showDisclaimer,
      setShowDisclaimer: s.setShowDisclaimer,
    }))
  )
  const isMaximized = propsIsMaximized ?? storeIsMaximized

  const [selectedAgent, setSelectedAgent] = useState(initialAgent ?? "")
  const [selectedModel, setSelectedModel] = useState(initialModel ?? "")
  const [currentThreadId, setCurrentThreadId] = useState(threadId)
  const [metadata, setMetadata] = useState<ServiceMetadata | null>(null)
  const [threadList, setThreadList] = useState<import("@/core/services/types").ThreadSummary[]>([])
  const [totalThreads, setTotalThreads] = useState(0)
  const [threadsLoading, setThreadsLoading] = useState(false)

    const {
    speak,
    availableVoices,
    selectedVoice,
    setSelectedVoice,
    voiceConfig,
    updateConfig,
    isRecognitionSupported,
  } = useChatVoice()

  useEffect(() => {
    const savedVoiceConfig = preferences.getItem("voice-config")
    if (savedVoiceConfig) {
      try {
        updateConfig(JSON.parse(savedVoiceConfig))
      } catch (e) {
        console.error("Failed to load voice config", e)
      }
    }
    const savedAutoSpeak = preferences.getItem("auto-speak")
    if (savedAutoSpeak) setAutoSpeak(savedAutoSpeak === "true")
    if (!preferences.getItem("chatbot-consent")) setShowDisclaimer(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateConfig])

  const handleDisclaimerAccept = useCallback(() => {
    preferences.setItem("chatbot-consent", "true")
    setShowDisclaimer(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    preferences.setItem("voice-config", JSON.stringify(voiceConfig))
  }, [voiceConfig])
  useEffect(() => {
    preferences.setItem("auto-speak", String(autoSpeak))
  }, [autoSpeak])

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
      onEvent,
      attachments,
      onStreamEnd: (lastContent) => {
        if (autoSpeak && lastContent && speak) speak(lastContent)
      },
    }),
    [
      url,
      effectiveAgent,
      selectedModel,
      currentThreadId,
      threadId,
      userId,
      stream,
      starterMessage,
      starterSuggestions,
      autoSpeak,
      apiKey,
      onEvent,
      attachments,
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
        isSpeechSupported={isRecognitionSupported}
        onMetadata={onMetadataLoaded}
      >
        <ChatbotLayout
          suggestionMode={suggestionMode}
          attachments={attachments}
          transcribeAudio={transcribeAudio}
          effectiveAgent={effectiveAgent}
          selectedAgent={selectedAgent}
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
          voiceConfig={voiceConfig}
          onVoiceConfigChange={updateConfig}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={setSelectedVoice}
          autoSpeak={autoSpeak}
          onAutoSpeakChange={setAutoSpeak}
          onMaximizeToggle={onMaximizeToggle}
          isMaximized={isMaximized}
          currentThreadId={currentThreadId}
          setCurrentThreadId={setCurrentThreadId}
          threadList={threadList}
          setThreadList={setThreadList}
          totalThreads={totalThreads}
          setTotalThreads={setTotalThreads}
          threadsLoading={threadsLoading}
          setThreadsLoading={setThreadsLoading}
          setSelectedAgent={setSelectedAgent}
          setSelectedModel={setSelectedModel}
        />
      </Chat.Root>
    </div>
  )
}
