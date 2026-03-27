"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"

const certificates = [
  { title: "React", issuer: "Udemy", image: "/certificates/react.jpg" },
  { title: "Docker", issuer: "Udemy", image: "/certificates/docker.jpg" },
]

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Certificates</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-6 hover:shadow-[0_0_30px_-10px_rgba(255,107,0,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-black/40 border border-white/5 p-2">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      Certificate Preview
                    </span>
                  </div>
                )}
                
                {/* Subtle Glow Effect on Image Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
