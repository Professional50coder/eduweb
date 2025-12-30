"use client"

import { useEffect, useState } from "react"
import { Button } from "@/eduweb/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Don't let AI feel complicated.</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Start learning it the easy way. Join thousands of students and professionals who are mastering AI today.
            </p>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-semibold flex items-center gap-2 group mx-auto">
            Start Learning AI Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-foreground/50">No credit card required. Start free today.</p>
        </div>
      </div>
    </section>
  )
}
