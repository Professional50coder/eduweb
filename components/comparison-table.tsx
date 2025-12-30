"use client"

import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ComparisonTable() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      name: "Implementation Time",
      traditional: "6-12 months",
      ai: "2-4 weeks",
      advantage: "ai",
    },
    {
      name: "Setup Complexity",
      traditional: "Highly Complex",
      ai: "Simple & Guided",
      advantage: "ai",
    },
    {
      name: "Scalability",
      traditional: "Limited",
      ai: "Unlimited",
      advantage: "ai",
    },
    {
      name: "Cost of Ownership",
      traditional: "$500K+ annually",
      ai: "$50K - $150K",
      advantage: "ai",
    },
    {
      name: "Maintenance Required",
      traditional: "Extensive",
      ai: "Minimal",
      advantage: "ai",
    },
    {
      name: "Explainability",
      traditional: "Black Box",
      ai: "Full Transparency",
      advantage: "ai",
    },
    {
      name: "Adaptability",
      traditional: "Rigid Rules",
      ai: "Dynamic & Learning",
      advantage: "ai",
    },
    {
      name: "Integration",
      traditional: "Custom Work Required",
      ai: "Seamless Integration",
      advantage: "ai",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">AI-First vs Traditional Approaches</h2>
          <p className="text-lg text-white/70">See how modern AI systems outperform legacy solutions</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary/20">
                <th className="text-left py-4 px-4 text-white font-semibold">Capability</th>
                <th className="text-center py-4 px-4 text-white/70 font-semibold">Traditional Systems</th>
                <th className="text-center py-4 px-4 text-primary font-semibold">AI-First Systems</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border/30 transition-all duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${idx * 50}ms` : "0ms",
                  }}
                >
                  <td className="py-4 px-4 text-white font-medium">{feature.name}</td>
                  <td className="py-4 px-4 text-center text-white/60">{feature.traditional}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-white">{feature.ai}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6">Ready to experience the AI advantage? Let's discuss your specific needs.</p>
          <a
            href="https://calendly.com/gopanihitansh5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
