import type { VoiceConfig } from "./voice.sdk"
export const defaultVoiceConfig: VoiceConfig = { lang: "en-US", continuous: false, interimResults: true, maxAlternatives: 1, pitch: 1, rate: 1, volume: 1 }
export function getVoiceSupport() {
  return {
    speechRecognition: typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window),
    speechSynthesis: typeof window !== "undefined" && !!window.speechSynthesis,
  }
}
