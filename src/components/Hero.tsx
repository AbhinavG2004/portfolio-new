
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" id="home">
      <div
        className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-start"
        ref={containerRef}
      >
        <div className="space-y-6 max-w-3xl">
          <div className="inline-block overflow-hidden">
            <span className="section-subtitle animate-on-scroll opacity-0">
              Tech Enthusiast & Developer
            </span>
          </div>
          
          <div className="inline-block overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-on-scroll opacity-0 animate-delay-100">
              Abhinav G
            </h1>
          </div>
          
          <div className="inline-block overflow-hidden">
            <p className="text-xl md:text-2xl animate-on-scroll opacity-0 animate-delay-200 text-muted-foreground">
              A tech enthusiast with a passion for innovation. As the developer behind real solutions that revolutionize workflows, I bring efficiency and effectiveness to the world of animals.
            </p>
          </div>
          
          <div className="inline-block overflow-hidden pt-4">
            <a
              href="#about"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:translate-y-1 transition-all animate-on-scroll opacity-0 animate-delay-300"
            >
              Learn more
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </div>
      
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
