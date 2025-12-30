"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function AIHero() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 mt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </defs>
          <circle cx="20%" cy="40%" r="30" fill="none" stroke="url(#flowGradient)" strokeWidth="1" opacity="0.5" />
          <circle cx="50%" cy="20%" r="30" fill="none" stroke="url(#flowGradient)" strokeWidth="1" opacity="0.5" />
          <circle cx="80%" cy="45%" r="30" fill="none" stroke="url(#flowGradient)" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/30 backdrop-blur-sm hover:bg-primary/20 transition-all cursor-pointer animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm font-medium text-white">AI-Powered Automation</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight text-white animate-slideInUp"
          style={{ animationDelay: "100ms" }}
        >
          Stop Paying People to Do What AI Can Automate
        </h1>

        <p
          className="text-lg md:text-xl text-white opacity-85 mb-4 text-balance max-w-2xl mx-auto leading-relaxed animate-slideInUp"
          style={{ animationDelay: "200ms" }}
        >
          From AI agents to automated workflows, we help teams replace manual processes with reliable, production-ready
          AI.
        </p>

        <p className="text-base text-primary/90 font-medium mb-8 animate-slideInUp" style={{ animationDelay: "250ms" }}>
          ✓ Helped 8+ businesses save 10-15 hours/week on reporting, follow-ups, and data entry
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInUp"
          style={{ animationDelay: "300ms" }}
        >
          <a href="https://calendly.com/gopanihitansh5" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 text-background font-bold rounded-full px-8 transition-all duration-300 group"
            >
              Book a Free AI Workflow Audit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent text-white transition-all duration-300"
          >
            See How It Works
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="animate-bounce text-primary/50" style={{ animationDelay: "0.2s" }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
