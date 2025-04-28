"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "none"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  threshold?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className,
  variant = "fadeIn",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If we only want to animate once and it's already animated, do nothing
        if (once && hasAnimated) return

        // Update visibility state based on intersection
        setIsVisible(entry.isIntersecting)

        // If it's intersecting and we only want to animate once, mark as animated
        if (entry.isIntersecting && once) {
          setHasAnimated(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before the element is fully in view
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once, hasAnimated])

  // If variant is none, just render the children without animation
  if (variant === "none") {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={cn(className, "transition-all duration-1000", {
        "opacity-0": !isVisible,
        "opacity-100": isVisible,
        "translate-y-10": !isVisible && variant === "fadeInUp",
        "translate-y-0": isVisible && variant === "fadeInUp",
        "-translate-x-10": !isVisible && variant === "fadeInLeft",
        "translate-x-0": isVisible && variant === "fadeInLeft",
        "translate-x-10": !isVisible && variant === "fadeInRight",
        "translate-x-0": isVisible && variant === "fadeInRight",
        "scale-95": !isVisible && variant === "zoomIn",
        "scale-100": isVisible && variant === "zoomIn",
      })}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
