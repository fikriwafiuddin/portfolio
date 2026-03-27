import Navbar from "./_components/Navbar"
import HeroSection from "./_components/HeroSection"
import AboutSection from "./_components/AboutSection"
import ProjectsSection from "./_components/ProjectsSection"
import CertificatesSection from "./_components/CerticatesSection"
import ContactSection from "./_components/ContactSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  )
}
