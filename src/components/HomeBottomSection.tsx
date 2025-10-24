"use client";
import { motion,easeInOut } from "framer-motion";
import { Wrench, Timer, Brain, Rocket } from "lucide-react";

const PitStopPhilosophy = () => {
  const pitStops = [
    {
      phase: "01 // Analyze the Track",
      title: "Understand the Circuit",
      desc: "Before every project, I map the terrain — requirements, users, and constraints. You can’t win if you don’t know the corners.",
      icon: Brain,
    },
    {
      phase: "02 // Pit Stop",
      title: "Iterate with Precision",
      desc: "Speed is useless without control. I pause to refuel, refactor, and rethink. Every stop improves performance.",
      icon: Wrench,
    },
    {
      phase: "03 // Lap Time",
      title: "Execute at Full Throttle",
      desc: "Once strategy’s set, I accelerate — writing clean, optimized code that delivers under pressure.",
      icon: Timer,
    },
    {
      phase: "04 // Finish Line",
      title: "Launch & Learn",
      desc: "I don’t just ship — I review telemetry, measure impact, and fine-tune for the next race.",
      icon: Rocket,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: easeInOut },
    },
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-background via-background/80 to-background">
      {/* Background motion track line */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.4),transparent_70%)] animate-pulse" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <h3 className="text-xs uppercase tracking-widest text-primary font-mono mb-2">
              Pit Stop Philosophy
            </h3>
            <h2 className="text-4xl md:text-5xl font-orbitron font-black">
              My Development <span className="text-primary">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pitStops.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.phase}
                  variants={cardVariants}
                  className="group relative bg-card/10 border border-border/40 rounded-2xl p-8 transition-all duration-500 hover:border-primary/70 hover:shadow-[0_0_35px_-10px_rgba(239,68,68,0.3)]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-primary uppercase tracking-widest">
                      {p.phase}
                    </span>
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-rajdhani text-sm">
                    {p.desc}
                  </p>

                  {/* Glow line bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitStopPhilosophy;

