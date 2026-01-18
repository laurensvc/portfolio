import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen noise">
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
