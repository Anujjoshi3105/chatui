import { useCallback, useEffect, useRef, useState, useMemo } from "react"
import {
    SpeechRecognitionManager,
    SpeechSynthesisManager,
    type VoiceConfig,
    defaultVoiceConfig,
    getVoiceSupport,
    stripMarkdownForSpeech,
} from "@/lib/voice.sdk"
import { recordAudio } from "@/lib/audio-utils"
import { useSpeechStore } from "@/store/speech-store"

export interface UseChatVoiceOptions {
    config?: Partial<VoiceConfig>
    mode?: "native" | "record"
    transcribeAudio?: (blob: Blob) => Promise<string>
    onTranscript?: (transcript: string, isFinal: boolean) => void
    onTranscriptionComplete?: (text: string) => void
    onSpeechStart?: () => void
    onSpeechEnd?: () => void
    onError?: (error: string) => void
}

export interface UseChatVoiceReturn {
    // State
    isListening: boolean
    isSpeaking: boolean
    isRecording: boolean
    isTranscribing: boolean
    transcript: string
    interimTranscript: string
    error: string | null
    audioStream: MediaStream | null

    // Support detection
    isRecognitionSupported: boolean
    isSynthesisSupported: boolean
    isSpeechSupported: boolean

    // Recognition/Recording controls
    startListening: () => Promise<void>
    stopListening: () => Promise<void>
    toggleListening: () => Promise<void>
    clearTranscript: () => void

    // Synthesis controls
    speak: (text: string, messageId?: string) => void
    stopSpeaking: () => void
    pauseSpeaking: () => void
    resumeSpeaking: () => void
    seekAndSpeak: (charIndex: number) => void
    toggleSpeaking: (text: string, messageId?: string) => void

    // Voice management
    availableVoices: SpeechSynthesisVoice[]
    selectedVoice: SpeechSynthesisVoice | null
    setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void

    // Config
    voiceConfig: VoiceConfig
    updateConfig: (config: Partial<VoiceConfig>) => void
}

