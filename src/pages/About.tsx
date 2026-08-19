import {
  FileDown,
  Code,
  Cloud,
  Database,
  Gauge,
  Rocket,
  Users,
  Clock,
  MapPin,
  Briefcase,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NextLapButton from "@/components/NextLapButton";

const About = () => {
  const skills = [
    {
      category: "Engine (Backend)",
      icon: Database,
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "Java",
        "REST APIs",
        "tRPC",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
      ],
      rpm: 9800,
    },
    {
      category: "Aerodynamics (Frontend)",
      icon: Code,
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "HTML5",
        "CSS3",
      ],
      rpm: 9400,
    },
    {
      category: "Pit Crew (Cloud & DevOps)",
      icon: Cloud,
      technologies: [
        "AWS",
        "Docker",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Vercel",
      ],
      rpm: 9100,
    },
    {
      category: "Telemetry (Testing)",
      icon: Gauge,
      technologies: [
        "JUnit",
        "Unit Testing",
        "Integration Testing",
        "Debugging",
        "Test Automation",
      ],
      rpm: 8800,
    },
  ];

  const pitStops = [
    {
      icon: Rocket,
      metric: "Fast",
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies, languages, and distributed frameworks.",
      color: "text-blue-400",
    },
    {
      icon: Users,
      metric: "Team",
      title: "Collaborative Spirit",
      description: "Thriving in fast-paced team environments, agile sprints, and pair programming.",
      color: "text-primary",
    },
    {
      icon: Clock,
      metric: "24/7",
      title: "Always Driven",
      description: "Passionate about system architecture, optimization, and continuous improvement.",
      color: "text-amber-400",
    },
  ];

  return (
    <div className="relative py-4 lg:py-8">
      {/* Background Pit Grid */}
      <div className="absolute inset-0 pit-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 space-y-3 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-mono text-primary uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>PIT / DRIVER TELEMETRY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black">
            About <span className="text-primary red-neon-text">The Driver</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Computer Science Graduate & Software Engineer specializing in high-throughput backend services, cloud architecture, and distributed systems.
          </p>
        </div>

        {/* Bio Section with Driver Photo Card */}
        <div className="max-w-5xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <Card className="telemetry-card p-6 lg:p-8 hud-bracket overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Telemetry HUD Console */}
              <div className="md:col-span-5 p-5 bg-black/60 rounded-2xl border border-primary/30 space-y-3.5">
                <div className="flex items-center justify-between border-b border-border/40 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs font-bold text-foreground">
                      TELEMETRY // CONSOLE
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SYSTEM READY
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center bg-black/40 p-2.5 rounded-lg border border-border/30">
                    <span className="text-muted-foreground text-[11px]">PRIMARY ROLE</span>
                    <span className="text-primary font-bold">BACKEND SPECIALIST</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/40 p-2.5 rounded-lg border border-border/30">
                    <span className="text-muted-foreground text-[11px]">LOCATION</span>
                    <span className="text-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      INDIA (REMOTE/ONSITE)
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-black/40 p-2.5 rounded-lg border border-border/30">
                    <span className="text-muted-foreground text-[11px]">DSA / LEETCODE</span>
                    <span className="text-emerald-400 font-bold">450+ PROBLEMS</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/40 p-2.5 rounded-lg border border-border/30">
                    <span className="text-muted-foreground text-[11px]">EXPERIENCE</span>
                    <span className="text-purple-400 font-bold">2 INTERNSHIPS</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] font-mono border-t border-border/30">
                  <span className="text-muted-foreground">CAR #04 // VERIFIED</span>
                  <span className="text-emerald-400 font-bold">AWS CERTIFIED</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>SOFTWARE ENGINEER & BACKEND ARCHITECT</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                    I approach software engineering like an F1 racing team—with precision architecture, real-time telemetry monitoring, and non-stop latency optimization.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    Specializing in high-throughput RESTful & tRPC microservices, scaling PostgreSQL & MongoDB databases, and building automated GitHub Actions CI/CD pipelines.
                  </p>
                </div>

                {/* Capability Chips */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[
                    "Scalable API Design",
                    "Distributed Architectures",
                    "Database Optimization",
                    "CI/CD & DevOps Pipelines",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Resume Download CTA */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a href="/Recruit.pdf" download="Aryan_Mukund_Singh_Resume.pdf">
                    <Button
                      size="lg"
                      className="group bg-primary hover:bg-primary/90 text-white font-rajdhani font-bold text-base shadow-lg track-glow cursor-pointer"
                    >
                      <FileDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                      Download Resume (PDF)
                    </Button>
                  </a>
                  
                  <span className="text-xs font-mono text-muted-foreground">
                    Available for Full-time Roles
                  </span>
                </div>
              </div>

            </div>
          </Card>
        </div>

        {/* Technical Specifications Grid */}
        <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Technical Specifications */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-orbitron font-bold text-left animate-fade-in-up">
                Technical <span className="text-primary red-neon-text">Specifications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={skill.category}
                    className="group p-5 telemetry-card border-border hover:border-primary/50 transition-all duration-300 tilt-3d animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg group-hover:bg-primary/40 transition-all duration-300" />
                        <div className="relative p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                          <skill.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-orbitron font-bold text-foreground">
                          {skill.category}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                          <Gauge className="w-3.5 h-3.5 text-primary" />
                          <span className="font-mono text-primary">{skill.rpm} RPM</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-muted/40 text-slate-200 rounded border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pit Stop Performance */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-orbitron font-bold text-left animate-fade-in-up">
                Pit Stop <span className="text-primary red-neon-text">Performance</span>
              </h2>
              <div className="flex flex-col gap-4">
                {pitStops.map((pit, index) => (
                  <Card
                    key={index}
                    className="group relative p-4 telemetry-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative z-10 flex flex-col items-start space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <pit.icon className={`w-5 h-5 ${pit.color}`} />
                        </div>
                        <div>
                          <h3 className="text-base font-rajdhani font-bold text-foreground">
                            {pit.title}
                          </h3>
                          <div className="text-lg font-orbitron font-black text-primary leading-none">
                            {pit.metric}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {pit.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
