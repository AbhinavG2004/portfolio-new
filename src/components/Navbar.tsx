
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/AbhinavG2004", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abhinav-g-6a724b329", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:ag7388@srmist.edu.in", label: "Email" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Abhinav G
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex space-x-6 mt-auto mb-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
