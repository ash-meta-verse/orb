"use client"

import { useEffect, useState } from "react"

export default function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorSize, setCursorSize] = useState(600)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [effectEnabled, setEffectEnabled] = useState(true)

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
      setIsTouchDevice(isTouchDevice)
    }

    // Get saved effect state
    const savedEffectState = localStorage.getItem("cursor-effect-enabled")
    setEffectEnabled(savedEffectState === null ? true : savedEffectState === "true")

    checkTouchDevice()

    // Don't set up mouse events on touch devices or if effect is disabled
    if (isTouchDevice || savedEffectState === "false") return

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    const handleMouseOver = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        const isInteractive =
          event.target.tagName === "BUTTON" ||
          event.target.tagName === "A" ||
          event.target.closest("button") ||
          event.target.closest("a") ||
          event.target.classList.contains("interactive")

        if (isInteractive) {
          setCursorSize(150)
          setIsHovering(true)
        } else {
          setCursorSize(600)
          setIsHovering(false)
        }
      }
    }

    // Listen for effect state changes
    const handleStorageChange = () => {
      const newEffectState = localStorage.getItem("cursor-effect-enabled")
      setEffectEnabled(newEffectState === null ? true : newEffectState === "true")
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [isTouchDevice])

  // Don't render the effect on touch devices or if effect is disabled
  if (isTouchDevice || !effectEnabled) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 custom-cursor"
      style={{
        background: `radial-gradient(${cursorSize}px at ${mousePosition.x}px ${mousePosition.y}px, ${isHovering ? "rgba(59, 130, 246, 0.25)" : "rgba(29, 78, 216, 0.15)"}, transparent 80%)`,
        transition: "all 0.3s ease-out",
      }}
    />
  )
}
