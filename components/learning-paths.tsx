"use client"

import { useEffect, useState } from "react"
import { Button } from "@/eduweb/components/ui/button"
import { BookOpenCheck, Wrench, Zap, AlertTriangle, ArrowRight } from "lucide-react"

const learningPaths = [
  {
    icon: BookOpenCheck,
    title: "AI Basics",
    description: "Understand AI, ML, ChatGPT, prompts, and fundamentals",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Wrench,
    title: "AI Tools",
    description: "Hands-on guides for real AI tools you can use daily",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Zap,
    title: "Productivity with AI",
    description: "Automate work, study smarter, save time",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: AlertTriangle,
    title: "AI Scam Awareness",
    description: "Learn how to spot fake AI apps, scams, and hype",
    color: "from-orange-500/20 to-orange-500/5",
  },
]

export default function LearningPaths() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your AI learning path — <span className="text-balance">step by step</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Choose your learning journey and master AI at your own pace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, i) => {
            const Icon = path.icon
            return (
              <div
                key={i}
                className={`group relative rounded-2xl border border-border/30 p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: mounted ? `${i * 100}ms` : "0ms",
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-2xl border border-primary/50 group-hover:border-primary/100"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{path.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{path.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 text-primary hover:text-primary/80 h-auto font-semibold flex items-center gap-2 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
