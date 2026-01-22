import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="min-h-screen noise">
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Contact />
    </main>
  );
}
