import { useMemo } from "react"
import { type Message } from "@/components/ui/chat-message"

interface UseMessageDisplayProps {
    messages: Message[]
    isGenerating: boolean
}

export function useMessageDisplay({ messages, isGenerating }: UseMessageDisplayProps) {
    const lastMessage = messages.at(-1)
    const isEmpty = messages.length === 0
    const isTyping = lastMessage?.role === "user"

    const displayMessages = useMemo(() => {
        if (isGenerating && (isEmpty || lastMessage?.role === "user")) {
            return [
                ...messages,
                {
                    id: "typing",
                    role: "assistant" as const,
                    content: "",
                    createdAt: new Date(),
                },
            ]
        }
        return messages
    }, [messages, isGenerating, isEmpty, lastMessage])

    return {
        displayMessages,
        isTyping,
        isEmpty,
    }
}
