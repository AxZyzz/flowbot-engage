import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const Contact = () => {
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
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="hero" className="hover-lift">Book a Demo</Button>
          <Button variant="premium" className="hover-lift">Start Free</Button>
        </div>
      </header>

      <main className="container mx-auto space-y-12 py-16">
        <Reveal>
          <section id="contact" className="mx-auto max-w-3xl text-center">
            <article className="glass rounded-2xl p-10">
              <h1 className="text-4xl font-bold">Contact us</h1>
              <p className="mt-3 text-muted-foreground">
                We'd love to learn about your goals and requirements. Share a few details and our team will reach out with the best next steps.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="premium" size="lg" className="hover-lift">Talk to Sales</Button>
                <Button variant="hero" size="lg" className="hover-lift">Start Free</Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Or email us at <a className="underline hover:no-underline" href="mailto:hello@lowcode.com">hello@lowcode.com</a></p>
            </article>
          </section>
        </Reveal>
      </main>
    </div>
  );
};

export default Contact;


