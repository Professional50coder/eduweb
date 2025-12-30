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
  const { ref: refExample, inView: inViewExample } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

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

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, idx) => (
            <ProblemCard key={idx} problem={problem} delay={idx} />
          ))}
        </div>

        <div
          ref={refExample}
          className={`glass rounded-xl p-8 border border-primary/20 transition-all duration-700 ${
            inViewExample ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Real Example: Sales Team Automation</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Before AI</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">❌</span>
                  <span className="text-white/80">Sales team spent 6 hours/week updating CRM manually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">❌</span>
                  <span className="text-white/80">Leads got old before follow-up (3-5 days delay)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">❌</span>
                  <span className="text-white/80">No qualification happening - all leads treated equally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">❌</span>
                  <span className="text-white/80">Cost: ~₹2,40,000/month (4 hours × ₹60K/month salary)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">After AI Agent</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-white/80">AI syncs data in real-time, team focuses on closing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-white/80">Leads qualified & followed up within minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-white/80">Hot leads prioritized, low-value automated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-white/80">Time saved: 24 hours/month = ₹45,000/month saved</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24 hrs</div>
                <div className="text-sm text-white/70">Saved per month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₹45K</div>
                <div className="text-sm text-white/70">Monthly savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3x</div>
                <div className="text-sm text-white/70">Response rate increase</div>
              </div>
            </div>
          </div>
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
