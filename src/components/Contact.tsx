
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go actual form submission logic
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactDetails = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "abhinav@example.com",
      link: "mailto:abhinav@example.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Chennai, India",
      link: "https://maps.google.com/?q=Chennai,India"
    }
  ];

  return (
    <section
      id="contact"
      className="section bg-secondary/30"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <span className="section-subtitle animate-on-scroll opacity-0">
              Get In Touch
            </span>
          </div>
          <div className="inline-block overflow-hidden">
            <h2 className="section-title animate-on-scroll opacity-0">
              Contact Me
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to get in touch with me for any project ideas, job opportunities, or just to say hello!
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.link}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background hover:bg-accent/5 transition-colors animate-on-scroll opacity-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="p-3 bg-accent/10 text-accent rounded-full">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{detail.title}</h4>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-background resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full group">
              Send Message
              <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
