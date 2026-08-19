import { FileDown, ArrowRight, Radio, Shield, Award, Github, Linkedin, Mail, Code, Cloud, Database, Gauge, CheckCircle2, MapPin, Briefcase } from "lucide-react";
import StartLapButton from "@/components/StartLapButton";
import HomeBottomSection from "@/components/HomeBottomSection";
import AboutSection from "@/pages/About";
import TeamGarageSection from "@/components/TeamGarage";
import ProjectsSection from "@/pages/Projects";
import ContactSection from "@/pages/Contact";
import { SiLeetcode } from "react-icons/si";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// Hyper-sensitive 3D Tilt Profile Photo Component
const ProfilePhoto3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="flex justify-center items-center">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px] cursor-pointer group"
      >
        {/* 3D Ambient Red Glow Halo */}
        <motion.div 
          className="absolute -inset-3 bg-gradient-to-tr from-primary via-red-600 to-primary rounded-full blur-2xl opacity-75 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-500 animate-pulse"
          style={{ transform: "translateZ(-30px)" }}
        />
        
        {/* 3D Photo Border & Image Container */}
        <div 
          className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary shadow-[0_25px_50px_rgba(225,6,0,0.4)] group-hover:shadow-[0_35px_65px_rgba(225,6,0,0.6)] transition-all duration-500"
          style={{ transform: "translateZ(30px)" }}
        >
          <img
            src="/aryan.jpg"
            alt="Aryan Mukund Singh"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          />
          {/* Specular Light Glare */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
};

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col space-y-8 lg:space-y-14">
      {/* Background Pit Grid */}
      <div className="fixed inset-0 pit-grid opacity-20 pointer-events-none -z-10" />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-2 sm:pt-4 pb-4">
        {/* Animated Track Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${22 * (i + 1)}%`,
                animation: `speed-line ${2 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Driver Headline & Recruiter CTAs */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 animate-fade-in-up">
              {/* Start Grid Tag */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <Shield className="w-4 h-4" />
                <span>START GRID // BACKEND ENGINEER</span>
              </div>

              {/* Name Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black tracking-tight leading-[0.95] text-foreground">
                  ARYAN <br />
                  MUKUND <br />
                  <span className="text-primary red-neon-text">SINGH</span>
                </h1>
                <div className="h-1.5 w-28 bg-primary rounded-full track-glow mt-4" />
              </div>

              {/* Role Title & Value Proposition */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-rajdhani font-bold text-slate-200 flex items-center gap-2">
                  Backend Engineer <span className="text-primary">•</span> Systems Architect
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
                  Computer Science Graduate building <span className="text-foreground font-medium">high-throughput APIs</span>,{" "}
                  <span className="text-foreground font-medium">distributed systems</span>, and{" "}
                  <span className="text-foreground font-medium">cloud-native microservices</span> with low latency, reliability, and clean architecture.
                </p>
              </div>

              {/* Core Tech Stack Pills */}
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
                    className="px-3 py-1 text-xs font-mono bg-card/60 text-slate-200 rounded-md border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Recruiter Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="/Recruit.pdf" download="Aryan_Mukund_Singh_Resume.pdf">
                  <button className="px-6 py-3.5 rounded-xl text-sm font-rajdhani font-bold text-white bg-primary hover:bg-primary/90 border border-primary/50 shadow-lg track-glow transition-all duration-300 flex items-center gap-2 cursor-pointer group">
                    <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    <span>Download Resume (PDF)</span>
                  </button>
                </a>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3.5 rounded-xl text-sm font-rajdhani font-bold text-foreground bg-card/80 border border-border hover:border-primary/50 hover:bg-card hover:text-primary transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-5 py-3.5 rounded-xl text-sm font-rajdhani font-bold text-muted-foreground hover:text-foreground bg-transparent hover:bg-card/40 border border-transparent hover:border-border transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Radio className="w-4 h-4 text-primary animate-pulse" />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Recruiter Social Quick Links */}
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://github.com/Aryan-040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-border">•</span>
                <a
                  href="https://www.linkedin.com/in/aryan-mukund-singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-border">•</span>
                <a
                  href="https://leetcode.com/u/Aryan4-03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <SiLeetcode className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode</span>
                </a>
              </div>

              {/* At-a-Glance Recruiter Stats */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border/40 max-w-xl">
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-primary tracking-tight">450+</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Problems Solved</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-primary tracking-tight">2</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Internships</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-primary tracking-tight">5+</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Production Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400 tracking-tight">AWS</div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Certified</div>
                </div>
              </div>
            </div>

            {/* Right Column: Driver Profile Photo in 3D Interactive Format */}
            <div className="lg:col-span-5 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <ProfilePhoto3D />
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT & TECHNICAL SPECIFICATIONS SECTION */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 3. EXPERIENCE / TEAM GARAGE SECTION */}
      <section id="experience">
        <TeamGarageSection />
      </section>

      {/* 4. RACE LAPS / FEATURED PROJECTS SECTION */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* 5. PIT STOP PHILOSOPHY / DEVELOPMENT APPROACH */}
      <section id="philosophy">
        <HomeBottomSection />
      </section>

      {/* 6. PODIUM / CONTACT SECTION */}
      <section id="contact">
        <ContactSection />
      </section>

    </div>
  );
};

export default Index;