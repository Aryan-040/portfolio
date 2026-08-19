import { useState } from "react";
import { ExternalLink, Award, Zap, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NextLapButton from "@/components/NextLapButton";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// High-Sensitivity 3D Tilt Wrapper for Project Cards
const ProjectCard3D = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 450, damping: 16 });
  const mouseYSpring = useSpring(y, { stiffness: 450, damping: 16 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`h-full transition-all duration-300 hover:z-30 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "Stoxie",
      category: "fullstack",
      categoryLabel: "FinTech & Real-Time",
      description:
        "A modern stock tracking web application that helps users monitor their favorite stocks, manage personalized watchlists, and receive daily stock news via email.",
      shortDescription:
        "Real-time stock tracking web app with personalized watchlists and automated email news alerts.",
      technologies: [
        "React.js",
        "Next.js",
        "MongoDB Atlas",
        "Tailwind",
        "TypeScript",
        "Inngest",
        "Finnhub API",
      ],
      github: "https://github.com/Aryan-040/Stoxie",
      demo: "https://stoxie-eight.vercel.app",
      lap: "Lap 1",
    },
    {
      title: "AgentMeet",
      category: "ai",
      categoryLabel: "AI & Real-Time Meetings",
      description:
        "AgentMeet is a platform where users create, customize, and interact with AI agents in real-time meetings, enabling intelligent assistant collaboration for professional and personal purposes.",
      shortDescription:
        "Real-time AI meeting platform to create, customize, and collaborate with virtual assistants.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind",
        "Polar",
        "OpenAI",
        "Inngest",
        "tRPC",
        "PostgreSQL",
        "NeonDB",
        "Better Auth",
        "Drizzle ORM",
      ],
      github: "https://github.com/Aryan-040/AgentMeet",
      demo: "https://agent-meet-gl11.vercel.app",
      lap: "Lap 2",
    },
    {
      title: "idea Stash",
      category: "fullstack",
      categoryLabel: "Content Intelligence",
      description:
        "A full-stack content intelligence platform for saving, organizing, and discovering resources across YouTube, GitHub, Twitter/X, articles, and websites. Features automated metadata extraction, rich previews, advanced search, sharing capabilities, and secure JWT-based authentication.",
      shortDescription:
        "Content intelligence library with automated metadata extraction, advanced search, and JWT auth.",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB Atlas",
        "Tailwind CSS",
        "JWT Auth",
      ],
      github: "https://github.com/Aryan-040/Idea-stash",
      demo: "https://idea-stash-xi.vercel.app/",
      lap: "Lap 3",
    },
    {
      title: "Metrics",
      category: "enterprise",
      categoryLabel: "Performance Platform",
      description:
        "A multi-tenant performance management platform for structured monthly employee feedback. Supports hierarchical and flat organizational models, manager-to-employee feedback, 5-parameter performance evaluations with scores and justifications, HR compliance tracking, historical performance analytics, and company-scoped data isolation.",
      shortDescription:
        "Multi-tenant performance management platform for monthly feedback, evaluations, HR tracking, and performance history.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "PostgreSQL",
        "Prisma",
        "Neon",
      ],
      github: "https://github.com/Aryan-040/Metrics",
      demo: "https://metrics-orpin.vercel.app/",
      lap: "Lap 4",
    },
    {
      title: "Eco-drop",
      category: "marketplace",
      categoryLabel: "Eco Marketplace",
      description:
        "An eco-friendly marketplace that connects buyers and sellers facilitating trade of recyclable waste materials according to categories.",
      shortDescription:
        "Eco-friendly waste trade exchange connecting buyers and sellers by categories.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "GitHub"],
      github: "https://github.com/Aryan-040/Eco-drop",
      demo: "xyz",
      lap: "Lap 5",
    },
  ];

  const categories = [
    { id: "all", label: "ALL RACE LAPS" },
    { id: "fullstack", label: "FULL-STACK & APIS" },
    { id: "ai", label: "AI & REAL-TIME" },
    { id: "enterprise", label: "ENTERPRISE & SYSTEMS" },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((p) => p.category === selectedCategory || (selectedCategory === "fullstack" && (p.category === "fullstack" || p.category === "marketplace")));

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      link: "https://www.credly.com/badges/52a6c31b-d950-42a5-bc53-084bc0206e11/linked_in_profile",
    },
    {
      name: "AWS Cloud Technical Essentials",
      link: "https://www.coursera.org/account/accomplishments/verify/DXOTNYFHXNSB",
    },
    {
      name: "Introduction to AI",
      link: "https://www.coursera.org/account/accomplishments/verify/8JJ82MP5F66R",
    },
    {
      name: "Programming in C++",
      link: "https://www.coursera.org/account/accomplishments/specialization/LM6JFNJQD9Q5",
    },
  ];

  return (
    <div className="relative py-4 lg:py-8">
      <div className="absolute inset-0 pit-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8 space-y-3 animate-fade-in-up text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-mono text-primary tracking-widest uppercase">
              STRAIGHT // RACE LAPS
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black">
            Race <span className="text-primary red-neon-text">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            High-performance web applications and backend systems engineered for speed, reliability, and scale.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(225,6,0,0.4)]"
                    : "bg-card/60 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Filter className="w-3 h-3" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredProjects.map((project, idx) => (
            <Card
              key={project.title}
              className="group relative p-5 telemetry-card border-border/80 hover:border-primary transition-all duration-300 hover:-translate-y-3.5 hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(225,6,0,0.4)] transform-gpu overflow-hidden animate-fade-in-up flex flex-col justify-between cursor-pointer h-full"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Lap Indicator Badge */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-primary border border-primary/30 z-20">
                {project.lap}
              </div>

              <div className="relative z-10 space-y-4">
                {/* Telemetry HUD Graphic Header */}
                <div className="relative w-full h-28 rounded-lg bg-black/80 border border-border/60 overflow-hidden flex flex-col items-center justify-center p-3 group-hover:border-primary/40 transition-colors">
                  <div className="absolute inset-0 pit-grid opacity-20" />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-1 font-mono text-center">
                    <Zap className="w-6 h-6 text-primary animate-pulse mb-0.5" />
                    <span className="text-primary font-bold text-xs tracking-wider font-orbitron">
                      {project.title.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-rajdhani font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono bg-muted/40 text-slate-300 rounded border border-border group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-muted/40 rounded border border-border text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex gap-2 pt-4 mt-4 border-t border-border/40 relative z-10">
                <Button variant="outline" size="sm" className="flex-1 text-xs h-9 font-rajdhani font-bold" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    Code
                  </a>
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1 text-xs h-9 font-rajdhani font-bold border-border hover:border-primary/50">
                      Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="telemetry-card border-primary/40 max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-orbitron font-bold text-foreground flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-sm font-mono text-muted-foreground mt-1">
                        {project.lap} Specifications // {project.categoryLabel}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-2 text-sm sm:text-base leading-relaxed">
                      <p className="text-foreground/90">{project.description}</p>
                      
                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-mono text-primary uppercase tracking-wider">Engine Tech Stack</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-muted/60 rounded border border-border text-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {project.demo !== "xyz" && (
                  <Button size="sm" className="flex-1 text-xs h-9 bg-primary hover:bg-primary/90 text-white font-rajdhani font-bold track-glow" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Badges */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="text-center mb-6 space-y-1">
            <h2 className="text-2xl lg:text-3xl font-orbitron font-bold">
              Racing <span className="text-primary red-neon-text">Badges & Certifications</span>
            </h2>
            <p className="text-xs text-muted-foreground font-mono">
              Verified technical credentials & Cloud accreditations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="p-4 telemetry-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm font-rajdhani font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {cert.name}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
