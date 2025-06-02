import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "Karenfinty",
    position: "Software Developer",
    period: "Dec 2023 - Jan 2025",
    location: "Chennai, India",
    details: "Intern",
    description: "Developed and maintained web applications using modern technologies."
  }
];

const education = [
  {
    institution: "SRMIST KTR",
    degree: "B.Tech - Computer Science",
    period: "Sep 2022 - Present",
    grade: "7.62 CGPA"
  },
  {
    institution: "DAV School",
    degree: "12th - CBSE",
    period: "Apr 2021 - Jun 2022",
    grade: "400/500"
  },
  {
    institution: "DAV School",
    degree: "10th - CBSE",
    period: "Apr 2019 - Mar 2020",
    grade: "433/500"
  }
];

const Experience = () => {
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
      id="experience"
      className="section"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <h2 className="section-title animate-on-scroll opacity-0">
              Experience & Education
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 animate-on-scroll opacity-0">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border animate-on-scroll opacity-0"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent -translate-x-1/2"></div>
                  <h4 className="text-xl font-bold">{exp.position}</h4>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <span>{exp.period}</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
                    <span>{exp.location}</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
                    <span>{exp.details}</span>
                  </div>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 animate-on-scroll opacity-0">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border animate-on-scroll opacity-0"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent -translate-x-1/2"></div>
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-accent font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
                    <span>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
