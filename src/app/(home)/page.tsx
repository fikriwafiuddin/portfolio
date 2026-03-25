import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "./_components/HeroSection"
import SkillSection from "./_components/SkillSection"
import ProjectSection from "./_components/ProjectSection"
import CertificateSection from "./_components/CertificateSection"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Global Background Grid or Pattern could go here */}
      <div className="fixed inset-0 -z-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Header />

      <main>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <CertificateSection />
      </main>

      <Footer />
    </div>
  )
}
