"use client"

import { useEffect, useState, useRef } from "react"
import { MessageCircle, Zap, Database, Brain, BarChart3, Shield } from "lucide-react"

const integrations = [
  { name: "ChatGPT API", icon: MessageCircle, color: "from-cyan-500 to-blue-500" },
  { name: "Claude AI", icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "LLaMA 2", icon: Zap, color: "from-amber-500 to-orange-500" },
  { name: "Vector DB", icon: Database, color: "from-green-500 to-teal-500" },
  { name: "Analytics", icon: BarChart3, color: "from-indigo-500 to-blue-500" },
  { name: "Security", icon: Shield, color: "from-red-500 to-pink-500" },
]

export default function AIIntegrations() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    let currentPosition = 0
    const cardWidth = 352 // w-80 (320px) + gap-6 (24px) + padding
    const totalWidth = integrations.length * cardWidth

    const animate = () => {
      currentPosition = (currentPosition + 0.8) % totalWidth
      setScrollPosition(currentPosition)
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section id="integrations" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">AI Integrations</h2>
          <p className="text-lg text-white opacity-80">Works seamlessly with your favorite AI platforms</p>
        </div>

        {/* Auto-scrolling carousel with infinite loop */}
        <div className="relative overflow-hidden rounded-lg" ref={containerRef}>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10"></div>

          <div
            className="flex gap-6"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              willChange: "transform",
            }}
          >
            {[...integrations, ...integrations, ...integrations].map((integration, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 group hover:scale-105"
              >
                <div
                  className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${integration.color} mb-4 group-hover:scale-125 transition-all group-hover:shadow-lg group-hover:shadow-primary/50`}
                >
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-white opacity-80">Seamless integration for enhanced AI capabilities</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
