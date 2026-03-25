"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Certificate } from "@/types"

const certificates: Certificate[] = [
  {
    id: "c1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "",
    link: "#",
  },
  {
    id: "c2",
    title: "Applied Generative AI Specialist",
    issuer: "Google Cloud",
    date: "2025",
    image: "",
    link: "#",
  },
  {
    id: "c3",
    title: "Meta Front-End Developer Professional",
    issuer: "Meta",
    date: "2024",
    image: "",
    link: "#",
  },
]

export default function CertificateSection() {
  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6"
          >
            <Award className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4"
          >
            Professional Credits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Validated expertise through global certifications and training
            programs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="border bg-card/50 backdrop-blur-sm overflow-hidden h-full rounded-2xl group-hover:border-primary/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                      <Award className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-bold text-foreground/80">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
