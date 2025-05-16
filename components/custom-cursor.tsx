"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0

      setIsTouchDevice(isTouchDevice)
    }

    checkTouchDevice()

    // Don't set up mouse events on touch devices or when using system cursor
    if (isTouchDevice || document.documentElement.classList.contains("use-system-cursor")) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Delayed follower effect
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY })
      }, 100)
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isInteractive =
          e.target.tagName === "BUTTON" ||
          e.target.tagName === "A" ||
          e.target.closest("button") ||
          e.target.closest("a") ||
          e.target.classList.contains("interactive") ||
          (e.target.hasAttribute("role") && e.target.getAttribute("role") === "button") ||
          e.target.tabIndex === 0

        setIsHovering(isInteractive)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isTouchDevice])

  // Update the return statement to check for system cursor
  if (
    typeof window === "undefined" ||
    isTouchDevice ||
    document.documentElement.classList.contains("use-system-cursor")
  )
    return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-50 custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%)`,
          transition: "opacity 0.3s ease-out",
        }}
      >
        {/* Inner dot */}
        <div
          className="rounded-full"
          style={{
            width: isClicking ? "8px" : "12px",
            height: isClicking ? "8px" : "12px",
            backgroundColor: isHovering ? "#3b82f6" : "#ffffff",
            boxShadow: isHovering
              ? "0 0 15px 2px rgba(59, 130, 246, 0.7), 0 0 30px 5px rgba(59, 130, 246, 0.3)"
              : "0 0 10px 2px rgba(255, 255, 255, 0.3)",
            transition: "all 0.2s ease-out",
          }}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed pointer-events-none z-50 custom-cursor"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%)`,
          transition: "opacity 0.3s ease-out",
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            width: isHovering ? "40px" : "30px",
            height: isHovering ? "40px" : "30px",
            borderRadius: "50%",
            border: isHovering ? "1.5px solid rgba(59, 130, 246, 0.7)" : "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: isHovering ? "0 0 20px rgba(59, 130, 246, 0.3)" : "none",
            transition: "all 0.3s ease-out",
            transform: isClicking ? "scale(0.8)" : "scale(1)",
          }}
        />
      </div>

      {/* Hover effect for interactive elements */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-40 custom-cursor"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            opacity: 0.1,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <div
            className="rounded-full bg-blue-500"
            style={{
              width: "80px",
              height: "80px",
              filter: "blur(20px)",
              animation: "pulse 2s infinite",
            }}
          />
        </div>
      )}

      {/* Global styles for cursor animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
      `}</style>
    </>
  )
}
