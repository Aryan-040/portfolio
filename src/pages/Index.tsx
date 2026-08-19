import { useNavigate } from "react-router-dom";
import { Flag, ArrowRight, Radio, Shield, Gauge, Cpu } from "lucide-react";
import StartLapButton from "@/components/StartLapButton";
import HomeBottomSection from "@/components/HomeBottomSection";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col pt-4 lg:pt-8">
      {/* Grid Background */}
      <div className="absolute inset-0 pit-grid opacity-25 pointer-events-none" />

      {/* Animated Track Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              top: `${22 * (i + 1)}%`,
              animation: `speed-line ${2 + i * 0.6}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content - 2-Column Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center py-6 lg:py-12">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Driver Headline & Details */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 animate-fade-in-up">
            {/* Start Grid Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <Flag className="w-4 h-4" />
              <span>START GRID // DRIVER 04</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black tracking-tight leading-[0.95] text-foreground">
                ARYAN <br />
                MUKUND <br />
                <span className="text-primary red-neon-text">SINGH</span>
              </h1>
              <div className="h-1.5 w-28 bg-primary rounded-full track-glow mt-4" />
            </div>

            {/* Tagline & Bio */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-rajdhani font-bold text-slate-200 flex items-center gap-2">
                Backend Engineer <span className="text-primary">•</span> Systems Architect
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
                Building <span className="text-foreground font-medium">high-performance APIs</span>,{" "}
                <span className="text-foreground font-medium">distributed systems</span>, and{" "}
                <span className="text-foreground font-medium">cloud-native applications</span> designed to operate with low latency, reliability, and race-grade precision.
              </p>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "AWS",
                "Docker",
                "tRPC",
                "Distributed Systems",
                "System Design",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 text-xs font-mono bg-card/60 text-muted-foreground rounded-md border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <StartLapButton />
              
              <button
                onClick={() => navigate("/projects")}
                className="px-6 py-4 rounded-xl text-sm font-rajdhani font-bold text-foreground bg-card/80 border border-border hover:border-primary/50 hover:bg-card hover:text-primary transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>RACE LAPS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-4 rounded-xl text-sm font-rajdhani font-bold text-muted-foreground hover:text-foreground bg-transparent hover:bg-card/40 border border-transparent hover:border-border transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Radio className="w-4 h-4 text-primary animate-pulse" />
                <span>PIT RADIO</span>
              </button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-border/40 max-w-lg">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-primary tracking-tight">350+</div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">Problems Solved</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-primary tracking-tight">2</div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">Internships</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-primary tracking-tight">5+</div>
                <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">Race Projects</div>
              </div>
            </div>
          </div>

          {/* Right Column: Driver Profile Photo in Circular Format */}
          <div className="lg:col-span-5 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px]">
              {/* Red Ambient Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/60 via-red-600/40 to-primary/60 rounded-full blur-2xl opacity-70 animate-pulse" />
              
              {/* Circular Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl group hover:border-primary transition-all duration-500">
                <img
                  src="/aryan.jpg"
                  alt="Aryan Mukund Singh"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Tech Stack + Philosophy */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-5xl mx-auto">
          <HomeBottomSection />
        </div>
      </div>

      {/* Pit Lights Indicator */}
      <div className="hidden sm:flex absolute bottom-6 right-6 gap-2 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-7 rounded-full bg-primary/40"
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