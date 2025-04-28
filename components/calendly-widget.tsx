"use client"

import { useEffect } from "react"

export default function CalendlyWidget() {
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    // Create a script element for Calendly
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true

    // Initialize the badge widget after script loads
    script.onload = () => {
      // Make sure Calendly is loaded and window is defined
      if (typeof window !== "undefined" && window.Calendly) {
        try {
          // Use a safer approach to initialize the widget
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/achraf-garsaa/15min",
            text: "Schedule time with me",
            color: "#0069ff",
            textColor: "#ffffff",
          })
        } catch (error) {
          console.error("Error initializing Calendly widget:", error)
        }
      }
    }

    document.body.appendChild(script)

    return () => {
      // Clean up
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}
