"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"

export default function EducatorSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const highlights = [
    "Real-world experience in AI education",
    "Direct mentoring from industry professionals",
    "Continuously updated with latest AI trends",
    "Community-driven learning approach",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built by someone who teaches AI</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                ai2easy4u is created by an AI trainer and educator who works directly with students and professionals —
                not just theory, but real-world usage.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right profile card */}
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="rounded-3xl border border-border/30 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-colors">
              <div className="space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Educator & Trainer</h3>
                  <p className="text-foreground/60 mb-4">
                    With years of experience teaching AI to thousands of students and professionals, creating a platform
                    where learning AI feels approachable and practical.
                  </p>
                  <div className="text-sm text-primary font-semibold">
                    ✓ 5+ years in AI education
                    <br />✓ Trained 10,000+ students
                    <br />✓ Industry expert in ML & AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
