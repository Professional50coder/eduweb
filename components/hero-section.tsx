"use client"

import { useEffect, useState } from "react"
import { Button } from "@/eduweb/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Welcome to ai2easy4u</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span>AI made </span>
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  simple. Finally.
                </span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                Learn Artificial Intelligence the practical way — no jargon, no confusion. Just clear explanations, real
                tools, and everyday use-cases.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold flex items-center gap-2 group">
                Start with Basics
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-border/50 hover:bg-secondary/10 bg-transparent"
              >
                Explore AI Tools
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-96 transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative h-full rounded-3xl border border-border/20 bg-card/50 backdrop-blur-sm p-8 flex items-center justify-center overflow-hidden">
              {/* Animated card stack effect */}
              <div className="space-y-3 w-full">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-20 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-border/30 backdrop-blur-sm transform transition-transform hover:scale-105"
                    style={{
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                      marginBottom: "-12px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
