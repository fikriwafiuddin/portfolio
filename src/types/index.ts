export interface Skill {
  name: string
  icon: string
  color: string
  category: "Frontend" | "Backend" | "DevOps" | "Language" | "Database"
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  link?: string
}
