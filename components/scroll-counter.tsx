"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  label: string
  suffix?: string
}

function Counter({ end, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let currentCount = 0
    const increment = Math.ceil(end / 60)
    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(currentCount)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [hasStarted, end])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </div>
  )
}

export default function ScrollCounter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Built For Real Businesses</h2>
          <p className="text-lg text-white/70">We focus on honest results, not inflated metrics.</p>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Built Telegram bot for crypto signals tracking
                </h3>
                <p className="text-white/70">
                  Saves 8 hours/week on manual monitoring. Real-time signal delivery with zero manual intervention.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Created student dashboard for coaching institute
                </h3>
                <p className="text-white/70">
                  200+ students with auto-updated performance reports. Replaced manual spreadsheets with intelligent
                  automation.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Automated lead follow-up system for SaaS founder
                </h3>
                <p className="text-white/70">
                  3x response rate increase. Zero manual work - AI handles qualification, follow-ups, and scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
