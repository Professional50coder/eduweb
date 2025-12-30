"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface Flashcard {
  id: number
  title: string
  subtitle: string
  gradient: string
  icon: string
}

const flashcards: Flashcard[] = [
  {
    id: 1,
    title: "AI Automation",
    subtitle: "Transform business processes",
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Machine Learning",
    subtitle: "Data-driven decision making",
    gradient: "from-purple-600 via-pink-500 to-red-500",
    icon: "🧠",
  },
  {
    id: 3,
    title: "Natural Language",
    subtitle: "Human-like understanding",
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    icon: "💬",
  },
  {
    id: 4,
    title: "Computer Vision",
    subtitle: "Visual intelligence systems",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "👁️",
  },
  {
    id: 5,
    title: "Predictive Analytics",
    subtitle: "Future-ready insights",
    gradient: "from-indigo-600 via-purple-500 to-pink-500",
    icon: "📊",
  },
  {
    id: 6,
    title: "Smart Integration",
    subtitle: "Seamless ecosystem",
    gradient: "from-rose-600 via-red-500 to-orange-500",
    icon: "🔗",
  },
]

export default function PremiumFlashcards() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!autoplay) return

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % flashcards.length)
      }, 6000)
    }

    startAutoplay()

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [autoplay])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 3000) // Resume autoplay after 3 seconds
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % flashcards.length)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 3000) // Resume autoplay after 3 seconds
  }

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-background/50 to-background">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Explore AI Capabilities</h2>
          <p className="text-lg text-white/80 font-light">Discover what AI can do for your business</p>
        </div>

        <div
          className="relative h-[500px] md:h-[600px] flex items-center justify-center perspective-1000"
          ref={containerRef}
        >
          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-20" />

          <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1200px" }}>
            {flashcards.map((card, idx) => {
              const position = (idx - activeIndex + flashcards.length) % flashcards.length
              const isActive = position === 0
              const isNext = position === 1
              const isPrev = position === flashcards.length - 1

              let rotateY = 0
              let rotateX = 0
              let translateZ = 0
              let translateY = 0
              let scale = 0.85
              let opacity = 0.4

              if (isActive) {
                rotateY = 0
                rotateX = 0
                translateZ = 0
                translateY = 0
                scale = 1
                opacity = 1
              } else if (isNext) {
                rotateY = 25
                rotateX = 8
                translateZ = -80
                translateY = 40
                scale = 0.92
                opacity = 0.7
              } else if (isPrev) {
                rotateY = -25
                rotateX = 8
                translateZ = -80
                translateY = 40
                scale = 0.92
                opacity = 0.7
              } else if (position <= 2) {
                rotateY = 35
                rotateX = 10
                translateZ = -150
                translateY = 60
                scale = 0.8
                opacity = 0.5
              } else {
                rotateY = 45
                rotateX = 12
                translateZ = -220
                translateY = 80
                scale = 0.7
                opacity = 0.3
              }

              return (
                <div
                  key={card.id}
                  className="absolute transition-all duration-700 ease-out cursor-pointer group will-change-transform"
                  style={{
                    transform: `
                      rotateX(${rotateX}deg)
                      rotateY(${rotateY}deg)
                      translateZ(${translateZ}px)
                      translateY(${translateY}px)
                      scale(${scale})
                    `,
                    opacity: opacity,
                    zIndex: isActive ? 50 : 40 - Math.abs(position),
                  }}
                  onClick={() => {
                    setActiveIndex(idx)
                    setAutoplay(false)
                    setTimeout(() => setAutoplay(true), 3000)
                  }}
                >
                  <div
                    className={`
                      w-80 md:w-96 h-80 md:h-96 rounded-3xl
                      bg-gradient-to-br ${card.gradient}
                      p-8 md:p-10 flex flex-col justify-between
                      text-white shadow-2xl
                      transition-all duration-500
                      border border-white/20
                      backdrop-blur-xl
                      relative overflow-hidden
                      ${isActive ? "group-hover:shadow-2xl group-hover:shadow-primary/40" : ""}
                    `}
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-black/20 pointer-events-none" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="text-5xl md:text-6xl mb-6 filter drop-shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu">
                          {card.icon}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight drop-shadow-md">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-lg md:text-xl font-light opacity-95 drop-shadow-md">{card.subtitle}</p>
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none animate-pulse" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-primary/15 hover:bg-primary/40 border border-primary/40 hover:border-primary/70 text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/50 backdrop-blur-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-primary/15 hover:bg-primary/40 border border-primary/40 hover:border-primary/70 text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/50 backdrop-blur-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {flashcards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx)
                  setAutoplay(false)
                  setTimeout(() => setAutoplay(true), 3000)
                }}
                className={`rounded-full transition-all duration-500 ${
                  idx === activeIndex
                    ? "bg-primary w-8 h-3 shadow-lg shadow-primary/60"
                    : "bg-primary/30 w-2 h-2 hover:bg-primary/60 hover:scale-125"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
