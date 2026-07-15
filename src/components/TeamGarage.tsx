import { Card } from "@/components/ui/card";

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
    <section className="my-6 lg:my-10 animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-orbitron font-bold tracking-wide">
          TEAM GARAGE
        </h2>
        <p className="text-muted-foreground mt-2 text-base sm:text-lg">
          Where Performance Meets Execution
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="h-full">
              <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.15)]">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-rajdhani font-bold mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-4">
                    <h4 className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded border border-border bg-muted/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-4">
                    <h4 className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2">
                      Key Contributions
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-left">
                          <span className="text-primary mt-1">•</span>
                          <span className="leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: achievement }} />
                        </li>
                      ))}
                    </ul>
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