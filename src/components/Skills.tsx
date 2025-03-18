
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL", "HTML/CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Angular.js", "Node.js", "Express.js", "Spring Boot", "TensorFlow", "Pandas/NumPy"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs"]
  },
  {
    category: "ML/AI",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Scikit-learn"]
  }
];

const languages = [
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Tamil", proficiency: "Native Proficiency" }
];

const certifications = [
  { name: "AWS Cloud Practitioner Solutions 2023 Certified Foundations Associate", date: "May 2023" },
  { name: "Nvidia Getting Started with Deep Learning", date: "Sep 2023" },
  { name: "Cisco Networking Basics", date: "Jun 2023" },
  { name: "Coursera IoT Cloud", date: "Mar 2023" }
];

const Skills = () => {
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
              }, index * 50);
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
      id="skills"
      className="section"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <span className="section-subtitle animate-on-scroll opacity-0">
              What I Know
            </span>
          </div>
          <div className="inline-block overflow-hidden">
            <h2 className="section-title animate-on-scroll opacity-0">
              Skills & Certifications
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="animate-on-scroll opacity-0" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-secondary rounded-full text-sm animate-on-scroll opacity-0"
                      style={{ animationDelay: `${(catIndex * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{lang.language}</span>
                      <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full satoshi-gradient animate-on-scroll opacity-0"
                        style={{ 
                          width: lang.proficiency.includes("Native") ? "100%" : "80%",
                          animationDelay: `${(index * 100) + 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="px-4 py-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors animate-on-scroll opacity-0"
                    style={{ animationDelay: `${(index * 100) + 400}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{cert.name}</span>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "700ms" }}>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="space-y-3">
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
                >
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-muted-foreground">Connect with me professionally</span>
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
                >
                  <span className="font-medium">GitHub</span>
                  <span className="text-muted-foreground">View my code repositories</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
