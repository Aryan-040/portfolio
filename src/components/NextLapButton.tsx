import { ChevronRight, Trophy } from "lucide-react";

interface NextLapButtonProps {
  targetId?: string;
  label?: string;
}

const NextLapButton = ({ targetId = "experience", label = "NEXT SECTION" }: NextLapButtonProps) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center py-6 my-4 border-t border-border/30 w-full">
      <button
        onClick={scrollToTarget}
        className="group relative px-6 py-3 rounded-xl text-xs sm:text-sm font-rajdhani font-bold bg-primary/90 hover:bg-primary text-white border border-primary/50 overflow-hidden shadow-lg track-glow cursor-pointer transition-all duration-300 flex items-center gap-2"
      >
        <span className="relative z-10 flex items-center gap-2">
          {targetId === "hero" ? (
            <Trophy className="w-4 h-4 text-amber-400" />
          ) : (
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          )}
          {label}
        </span>
      </button>
    </div>
  );
};

export default NextLapButton;
