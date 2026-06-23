import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rule" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rule" />
        </div>
        <Experience />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rule" />
        </div>
        <Projects />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rule" />
        </div>
        <Certificates />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rule" />
        </div>
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
