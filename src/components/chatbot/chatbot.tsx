import React, { useState, useCallback, useEffect, useRef, useMemo, memo } from "react"
import { Chat } from "@/components/ui/chat"
import { Header } from "./header"
import { useChatbotApi, type ChatMessage } from "@/hooks/use-chatbot-api"
import { type Message } from "@/components/ui/chat-message"
import { cn } from "@/lib/utils"
import Footer from "./footer"
import { useVoice } from "@/hooks/use-voice"
import { Disclaimer } from "./disclaimer"

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
  stream?: boolean
  className?: string
  storageKey?: string
  header?: ChatbotHeaderProps
  footer?: ChatbotFooterProps
  starter?: ChatbotStarterProps
  isMaximized?: boolean
}

// Memoized Chat wrapper to prevent re-renders when only parent state changes
const MemoizedChat = memo(Chat)

export function Chatbot({
  url,
  agent: initialAgent,
  model: initialModel,
  placeholder = "Hi, how can I help you?",
  threadId,
  userId,
  stream = true,
  className,
  storageKey,
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
  } = header

  const {
    show: showFooter = true,
    text: footerContent,
    subtitle: footerSubtitle,
  } = footer

  const {
    message: starterMessage,
    suggestions: starterSuggestions,
  } = starter
  const [selectedAgent, setSelectedAgent] = useState(initialAgent || "")
  const [selectedModel, setSelectedModel] = useState(initialModel || "")
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [internalIsMaximized, setInternalIsMaximized] = useState(false)
  const isMaximized = propsIsMaximized ?? internalIsMaximized
  const [followUpPrompts, setFollowUpPrompts] = useState<string[]>([])
  const currentMessageRef = useRef<string>("")
  const startTimeRef = useRef<number | null>(null)
  const pendingFollowUpRef = useRef<string[]>([])

  // Load history from local storage
  useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        try {
          const parsed = JSON.parse(saved, (key, value) => {
            if (key === "createdAt") return new Date(value)
            return value
          })
          if (Array.isArray(parsed) && parsed.length > 0) {
            setMessages(parsed)
            return
          }
        } catch (error) {
          console.error("Failed to load chat history:", error)
        }
      }
    }

    // If no saved messages and starterMessage is provided, add it as initial message
    if (starterMessage && messages.length === 0) {
      const greetingMessage: Message = {
        id: `greeting-${Date.now()}`,
        role: "assistant",
        content: starterMessage,
        createdAt: new Date(),
      }
      setMessages([greetingMessage])
    }
  }, [storageKey, starterMessage])

  // Save history to local storage with 500ms debounce to avoid excessive writes during streaming
  useEffect(() => {
    if (storageKey && messages.length > 0) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(storageKey, JSON.stringify(messages))
      }, 500)
      return () => clearTimeout(timeoutId)
    }
  }, [messages, storageKey])

  const {
    isListening,
    transcript,
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

  // Auto-speak state
  const [autoSpeak, setAutoSpeak] = useState(false)

  // Disclaimer state
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  // Load voice settings and consent from local storage
  useEffect(() => {
    const savedVoiceConfig = localStorage.getItem("voice-config")
    if (savedVoiceConfig) {
      try {
        const parsed = JSON.parse(savedVoiceConfig)
        updateConfig(parsed)
      } catch (e) {
        console.error("Failed to load voice config", e)
      }
    }

    const savedAutoSpeak = localStorage.getItem("auto-speak")
    if (savedAutoSpeak) {
      setAutoSpeak(savedAutoSpeak === "true")
    }

    const hasConsent = localStorage.getItem("chatbot-consent")
    if (!hasConsent) {
      setShowDisclaimer(true)
    }
  }, [updateConfig])

  const handleDisclaimerAccept = useCallback(() => {
    localStorage.setItem("chatbot-consent", "true")
    setShowDisclaimer(false)
  }, [])

  // Save voice settings to local storage
  useEffect(() => {
    localStorage.setItem("voice-config", JSON.stringify(voiceConfig))
  }, [voiceConfig])

  useEffect(() => {
    localStorage.setItem("auto-speak", String(autoSpeak))
  }, [autoSpeak])

  // Handle transcript updates
  useEffect(() => {
    if (transcript) {
      setInput(transcript)
    }
  }, [transcript])

  const {
    metadata,
    streamMessage,
    stopStream,
    sendFeedback,
  } = useChatbotApi({
    url,
    agent: selectedAgent,
    model: selectedModel,
    threadId,
    userId,
    stream,
  })

  // Initialize agent and model from metadata
  useEffect(() => {
    if (metadata && !selectedAgent) {
      setSelectedAgent(metadata.default_agent)
    }
    if (metadata && !selectedModel) {
      setSelectedModel(metadata.default_model)
    }
  }, [metadata, selectedAgent, selectedModel])

  // Initialize with starterSuggestions directly to avoid timing issues
  const [initialSuggestions, setInitialSuggestions] = useState<string[]>(
    () => starterSuggestions ?? []
  )

  useEffect(() => {
    const hasUserMessages = messages.some(m => m.role === "user")
    if (hasUserMessages) {
      // Clear suggestions once user has sent a message
      setInitialSuggestions([])
    } else if (starterSuggestions && starterSuggestions.length > 0) {
      // Restore suggestions if needed (e.g., after refresh)
      setInitialSuggestions(starterSuggestions)
    }
  }, [starterSuggestions, messages])

  const handleRefresh = useCallback(() => {
    // Clear messages and prompts
    setFollowUpPrompts([])
    setInput("")
    if (storageKey) {
      localStorage.removeItem(storageKey)
    }

    // Re-add starter message if provided, otherwise clear completely
    if (starterMessage) {
      const greetingMessage: Message = {
        id: `greeting-${Date.now()}`,
        role: "assistant",
        content: starterMessage,
        createdAt: new Date(),
      }
      setMessages([greetingMessage])
    } else {
      setMessages([])
    }
  }, [storageKey, starterMessage])

  const effectiveOnRefresh = onRefresh || handleRefresh

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message])
  }, [])

  const updateLastMessage = useCallback((id: string, updates: Partial<Message>) => {
    setMessages((prev) => {
      const updated = [...prev]
      const lastIndex = updated.length - 1
      if (updated[lastIndex]?.id === id) {
        updated[lastIndex] = { ...updated[lastIndex], ...updates }
      }
      return updated
    })
  }, [])

  const processMessageStream = useCallback(
    async (text: string) => {
      if (isGenerating) return

      setIsGenerating(true)
      setFollowUpPrompts([])
      pendingFollowUpRef.current = []
      startTimeRef.current = Date.now()

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text,
        createdAt: new Date(),
      }
      addMessage(userMessage)

      const aiMessageId = `ai-${Date.now()}`
      const aiMessage: Message = {
        id: aiMessageId,
        role: "assistant",
        content: "",
        createdAt: new Date(),
      }
      addMessage(aiMessage)

      currentMessageRef.current = ""

      try {
        for await (const event of streamMessage(text)) {
          console.log("Event: ", event)
          if (event.type === "token" && typeof event.content === "string") {
            currentMessageRef.current += event.content
            updateLastMessage(aiMessageId, { content: currentMessageRef.current })
          } else if (event.type === "message" && event.content) {
            const chatMessage = event.content as ChatMessage

            if (chatMessage.type === "tool") {
              const toolName = chatMessage.name ||
                chatMessage.response_metadata?.name ||
                chatMessage.custom_data?.name ||
                "Tool";

              const rawResult = chatMessage.content;
              const cleanResult = typeof rawResult === "string"
                ? rawResult.replace(/\\n/g, "\n")
                : rawResult;

              const toolInvocation = {
                state: "result" as const,
                toolName,
                toolCallId: chatMessage.tool_call_id,
                result: cleanResult,
              }

              setMessages((prev) => {
                const updated = [...prev]
                const messageIndex = updated.findIndex(m => m.id === aiMessageId)
                if (messageIndex !== -1) {
                  const existingInvocations = updated[messageIndex].toolInvocations || []
                  // Remove any existing "call" state for this toolCallId if it exists
                  const filteredInvocations = existingInvocations.filter(
                    (inv: any) => !(inv.state === "call" && inv.toolCallId === chatMessage.tool_call_id)
                  )
                  updated[messageIndex] = {
                    ...updated[messageIndex],
                    toolInvocations: [...filteredInvocations, toolInvocation] as any,
                  }
                }
                return updated
              })
              continue
            }

            // Extract tool calls from assistant message if present
            if (chatMessage.tool_calls && chatMessage.tool_calls.length > 0) {
              const toolInvocations = chatMessage.tool_calls.map(call => ({
                state: "call" as const,
                toolName: call.name,
                toolCallId: call.id,
                args: call.args,
              }));

              setMessages((prev) => {
                const updated = [...prev]
                const messageIndex = updated.findIndex(m => m.id === aiMessageId)
                if (messageIndex !== -1) {
                  updated[messageIndex] = {
                    ...updated[messageIndex],
                    toolInvocations: toolInvocations as any,
                  }
                }
                return updated
              })
            }

            currentMessageRef.current = chatMessage.content

            let content = chatMessage.content
            if (pendingFollowUpRef.current.length > 0) {
              content +=
                "\n\n**Follow-up suggestions:**\n" +
                pendingFollowUpRef.current.map((s) => `- ${s}`).join("\n")
              pendingFollowUpRef.current = []
            }

            updateLastMessage(aiMessageId, {
              content,
              custom_data: {
                ...chatMessage.custom_data,
                run_id: chatMessage.run_id,
              },
            })
          } else if (event.type === "update" && event.updates) {
            const followUp = event.updates.follow_up
            if (Array.isArray(followUp)) {
              setFollowUpPrompts(followUp)
              pendingFollowUpRef.current = followUp
            }
          } else if (event.type === "error") {
            updateLastMessage(aiMessageId, { content: `Error: ${event.content}` })
          }
        }
      } catch (error) {
        console.error("Stream error:", error)
        updateLastMessage(aiMessageId, {
          content: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        })
      } finally {
        setIsGenerating(false)
        if (autoSpeak && currentMessageRef.current && speak) {
          speak(currentMessageRef.current)
        }
        currentMessageRef.current = ""
        startTimeRef.current = null
      }
    },
    [isGenerating, streamMessage, addMessage, updateLastMessage, autoSpeak, speak]
  )

  const handleSubmit = useCallback(
    async (event?: { preventDefault?: () => void }) => {
      event?.preventDefault?.()
      const message = input.trim()
      if (!message) return
      setInput("")
      await processMessageStream(message)
    },
    [input, processMessageStream]
  )

  const handleAppend = useCallback(
    async (message: { role: "user"; content: string }) => {
      await processMessageStream(message.content)
    },
    [processMessageStream]
  )

  const handleStop = useCallback(() => {
    stopStream()
    setIsGenerating(false)
  }, [stopStream])

  const handleRateResponse = useCallback(
    async (messageId: string, rating: "thumbs-up" | "thumbs-down") => {
      const message = messages.find((m) => m.id === messageId)
      const runId = message?.custom_data?.run_id as string | undefined
      if (!runId) return

      try {
        await sendFeedback(runId, "human-feedback", rating === "thumbs-up" ? 1 : 0)
      } catch (error) {
        console.error("Failed to send feedback:", error)
      }
    },
    [messages, sendFeedback]
  )

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }, [])

  const toggleMaximize = useCallback(() => {
    const newState = !isMaximized
    setInternalIsMaximized(newState)
    onMaximizeToggle?.(newState)
  }, [isMaximized, onMaximizeToggle])

  // Memoize suggestions to prevent re-renders
  const suggestions = useMemo(() => {
    if (followUpPrompts.length > 0) return followUpPrompts
    if (initialSuggestions.length > 0) return initialSuggestions
    return []
  }, [followUpPrompts, initialSuggestions])

  return (
    <div
      className={cn(
        "chatbot-theme flex flex-col h-full transition-all duration-300 ease-in-out relative",
        className,
        isMaximized && "fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none rounded-none border-0"
      )}
    >
      <Disclaimer open={showDisclaimer} onAccept={handleDisclaimerAccept} />
      {showHeader && (
        <Header
          metadata={metadata}
          selectedAgent={selectedAgent}
          selectedModel={selectedModel}
          onAgentChange={setSelectedAgent}
          onModelChange={setSelectedModel}
          onClose={onClose}
          onRefresh={effectiveOnRefresh}
          voiceConfig={voiceConfig}
          onVoiceConfigChange={updateConfig}
          availableVoices={availableVoices}
          selectedVoice={selectedVoice}
          onVoiceChange={setSelectedVoice}
          autoSpeak={autoSpeak}
          onAutoSpeakChange={setAutoSpeak}
          isMaximized={isMaximized}
          onMaximize={allowMaximize ? toggleMaximize : undefined}
          title={headerTitle}
          titleUrl={headerTitleUrl}
          subtitle={headerSubtitle}
          avatar={avatar}
        />
      )}
      <div className="flex-1 overflow-hidden">
        <MemoizedChat
          messages={messages}
          handleSubmit={handleSubmit}
          input={input}
          handleInputChange={handleInputChange}
          stop={handleStop}
          isGenerating={isGenerating}
          append={handleAppend}
          suggestions={suggestions}
          onRateResponse={handleRateResponse}
          setMessages={setMessages}
          placeholder={placeholder}
          voiceConfig={voiceConfig}
          isListening={isListening}
          startListening={startListening}
          stopListening={stopListening}
          isSpeechSupported={isRecognitionSupported}
        />
      </div>
      {showFooter && <Footer disclaimer={footerContent} subtitle={footerSubtitle} />}
    </div>
  )
}
