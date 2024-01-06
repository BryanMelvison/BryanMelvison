import About from "@/components/About"
import Hero from "@/components/Hero"
import Interests from "@/components/Interests"
import Cta from "@/components/Cta"
import ExperiencePage from "@/components/ExperiencePage"
import ProjectPage from "@/components/ProjectPage"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Interests />
      <ExperiencePage />
      <ProjectPage />
      <Cta />
    </main>
  )
}
