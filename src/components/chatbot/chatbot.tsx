import { useState, useCallback, useEffect, useMemo, memo } from "react"
import { Header } from "./header"
import { AgentSelector } from "./agent-selector"
import { Chat, useChatContext } from "@/components/chat"
import { ChatHistorySheet } from "./chat-history-sheet"
import { cn } from "@/lib/utils"
import Footer from "./footer"
import { useVoice } from "@/hooks/use-voice"
import { Disclaimer } from "./disclaimer"
import { ChatbotStoreProvider, useChatbotStore } from "@/store/chatbot-store"
import type { ChatRuntimeConfig } from "@/core/runtime/chat-state"
import type { ServiceMetadata } from "@/core/services/types"
import type { VoiceConfig } from "@/lib/voice.sdk"

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
  onClose,
  onRefresh,
  onHome,
  onVoiceConfigChange,
  availableVoices,
  selectedVoice,
  onVoiceChange,
}: {
  onClose?: () => void
  onRefresh?: () => void
  onHome?: () => void
  onVoiceConfigChange?: (config: Partial<VoiceConfig>) => void
  availableVoices?: SpeechSynthesisVoice[]
  selectedVoice?: SpeechSynthesisVoice | null
  onVoiceChange?: (v: SpeechSynthesisVoice | null) => void
}) {
  const store = useChatbotStore(s => s)
  const { metadata, metadataLoading, clearChat, setThreadId } = useChatContext()

  const handleAgentChange = useCallback(
    (newAgent: string) => {
      clearChat({ keepStarter: !!store.starterMessage })
      store.setCurrentThreadId(undefined)
      setThreadId(undefined)
      store.setSelectedAgent(newAgent)
    },
    [clearChat, store, setThreadId]
  )

  const handleRefresh = useCallback(() => {
    clearChat({ keepStarter: !!store.starterMessage, createNewThread: true })
    store.setSelectedAgent("")
    store.setCurrentThreadId(undefined)
    setThreadId(undefined)
  }, [clearChat, store, setThreadId])

  const effectiveOnRefresh = onRefresh ?? handleRefresh

  const handleOpenHistorySheet = useCallback(
    () => store.setHistorySheetOpen(true),
    [store]
  )

  const effectiveAgent = store.selectedAgent || (store.currentThreadId && metadata?.default_agent) || ""

  return (
    <>
      {store.showHeader && (
        <Header
          metadata={metadata}
          onClose={onClose}
          onRefresh={effectiveOnRefresh}
          onHome={onHome}
          onHistory={store.userId?.trim() ? handleOpenHistorySheet : undefined}
          onVoiceConfigChange={onVoiceConfigChange}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={onVoiceChange}
        />
      )}
      <ChatHistorySheet />
      <div className="flex-1 overflow-hidden flex flex-col">
        {!effectiveAgent ? (
          <AgentSelector
            agents={metadata?.agents ?? []}
            loading={metadataLoading}
            onSelect={handleAgentChange}
          />
        ) : (
          <>
            <MemoizedChatMessages className="flex-1 min-h-0" />
            <MemoizedChatSuggestions />
            <MemoizedChatInput placeholder={store.placeholder} />
          </>)}
      </div>
      {store.showFooter && <Footer />}
    </>
  )
}

