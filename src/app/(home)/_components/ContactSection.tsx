"use client"

import { motion } from "framer-motion"
import { Github, Mail, Linkedin } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            {"Let's"} <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to collaborations and freelance projects!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/fikriwafiuddin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="mailto:fikriwafiuddin913@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/fikri-wafiuddin-09b9902a7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Fikri. Built with React &
          Tailwind CSS.
        </p>
      </div>
    </section>
  )
}

export default ContactSection
