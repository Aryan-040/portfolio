import { useNavigate } from "react-router-dom";
import { Flag } from "lucide-react";
import StartLapButton from "@/components/StartLapButton";
import HomeBottomSection from "@/components/HomeBottomSection";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Grid Background */}
      <div className="absolute inset-0 pit-grid opacity-30" />

      {/* Animated Track Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              top: `${25 * (i + 1)}%`,
              animation: `speed-line ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content - Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center py-8 lg:py-16">
        <div className="max-w-5xl mx-auto w-full">
          {/* Start Grid Label */}
          <div className="flex items-center gap-3 mb-6 lg:mb-8 animate-fade-in-up">
            <Flag className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-primary tracking-wider">START GRID // POSITION 01</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8 lg:space-y-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tight leading-none animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}>
              <span className="block text-foreground">ARYAN</span>
              <span className="block text-foreground">MUKUND</span>
              <span className="block text-primary track-glow">SINGH</span>
            </h1>

            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-1 w-32 bg-primary track-glow" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-rajdhani font-bold text-secondary tracking-wide">
                Building Software at <span className="text-primary">Race Speed</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Backend Engineer building <span className="text-primary font-semibold">scalable APIs</span>,{" "}
                <span className="text-primary font-semibold">distributed systems</span>, and{" "}
                <span className="text-primary font-semibold">cloud-native applications</span> with a focus on performance, reliability, and clean architecture.
              </p>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Backend",
                  "Cloud",
                  "APIs",
                  "Database",
                  "Distributed Systems",
                  "System Design",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 text-xs font-mono bg-card/40 text-foreground rounded-full border border-border hover:border-primary/40 transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <StartLapButton />
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/30 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-primary tracking-tight">350+</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider">Problems Solved</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-primary tracking-tight">2</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider">Internships</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-primary tracking-tight">4+</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wider">Production Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Tech Stack + CTA */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <HomeBottomSection />
        </div>
      </div>

      {/* Pit Lights Indicator */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-8 rounded-full bg-primary/30"
            style={{
              animation: `pit-light 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default Index;