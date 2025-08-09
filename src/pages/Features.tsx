import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const Features = () => {
  const items = [
    "No-code bot builder",
    "CRM & Calendar Integrations",
    "Analytics & Inbox",
  ];

  return (
    <div className="min-h-screen bg-background page-chrome">
      <header className="container mx-auto flex items-center justify-between py-6">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Lowcode
        </a>
        <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="/features">Features</a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="/pricing">Pricing</a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="/#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="hero" className="hover-lift">Book a Demo</Button>
          <Button variant="premium" className="hover-lift">Start Free</Button>
        </div>
      </header>

      <main className="container mx-auto space-y-12 py-16">
      <Reveal>
        <section className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-center text-4xl font-bold">SaaS Features</h1>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            A cloud-based platform to automate calls and chats end‑to‑end. Ship faster with low‑code building, built‑in analytics, and deep integrations.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {items.map((t, i) => (
              <div key={i} className="feature-card card-hover rounded-xl p-6">
                <div className="mb-3 inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Check />
                </div>
                <h3 className="font-semibold">{t}</h3>
                <p className="text-sm text-muted-foreground">
                  Everything you need to launch fast and scale confidently.
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      </main>
    </div>
  );
};

export default Features;


