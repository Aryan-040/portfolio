import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Flag } from "lucide-react";

const StartLapButton = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        onClick={() => navigate("/about")}
        className="group relative px-12 py-8 text-xl font-orbitron font-bold bg-primary hover:bg-primary/90 text-primary-foreground overflow-hidden shadow-2xl"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
             style={{ animation: "racing-pulse 2s ease-in-out infinite" }} />
        
        {/* Red F1 ignition glow border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500" />
        
        <Flag className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
        <span className="relative z-10">START LAP</span>
        
        {/* Track glow effect */}
        <div className="absolute inset-0 track-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Button>
    </div>
  );
};

export default StartLapButton;
