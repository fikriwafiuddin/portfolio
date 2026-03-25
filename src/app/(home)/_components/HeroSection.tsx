"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-24 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[120px] -z-10"
      />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-primary mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Available for new opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent italic">
                Muhammad Fikri
              </span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-3xl font-medium tracking-tight text-muted-foreground mb-8"
          >
            Fullstack Developer & UI/UX Design Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building the next generation of web applications with a focus on
            <span className="text-foreground font-semibold"> scalability</span>,
            <span className="text-foreground font-semibold"> performance</span>,
            and
            <span className="text-foreground font-semibold">
              {" "}
              futuristic design
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-md group font-bold"
            >
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-md font-bold backdrop-blur-sm"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mouse Interaction Indicator Placeholder / Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent opacity-50" />
      </motion.div>
    </section>
  )
}
