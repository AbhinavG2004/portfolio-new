import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
        className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center gap-12"
        ref={containerRef}
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="animate-on-scroll opacity-0 animate-delay-100 mb-8">
            <div className="relative">
              <Avatar className="w-60 h-60 md:w-72 md:h-72 overflow-hidden border-4 border-accent/20 shadow-xl">
                <AvatarImage 
                  src="/IMG-20240831-WA0008.jpg" 
                  alt="Abhinav G" 
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent via-purple-500 to-pink-500 opacity-30 blur-md -z-10"></div>
            </div>
          </div>
          
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block overflow-hidden">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-on-scroll opacity-0 animate-delay-100">
                Abhinav G
              </h1>
            </div>
            
            <div className="inline-block overflow-hidden">
              <p className="text-xl md:text-2xl animate-on-scroll opacity-0 animate-delay-200 text-muted-foreground">
                Software Developer & AI Enthusiast
              </p>
            </div>
            
            <div className="inline-block overflow-hidden pt-4">
              <Button
                asChild
                className="flex items-center gap-2 px-6 py-3 animate-on-scroll opacity-0 animate-delay-300"
              >
                <a href="#about">
                  Learn more
                  <ArrowDown size={16} />
                </a>
              </Button>
            </div>
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

