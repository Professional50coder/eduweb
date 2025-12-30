"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "AI Workflow Audit",
    price: "₹4,999",
    duration: "one-time",
    description: "Perfect for understanding your automation potential",
    features: [
      "30-45 min workflow review",
      "Identify 3-5 automation opportunities",
      "Cost-saving estimate",
      "Written recommendations",
    ],
    cta: "Book Free Audit",
    highlighted: false,
  },
  {
    name: "Pilot Automation",
    price: "₹49,999",
    duration: "2-week project",
    description: "Build and deploy your first AI system",
    features: [
      "One complete automation end-to-end",
      "2-week implementation",
      "Team training included",
      "30-day support",
      "Performance metrics & ROI tracking",
    ],
    cta: "Start Pilot",
    highlighted: true,
  },
  {
    name: "Full System Build",
    price: "Custom",
    duration: "based on scope",
    description: "Enterprise-grade AI infrastructure",
    features: [
      "Multi-system integration",
      "Custom architecture design",
      "Ongoing optimization",
      "Dedicated support",
      "Quarterly reviews & scaling",
    ],
    cta: "Get Custom Quote",
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-lg text-white/70">Start small, scale as you see results. No surprise costs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "glass border-primary/50 shadow-2xl shadow-primary/20 scale-105"
                  : "glass border-border/50 hover:border-primary/30"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-white/70 text-sm mb-6">{tier.description}</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-1">{tier.price}</div>
                <div className="text-sm text-white/60">{tier.duration}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://calendly.com/gopanihitansh5" target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full rounded-lg font-bold transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/50"
                      : "border border-primary/30 text-white hover:bg-primary/10"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70">
            Questions about your specific needs?{" "}
            <a
              href="https://calendly.com/gopanihitansh5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold"
            >
              Book a free consultation
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
