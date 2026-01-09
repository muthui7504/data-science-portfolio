import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a href="#" className="text-xl font-bold gradient-text">
            Simon Mutua Muthui
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://drive.google.com/file/d/1YJXhxL8-G5Q0zbPuEg-2TqGBozGuogYQ/view?usp=sharing" download>
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-fit border-primary/50 hover:bg-primary hover:text-primary-foreground"
          >
            <a href="/Simon_Mutua_Muthui_CV.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
