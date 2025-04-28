"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, MousePointer, MousePointerClick, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

// Available cursor themes
const CURSOR_THEMES = {
  default: {
    name: "Default",
    dotColor: "255, 255, 255",
    hoverColor: "59, 130, 246",
  },
  neon: {
    name: "Neon",
    dotColor: "0, 255, 170",
    hoverColor: "255, 0, 170",
  },
  minimal: {
    name: "Minimal",
    dotColor: "200, 200, 200",
    hoverColor: "200, 200, 200",
  },
  vibrant: {
    name: "Vibrant",
    dotColor: "255, 215, 0",
    hoverColor: "255, 69, 0",
  },
}

// Cursor types
const CURSOR_TYPES = {
  custom: "Custom Cursor",
  default: "System Default",
}

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [cursorTheme, setCursorTheme] = useState("default")
  const [cursorType, setCursorType] = useState("custom")
  const [effectEnabled, setEffectEnabled] = useState(true)

  useEffect(() => {
    // Check if document is available (client-side)
    if (typeof document !== "undefined") {
      // Set initial state based on class
      setIsDarkMode(document.documentElement.classList.contains("dark"))

      // Get saved cursor theme or use default
      const savedTheme = localStorage.getItem("cursor-theme") || "default"
      setCursorTheme(savedTheme)

      // Get saved cursor type or use custom by default
      const savedType = localStorage.getItem("cursor-type") || "custom"
      setCursorType(savedType)

      // Get saved effect state or enable by default
      const savedEffectState = localStorage.getItem("cursor-effect-enabled")
      setEffectEnabled(savedEffectState === null ? true : savedEffectState === "true")

      // Apply saved settings
      applyCursorTheme(savedTheme)
      applyCursorType(savedType)
      applyEffectState(savedEffectState === null ? true : savedEffectState === "true")
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      setIsDarkMode(true)
    }
  }

  const applyCursorTheme = (theme: string) => {
    const themeData = CURSOR_THEMES[theme as keyof typeof CURSOR_THEMES] || CURSOR_THEMES.default

    // Set CSS variables for the cursor theme
    document.documentElement.style.setProperty("--cursor-color", themeData.dotColor)
    document.documentElement.style.setProperty("--cursor-hover-color", themeData.hoverColor)

    // Save theme preference
    localStorage.setItem("cursor-theme", theme)
  }

  const applyCursorType = (type: string) => {
    if (type === "custom") {
      document.documentElement.classList.remove("cursor-default")
      document.documentElement.classList.add("cursor-none")
    } else {
      document.documentElement.classList.remove("cursor-none")
      document.documentElement.classList.add("cursor-default")
    }

    // Save cursor type preference
    localStorage.setItem("cursor-type", type)
  }

  const applyEffectState = (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.remove("effect-disabled")
    } else {
      document.documentElement.classList.add("effect-disabled")
    }

    // Save effect state preference
    localStorage.setItem("cursor-effect-enabled", String(enabled))
  }

  const changeCursorTheme = (theme: string) => {
    setCursorTheme(theme)
    applyCursorTheme(theme)
  }

  const changeCursorType = (type: string) => {
    setCursorType(type)
    applyCursorType(type)
  }

  const toggleEffectState = () => {
    const newState = !effectEnabled
    setEffectEnabled(newState)
    applyEffectState(newState)
  }

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/20"
          >
            <MousePointer className="h-5 w-5 transition-transform duration-300" />
            <span className="sr-only">Cursor settings</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Cursor Settings</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Cursor Type</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={cursorType} onValueChange={changeCursorType}>
              {Object.entries(CURSOR_TYPES).map(([key, name]) => (
                <DropdownMenuRadioItem key={key} value={key}>
                  <div className="flex items-center gap-2">
                    {key === "custom" ? (
                      <MousePointerClick className="h-4 w-4" />
                    ) : (
                      <MousePointer className="h-4 w-4" />
                    )}
                    {name}
                  </div>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Cursor Theme</DropdownMenuLabel>
            {Object.entries(CURSOR_THEMES).map(([key, theme]) => (
              <DropdownMenuItem
                key={key}
                className={cursorTheme === key ? "bg-accent text-accent-foreground" : ""}
                onClick={() => changeCursorTheme(key)}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: `rgb(${theme.dotColor})`,
                      boxShadow: `0 0 5px rgba(${theme.dotColor}, 0.7)`,
                    }}
                  />
                  {theme.name}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem checked={effectEnabled} onCheckedChange={toggleEffectState}>
            <div className="flex items-center gap-2">
              {effectEnabled ? <div className="w-3 h-3 rounded-full bg-primary/50" /> : <EyeOff className="h-4 w-4" />}
              Background Effect
            </div>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/20"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
