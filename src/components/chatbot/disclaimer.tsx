import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface DisclaimerProps { onAccept: () => void; open: boolean }
export function Disclaimer({ onAccept, open }: DisclaimerProps) {
  return <Dialog open={open} onOpenChange={next => { if (!next) onAccept() }}>
    <DialogContent showCloseButton={false} onEscapeKeyDown={event => event.preventDefault()} onInteractOutside={event => event.preventDefault()}>
      <DialogHeader><DialogTitle>Welcome</DialogTitle>
        <DialogDescription>This AI assistant is designed to help you explore my portfolio. We use local storage to save your preferences for a better experience.</DialogDescription>
      </DialogHeader>
      <Button onClick={onAccept}>Accept &amp; Continue</Button>
    </DialogContent>
  </Dialog>
}
