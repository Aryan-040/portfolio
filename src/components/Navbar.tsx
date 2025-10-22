import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Flag } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Start Grid" },
    { to: "/about", label: "Pit" },
    { to: "/projects", label: "Race Laps" },
    { to: "/contact", label: "Podium" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-primary/20"
            : "bg-background/50 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="flex items-center gap-2 group transition-all duration-300 ml-4 sm:ml-6 md:ml-8 lg:ml-10
                transform hover:scale-105"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full animate-telemetry-pulse" />
                <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300 track-glow">
                  <Flag className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl font-orbitron font-bold tracking-wider text-foreground">
                AMS<span className="text-primary">.</span>
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 transition-all duration-300"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-rajdhani font-bold tracking-wide uppercase transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary track-glow" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`
                md:hidden
                transition-opacity duration-300
                ${isScrolled ? 'opacity-0' : 'opacity-100'}
              `}
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
          isOpen && !isScrolled
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
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-orbitron font-bold tracking-wider transition-all duration-300 ${
                  isActive ? "text-primary scale-110" : "text-foreground hover:text-primary hover:scale-105"
                }`
              }
              style={{
                animation: isOpen
                  ? `fade-in-up 0.3s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
