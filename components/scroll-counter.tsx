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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Proven Results in Real Operations</h2>
          <p className="text-lg text-white/70">Deployed AI systems delivering measurable impact across industries</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Counter end={500} label="AI Systems Deployed" suffix="+" />
          <Counter end={98} label="Client Success Rate" suffix="%" />
          <Counter end={40} label="Average ROI Improvement" suffix="%" />
          <Counter end={24} label="Hour Implementation" suffix="h" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-8 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Average Efficiency Gain</h3>
                <p className="text-white/70">
                  Clients report 35% reduction in manual tasks within first 90 days of deployment
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-8 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💰</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-white/70">
                  Average annual savings of $250K per organization through workflow automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