export function useChatVoice(options: UseChatVoiceOptions = {}): UseChatVoiceReturn {
    const {
        config,
        mode = "native",
        transcribeAudio,
        onTranscript,
        onTranscriptionComplete,
        onSpeechStart,
        onSpeechEnd,
        onError,
    } = options

    const { setSpeaking, setCurrentCharIndex, setCharOffset, setIsPaused, stop: stopSpeechStore, speakingMessageId: activeMsgId, activeText } = useSpeechStore()

    // Common State
    const [isListening, setIsListening] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [transcript, setTranscript] = useState("")
    const [interimTranscript, setInterimTranscript] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [voiceConfig, setVoiceConfig] = useState<VoiceConfig>({
        ...defaultVoiceConfig,
        ...config,
    })

    // Recording Specific State
    const [isRecording, setIsRecording] = useState(false)
    const [isTranscribing, setIsTranscribing] = useState(false)
    const [audioStream, setAudioStream] = useState<MediaStream | null>(null)
    const activeRecordingRef = useRef<Promise<Blob> | null>(null)

    // Synthesis State
    const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([])
    const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null)

    // Support detection
    const support = useMemo(() => getVoiceSupport(), [])
    const [hasMediaDevices, setHasMediaDevices] = useState(false)

    useEffect(() => {
        setHasMediaDevices(!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia))
    }, [])

    const isSpeechSupported = useMemo(() => {
        if (mode === "native") return support.speechRecognition
        return hasMediaDevices && !!transcribeAudio
    }, [mode, support.speechRecognition, hasMediaDevices, transcribeAudio])

    // Managers
    const recognitionRef = useRef<SpeechRecognitionManager | null>(null)
    const synthesisRef = useRef<SpeechSynthesisManager | null>(null)

    // Initialize Native Recognition and Synthesis
    useEffect(() => {
        if (support.speechRecognition) {
            recognitionRef.current = new SpeechRecognitionManager(voiceConfig)

            recognitionRef.current.onStart = () => {
                setIsListening(true)
                setError(null)
                onSpeechStart?.()
            }

            recognitionRef.current.onEnd = () => {
                setIsListening(false)
                onSpeechEnd?.()
            }

            recognitionRef.current.onError = (errorMessage) => {
                setError(errorMessage)
                setIsListening(false)
                onError?.(errorMessage)
            }

            recognitionRef.current.onResult = (text, isFinal) => {
                if (isFinal) {
                    setTranscript((prev) => prev + text)
                    setInterimTranscript("")
                } else {
                    setInterimTranscript(text)
                }
                onTranscript?.(text, isFinal)
            }
        }

        if (support.speechSynthesis) {
            synthesisRef.current = new SpeechSynthesisManager(voiceConfig)

            synthesisRef.current.onStart = () => {
                setIsSpeaking(true)
            }

            synthesisRef.current.onEnd = () => {
                setIsSpeaking(false)
            }

            synthesisRef.current.onError = (errorMessage) => {
                setError(errorMessage)
                setIsSpeaking(false)
                stopSpeechStore()
            }

            synthesisRef.current.onPause = () => {
                setIsPaused(true)
            }

            synthesisRef.current.onResume = () => {
                setIsPaused(false)
            }

            synthesisRef.current.onBoundary = (charIndex) => {
                setCurrentCharIndex(charIndex)
            }

            const loadVoices = () => {
                const voices = synthesisRef.current?.getVoices() || []
                setAvailableVoices(voices)

                if (!selectedVoice && voices.length > 0) {
                    const langVoices = voices.filter((v) =>
                        v.lang.toLowerCase().startsWith(voiceConfig.lang.toLowerCase().split("-")[0])
                    )
                    if (langVoices.length > 0) {
                        setSelectedVoice(langVoices[0])
                    }
                }
            }

            synthesisRef.current.onEnd = () => {
                setIsSpeaking(false)
                stopSpeechStore()
            }

            loadVoices()
            if (typeof window !== "undefined" && window.speechSynthesis) {
                window.speechSynthesis.onvoiceschanged = loadVoices
            }
        }

        return () => {
            recognitionRef.current?.destroy()
            synthesisRef.current?.destroy()
        }
    }, [])

    // Update config
    const updateConfig = useCallback((newConfig: Partial<VoiceConfig>) => {
        setVoiceConfig((prev) => {
            const updated = { ...prev, ...newConfig }
            recognitionRef.current?.updateConfig(updated)
            synthesisRef.current?.updateConfig(updated)
            return updated
        })
    }, [])

    // Unified Listening Controls
    const startListening = useCallback(async () => {
        setError(null)
        setInterimTranscript("")

        if (mode === "native") {
            recognitionRef.current?.start()
        } else {
            try {
                setIsListening(true)
                setIsRecording(true)
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
                setAudioStream(stream)
                activeRecordingRef.current = recordAudio(stream)
                onSpeechStart?.()
            } catch (err) {
                const msg = err instanceof Error ? err.message : "Failed to start recording"
                setError(msg)
                setIsListening(false)
                setIsRecording(false)
                onError?.(msg)
            }
        }
    }, [mode, onSpeechStart, onError])

    const stopListening = useCallback(async () => {
        if (mode === "native") {
            recognitionRef.current?.stop()
        } else {
            setIsRecording(false)
            setIsTranscribing(true)
            try {
                recordAudio.stop()
                const recording = await activeRecordingRef.current
                if (recording && transcribeAudio) {
                    const text = await transcribeAudio(recording)
                    setTranscript((prev) => prev + text)
                    onTranscriptionComplete?.(text)
                }
            } catch (err) {
                const msg = err instanceof Error ? err.message : "Error transcribing audio"
                console.error(msg, err)
                setError(msg)
                onError?.(msg)
            } finally {
                setIsTranscribing(false)
                setIsListening(false)
                if (audioStream) {
                    audioStream.getTracks().forEach((track) => track.stop())
                    setAudioStream(null)
                }
                activeRecordingRef.current = null
                onSpeechEnd?.()
            }
        }
    }, [mode, transcribeAudio, onTranscriptionComplete, audioStream, onSpeechEnd, onError])

    const toggleListening = useCallback(async () => {
        if (isListening) {
            await stopListening()
        } else {
            await startListening()
        }
    }, [isListening, startListening, stopListening])

    const clearTranscript = useCallback(() => {
        setTranscript("")
        setInterimTranscript("")
    }, [])

    // Synthesis controls
    const speak = useCallback((text: string, messageId?: string) => {
        setError(null)
        const cleanText = stripMarkdownForSpeech(text)
        if (selectedVoice) {
            synthesisRef.current?.updateConfig({ voiceURI: selectedVoice.voiceURI })
        }
        if (messageId) {
            setSpeaking(messageId, cleanText)
        }
        synthesisRef.current?.speak(cleanText)
    }, [selectedVoice, setSpeaking])

    const stopSpeaking = useCallback(() => {
        synthesisRef.current?.stop()
        stopSpeechStore()
    }, [stopSpeechStore])

    const pauseSpeaking = useCallback(() => {
        synthesisRef.current?.pause()
        setIsPaused(true)
    }, [setIsPaused])

    const resumeSpeaking = useCallback(() => {
        synthesisRef.current?.resume()
        setIsPaused(false)
    }, [setIsPaused])

    const seekAndSpeak = useCallback((charIndex: number) => {
        if (!activeMsgId || !activeText) return
        // Cancel current utterance
        synthesisRef.current?.stop()
        // Update store offset before restarting so that boundary events map correctly
        setCharOffset(charIndex)
        setSpeaking(activeMsgId, activeText)
        if (selectedVoice) {
            synthesisRef.current?.updateConfig({ voiceURI: selectedVoice.voiceURI })
        }
        synthesisRef.current?.speakFrom(activeText, charIndex)
    }, [activeMsgId, activeText, selectedVoice, setCharOffset, setSpeaking])

    const toggleSpeaking = useCallback((text: string, messageId?: string) => {
        if (isSpeaking) {
            stopSpeaking()
        } else {
            speak(text, messageId)
        }
    }, [isSpeaking, speak, stopSpeaking])

    const handleSetSelectedVoice = useCallback((voice: SpeechSynthesisVoice | null) => {
        setSelectedVoice(voice)
        if (voice) {
            updateConfig({ voiceURI: voice.voiceURI })
        }
    }, [updateConfig])

    return {
        isListening,
        isSpeaking,
        isRecording,
        isTranscribing,
        transcript,
        interimTranscript,
        error,
        audioStream,
        isRecognitionSupported: support.speechRecognition,
        isSynthesisSupported: support.speechSynthesis,
        isSpeechSupported,
        startListening,
        stopListening,
        toggleListening,
        clearTranscript,
        speak,
        stopSpeaking,
        pauseSpeaking,
        resumeSpeaking,
        seekAndSpeak,
        toggleSpeaking,
        availableVoices,
        selectedVoice,
        setSelectedVoice: handleSetSelectedVoice,
        voiceConfig,
        updateConfig,
    }
}
