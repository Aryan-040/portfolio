import { ExternalLink, Github, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NextLapButton from "@/components/NextLapButton";

const Projects = () => {
  const projects = [
    {
      title: "AI Analytics Platform",
      description: "Real-time ML-driven insights dashboard with predictive modeling",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      github: "#",
      demo: "#",
      lap: "Lap 1",
    },
    {
      title: "Cloud E-Commerce",
      description: "Scalable microservices architecture, 99.9% uptime SLA",
      technologies: ["Next.js", "Node.js", "Docker", "K8s"],
      github: "#",
      demo: "#",
      lap: "Lap 2",
    },
    {
      title: "Blockchain Voting",
      description: "Secure, transparent digital voting with smart contracts",
      technologies: ["Solidity", "Web3", "React", "IPFS"],
      github: "#",
      demo: "#",
      lap: "Lap 3",
    },
  ];

  const certifications = [
    "AWS Solutions Architect",
    "Google Cloud Professional",
    "Kubernetes Admin (CKA)",
    "TensorFlow Developer",
  ];

  return (
    <main className="relative min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary tracking-wider">STRAIGHT // RACE LAPS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black text-center">
            Race <span className="text-primary track-glow">Portfolio</span>
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            High-performance projects engineered for speed and scale
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 tilt-3d overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Lap Number */}
              <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground">
                {project.lap}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-rajdhani font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted/50 rounded border border-border group-hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 track-glow"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
            Racing <span className="text-primary track-glow">Badges</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <Card
                key={idx}
                className="group p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-rajdhani font-bold group-hover:text-primary transition-colors">
                    {cert}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <NextLapButton />
      </div>
    </main>
  );
};

export default Projects;
