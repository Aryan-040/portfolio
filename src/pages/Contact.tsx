import { useState } from "react";
import { MessageSquare, User, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import NextLapButton from "@/components/NextLapButton";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
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
    <main className="relative min-h-screen py-20 lg:py-32">
      {/* Animated Background Elements */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20 space-y-4 lg:space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black">
            <span className="text-primary neon-text">🗣️ Pit Radio</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-rajdhani font-semibold text-foreground">
            Let's Talk Strategy
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to collaborate, discuss technology, or explore opportunities
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 lg:p-10 bg-card/50 backdrop-blur-sm border-border animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm lg:text-base font-rajdhani font-semibold text-foreground"
                >
                  <User className="w-4 h-4 text-primary" />
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm lg:text-base font-rajdhani font-semibold text-foreground"
                >
                  Email Inbox
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Radio Check... Type your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm lg:text-base font-rajdhani font-semibold text-foreground"
                >
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSuccess}
                className="w-full font-rajdhani font-bold text-base lg:text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group"
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2 animate-neon-pulse" />
                    Message Sent!
                  </>
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

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm lg:text-base text-muted-foreground">
              Or reach out directly at: <span className="text-primary font-mono">contact@example.com</span>
            </p>
          </div>
        </div>

        <NextLapButton />
      </div>
    </main>
  );
};

export default Contact;
