"use client"

import { motion } from "framer-motion"
import { FolderOpen, Mail } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-primary p-[3px]">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                {/* <span className="font-display text-4xl md:text-5xl font-bold text-gradient">
                  MF
                </span> */}
                <Image
                  src="/photoprofile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-accent animate-pulse" />
          </div>

          <div className="space-y-4 max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Muhammad <span className="text-gradient">Fikri</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Fullstack Developer | Building scalable web apps since 2022
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary font-display font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-glow"
            >
              <FolderOpen size={18} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border font-display font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
