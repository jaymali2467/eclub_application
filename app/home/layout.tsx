"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Home, User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Home", path: "/home", icon: <Home className="h-5 w-5" /> },
    { name: "About Me", path: "/about", icon: <User className="h-5 w-5" /> },
    { name: "Application", path: "/home", icon: <FileText className="h-5 w-5" /> },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/home" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-400">Jay Mali</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">| E-Club Application</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors ${
                    isActive(item.path)
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                      : "text-gray-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-3 ${
                    isActive(item.path)
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                      : "text-gray-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16 pb-8">{children}</main>
    </div>
  )
}
