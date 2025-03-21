import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SRGAN. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}

