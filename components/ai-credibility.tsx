"use client"

import { Shield, Lock, Brain, Zap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const credibilityPoints = [
  {
    icon: Shield,
    title: "Clear scope & documentation",
    description: "Transparent project planning and detailed documentation",
  },
  { icon: Lock, title: "Security-first architecture", description: "Enterprise-grade security and compliance" },
  { icon: Brain, title: "Explainable AI decisions", description: "Transparent AI reasoning you can audit" },
  { icon: Zap, title: "Long-term maintainability", description: "Future-proof systems built to scale" },
]

export default function AICredibility() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Built Like Engineering.
            <br />
            <span className="text-primary">Sold Like Consulting.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {credibilityPoints.map((point, idx) => (
            <CredibilityPoint key={idx} point={point} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CredibilityPoint({
  point,
  index,
}: {
  point: (typeof credibilityPoints)[0]
  index: number
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const Icon = point.icon

  return (
    <div
      ref={ref}
      className="flex items-start gap-6 p-8 glass rounded-lg hover:border-primary/50 transition-all duration-700 group hover:shadow-lg hover:shadow-primary/10 hover:scale-105 cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 group-hover:bg-primary/40 group-hover:scale-110 transition-all group-hover:shadow-lg group-hover:shadow-primary/40">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">{point.title}</p>
        <p className="text-sm text-white/70">{point.description}</p>
      </div>
    </div>
  )
}
