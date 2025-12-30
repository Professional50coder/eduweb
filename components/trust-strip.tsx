"use client"

import { useEffect, useState } from "react"
import { BookOpen, Zap, Shield, Award } from "lucide-react"

const trustItems = [
  {
    icon: BookOpen,
    title: "Beginner-friendly explanations",
    description: "Clear, jargon-free content for everyone",
  },
  {
    icon: Zap,
    title: "Practical tool walkthroughs",
    description: "Real-world usage of AI tools",
  },
  {
    icon: Shield,
    title: "Scam & fake AI awareness",
    description: "Learn to spot deceptive practices",
  },
  {
    icon: Award,
    title: "Built by an AI trainer",
    description: "Expert guidance from experience",
  },
]

export default function TrustStrip() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-border/30 bg-card/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-500 group cursor-pointer ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: mounted ? `${i * 100}ms` : "0ms",
                }}
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
