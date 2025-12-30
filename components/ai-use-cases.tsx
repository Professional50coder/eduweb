"use client"

import { useInView } from "react-intersection-observer"

const useCases = [
  { title: "Ops Automation", icon: "⚙️" },
  { title: "Internal AI Assistants", icon: "🤖" },
  { title: "Sales & Lead Qualification", icon: "📞" },
  { title: "Analytics & Reporting", icon: "📊" },
  { title: "Knowledge Management", icon: "📚" },
  { title: "Decision Support Systems", icon: "🎯" },
]

export default function AIUseCases() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Where AI Delivers Value</h2>
          <p className="text-lg text-white font-light opacity-90">Proven results across industries and use cases</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => (
            <UseCaseCard key={idx} useCase={useCase} delay={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCaseCard({ useCase, delay }: { useCase: (typeof useCases)[0]; delay: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="glass rounded-xl p-8 text-center group hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        transitionDelay: `${delay * 100}ms`,
      }}
    >
      <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
        {useCase.icon}
      </div>
      <h3 className="font-bold text-lg text-white">{useCase.title}</h3>
    </div>
  )
}
