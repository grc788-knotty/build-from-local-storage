"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 text-primary-foreground"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" />
              <path d="M12 8v8" />
            </svg>
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight">Knotty Hookers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            href="/" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link 
            href="/customize" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Customize
          </Link>
          <Link 
            href="/#products" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Inventory
          </Link>
          <Link 
            href="/#about" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/customize">Start Creating</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="flex flex-col gap-2 p-4">
            <Link 
              href="/" 
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/customize" 
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Customize
            </Link>
            <Link 
              href="/#products" 
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link 
              href="/#about" 
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/customize" onClick={() => setIsMenuOpen(false)}>Start Creating</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
