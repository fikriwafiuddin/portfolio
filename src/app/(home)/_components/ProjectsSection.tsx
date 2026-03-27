"use client"

import ProjectCard, {
  type ProjectData,
} from "@/components/projects/ProjectsCard"
import { motion } from "framer-motion"

const projects: ProjectData[] = [
  {
    name: "Mivro",
    description: "A personal finance management app with AI-powered features.",
    image: "/projects/mivro.png",
    techStack: [
      "React",
      "Vite",
      "Express",
      "MongoDB",
      "Next.js",
      "FastAPI",
      "LangChain",
      "Clerk",
      "Gemini API",
    ],
    liveLink: "https://mivro.my.id",
    repoLinks: [
      {
        label: "MivroFrontend",
        url: "https://github.com/fikriwafiuddin/MivroFrontend",
      },
      { label: "MivroAPI", url: "https://github.com/fikriwafiuddin/MivroAPI" },
      {
        label: "MivroMarketing",
        url: "https://github.com/fikriwafiuddin/MivroMarketing",
      },
      { label: "MivroAI", url: "https://github.com/fikriwafiuddin/MivroAI" },
    ],
    demoLink: "https://youtu.be/p861yw-XnQk",
  },
  {
    name: "Inventra",
    description:
      "An inventory and sales management app for medium to large businesses.",
    image: "/projects/inventra.png",
    techStack: ["Express", "MongoDB", "Cloudinary", "Next.js", "Clerk"],
    liveLink: "https://inventra-pink.vercel.app/",
    repoLinks: [
      { label: "Inventra", url: "https://github.com/fikriwafiuddin/Inventra" },
    ],
  },
  {
    name: "TitikKasir",
    description:
      "A SaaS point-of-sale system designed for small and medium businesses (UMKM).",
    image: "/projects/titikkasir.png",
    techStack: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Supabase Auth",
      "Cloudinary",
    ],
    liveLink: "https://titikkasir.my.id",
    repoLinks: [
      {
        label: "TitikKasir",
        url: "https://github.com/fikriwafiuddin/TitikKasir",
      },
    ],
    demoLink: "https://youtu.be/5wMu1k-IK8I",
  },
  {
    name: "DevPlanner",
    description:
      "A SaaS tool to help developers plan and schedule development, bug fixes, and maintenance tasks.",
    image: "/projects/devplanner.png",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Supabase Auth"],
    inDevelopment: true,
    repoLinks: [],
  },
  {
    name: "SmartStudyPlanner",
    description:
      "A SaaS app for students to manage schedules, reminders, and academic performance analysis.",
    image: "/projects/smartstudyplanner.png",
    techStack: ["Next.js", "Express.js", "PostgreSQL", "Supabase Auth"],
    inDevelopment: true,
    repoLinks: [
      {
        label: "SmartStudyPlanner",
        url: "https://github.com/fikriwafiuddin/smartstudyplanner",
      },
    ],
  },
  {
    name: "LlaFloristKediri",
    description:
      "A web app built in collaboration with a local flower shop (UMKM) for marketing, product management, inventory, transactions, and reports.",
    image: "/projects/llafloristkediri.png",
    techStack: ["Laravel", "PHP"],
    liveLink: "https://llafloristkediri.my.id",
    repoLinks: [
      {
        label: "LlaFloristKediri",
        url: "https://github.com/fikriwafiuddin/llafloristkediri",
      },
    ],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of applications {"I've"} built — from SaaS platforms to
            collaborative UMKM tools.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
