import { Zap } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-medium">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
        <Zap className="h-4 w-4" />
      </div>
      <span className="text-lg">SRGAN</span>
    </Link>
  )
}

