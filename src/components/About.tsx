
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-slide-up");
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
      id="about"
      className="section bg-secondary/30"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <span className="section-subtitle animate-on-scroll opacity-0">
              Who I Am
            </span>
          </div>
          <div className="inline-block overflow-hidden">
            <h2 className="section-title animate-on-scroll opacity-0">
              About Me
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl aspect-square">
            <img
              src="/lovable-uploads/be8f381a-559e-4f84-86f5-2c05c50efbf1.png"
              alt="Abhinav G"
              className="w-full h-full object-cover animate-on-scroll opacity-0"
            />
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden">
              <p className="text-lg animate-on-scroll opacity-0">
                I am Abhinav G, a tech enthusiast with a passion for innovation. As the developer behind real solutions that revolutionize workflows, I bring efficiency and effectiveness to the world of animals.
              </p>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-lg animate-on-scroll opacity-0 animate-delay-100">
                With a focus on streamlining and optimizing workflows, I bring a unique perspective to software development that combines technical expertise with a deep understanding of user needs.
              </p>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-lg animate-on-scroll opacity-0 animate-delay-200">
                My journey in tech has equipped me with the skills to create groundbreaking software solutions that make a real difference in how people work and interact with technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-background rounded-xl p-6 shadow-sm animate-on-scroll opacity-0 animate-delay-300">
                <h3 className="font-bold text-xl mb-1">Education</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science</p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm animate-on-scroll opacity-0 animate-delay-400">
                <h3 className="font-bold text-xl mb-1">Experience</h3>
                <p className="text-muted-foreground">Software Developer at Karenfinty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
