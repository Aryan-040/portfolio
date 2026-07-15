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
    <main className="relative min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 space-y-4 lg:space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black">
            About <span className="text-primary neon-text">The Driver</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science graduate focused on backend engineering, scalable
            distributed systems, and building high-performance web applications.
          </p>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <Card className="p-6 lg:p-10 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up">
            <div className="space-y-6">
              <p className="text-base lg:text-lg leading-relaxed text-foreground">
                I'm a backend-focused software engineer who approaches development
                like an F1 driver approaches a race with precision, performance,
                and continuous optimization. I enjoy designing scalable APIs,
                distributed systems, and cloud-native applications while keeping
                code clean, maintainable, and production-ready.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                My experience spans modern backend development, frontend engineering,
                cloud infrastructure, databases, and testing. From architecting
                REST APIs and microservices to building polished React interfaces,
                I enjoy solving complex engineering problems with practical,
                efficient solutions.
              </p>
              <div className="pt-4">
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

        {/* Technical Specifications */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-center mb-12 lg:mb-16 animate-fade-in-up">
            Technical{" "}
            <span className="text-primary neon-text">Specifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.category}
                className="group p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 tilt-3d animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg group-hover:bg-primary/30 transition-all duration-300" />
                    <div className="relative p-3 lg:p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                      <skill.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-orbitron font-bold mb-2">
                      {skill.category}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gauge className="w-4 h-4" />
                      <span className="font-mono">{skill.rpm} RPM</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-muted/50 text-foreground rounded-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 font-inter"
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
        <div>
          <h2 className="text-3xl lg:text-4xl font-orbitron font-bold text-center mb-12 lg:mb-16 animate-fade-in-up">
            Pit Stop <span className="text-primary neon-text">Performance</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {pitStops.map((pit, index) => (
              <Card
                key={index}
                className="group relative p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <pit.icon className={`w-8 h-8 ${pit.color}`} />
                  </div>
                  <div className="text-3xl lg:text-4xl font-orbitron font-black text-primary group-hover:scale-105 transition-transform duration-300">
                    {pit.metric}
                  </div>
                  <h3 className="text-xl font-rajdhani font-bold">
                    {pit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pit.description}
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

export default About;
