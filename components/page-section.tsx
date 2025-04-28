import type React from "react"
import { cn } from "@/lib/utils"
import AnimatedSection from "./animated-section"

type SectionVariant = "default" | "muted" | "primary"
type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "none"

interface PageSectionProps {
  children: React.ReactNode
  className?: string
  variant?: SectionVariant
  animation?: AnimationVariant
  delay?: number
  id?: string
}

export default function PageSection({
  children,
  className,
  variant = "default",
  animation = "fadeInUp",
  delay = 0,
  id,
}: PageSectionProps) {
  return (
    <AnimatedSection
      variant={animation}
      delay={delay}
      className={cn(
        "py-16 md:py-24",
        {
          "bg-muted/30": variant === "muted",
          "bg-primary text-primary-foreground": variant === "primary",
        },
        className,
      )}
      id={id}
    >
      <div className="container mx-auto px-4">{children}</div>
    </AnimatedSection>
  )
}
