import { useCallback, useEffect, useRef, useState, useMemo } from "react"
import type { SpeechRecognitionManager, SpeechSynthesisManager, VoiceConfig } from "@/lib/voice.sdk"
import { defaultVoiceConfig, getVoiceSupport } from "@/lib/voice-support"
import { useShallow } from "zustand/react/shallow"
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
    cancelListening: () => void

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
        onTranscriptionComplete,
        onError,
    } = options

    const { setSpeaking, setCurrentCharIndex, setCharOffset, setIsPaused, stop: stopSpeechStore, speakingMessageId: activeMsgId, activeText } = useSpeechStore(useShallow(s => ({
      setSpeaking: s.setSpeaking, setCurrentCharIndex: s.setCurrentCharIndex,
      setCharOffset: s.setCharOffset, setIsPaused: s.setIsPaused, stop: s.stop,
      speakingMessageId: s.speakingMessageId, activeText: s.activeText,
    })))

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
    const listeningRevision = useRef(0)
    const captureStream = useRef<MediaStream | null>(null)
    const stopRecorder = useRef<(() => void) | null>(null)
    const starting = useRef(false)
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

    const latest = useRef(options)
    latest.current = options
    const currentConfig = useRef(voiceConfig)
    currentConfig.current = voiceConfig
    useEffect(() => {
      if (!window.speechSynthesis) return
      const load = () => {
        const voices = window.speechSynthesis.getVoices()
        setAvailableVoices(voices)
        setSelectedVoice(previous => previous ?? voices.find(voice => voice.voiceURI === currentConfig.current.voiceURI)
          ?? voices.find(voice => voice.lang.startsWith(currentConfig.current.lang.split("-")[0])) ?? null)
      }
      load()
      window.speechSynthesis.addEventListener("voiceschanged", load)
      return () => window.speechSynthesis.removeEventListener("voiceschanged", load)
    }, [])
    const mounted = useRef(true)
    const initialization = useRef<Promise<void> | null>(null)
    const ensureManagers = useCallback(() => {
      if (initialization.current) return initialization.current
      initialization.current = import("@/lib/voice.sdk").then(({ SpeechRecognitionManager, SpeechSynthesisManager }) => {
        if (!mounted.current) return
        if (support.speechRecognition) {
            recognitionRef.current = new SpeechRecognitionManager(currentConfig.current)

            recognitionRef.current.onStart = () => {
                setIsListening(true)
                setError(null)
                latest.current.onSpeechStart?.()
            }

            recognitionRef.current.onEnd = () => {
                setIsListening(false)
                latest.current.onSpeechEnd?.()
            }

            recognitionRef.current.onError = (errorMessage) => {
                setError(errorMessage)
                setIsListening(false)
                latest.current.onError?.(errorMessage)
            }

            recognitionRef.current.onResult = (text, isFinal) => {
                if (isFinal) {
                    setTranscript((prev) => prev + text)
                    setInterimTranscript("")
                } else {
                    setInterimTranscript(text)
                }
                latest.current.onTranscript?.(text, isFinal)
            }
        }

        if (support.speechSynthesis) {
            synthesisRef.current = new SpeechSynthesisManager(currentConfig.current)

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

                if (voices.length > 0) {
                    const langVoices = voices.filter((v) =>
                        v.lang.toLowerCase().startsWith(currentConfig.current.lang.toLowerCase().split("-")[0])
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
        }

      }).catch(() => {
        initialization.current = null
        setError("Voice could not be loaded. Please try again.")
      })
      return initialization.current
    }, [support.speechRecognition, support.speechSynthesis, setCurrentCharIndex, setIsPaused, stopSpeechStore])

    useEffect(() => {
      mounted.current = true
      return () => {
        mounted.current = false
        // Invalidate the latest capture, including one started after effect setup.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        listeningRevision.current++
        stopRecorder.current?.()
        captureStream.current?.getTracks().forEach(track => track.stop())
        recognitionRef.current?.destroy()
        // A virtualized message row may unmount while its speech continues.
        // The chat root owns cancellation when the whole chat is closed.
        initialization.current = null
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
        if (starting.current) return
        starting.current = true
        const revision = ++listeningRevision.current
        setError(null)
        await ensureManagers()
        starting.current = false
        if (!mounted.current || revision !== listeningRevision.current) return
        setInterimTranscript("")

        if (mode === "native") {
            if (!recognitionRef.current?.start()) setError("Voice input could not start. Check microphone permissions and try again.")
        } else {
            try {
                setIsListening(true)
                setIsRecording(true)
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
                if (!mounted.current || revision !== listeningRevision.current) { stream.getTracks().forEach(track => track.stop()); return }
                captureStream.current = stream
                setAudioStream(stream)
                const { recordAudio } = await import("@/lib/audio-utils")
                if (!mounted.current || revision !== listeningRevision.current) { stream.getTracks().forEach(track => track.stop()); return }
                stopRecorder.current = recordAudio.stop
                activeRecordingRef.current = recordAudio(stream)
                void activeRecordingRef.current.catch(() => {})
                latest.current.onSpeechStart?.()
            } catch (err) {
                if (!mounted.current || revision !== listeningRevision.current) return
                const msg = err instanceof DOMException && err.name === "NotAllowedError" ? "Microphone access was denied. Allow microphone access in your browser settings." : "Could not access the microphone. Check the device and try again."
                setError(msg)
                setIsListening(false)
                setIsRecording(false)
                onError?.(msg)
            }
        }
    }, [mode, onError, ensureManagers])

    const stopListening = useCallback(async () => {
        const revision = listeningRevision.current
        if (mode === "native") {
            recognitionRef.current?.stop()
        } else {
            setIsRecording(false)
            setIsTranscribing(true)
            try {
                const { recordAudio } = await import("@/lib/audio-utils")
                recordAudio.stop()
                const recording = await activeRecordingRef.current
                if (recording && transcribeAudio) {
                    const text = await transcribeAudio(recording)
                    if (!mounted.current || revision !== listeningRevision.current) return
                    setTranscript((prev) => prev + text)
                    onTranscriptionComplete?.(text)
                }
            } catch (err) {
                if (!mounted.current || revision !== listeningRevision.current) return
                const msg = err instanceof Error ? err.message : "Error transcribing audio"
                console.error(msg, err)
                setError(msg)
                onError?.(msg)
            } finally {
                if (revision === listeningRevision.current && mounted.current) {
                setIsTranscribing(false)
                setIsListening(false)
                if (audioStream) {
                    audioStream.getTracks().forEach((track) => track.stop())
                    setAudioStream(null)
                }
                activeRecordingRef.current = null
                latest.current.onSpeechEnd?.()
                }
            }
        }
    }, [mode, transcribeAudio, onTranscriptionComplete, audioStream, onError])

    const cancelListening = useCallback(() => {
        listeningRevision.current++
        recognitionRef.current?.abort()
        stopRecorder.current?.()
        captureStream.current?.getTracks().forEach(track => track.stop())
        captureStream.current = null
        activeRecordingRef.current = null
        setAudioStream(null); setIsRecording(false); setIsTranscribing(false); setIsListening(false); setInterimTranscript("")
    }, [])

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
    const speak = useCallback(async (text: string, messageId?: string) => {
        await ensureManagers()
        if (!mounted.current) return
        const { stripMarkdownForSpeech } = await import("@/lib/voice.sdk")
        setError(null)
        const cleanText = stripMarkdownForSpeech(text)
        if (selectedVoice) {
            synthesisRef.current?.updateConfig({ voiceURI: selectedVoice.voiceURI })
        }
        if (messageId) {
            setSpeaking(messageId, cleanText)
        }
        synthesisRef.current?.speak(cleanText)
    }, [selectedVoice, setSpeaking, ensureManagers])

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
        cancelListening,
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
