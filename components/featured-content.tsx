"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

const contentCards = [
  {
    title: "ChatGPT explained for absolute beginners",
    tags: ["Beginner", "Tools", "Tutorial"],
    image: "linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.1))",
  },
  {
    title: "Top AI tools students should use in 2025",
    tags: ["Tools", "Students", "Productivity"],
    image: "linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(139, 92, 246, 0.1))",
  },
  {
    title: "How fake AI apps scam users (real examples)",
    tags: ["Safety", "Awareness", "Scams"],
    image: "linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(6, 182, 212, 0.1))",
  },
  {
    title: "Using AI ethically & responsibly",
    tags: ["Ethics", "Advanced", "Safety"],
    image: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(88, 28, 135, 0.1))",
  },
  {
    title: "AI in education: transforming learning",
    tags: ["Education", "Trends", "Research"],
    image: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))",
  },
  {
    title: "Prompt engineering: get better results from AI",
    tags: ["Tutorial", "Tools", "Advanced"],
    image: "linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.1))",
  },
]

export default function FeaturedContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">What you'll learn inside ai2easy4u</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Explore our comprehensive collection of guides, tutorials, and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentCards.map((card, i) => (
            <div
              key={i}
              className={`group rounded-2xl border border-border/30 overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: mounted ? `${i * 50}ms` : "0ms",
              }}
            >
              {/* Image placeholder */}
              <div
                className="h-48 bg-card relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: card.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-4 leading-snug group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, j) => (
                    <Badge
                      key={j}
                      variant="secondary"
                      className="text-xs bg-secondary/30 hover:bg-secondary/50 text-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
