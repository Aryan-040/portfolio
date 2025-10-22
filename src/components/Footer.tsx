import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 rounded-full blur-xl transition-all duration-300" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-sm lg:text-base text-muted-foreground font-inter">
            Built with{" "}
            <span className="inline-block text-primary animate-neon-pulse mx-1">
              ⚡
            </span>{" "}
            by{" "}
            <span className="font-semibold text-foreground">
              Aryan Mukund Singh
            </span>
          </p>

          {/* Racing Flag Decoration */}
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 lg:w-4 lg:h-4 bg-primary/20 rotate-45 hover:bg-primary hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40 group"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-neon-pulse" />
        <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-90 transition-all duration-300 shadow-lg">
          <ArrowUp className="w-6 h-6 text-primary-foreground" />
        </div>
      </button>
    </footer>
  );
};

export default Footer;
