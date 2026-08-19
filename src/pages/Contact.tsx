import { useState } from "react";
import { MessageSquare, User, Send, CheckCircle2, Radio, Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import NextLapButton from "@/components/NextLapButton";
import { sendContactEmail } from "@/services/emailService";

const Contact = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Play radio audio
    const audio = new Audio("/f1-radio.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => {});

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative min-h-screen py-10 lg:py-16">
      {/* Grid Background */}
      <div className="absolute inset-0 pit-grid opacity-20 pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              animation: `speed-line ${2 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12 space-y-3 lg:space-y-4 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black flex items-center justify-center gap-3">
            <Radio className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse" />
            <span className="text-primary neon-text">Pit Radio</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-rajdhani font-semibold text-foreground">
            Ready for the Next Race?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Looking for a backend engineer who enjoys building scalable systems, solving challenging problems, and shipping production-ready software? Let's connect.
          </p>
          
          {/* Availability Badge & Status Chips */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              ACTIVE STATUS: OPEN FOR WORK
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
              {[
                "Software Engineering Roles",
                "Backend Development",
                "Freelance Projects",
                "Open Source Collaboration",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 text-xs font-rajdhani font-semibold bg-card/60 text-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Email",
                icon: Mail,
                detail: "singharyan432002@gmail.com",
                href: "mailto:singharyan432002@gmail.com",
                actionLabel: "Send Email",
              },
              {
                title: "GitHub",
                icon: Github,
                detail: "github.com/Aryan-040",
                href: "https://github.com/Aryan-040",
                actionLabel: "View Profile",
                external: true,
              },
              {
                title: "LinkedIn",
                icon: Linkedin,
                detail: "linkedin.com/in/aryan-mukund-singh",
                href: "https://www.linkedin.com/in/aryan-mukund-singh/",
                actionLabel: "Let's Connect",
                external: true,
              },
              {
                title: "Resume",
                icon: FileText,
                detail: "Aryan_Mukund_Singh_Resume.pdf",
                href: "/Recruit.pdf",
                actionLabel: "Download PDF",
                download: "Aryan_Mukund_Singh_Resume.pdf",
              },
            ].map((card, idx) => {
              const CardContent = (
                <Card className="group relative p-4 sm:p-5 telemetry-card border-border hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="inline-flex p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <card.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground break-all">
                        {card.detail}
                      </p>
                    </div>
                    <div className="pt-2 text-xs font-mono font-bold text-primary tracking-wider uppercase group-hover:underline flex items-center gap-1">
                      {card.actionLabel} &rarr;
                    </div>
                  </div>
                </Card>
              );

              if (card.download) {
                return (
                  <a
                    key={idx}
                    href={card.href}
                    download={card.download}
                    className="block no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg h-full"
                    aria-label={`Download resume: ${card.detail}`}
                  >
                    {CardContent}
                  </a>
                );
              }

              return (
                <a
                  key={idx}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="block no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg h-full"
                  aria-label={`Go to ${card.title}: ${card.detail}`}
                >
                  {CardContent}
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-rajdhani font-semibold text-foreground"
                >
                  <User className="w-4 h-4 text-primary" />
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-9 bg-background/50 border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-rajdhani font-semibold text-foreground"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  From Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-9 bg-background/50 border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="flex items-center gap-2 text-sm font-rajdhani font-semibold text-foreground"
                >
                  <Radio className="w-4 h-4 text-primary" />
                  Mission Brief
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity, collaboration..."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-9 bg-background/50 border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-rajdhani font-semibold text-foreground"
                >
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, opportunity, or how we can work together..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSuccess}
                className="w-full font-rajdhani font-bold text-base lg:text-lg min-h-[56px] py-2 bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group flex items-center justify-center"
              >
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center space-y-0.5 py-1">
                    <span className="flex items-center gap-2 text-base lg:text-lg animate-fade-in font-bold">
                      🏁 Radio Received
                    </span>
                    <span className="text-xs font-mono font-medium opacity-90 animate-fade-in">
                      See you in the pit lane.
                    </span>
                  </div>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-tire-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Button>
            </form>
          </Card>

          {/* replies note */}
          <p className="mt-4 text-center text-xs font-mono text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Replies within 24 hours.
          </p>
        </div>

        {/* Next Lap Button */}
        <NextLapButton />
      </div>
    </main>
  );
};

export default Contact;
