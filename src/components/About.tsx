import { useEffect, useRef } from "react";
import { Zap, Sparkles, Code, Rocket } from "lucide-react";

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
      className="section bg-secondary/5 backdrop-blur-sm"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <h2 className="section-title animate-on-scroll opacity-0 neon-glow">
              About Me
            </h2>
          </div>
        </div>

        <div className="space-y-10">
          <div className="overflow-hidden max-w-3xl mx-auto">
            <p className="text-xl animate-on-scroll opacity-0">
              I am Abhinav,a tech enthusiast with a passion for innovation and problem-solving. Skilled in web development and AI/ML integration,enjoys building practical solutions.I am always eager to learn and contribute to impactful projects.
            </p>
          </div>
          
          <div className="overflow-hidden max-w-3xl mx-auto">
            <p className="text-lg animate-on-scroll opacity-0 animate-delay-100">
              With a focus on streamlining and optimizing workflows, I bring a unique perspective to software development that combines technical expertise with a deep understanding of user needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/10 animate-on-scroll opacity-0 animate-delay-200 hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-xl">Innovative Solutions</h3>
              </div>
              <p className="text-muted-foreground">Creating groundbreaking software that makes a real difference in how people work and interact with technology.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/10 animate-on-scroll opacity-0 animate-delay-300 hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-bold text-xl">Machine Learning</h3>
              </div>
              <p className="text-muted-foreground">Implementing advanced ML and NLP techniques to build intelligent systems that can recognize patterns and make predictions.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/10 animate-on-scroll opacity-0 animate-delay-400 hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Code size={24} />
                </div>
                <h3 className="font-bold text-xl">Full Stack Development</h3>
              </div>
              <p className="text-muted-foreground">Building end-to-end web applications with modern technologies like Java, SpringBoot, and JavaScript frameworks.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/10 animate-on-scroll opacity-0 animate-delay-500 hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Rocket size={24} />
                </div>
                <h3 className="font-bold text-xl">Cloud Technologies</h3>
              </div>
              <p className="text-muted-foreground">Leveraging AWS and other cloud platforms to build scalable, reliable applications with global reach.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
