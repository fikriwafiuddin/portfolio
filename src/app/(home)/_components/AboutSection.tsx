"use client"

import { motion } from "framer-motion"

const categories = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Express", "React", "Next.js", "Laravel", "FastAPI", "LangChain"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Other Tools",
    items: ["Docker"],
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {"I'm"} a Computer Science student with fullstack development
            experience since 2022. I enjoy building practical, real-world
            applications — from SaaS tools to e-commerce platforms — using
            modern technologies across the entire stack.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="rounded-xl border border-border p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
