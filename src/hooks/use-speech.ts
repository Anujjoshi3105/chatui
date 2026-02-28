import { useState, useEffect, useCallback } from "react"
import {
  getVoiceSupport,
  SpeechSynthesisManager,
  stripMarkdownForSpeech,
  type VoiceConfig,
} from "@/lib/voice.sdk"

export function useSpeech(voiceConfig?: Partial<VoiceConfig>) {
  const [isSupported, setIsSupported] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [manager, setManager] = useState<SpeechSynthesisManager | null>(null)

  useEffect(() => {
    const support = getVoiceSupport()
    setIsSupported(support.speechSynthesis)

    if (support.speechSynthesis) {
      const synthesisManager = new SpeechSynthesisManager(voiceConfig)

      synthesisManager.onStart = () => setIsSpeaking(true)
      synthesisManager.onEnd = () => setIsSpeaking(false)
      synthesisManager.onError = () => setIsSpeaking(false)

      setManager(synthesisManager)

      return () => {
        synthesisManager.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (manager && voiceConfig) {
      manager.updateConfig(voiceConfig)
    }
  }, [manager, voiceConfig])

  const speak = useCallback(
    (content: string) => {
      if (!manager || !content) return

      const cleanText = stripMarkdownForSpeech(content)
      manager.speak(cleanText)
    },
    [manager]
  )

  const stop = useCallback(() => {
    if (!manager) return
    manager.stop()
  }, [manager])

  const toggle = useCallback(
    (content: string) => {
      if (!manager || !content) return
      
      if (isSpeaking) {
        stop()
      } else {
        speak(content)
      }
    },
    [isSpeaking, speak, stop, manager]
  )

  return { isSupported, isSpeaking, speak, stop, toggle }
}
