"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-20 border-t bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold tracking-tighter mb-2">MF.</h2>
            <p className="text-muted-foreground max-w-sm">
              Building scalable, modern, and efficient web applications with a
              focus on user experience.
            </p>
          </motion.div>

          <div className="flex gap-6 mb-10">
            {[
              { icon: Github, href: "#", name: "GitHub" },
              { icon: Twitter, href: "#", name: "Twitter" },
              { icon: Linkedin, href: "#", name: "LinkedIn" },
              { icon: Mail, href: "#", name: "Email" },
            ].map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-3 rounded-full border bg-background hover:bg-muted hover:border-primary/50 transition-all hover:text-primary"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Muhammad Fikri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
