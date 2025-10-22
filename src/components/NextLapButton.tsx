import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NextLapButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getNextRoute = () => {
    switch (location.pathname) {
      case "/about":
        return { path: "/projects", label: "RACE LAPS" };
      case "/projects":
        return { path: "/contact", label: "PODIUM" };
      case "/contact":
        return { path: "/", label: "PIT LANE" };
      default:
        return { path: "/about", label: "PIT STOP" };
    }
  };

  const nextRoute = getNextRoute();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="lg"
            onClick={() => navigate(nextRoute.path)}
            className="group relative px-8 py-6 text-lg font-rajdhani font-bold bg-primary/90 hover:bg-primary text-primary-foreground border-2 border-primary/50 hover:border-accent overflow-hidden shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10 flex items-center gap-2">
          {location.pathname === "/contact" ? (
            <Trophy className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          )}
          {nextRoute.label}
        </span>
        <div className="absolute -inset-1 track-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NextLapButton;
