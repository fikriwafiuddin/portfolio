"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Monitor } from "lucide-react"
import { Project } from "@/types"

const projects: Project[] = [
  {
    id: "1",
    title: "EcoSphere AI",
    description:
      "A futuristic environmental monitoring dashboard powered by AI agents and real-time sensor data.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    id: "2",
    title: "Quantum Ledger",
    description:
      "Next-gen crypto portfolio tracker with real-time predictive analytics and institutional-grade security.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "Go lang", "Docker", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    id: "3",
    title: "Astral Chat",
    description:
      "A minimalist, real-time messaging application with end-to-end encryption and custom themes.",
    image:
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1600",
    tags: ["Astro", "Express.js", "MongoDB", "TypeScript"],
    link: "https://example.com",
  },
]

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4"
          >
            Curated Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl text-lg"
          >
            A showcase of my recent work at the intersection of design and
            engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border bg-card/40 backdrop-blur-xl relative glow-border transition-all duration-500 rounded-3xl">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <div className="flex gap-3">
                      {project.github && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full h-12 w-12"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {project.link && (
                        <Button
                          size="icon"
                          className="rounded-full h-12 w-12"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Monitor className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-md leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary font-bold group-hover:underline underline-offset-4"
                  >
                    Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
