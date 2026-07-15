import {
  FileDown,
  Code,
  Cloud,
  Database,
  Gauge,
  Rocket,
  Users,
  Clock,
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
      rpm: 8900,
    },
    {
      category: "Aerodynamics (Frontend)",
      icon: Code,
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "HTML",
        "CSS",
      ],
      rpm: 9200,
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
      rpm: 9000,
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
      rpm: 8100,
    },
  ];

  const pitStops = [
    {
      icon: Rocket,
      metric: "Fast",
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and frameworks",
      color: "text-blue-500",
    },
    {
      icon: Users,
      metric: "Team",
      title: "Collaborative Spirit",
      description: "Thriving in team environments and pair programming",
      color: "text-primary",
    },
    {
      icon: Clock,
      metric: "24/7",
      title: "Always Driven",
      description: "Passionate about continuous learning and improvement",
      color: "text-accent",
    },
  ];

  return (
    <main className="relative min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12 space-y-3 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black">
            About <span className="text-primary neon-text">The Driver</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Computer Science graduate focused on backend engineering, scalable
            distributed systems, and building high-performance web applications.
          </p>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-10 lg:mb-14">
          <Card className="p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-base lg:text-lg leading-relaxed text-foreground">
                I'm a backend-focused software engineer who approaches development
                like an F1 driver approaches a race—with precision, performance,
                and continuous optimization. I specialize in designing scalable APIs,
                distributed architectures, and cloud-native services while maintaining
                clean, production-ready code.
              </p>
              <div className="pt-2">
                <a href="/Recruit.pdf" download="Aryan_Mukund_Singh_Resume.pdf">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground font-rajdhani font-bold text-base lg:text-lg"
                  >
                    <FileDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Merged Skills & Performance Metrics Section */}
        <div className="max-w-6xl mx-auto mb-10 lg:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Technical Specifications */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-orbitron font-bold text-left animate-fade-in-up">
                Technical <span className="text-primary neon-text">Specifications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={skill.category}
                    className="group p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 tilt-3d animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg group-hover:bg-primary/30 transition-all duration-300" />
                        <div className="relative p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                          <skill.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-orbitron font-bold">
                          {skill.category}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Gauge className="w-3.5 h-3.5" />
                          <span className="font-mono">{skill.rpm} RPM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted/50 text-foreground rounded border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 font-inter"
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
                Pit Stop <span className="text-primary neon-text">Performance</span>
              </h2>
              <div className="flex flex-col gap-4">
                {pitStops.map((pit, index) => (
                  <Card
                    key={index}
                    className="group relative p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col items-start space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <pit.icon className={`w-5 h-5 ${pit.color}`} />
                        </div>
                        <div>
                          <h3 className="text-base font-rajdhani font-bold">
                            {pit.title}
                          </h3>
                          <div className="text-xl font-orbitron font-black text-primary leading-none">
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

        <NextLapButton />
      </div>
    </main>
  );
};

export default About;
