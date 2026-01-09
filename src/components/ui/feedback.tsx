import { Button } from "./button"
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

interface FeedbackProps {
    onRateResponse: (messageId: string, rating: "thumbs-up" | "thumbs-down") => void
    messageId: string
}
export default function Feedback({ onRateResponse, messageId }: FeedbackProps) {
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" className="size-6" onClick={() => onRateResponse(messageId, "thumbs-up")}>
                            <ThumbsUpIcon />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Thumbs Up
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" className="size-6" onClick={() => onRateResponse(messageId, "thumbs-down")}>
                            <ThumbsDownIcon />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Thumbs Down
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}