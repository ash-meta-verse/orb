"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import ScrollToTop from "./scroll-to-top"

export default function PageScrollBehavior({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  )
}

