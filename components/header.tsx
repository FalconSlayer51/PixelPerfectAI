"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { useAuth } from "@/lib/auth-context"

export function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-bold">SRGAN</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button variant="ghost" onClick={() => logout()}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
} 