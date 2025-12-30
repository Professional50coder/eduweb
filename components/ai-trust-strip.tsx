"use client"

import { useEffect, useState } from "react"

const signals = [
  "Business-first AI systems",
  "No black-box solutions",
  "Secure & explainable",
  "Built for real operations",
  "ROI-driven implementations",
]

export default function AITrustStrip() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-12 overflow-hidden border-y border-border/50 bg-gradient-to-r from-transparent via-primary/5 to-transparent">
      <div className="relative">
        <div className="flex whitespace-nowrap gap-8">
          {[...signals, ...signals].map((signal, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-sm font-medium text-white flex-shrink-0 hover:text-primary transition-colors"
              style={{
                transform: `translateX(${offset * 2}px)`,
                opacity: 0.9 + Math.sin(offset * 0.1) * 0.1,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
