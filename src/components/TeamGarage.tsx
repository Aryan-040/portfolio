import { Card } from "@/components/ui/card";
import { Database } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  techStack: string[];
  achievements: string[];
};

// const experiences: Experience[] = [
//   {
//     role: "Data Analyst Intern (Engineering Focus)",
//     company: "India TV",
//     duration: "Dec 2025 – Jan 2026",
//     location: "Noida, India",
//     techStack: [
//       "Looker Studio",
//       "Excel",
//       "Power BI",
//       "GenAI",
//       "Suno AI",
//     ],
//     achievements: [
//       "Automated reporting workflows and data processing tasks.",
//       "Built analytical dashboards and reporting pipelines.",
//       "Improved data accuracy through validation and data cleansing.",
//       "Collaborated with engineering and analytics teams on business insights.",
//       "Created AI-generated storyboards and promotional media assets for the VETO platform using Generative AI tools.",
//     ],
//   },
// ];

const experiences: Experience[] = [
{
role: "Data Analyst Intern (Engineering Focus)",
company: "India TV",
duration: "Dec 2025 – Jan 2026",
location: "Noida, India",
techStack: [
"Looker Studio",
"Excel",
"Power BI",
"GenAI",
"Suno AI",
],
achievements: [
"Automated reporting workflows and data processing tasks.",
"Built analytical dashboards and reporting pipelines.",
"Improved data accuracy through validation and data cleansing.",
"Collaborated with engineering and analytics teams on business insights.",
"Created AI-generated storyboards and promotional media assets for the VETO platform using Generative AI tools.",
],
},

{
role: "Software Quality Analyst Intern",
company: "Sway.club",
duration: "May 2025 – Jul 2025",
location: "Remote",
techStack: [
"JUnit",
"Java",
"REST APIs",
"Postman",
"Git",
"CI/CD",
],
achievements: [
"Executed 200+ JUnit-driven test cases achieving 98% critical flow coverage across backend services.",
"Identified and validated 40+ API and authentication defects, reducing production issues by 30%.",
"Performed end-to-end API testing and backend validation to improve system reliability.",
"Collaborated with engineering teams on debugging, regression testing, and release verification.",
"Contributed to SDLC and CI/CD quality assurance workflows to ensure stable deployments.",
],
},
];

const TeamGarage = () => {
  return (
    <section className="my-20 lg:my-28 animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-orbitron font-bold tracking-wide">
          TEAM GARAGE
        </h2>

        <p className="text-muted-foreground mt-3 text-lg">
          Where Performance Meets Execution
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="h-full">
              <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.15)]">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-rajdhani font-bold mb-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company} • {exp.location}
                    </p>

                    <p className="text-sm font-mono text-muted-foreground mt-1">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="text-primary font-semibold uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-md border border-border bg-muted/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-6">
                    <h4 className="text-primary font-semibold uppercase tracking-wider mb-3">
                      Key Contributions
                    </h4>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-left">
                          <span className="text-primary mt-1">•</span>
                          <span className="leading-relaxed">{achievement}</span>
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