
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Apply dark mode class by default
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          document
            .querySelector(`a[href*=${sectionId}]`)
            ?.classList.add("text-accent");
        } else {
          document
            .querySelector(`a[href*=${sectionId}]`)
            ?.classList.remove("text-accent");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background -z-10"></div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
