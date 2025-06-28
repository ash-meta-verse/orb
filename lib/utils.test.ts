import { describe, it, expect } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
  it("handles false values", () => {
    expect(cn("a", false && "b", "c")).toBe("a c")
  })

  it("merges tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4")
  })
})
