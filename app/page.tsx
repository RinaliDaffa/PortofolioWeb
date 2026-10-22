import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="noise min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="relative z-10 py-8 text-center text-xs text-[#3f3f46] border-t border-[#18181b]">
        <p>Built with Next.js & Framer Motion &middot; &copy; {new Date().getFullYear()} Daffa Rinali</p>
      </footer>
    </div>
  );
}