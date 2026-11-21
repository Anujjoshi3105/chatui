import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import { AnimatePresence, m as motion } from "motion/react"
import { ChevronRight, Info, Loader2, Mic, Paperclip, Square, Zap, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { useChatVoice } from "@/hooks/use-chat-voice"
import { useAutosizeTextArea } from "@/hooks/use-autosize-textarea"
const AudioVisualizer = lazy(() => import("@/components/ui/audio-visualizer").then(m => ({ default: m.AudioVisualizer })))
import { Button } from "@/components/ui/button"
const FilePreview = lazy(() => import("@/components/ui/file-preview").then(m => ({ default: m.FilePreview })))
import { InterruptPrompt } from "@/components/ui/interrupt-prompt"
import { PromptSuggestions } from "@/components/ui/prompt-suggestions"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface MessageInputBaseProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  allowFileOnly?: boolean
  value: string
  submitOnEnter?: boolean
  stop?: () => void
  forcePass?: () => void
  isGenerating: boolean
  enableInterrupt?: boolean
  transcribeAudio?: (blob: Blob) => Promise<string>
  suggestions?: string[]
  append?: (message: { role: "user"; content: string }) => void

  // Voice props
  isListening?: boolean
  startListening?: () => void
  stopListening?: () => void
  isSpeechSupported?: boolean
  setInput?: (value: string) => void
}

interface MessageInputWithoutAttachmentProps extends MessageInputBaseProps {
  allowAttachments?: false
}

interface MessageInputWithAttachmentsProps extends MessageInputBaseProps {
  allowAttachments: true
  files: File[] | null
  setFiles: React.Dispatch<React.SetStateAction<File[] | null>>
}

type MessageInputProps =
  | MessageInputWithoutAttachmentProps
  | MessageInputWithAttachmentsProps

