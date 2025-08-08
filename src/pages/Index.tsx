import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ServiceShowcase from "@/components/ServiceShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto flex items-center justify-between py-6">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Flowbot <span className="text-primary">Engage</span>
        </a>
        <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="#features">Features</a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="#pricing">Pricing</a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="hero" className="hover-lift">Book a Demo</Button>
          <Button variant="premium" className="hover-lift">Start Free</Button>
        </div>
      </header>

      <main className="container mx-auto space-y-20 pb-20">
        <Hero />
        <ServiceShowcase />

        <section id="features" className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold">Why teams choose Flowbot</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">A single platform to automate calls, chats, and web conversions with high‑quality AI and seamless integrations.</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["No-code bot builder","CRM & Calendar Integrations","Analytics & Inbox"].map((t,i)=> (
              <div key={i} className="glass rounded-xl p-6">
                <div className="mb-3 inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary"><Check/></div>
                <h3 className="font-semibold">{t}</h3>
                <p className="text-sm text-muted-foreground">Everything you need to launch fast and scale confidently.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-4xl">
          <article className="glass rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-2 text-muted-foreground">Pay as you grow. Flexible add‑ons for voice minutes, WhatsApp sessions, and team seats.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="premium" size="lg" className="hover-lift">Start Free</Button>
              <Button variant="hero" size="lg" className="hover-lift">Talk to Sales</Button>
            </div>
          </article>
        </section>
      </main>

      <footer id="contact" className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Flowbot Engage</p>
          <nav className="flex gap-6 text-sm text-muted-foreground" aria-label="Footer navigation">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
