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
          <span>SaaS Platform • AI Bots • Automation</span>
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gradient md:text-6xl lg:text-7xl font-display">
          Lowcode — AI Automation SaaS for Modern Teams
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Lowcode is a cloud platform for AI Call Bots and Chatbots across WhatsApp and Web. Launch workflows in minutes, integrate with your stack, and scale effortlessly.
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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <article className="feature-card card-hover rounded-xl p-6 text-left">
            <div className="mb-3 inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
              <PhoneCall />
            </div>
            <h3 className="font-semibold">AI Call Bots</h3>
            <p className="text-sm text-muted-foreground">Everything you need to launch fast and scale confidently.</p>
          </article>
          <article className="feature-card card-hover rounded-xl p-6 text-left">
            <div className="mb-3 inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
              <MessageSquare />
            </div>
            <h3 className="font-semibold">WhatsApp Chatbots</h3>
            <p className="text-sm text-muted-foreground">Everything you need to launch fast and scale confidently.</p>
          </article>
          <article className="feature-card card-hover rounded-xl p-6 text-left">
            <div className="mb-3 inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Bot />
            </div>
            <h3 className="font-semibold">Website Chatbots</h3>
            <p className="text-sm text-muted-foreground">Everything you need to launch fast and scale confidently.</p>
          </article>
        </div>
      </div>
      {/* Soft fade to white/background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
