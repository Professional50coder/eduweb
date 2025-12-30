"use client"

import { Brain, Zap, BarChart3 } from "lucide-react"
import { useInView } from "react-intersection-observer"

const offerings = [
  {
    icon: Brain,
    title: "AI Agents",
    description: "Internal copilots trained on your docs, SOPs, and data. Works inside your tools.",
    features: ["Document training", "Custom logic", "Tool integration"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Cross-tool automation with AI-triggered decisions and human-in-the-loop control.",
    features: ["Multi-tool sync", "Smart decisions", "Human oversight"],
  },
  {
    icon: BarChart3,
    title: "Decision Systems",
    description: "Transform reports into explanations, dashboards into alerts, data into actions.",
    features: ["Real-time insights", "Explainable AI", "Action triggers"],
  },
]

export default function AIOfferings() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What We Build</h2>
          <p className="text-lg text-white font-light opacity-90">Three core offerings to transform your operations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <OfferingCard key={idx} offering={offering} delay={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferingCard({ offering, delay }: { offering: (typeof offerings)[0]; delay: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const Icon = offering.icon

  return (
    <div
      ref={ref}
      className="group glass rounded-xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer hover:scale-105"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay * 100}ms`,
      }}
    >
      <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/30 group-hover:scale-110 transition-all">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white">{offering.title}</h3>
      <p className="text-white font-light opacity-90 mb-6 leading-relaxed">{offering.description}</p>

      <ul className="space-y-2">
        {offering.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-white font-light opacity-80">
            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-secondary transition-colors"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
