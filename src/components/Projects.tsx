
import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Book Store Management",
    tech: "Java, HTML/CSS, SpringBoot",
    period: "Aug 2023 - Dec 2023",
    description: "Full stack web application built with Spring Boot, Maven, HTML/CSS, and Java. Provides users with the ability to view available books, search products, and add items to the store.",
    link: "#",
    github: "#"
  },
  {
    title: "Voice Emotion Detection",
    tech: "Python, Machine Learning",
    period: "Jul 2023 - Nov 2023",
    description: "This project aims to recognize emotions in speech using machine learning techniques. The model uses MFCC, Chroma, and Mel spectrograms to extract audio features from voice speech files.",
    link: "#",
    github: "#"
  },
  {
    title: "Fake News Detection",
    tech: "Python, ML, NLP",
    period: "Jan 2023 - Apr 2023",
    description: "Machine learning model trained to determine whether a news article is genuine or fabricated. Uses natural language processing techniques for text classification.",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-scale-in");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="section bg-secondary/30"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <span className="section-subtitle animate-on-scroll opacity-0">
              My Work
            </span>
          </div>
          <div className="inline-block overflow-hidden">
            <h2 className="section-title animate-on-scroll opacity-0">
              Featured Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-on-scroll opacity-0 group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-xl transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-accent">{project.tech}</span>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex items-center justify-end gap-3 mt-auto">
                <a 
                  href={project.github} 
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code on GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={project.link} 
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit live project"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
