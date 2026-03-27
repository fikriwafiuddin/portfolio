"use client"

import { motion } from "framer-motion"
import { Globe, Github, Youtube, ExternalLink, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export interface RepoLink {
  label: string
  url: string
}

export interface ProjectData {
  name: string
  description: string
  image: string
  techStack: string[]
  liveLink?: string
  repoLinks: RepoLink[]
  demoLink?: string
  inDevelopment?: boolean
}

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const [reposOpen, setReposOpen] = useState(false)
  const hasLive = project.liveLink && project.liveLink !== ""
  const hasRepos = project.repoLinks.length > 0
  const hasDemo = project.demoLink && project.demoLink !== ""
  const multipleRepos = project.repoLinks.length > 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-border overflow-hidden group hover:border-primary/30 transition-colors"
    >
      {/* Thumbnail placeholder */}
      <div className="h-44 bg-secondary/50 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="font-display text-2xl font-bold text-muted-foreground/40">
            {project.name}
          </span>
        )}
        {project.inDevelopment && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-accent/20 text-accent text-xs font-semibold">
            In Development
          </span>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-bold text-foreground">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-2">
          {hasLive ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold transition-transform hover:scale-105"
            >
              <Globe size={14} /> Live App
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs font-semibold cursor-not-allowed">
              <Globe size={14} /> In Development
            </span>
          )}

          {hasRepos ? (
            multipleRepos ? (
              <div className="relative">
                <button
                  onClick={() => setReposOpen(!reposOpen)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold transition-colors hover:bg-secondary/80"
                >
                  <Github size={14} /> Repos{" "}
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${reposOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {reposOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-md border border-border bg-card shadow-lg z-50 py-1">
                    {project.repoLinks.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs text-secondary-foreground hover:bg-secondary transition-colors"
                      >
                        <ExternalLink size={12} /> {r.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={project.repoLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold transition-colors hover:bg-secondary/80"
              >
                <Github size={14} /> GitHub
              </a>
            )
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs font-semibold cursor-not-allowed">
              <Github size={14} /> Coming Soon
            </span>
          )}

          {hasDemo ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold transition-colors hover:bg-secondary/80"
            >
              <Youtube size={14} /> Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs font-semibold cursor-not-allowed">
              <Youtube size={14} /> Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
