"use client"

import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

const problems = [
  {
    icon: "📊",
    old: "Weekly reports",
    new: "AI-generated insights",
  },
  {
    icon: "🎯",
    old: "Support overload",
    new: "AI triage + escalation",
  },
  {
    icon: "📈",
    old: "Data everywhere",
    new: "Single AI decision layer",
  },
  {
    icon: "⚡",
    old: "Human follow-ups",
    new: "Automated workflows",
  },
]

export default function AIProblems() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-white">
            Most Companies Aren't Blocked by AI.
            <br />
            <span className="text-primary">They're Blocked by Broken Processes.</span>
          </h2>
          <p className="text-lg text-white opacity-80 max-w-2xl mx-auto">
            AI doesn't replace people. It removes friction from decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <ProblemCard key={idx} problem={problem} delay={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({ problem, delay }: { problem: (typeof problems)[0]; delay: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="glass rounded-lg p-8 transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay * 100}ms`,
      }}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-white/60 mb-2">Before</p>
          <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">{problem.old}</p>
        </div>
        <div className="flex items-center gap-2 text-primary h-6 group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm text-white/60 mb-2">After</p>
          <p className="text-lg font-medium text-primary group-hover:scale-105 transition-transform">{problem.new}</p>
        </div>
      </div>
    </div>
  )
}