export function MessageInput({
  placeholder = "Ask AI...",
  className,
  onKeyDown: onKeyDownProp,
  submitOnEnter = true,
  stop,
  isGenerating,
  enableInterrupt = true,
  transcribeAudio,
  suggestions,
  append,
  isListening: externalIsListening,
  startListening,
  stopListening,
  isSpeechSupported: externalIsSpeechSupported,
  ...props
}: MessageInputProps) {
  const textareaProps = props as MessageInputBaseProps
  const forcePass = textareaProps.forcePass
  const [isDragging, setIsDragging] = useState(false)
  const draftBeforeVoice = useRef("")
  const ignoreVoice = useRef(false)
  const [showInterruptPrompt, setShowInterruptPrompt] = useState(false)

  const {
    isListening: internalIsListening,
    isSpeechSupported: internalIsSpeechSupported,
    isRecording,
    isTranscribing,
    interimTranscript,
    error: voiceError,
    cancelListening,
    audioStream,
    toggleListening: internalToggleListening,
    stopListening: internalStopListening,
  } = useChatVoice({
    mode: transcribeAudio ? "record" : "native",
    transcribeAudio,
    onTranscript: (text, isFinal) => {
      if (!ignoreVoice.current && isFinal && text.trim()) {
        const newValue = (props.value || "").trim() + " " + text.trim()
        if (props.setInput) {
          props.setInput(newValue.trim())
        } else if (textareaProps.onChange) {
          textareaProps.onChange({ target: { value: newValue.trim() } } as React.ChangeEvent<HTMLTextAreaElement>)
        }
      }
    },
    onTranscriptionComplete: (text: string) => {
      if (!ignoreVoice.current && text.trim()) {
        const newValue = (props.value || "").trim() + " " + text.trim()
        if (props.setInput) {
          props.setInput(newValue.trim())
        } else if (textareaProps.onChange) {
          textareaProps.onChange({ target: { value: newValue.trim() } } as React.ChangeEvent<HTMLTextAreaElement>)
        }
      }
    },
  })

  // Aliasing stopRecording to internalStopListening for compatibility with existing UI
  const stopRecording = internalStopListening

  const isListening = externalIsListening ?? internalIsListening
  const isSpeechSupported = externalIsSpeechSupported ?? internalIsSpeechSupported

  const toggleListening = () => {
    if (!isListening) { draftBeforeVoice.current = props.value; ignoreVoice.current = false }
    if (externalIsListening !== undefined && startListening && stopListening) {
      if (externalIsListening) {
        stopListening()
      } else {
        startListening()
      }
    } else {
      internalToggleListening()
    }
  }

  const interruptPromptOpen = isGenerating && showInterruptPrompt

  const addFiles = (files: File[] | null) => {
    if (props.allowAttachments && !props.disabled) {
      props.setFiles((currentFiles) => {
        if (currentFiles === null) {
          return files
        }

        if (files === null) {
          return currentFiles
        }

        return [...currentFiles, ...files]
      })
    }
  }

  const onDragOver = (event: React.DragEvent) => {
    if (props.allowAttachments !== true) return
    event.preventDefault()
    setIsDragging(true)
  }

  const onDragLeave = (event: React.DragEvent) => {
    if (props.allowAttachments !== true) return
    event.preventDefault()
    setIsDragging(false)
  }

  const onDrop = (event: React.DragEvent) => {
    setIsDragging(false)
    if (props.allowAttachments !== true) return
    event.preventDefault()
    const dataTransfer = event.dataTransfer
    if (dataTransfer.files.length) {
      addFiles(Array.from(dataTransfer.files))
    }
  }

  const onPaste = (event: React.ClipboardEvent) => {
    const items = event.clipboardData?.items
    if (!items) return

    const files = Array.from(items)
      .map((item) => item.getAsFile())
      .filter((file) => file !== null)

    if (props.allowAttachments && files.length > 0) {
      addFiles(files)
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((isListening || isTranscribing) && event.key === "Enter" && !event.shiftKey) { event.preventDefault(); return }

    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault()
      if (forcePass) {
        setShowInterruptPrompt(false)
        forcePass()
        return
      }
    }

    if (submitOnEnter && event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()

      if (isGenerating && enableInterrupt) {
        if (interruptPromptOpen) {
          setShowInterruptPrompt(false)
          if (forcePass) {
            forcePass()
            return
          } else if (stop) {
            stop()
            event.currentTarget.form?.requestSubmit()
            return
          }
        } else if (
          props.value ||
          (props.allowAttachments && props.files?.length)
        ) {
          setShowInterruptPrompt(true)
          event.currentTarget.form?.requestSubmit()
          return
        }
      }

      event.currentTarget.form?.requestSubmit()
    }

    onKeyDownProp?.(event)
  }

  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [textAreaHeight, setTextAreaHeight] = useState<number>(0)

  useEffect(() => {
    if (!textAreaRef.current) return
    const observer = new ResizeObserver(([entry]) => {
      setTextAreaHeight(entry.contentRect.height)
    })
    observer.observe(textAreaRef.current)
    return () => observer.disconnect()
  }, [])

  const showFileList =
    props.allowAttachments && props.files && props.files.length > 0

  useAutosizeTextArea({
    ref: textAreaRef as React.RefObject<HTMLTextAreaElement>,
    maxHeight: 200,
    borderWidth: 1,
    dependencies: [props.value, showFileList],
  })

  return (
    <div
      className="relative flex w-full flex-col gap-2"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {enableInterrupt && (
        <InterruptPrompt
          isOpen={interruptPromptOpen}
          close={() => setShowInterruptPrompt(false)}
          onForcePass={() => {
            setShowInterruptPrompt(false)
            forcePass?.()
          }}
          onQueue={() => {
            setShowInterruptPrompt(false)
            textAreaRef.current?.form?.requestSubmit()
          }}
        />
      )}

      <RecordingPrompt
        isVisible={isRecording}
        onStopRecording={stopRecording}
      />

      {suggestions && append && suggestions.length > 0 && (
        <div className="mb-2">
          <PromptSuggestions append={append} suggestions={suggestions} />
        </div>
      )}

      <div className="relative flex w-full items-center space-x-2">
        <div className="relative flex-1">
          <textarea
            aria-label="Write your prompt here"
            placeholder={placeholder}
            ref={textAreaRef}
            onPaste={onPaste}
            onKeyDown={onKeyDown}
            className={cn(
              "z-10 w-full grow resize-none rounded-lg border border-input bg-background/50 backdrop-blur-sm p-4 text-sm ring-offset-background transition-all duration-200 placeholder:text-muted-foreground/70 focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background disabled:cursor-not-allowed disabled:opacity-50 shadow-sm",
              props.allowAttachments ? "pr-40" : "pr-28",
              showFileList && "pb-20",
              className
            )}
            value={props.value}
            onChange={textareaProps.onChange}
            disabled={props.disabled}
            onBlur={textareaProps.onBlur}
            onFocus={textareaProps.onFocus}
          />

          {props.allowAttachments && (
            <div className="absolute inset-x-3 bottom-0 z-20 py-3">
              <div className="flex space-x-3">
                <AnimatePresence mode="popLayout">
                  {props.files?.map((file) => {
                    return (
                      <Suspense key={file.name + String(file.lastModified)} fallback={<div className="h-16 w-16 animate-pulse bg-muted rounded-xl" />}>
                        <FilePreview
                          file={file}
                          onRemove={() => {
                            if (props.disabled) return
                            props.setFiles((files) => {
                              if (!files) return null

                              const filtered = Array.from(files).filter(
                                (f) => f !== file
                              )
                              if (filtered.length === 0) return null
                              return filtered
                            })
                          }}
                        />
                      </Suspense>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>


      <div className="absolute right-2 top-2 z-20 flex gap-1">
        <TooltipProvider delayDuration={0}>
          {props.allowAttachments && (
            <AttachmentButton disabled={props.disabled}
              onClick={async () => {
                const files = await showFileUploadDialog()
                addFiles(files)
              }}
            />
          )}

          <VoiceInputButton
            isSupported={!!isSpeechSupported}
            isListening={!!isListening}
            onClick={toggleListening}
          />
          <SubmitActionButton
            isGenerating={isGenerating}
            stop={stop}
            hasContent={Boolean(props.value?.trim() || (props.allowAttachments && props.files?.length))}
            onForcePass={forcePass}
            disabled={props.disabled || (!props.value.trim() && !(props.allowFileOnly && props.allowAttachments && props.files?.length)) || !!isListening || isTranscribing}
          />
        </TooltipProvider>
      </div>

      {(isListening || isTranscribing) && <div className="flex items-center justify-between gap-2 text-sm">
        <span role="status">{isTranscribing ? "Transcribing…" : interimTranscript || "Listening… Speak, then stop to review your draft."}</span>
        <Button type="button" variant="ghost" onClick={() => {
          ignoreVoice.current = true
          cancelListening()
          stopListening?.()
          textareaProps.onChange?.({ target: { value: draftBeforeVoice.current } } as React.ChangeEvent<HTMLTextAreaElement>)
        }}>Cancel voice</Button>
      </div>}
      {voiceError && <p role="alert" className="text-sm text-destructive">{voiceError} You can keep typing or try the microphone again.</p>}
      {!isSpeechSupported && <p className="text-xs text-muted-foreground">Voice input is unavailable in this browser. You can type your question.</p>}
      {props.allowAttachments && <FileUploadOverlay isDragging={isDragging} />}

      <RecordingControls
        isRecording={isRecording}
        isTranscribing={isTranscribing}
        audioStream={audioStream}
        textAreaHeight={textAreaHeight}
        onStopRecording={stopRecording}
      />
    </div>
  )
}
MessageInput.displayName = "MessageInput"

interface FileUploadOverlayProps {
  isDragging: boolean
}

function FileUploadOverlay({ isDragging }: FileUploadOverlayProps) {
  return (
    <AnimatePresence>
      {isDragging && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center space-x-2 rounded-xl border border-dashed border-border bg-background text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden
        >
          <Paperclip />
          <span>Drop your files here to attach them.</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function showFileUploadDialog() {
  const input = document.createElement("input")

  input.type = "file"
  input.multiple = true
  input.accept = "*/*"
  return new Promise<File[] | null>((resolve) => {
    input.oncancel = () => resolve(null)
    input.onchange = (e) => {
      const files = (e.currentTarget as HTMLInputElement).files

      if (files) {
        resolve(Array.from(files))
        return
      }

      resolve(null)
    }
    input.click()
  })
}

function TranscribingOverlay() {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <Loader2 className="h-11 w-11 animate-spin text-primary" />
        <motion.div
          className="absolute inset-0 h-11 w-11 animate-pulse rounded-full bg-primary/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
      <p className="mt-4 text-sm font-medium text-muted-foreground">
        Transcribing audio...
      </p>
    </motion.div>
  )
}

interface RecordingPromptProps {
  isVisible: boolean
  onStopRecording: () => void
}

function RecordingPrompt({ isVisible, onStopRecording }: RecordingPromptProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ top: 0, filter: "blur(5px)" }}
          animate={{
            top: -40,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              filter: { type: "tween" },
            },
          }}
          exit={{ top: 0, filter: "blur(5px)" }}
          className="absolute left-1/2 flex -translate-x-1/2 cursor-pointer overflow-hidden whitespace-nowrap rounded-full border bg-background py-1 text-center text-sm text-muted-foreground"
          onClick={onStopRecording}
        >
          <span className="mx-2.5 flex items-center">
            <Info className="mr-2 h-3 w-3" />
            Click to finish recording
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface RecordingControlsProps {
  isRecording: boolean
  isTranscribing: boolean
  audioStream: MediaStream | null
  textAreaHeight: number
  onStopRecording: () => void
}

function RecordingControls({
  isRecording,
  isTranscribing,
  audioStream,
  textAreaHeight,
  onStopRecording,
}: RecordingControlsProps) {
  if (isRecording) {
    return (
      <div
        className="absolute inset-[1px] z-50 overflow-hidden rounded-xl"
        style={{ height: textAreaHeight - 2 }}
      >
        <Suspense fallback={<span role="status">Loading audio…</span>}><AudioVisualizer
          stream={audioStream}
          isRecording={isRecording}
          onClick={onStopRecording}
        /></Suspense>
      </div>
    )
  }

  if (isTranscribing) {
    return (
      <div
        className="absolute inset-[1px] z-50 overflow-hidden rounded-xl"
        style={{ height: textAreaHeight - 2 }}
      >
        <TranscribingOverlay />
      </div>
    )
  }

  return null
}

interface ActionButtonProps {
  onClick?: () => void
  disabled?: boolean
  className?: string
}

function AttachmentButton({ onClick, className, disabled }: ActionButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className={cn("h-11 w-11 text-muted-foreground hover:text-foreground", className)}
          disabled={disabled}
          aria-label="Attach a file"
          onClick={onClick}
        >
          <Paperclip className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Attach file</TooltipContent>
    </Tooltip>
  )
}

function VoiceInputButton({
  isSupported,
  isListening,
  onClick,
}: {
  isSupported: boolean
  isListening: boolean
  onClick: () => void
}) {
  if (!isSupported) return null

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          aria-label={isListening ? "Stop recording" : "Voice input"}
          size="icon"
          onClick={onClick}
          className={cn(
            "h-11 w-11 transition-all duration-200",
            isListening
              ? "bg-red-500/10 text-red-500 hover:bg-red-500/20"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {isListening ? (
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          ) : (
            <Mic className="h-4 w-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {isListening ? "Stop recording" : "Use voice input"}
      </TooltipContent>
    </Tooltip>
  )
}

function SubmitActionButton({
  isGenerating,
  stop,
  hasContent,
  onForcePass,
  disabled,
}: {
  isGenerating: boolean
  stop?: () => void
  hasContent?: boolean
  onForcePass?: () => void
  disabled: boolean
}) {
  if (isGenerating) {
    if (hasContent) {
      return (
        <div className="flex items-center gap-1">
          {stop && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-11 w-11 text-muted-foreground hover:text-foreground cursor-pointer"
                  aria-label="Stop generating"
                  onClick={stop}
                >
                  <Square className="h-3.5 w-3.5 animate-pulse fill-current" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Stop current generation</TooltipContent>
            </Tooltip>
          )}
          {onForcePass && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-11 w-11 text-amber-500 hover:text-amber-600 hover:bg-amber-500/10 cursor-pointer"
                  aria-label="Force pass (send immediately)"
                  onClick={onForcePass}
                >
                  <Zap className="h-4 w-4 fill-current" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Force pass (interrupt & send immediately)</TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                className="h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-sm cursor-pointer"
                aria-label="Add to queue"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Queue message (runs next)</TooltipContent>
          </Tooltip>
        </div>
      )
    }

    if (stop) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-11 w-11 text-muted-foreground hover:text-foreground"
              aria-label="Stop generating"
              onClick={stop}
            >
              <Square className="h-3 w-3 animate-pulse fill-current" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Stop generating</TooltipContent>
        </Tooltip>
      )
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="submit"
          size="icon"
          className={cn(
            "h-11 w-11 rounded-full transition-all duration-200",
            disabled ? "opacity-50" : "bg-primary text-primary-foreground shadow-sm"
          )}
          aria-label="Send message"
          disabled={disabled}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Send message</TooltipContent>
    </Tooltip>
  )
}
