import { Zap } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2 font-medium">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
        <Zap className="h-4 w-4" />
      </div>
    </div>
  )
}

