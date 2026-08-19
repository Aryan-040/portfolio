import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight, Trophy } from "lucide-react";

const NextLapButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getNextRoute = () => {
    switch (location.pathname) {
      case "/about":
        return { path: "/team-garage", label: "NEXT LAP // EXPERIENCE & TEAM GARAGE" };
      case "/team-garage":
        return { path: "/projects", label: "NEXT LAP // RACE LAPS & PROJECTS" };
      case "/projects":
        return { path: "/contact", label: "NEXT LAP // PODIUM & CONTACT" };
      case "/contact":
        return { path: "/", label: "RETURN TO START GRID" };
      default:
        return { path: "/about", label: "NEXT LAP // ABOUT THE DRIVER" };
    }
  };

  const nextRoute = getNextRoute();

  return (
    <div className="flex justify-center items-center py-10 my-6 border-t border-border/40 w-full">
      <Button
        size="lg"
        onClick={() => navigate(nextRoute.path)}
        className="group relative px-8 py-6 text-base font-rajdhani font-bold bg-primary hover:bg-primary/90 text-white border border-primary/50 overflow-hidden shadow-xl track-glow cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10 flex items-center gap-2">
          {location.pathname === "/contact" ? (
            <Trophy className="w-5 h-5 text-yellow-400" />
          ) : (
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          )}
          {nextRoute.label}
        </span>
      </Button>
    </div>
  );
};

export default NextLapButton;
