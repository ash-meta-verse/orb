"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type CursorTheme = {
  dotColor: string
  hoverColor: string
}

type CursorThemeContextType = {
  theme: CursorTheme
  setTheme: (theme: CursorTheme) => void
}

const defaultTheme: CursorTheme = {
  dotColor: "255, 255, 255",
  hoverColor: "59, 130, 246",
}

const CursorThemeContext = createContext<CursorThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
})

export function useCursorTheme() {
  return useContext(CursorThemeContext)
}

export function CursorThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<CursorTheme>(defaultTheme)

  useEffect(() => {
    // Apply the theme to CSS variables
    document.documentElement.style.setProperty("--cursor-color", theme.dotColor)
    document.documentElement.style.setProperty("--cursor-hover-color", theme.hoverColor)
  }, [theme])

  return <CursorThemeContext.Provider value={{ theme, setTheme }}>{children}</CursorThemeContext.Provider>
}

