import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Landing from "@/components/sections/Landing";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

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
