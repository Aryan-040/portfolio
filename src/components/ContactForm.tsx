import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { sendContactEmail, ContactPayload } from '@/services/emailService';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle2 } from 'lucide-react';

type FormState = ContactPayload;

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validateEmail = (email: string) => {
  // simple RFC-ish email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: 'All fields are required', variant: 'destructive' });
      return;
    }

    if (!validateEmail(form.email)) {
      toast({ title: 'Please enter a valid email address', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendContactEmail(form as ContactPayload);
      setIsSuccess(true);
      toast({ title: 'Message sent successfully!', description: '' });
      setForm(initialState);
    } catch (err) {
      console.error('Email send error', err);
      toast({ title: 'Failed to send message. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 2500);
    }
  };

  return (
    <Card className="p-6 lg:p-10 bg-card/50 backdrop-blur-sm border-border animate-fade-in-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-rajdhani font-semibold">Name</label>
            <Input id="name" name="name" value={form.name} onChange={onChange} required className="bg-background/50 border-border focus:border-primary" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-rajdhani font-semibold">Email</label>
            <Input id="email" name="email" type="email" value={form.email} onChange={onChange} required className="bg-background/50 border-border focus:border-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-rajdhani font-semibold">Subject</label>
          <Input id="subject" name="subject" value={form.subject} onChange={onChange} required className="bg-background/50 border-border focus:border-primary" />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-rajdhani font-semibold">Message</label>
          <Textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} required className="bg-background/50 border-border focus:border-primary resize-none" />
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full font-rajdhani font-bold text-base lg:text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group">
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
  );
};

export default ContactForm;
