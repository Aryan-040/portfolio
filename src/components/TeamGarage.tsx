import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, Wrench } from "lucide-react";
import NextLapButton from "./NextLapButton";

type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  techStack: string[];
  achievements: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "sway.club",
    duration: "Feb 2026 – Apr 2026",
    location: "Remote",
    techStack: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "OAuth",
      "GitHub Actions",
      "CI/CD",
    ],
    achievements: [
      "Developed backend **API endpoints and data models** for the social feed and notifications service.",
      "Resolved **40+ issues** across OAuth authentication, API validation, and input handling, improving application stability.",
      "Configured **GitHub Actions CI/CD pipelines** with automated test suites and regression checks for every pull request.",
      "Collaborated with engineers on backend **debugging, code reviews, and production deployments**.",
      "Contributed to backend feature development while following **Agile, SDLC, and CI/CD** best practices.",
    ],
  },
  {
    role: "Data Engineering Intern",
    company: "India TV",
    duration: "Dec 2025 – Jan 2026",
    location: "Noida, India",
    techStack: [
      "Looker Studio",
      "Excel",
      "Power BI",
      "GenAI",
    ],
    achievements: [
      "Created reporting dashboards by unifying data from **six internal data sources**.",
      "Reduced manual report preparation by over **two hours per day** for the editorial team.",
      "Supported **GenAI-assisted** visual content workflows by generating and refining AI-generated media assets.",
      "Improved data quality through validation, data cleansing, and **reporting automation**.",
    ],
  },
];

const TeamGarage = () => {
  return (
    <section className="my-6 lg:my-12 animate-fade-in-up">
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-mono text-primary uppercase tracking-widest">
          <Wrench className="w-3.5 h-3.5" />
          <span>EXPERIENCE // TEAM GARAGE</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-orbitron font-bold tracking-wide">
          TEAM <span className="text-primary red-neon-text">GARAGE</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Where Engineering Meets High Performance
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="h-full">
              <Card className="h-full p-6 telemetry-card hud-bracket border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col h-full space-y-4">
                  {/* Header */}
                  <div className="border-b border-border/40 pb-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-rajdhani font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/30">
                        GARAGE 0{index + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground pt-1">
                      <span className="text-primary font-semibold flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 flex items-center gap-1 pt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex-1 space-y-2">
                    <h4 className="text-primary font-mono font-bold uppercase tracking-wider text-xs">
                      Key Contributions
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-left">
                          <span className="text-primary mt-1">•</span>
                          <span
                            className="leading-relaxed text-slate-300"
                            dangerouslySetInnerHTML={{
                              __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong className="text-foreground">$1</strong>')
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-border/40">
                    <h4 className="text-muted-foreground font-mono uppercase tracking-wider text-[11px] mb-2">
                      Engine Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded border border-border bg-muted/40 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGarage;