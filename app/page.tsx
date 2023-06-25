import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Landing from "@/sections/Landing";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
