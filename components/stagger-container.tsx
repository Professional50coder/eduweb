"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export default function StaggerContainer({ children, className = "", staggerDelay = 100 }: StaggerContainerProps) {
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

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          "--stagger-delay": `${staggerDelay}ms`,
        } as React.CSSProperties
      }
    >
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <div
              key={idx}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) translateX(0)" : "translateY(20px) translateX(0)",
                transitionDelay: isVisible ? `${idx * staggerDelay}ms` : "0ms",
                transition: "all 700ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
