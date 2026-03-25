"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        isScrolled ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "container mx-auto max-w-5xl rounded-full border transition-all duration-300 flex items-center justify-between px-6 py-2",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border shadow-lg"
            : "bg-transparent border-transparent",
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          MF<span className="text-primary">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
            >
              {item.name}
            </motion.a>
          ))}
          <Button variant="default" size="sm" className="ml-4 rounded-full">
            Resume
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden container mx-auto mt-2 rounded-3xl border bg-background/95 backdrop-blur-lg overflow-hidden flex flex-col p-4 gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-lg font-medium hover:bg-muted rounded-2xl transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-2 rounded-2xl py-6">Resume</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
