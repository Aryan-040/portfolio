import { useState, useEffect } from "react";
import { Menu, X, Flag, FileDown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: "hero", label: "Start Grid" },
    { id: "about", label: "Pit / About" },
    { id: "experience", label: "Team Garage / Experience" },
    { id: "projects", label: "Race Laps / Projects" },
    { id: "contact", label: "Podium / Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-primary/20"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <button 
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 group transition-all duration-300 transform hover:scale-105 cursor-pointer bg-transparent border-0"
            >
              <div className="relative flex items-center gap-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/50 group-hover:border-primary transition-colors">
                  <img
                    src="/aryan.jpg"
                    alt="Aryan Mukund Singh"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="relative flex items-center justify-center w-8 h-8 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300 track-glow">
                  <Flag className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl font-orbitron font-bold tracking-wider text-foreground">
                AMS<span className="text-primary">.</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 transition-all duration-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-2 text-xs font-rajdhani font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                    activeSection === link.id
                      ? "text-primary font-black"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary track-glow" />
                  )}
                </button>
              ))}

              <a
                href="/Recruit.pdf"
                download="Aryan_Mukund_Singh_Resume.pdf"
                className="ml-2 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md track-glow transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-opacity duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-xl pit-grid"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-2xl font-orbitron font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                activeSection === link.id ? "text-primary scale-110" : "text-foreground hover:text-primary"
              }`}
              style={{
                animation: isOpen
                  ? `fade-in-up 0.3s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.label}
            </button>
          ))}

          <a
            href="/Recruit.pdf"
            download="Aryan_Mukund_Singh_Resume.pdf"
            className="mt-4 px-6 py-3 rounded-xl bg-primary text-white text-base font-mono font-bold flex items-center gap-2 shadow-lg"
          >
            <FileDown className="w-4 h-4" />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
