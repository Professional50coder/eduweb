"use client"

import { useInView } from "react-intersection-observer"

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "Understand your current workflows and pain points",
  },
  {
    num: "02",
    title: "Process Mapping",
    description: "Document the exact flows where AI can add value",
  },
  {
    num: "03",
    title: "AI Architecture",
    description: "Design secure, explainable AI systems for your needs",
  },
  {
    num: "04",
    title: "Deployment",
    description: "Build, integrate, and test in your environment",
  },
  {
    num: "05",
    title: "Monitoring",
    description: "Track performance and continuously improve",
  },
]

export default function AIHowItWorks() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">A Simple, Engineered Approach</h2>
          <p className="text-lg text-white opacity-85">No hype. No overengineering. Just systems that work.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent z-0" />

          <div className="grid md:grid-cols-5 gap-4 md:gap-2 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx}>
                <StepNode step={step} index={idx} />

                {/* Connection line to next step */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 glass rounded-lg p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
          <p className="text-lg text-white opacity-85 leading-relaxed group-hover:opacity-100 transition-opacity">
            Each step is guided by engineering rigor and business impact. As you scroll, each node lights up, showing
            data packets flowing through your system.
          </p>
        </div>
      </div>
    </section>
  )
}

function StepNode({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.8)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="glass rounded-lg p-6 text-center h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 cursor-pointer group">
        <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-125 transition-transform duration-300">
          {step.num}
        </div>
        <h3 className="font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
        <p className="text-sm text-white opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
          {step.description}
        </p>
      </div>
    </div>
  )
}
