"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Learn AI", href: "#learn-ai" },
    { label: "Articles", href: "/articles" },
    { label: "Tools", href: "#tools" },
    { label: "Scam Awareness", href: "#scam-awareness" },
    { label: "About", href: "#about" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                ai2easy4u
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/dashboard/write">
              <Button
                variant="outline"
                className="hidden sm:flex bg-transparent gap-2 border-primary/50 hover:border-primary"
              >
                <PenTool className="h-4 w-4" />
                Write a Post
              </Button>
            </Link>
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Start Learning
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/dashboard/write" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full bg-transparent gap-2 border-primary/50 hover:border-primary mt-2"
                >
                  <PenTool className="h-4 w-4" />
                  Write a Post
                </Button>
              </Link>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-2">
                Start Learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
