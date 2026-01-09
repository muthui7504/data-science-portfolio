import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold gradient-text">Simon Mutua Muthui</span>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/muthui7504"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/simon-muthui-2308bb260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:smutua7504@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right - Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Built with <Heart size={14} className="text-destructive" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
