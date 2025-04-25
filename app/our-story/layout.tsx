import Footer from "@/app/components/Footer"
import type { ReactNode } from "react"

export default function OurStoryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

