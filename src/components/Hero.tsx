import React from "react";
import { Button } from "@/components/ui/button";
import FloatingOrbs from "@/components/FloatingOrbs";
import { MessageSquare, PhoneCall, Bot, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-hero px-6 py-20 shadow-sm md:px-12 md:py-28">
      <FloatingOrbs />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs glass">
          <Sparkles className="opacity-80" />
          <span>IT Consulting • AI Bots • Automation</span>
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gradient md:text-6xl lg:text-7xl font-display">
          Lowcode — Smart Automation for the Modern Business
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Lowcode is an IT consulting company delivering AI Call Bots, WhatsApp & Website Chatbots, and custom web design to help you save time, boost conversions, and scale effortlessly.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="premium" className="hover-lift">
            Get Started
          </Button>
          <Button size="lg" variant="hero" className="hover-lift">
            Book a Demo
          </Button>
        </div>

        {/* Feature icons */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <article className="glass rounded-xl p-5 text-left">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <PhoneCall />
            </div>
            <h3 className="font-semibold">AI Call Bots</h3>
            <p className="text-sm text-muted-foreground">Auto-book appointments, reminders, and feedback calls with natural voice.</p>
          </article>
          <article className="glass rounded-xl p-5 text-left">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageSquare />
            </div>
            <h3 className="font-semibold">WhatsApp Chatbots</h3>
            <p className="text-sm text-muted-foreground">24/7 support, lead capture, and marketing workflows integrated with your CRM.</p>
          </article>
          <article className="glass rounded-xl p-5 text-left">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bot />
            </div>
            <h3 className="font-semibold">Website Chatbots</h3>
            <p className="text-sm text-muted-foreground">Turn visitors into customers using smart site bots and tailored funnels.</p>
          </article>
        </div>
      </div>
      {/* Soft fade to white/background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