function ChatbotCore(props: ChatbotProps) {
  const store = useChatbotStore(s => s)

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
    if (savedAutoSpeak) store.setAutoSpeak(savedAutoSpeak === "true")
    if (!localStorage.getItem("chatbot-consent")) store.setShowDisclaimer(true)
  }, [updateConfig, store])

  const handleDisclaimerAccept = useCallback(() => {
    localStorage.setItem("chatbot-consent", "true")
    store.setShowDisclaimer(false)
  }, [store])

  useEffect(() => {
    localStorage.setItem("voice-config", JSON.stringify(voiceConfig))
  }, [voiceConfig])
  useEffect(() => {
    localStorage.setItem("auto-speak", String(store.autoSpeak))
  }, [store.autoSpeak])

  // Sync props changes to store
  useEffect(() => {
    if (props.threadId != null) store.setCurrentThreadId(props.threadId)
  }, [props.threadId, store])
  useEffect(() => {
    if (props.isMaximized != null) store.setIsMaximized(props.isMaximized)
  }, [props.isMaximized, store])

  const [metadata, setMetadata] = useState<ServiceMetadata | null>(null)

  const onMetadataLoaded = useCallback((meta: ServiceMetadata) => {
    setMetadata(meta)
    if (!store.selectedModel) {
      store.setSelectedModel(meta.default_model || "")
    }
  }, [store])

  useEffect(() => {
    if (store.currentThreadId && !store.selectedAgent && metadata?.default_agent)
      store.setSelectedAgent(metadata.default_agent)
  }, [store.currentThreadId, store.selectedAgent, metadata?.default_agent, store])

  const defaultSuggestionsForChat = useMemo(() => {
    if (store.starterSuggestions !== undefined) return store.starterSuggestions
    return metadata?.agents?.find((a) => a.key === store.selectedAgent)?.prompts ?? []
  }, [store.starterSuggestions, metadata?.agents, store.selectedAgent])

  const effectiveAgent =
    store.selectedAgent || (store.currentThreadId && metadata?.default_agent) || ""

  const runtimeConfig = useMemo<ChatRuntimeConfig>(
    () => ({
      url: props.url,
      agent: effectiveAgent || undefined,
      model: store.selectedModel || undefined,
      threadId: store.currentThreadId ?? props.threadId,
      userId: props.userId,
      stream: props.stream ?? true,
      starterMessage: store.starterMessage,
      starterSuggestions: store.starterSuggestions,
      apiKey: props.apiKey,
      onStreamEnd: (lastContent) => {
        if (store.autoSpeak && lastContent && speak) speak(lastContent)
      },
    }),
    [
      props.url,
      effectiveAgent,
      store.selectedModel,
      store.currentThreadId,
      props.threadId,
      props.userId,
      props.stream,
      store.starterMessage,
      store.starterSuggestions,
      store.autoSpeak,
      props.apiKey,
      speak,
    ]
  )

  return (
    <div
      className={cn(
        "chatbot-theme flex flex-col h-full transition-all duration-300 ease-in-out relative",
        props.className,
        store.isMaximized &&
        "fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none rounded-none border-0"
      )}
    >
      <Disclaimer open={store.showDisclaimer} onAccept={handleDisclaimerAccept} />
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
          onClose={props.header?.onClose}
          onRefresh={props.header?.onRefresh}
          onHome={props.header?.onHome}
          onVoiceConfigChange={updateConfig}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={setSelectedVoice}
        />
      </Chat.Root>
    </div>
  )
}

export function Chatbot(props: ChatbotProps) {
  const initialStoreState = useMemo(() => ({
    url: props.url,
    selectedAgent: props.agent ?? "",
    selectedModel: props.model ?? "",
    placeholder: props.placeholder ?? "Hi, how can I help you?",
    currentThreadId: props.threadId,
    userId: props.userId,
    showHeader: props.header?.show ?? true,
    headerTitle: props.header?.title,
    headerTitleUrl: props.header?.titleUrl,
    headerSubtitle: props.header?.subtitle,
    avatar: props.header?.avatar,
    allowMaximize: props.header?.allowMaximize ?? false,
    onMaximizeToggle: props.header?.onMaximizeToggle,
    showFooter: props.footer?.show ?? true,
    footerContent: props.footer?.text,
    footerSubtitle: props.footer?.subtitle,
    starterMessage: props.starter?.message,
    starterSuggestions: props.starter?.suggestions,
    isMaximized: props.isMaximized ?? false,
  }), [props])

  return (
    <ChatbotStoreProvider initialState={initialStoreState}>
      <ChatbotCore {...props} />
    </ChatbotStoreProvider>
  )
}
