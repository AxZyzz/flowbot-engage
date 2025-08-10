import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background page-chrome">
      <header className="container mx-auto flex items-center justify-between py-6">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Lowcode
        </a>
        <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="/features">Features</a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="/pricing">Pricing</a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="/about">About</a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="/#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="hero" className="hover-lift">Book a Demo</Button>
          <Button variant="premium" className="hover-lift">Start Free</Button>
        </div>
      </header>

      <main className="container mx-auto space-y-12 py-16">
        <Reveal>
          <section className="mx-auto max-w-4xl">
            <article className="glass card-hover rounded-2xl p-8 text-center">
              <h1 className="text-4xl font-bold">SaaS pricing that scales with you</h1>
              <p className="mt-2 text-muted-foreground">
                We offer usage‑based pricing tailored to your requirements. Share your use case, channels, volumes, and integrations — we’ll design a plan that fits today and scales tomorrow.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="premium" size="lg" className="hover-lift">
                  Request Quote
                </Button>
                <Button variant="hero" size="lg" className="hover-lift">
                  Talk to Sales
                </Button>
              </div>
            </article>
          </section>
        </Reveal>
      </main>
    </div>
  );
};

export default Pricing;


