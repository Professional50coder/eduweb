"use client"

import { Button } from "@/eduweb/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function AICTA() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div
        className="max-w-2xl mx-auto text-center animate-slideInUp"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "all 700ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Not Sure Where AI Fits in Your Business?</h2>
        <p className="text-lg text-white opacity-85 mb-4">
          We'll audit your workflows and show exactly where AI delivers value — no obligation.
        </p>
        <p className="text-sm text-white/70 mb-8">30 min · No sales pitch · Clear next steps</p>

        <a href="https://calendly.com/gopanihitansh5" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 text-background rounded-full px-8 font-bold transition-all duration-300 hover:scale-105 group"
          >
            Book a Free AI Workflow Audit
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  )
}
