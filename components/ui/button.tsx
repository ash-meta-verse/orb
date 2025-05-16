"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "a" : "button"
    const [cursorTheme, setCursorTheme] = useState<string | null>(null)
    const [isSystemCursor, setIsSystemCursor] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)

      // Get the current cursor theme from localStorage when component mounts
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("cursor-theme") || "default"
        setCursorTheme(savedTheme)

        // Check if system cursor is enabled
        setIsSystemCursor(document.documentElement.classList.contains("use-system-cursor"))
      }
    }, [])

    const handleMouseEnter = (e: React.MouseEvent) => {
      // Apply hover effect for cursor
      if (isMounted && typeof document !== "undefined" && !isSystemCursor) {
        document.dispatchEvent(new CustomEvent("cursor-hover", { detail: { element: e.currentTarget } }))
      }

      // Call the original onMouseEnter if it exists
      if (props.onMouseEnter) {
        props.onMouseEnter(e)
      }
    }

    const handleMouseLeave = (e: React.MouseEvent) => {
      // Remove hover effect for cursor
      if (isMounted && typeof document !== "undefined" && !isSystemCursor) {
        document.dispatchEvent(new CustomEvent("cursor-leave"))
      }

      // Call the original onMouseLeave if it exists
      if (props.onMouseLeave) {
        props.onMouseLeave(e)
      }
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "inline-flex items-center justify-center",
          isMounted && !isSystemCursor && "cursor-none",
        )}
        ref={ref}
        data-cursor-hover={cursorTheme !== "system"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
