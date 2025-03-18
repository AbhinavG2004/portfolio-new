
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm text-foreground py-12 border-t border-accent/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2 neon-glow">Abhinav G</h2>
            <p className="text-muted-foreground">Tech Enthusiast & Developer</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/AbhinavG2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhinav-g-6a724b329" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ag7388@srmist.edu.in" 
              className="hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors text-accent"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-accent/5 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abhinav G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
