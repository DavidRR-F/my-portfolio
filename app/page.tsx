import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Landing from "@/sections/Landing";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
