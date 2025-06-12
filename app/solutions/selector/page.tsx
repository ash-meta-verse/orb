"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, BarChart, Rocket } from "lucide-react"

export default function SolutionsSelectorPage() {
  const [showQuestion, setShowQuestion] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show the question after a short delay
    const timer = setTimeout(() => {
      setShowQuestion(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleSolutionClick = (path: string) => {
    // Navigate to the selected solution page
    router.push(path)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-black dark:via-black dark:to-gray-900 z-0"></div>

      {/* Animated dots/particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 dark:bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <AnimatePresence>
          {showQuestion && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-2">Who are you?</h2>
              <p className="text-gray-600 dark:text-gray-400">Select the option that best describes you</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <AnimatePresence>
            {showQuestion && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <button
                    onClick={() => handleSolutionClick("/solutions/agencies-brands")}
                    className="w-full p-4 bg-white/80 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between hover:bg-white dark:hover:bg-gray-900 hover:border-primary/50 transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 dark:bg-primary/10 rounded-full mr-3">
                        <BarChart className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">For Agencies & Brands</span>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <button
                    onClick={() => handleSolutionClick("/solutions/creators")}
                    className="w-full p-4 bg-white/80 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between hover:bg-white dark:hover:bg-gray-900 hover:border-primary/50 transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 dark:bg-primary/10 rounded-full mr-3">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">For Creators</span>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <button
                    onClick={() => handleSolutionClick("/solutions/entrepreneurs")}
                    className="w-full p-4 bg-white/80 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-between hover:bg-white dark:hover:bg-gray-900 hover:border-primary/50 transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 dark:bg-primary/10 rounded-full mr-3">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">For Entrepreneurs</span>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showQuestion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Return to homepage
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add some CSS for the pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  )
}
