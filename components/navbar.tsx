"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Capabilities", href: "#capabilities" },
  ]

  return (
    <nav className={`z-50 transition-all duration-300 ${isScrolled ? "fixed top-4 left-4 right-4" : "relative"}`}>
      <div className={`${isScrolled ? "max-w-7xl mx-auto px-6" : ""}`}>
        <div
          className={`rounded-full backdrop-blur-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 border border-primary/30 shadow-2xl hover:border-primary/50"
              : "bg-transparent border border-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-14 px-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                  <Sparkles className="text-background w-4 h-4" />
                </div>
                <span className="font-bold text-sm hidden sm:inline bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                  ai2easy4u
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-medium text-white/70 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <a href="https://calendly.com/gopanihitansh5" target="_blank" rel="noopener noreferrer">
                <Button className="hidden sm:flex h-8 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-background text-xs font-bold rounded-full px-5 transition-all duration-300">
                  Get Started
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-primary transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="hidden md:block absolute top-16 left-0 right-0 rounded-2xl bg-background/95 backdrop-blur-xl border border-primary/20 mx-4 mb-4">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-medium text-white hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="https://calendly.com/gopanihitansh5" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-background rounded-full font-bold text-sm mt-2">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
