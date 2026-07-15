import { ExternalLink, Award, Zap, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NextLapButton from "@/components/NextLapButton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      title: "Stoxie",
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
        "trpc",
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
      description:
        "A full-stack content intelligence platform for saving, organizing, and discovering resources across YouTube, GitHub, Twitter/X, articles, and websites. Features automated metadata extraction, rich previews, advanced search, sharing capabilities, and secure JWT-based authentication.",
      shortDescription:
        "Content intelligence library with automated metadata extraction, advanced search, and JWT auth.",
      technologies: [
        "Tailwind",
        "Node.js",
        "React.js",
        "Express",
        "MongoDB Atlas",
        "Github",
      ],
      github: "https://github.com/Aryan-040/Idea-stash",
      demo: "https://idea-stash-xi.vercel.app/",
      lap: "Lap 3",
    },
    {
      title: "Eco-drop",
      description:
        "An eco-friendly marketplace that connects buyers and sellers facilitating trade of recyclable waste materials according to the categories.",
      shortDescription:
        "Eco-friendly waste trade exchange connecting buyers and sellers by categories.",
      technologies: ["Tailwind", "Next.js", "React.js", "Github"],
      github: "https://github.com/Aryan-040/Eco-drop",
      demo: "xyz",
      lap: "Lap 4",
    },
  ];

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
    <main className="relative min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary tracking-wider">
              STRAIGHT // RACE LAPS
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black text-center">
            Race <span className="text-primary track-glow">Portfolio</span>
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            High-performance projects engineered for speed and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group relative p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 tilt-3d overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="absolute top-2 right-3 text-[10px] font-mono text-muted-foreground z-20">
                {project.lap}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-3">
                {/* Project Telemetry Graphic (Project Image placeholder) */}
                <div className="relative w-full h-24 rounded bg-black/60 border border-border/40 overflow-hidden flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  {/* Cyber Grid background */}
                  <div className="absolute inset-0 pit-grid opacity-15" />
                  
                  {/* Red track speed line animation inside image container */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Telemetry Icon / F1 HUD layout overlay */}
                  <div className="relative z-10 flex flex-col items-center gap-1 font-mono text-[9px] text-muted-foreground">
                    <Zap className="w-5 h-5 text-primary mb-0.5 animate-pulse" />
                    <span className="text-primary font-bold tracking-wider">{project.lap.toUpperCase()} // ACTIVE</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-rajdhani font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-normal h-10 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] bg-muted/40 rounded border border-border group-hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] bg-muted/40 rounded border border-border text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-1">
                  <Button variant="outline" size="sm" className="flex-1 text-xs h-8 font-rajdhani font-bold" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5 mr-1" />
                      Code
                    </a>
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 text-xs h-8 font-rajdhani font-bold border-border hover:border-primary/45">
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card/95 border-primary/30 text-foreground font-rajdhani max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-orbitron font-bold text-primary flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary" />
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-sm font-mono text-muted-foreground mt-1">
                          {project.lap} Specifications
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-2 text-sm sm:text-base leading-relaxed">
                        <p className="text-foreground">{project.description}</p>
                        
                        <div className="space-y-2 pt-2">
                          <h4 className="text-xs font-mono text-primary uppercase tracking-wider">Engine Tech Stack</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-2 py-1 text-xs bg-muted/60 rounded border border-border text-foreground">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {project.demo !== "xyz" && (
                    <Button size="sm" className="flex-1 text-xs h-8 bg-primary hover:bg-primary/90 font-rajdhani font-bold track-glow" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-orbitron font-bold text-center mb-6">
            Racing <span className="text-primary track-glow">Badges</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="p-3 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm font-rajdhani font-bold group-hover:text-primary transition-colors leading-tight">
                      {cert.name}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <NextLapButton />
      </div>
    </main>
  );
};

export default Projects;
