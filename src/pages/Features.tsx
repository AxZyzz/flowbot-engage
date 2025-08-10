import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import webChat from "@/assets/website-chat.jpg";
import webDesign from "@/assets/web-design.jpg";
import telegram from "@/assets/telegram-bot.jpg";

const Features = () => {
  const items = [
    "No-code bot builder",
    "CRM & Calendar Integrations",
    "Analytics & Inbox",
  ];

  const services = [
    {
      title: "AI Call Bots",
      image: "/call-bot.gif",
      bullets: [
        "Automated appointment booking",
        "Feedback and survey calls",
        "Follow-ups & reminders",
        "Multilingual support",
        "CRM logging for every call",
      ],
      alt: "AI call bot making automated appointment booking calls",
    },
    {
      title: "WhatsApp Chatbots",
      image: "/ai-bot.jpg",
      bullets: [
        "24/7 customer support",
        "Lead gen & qualification",
        "Broadcast campaigns",
        "Order tracking & instant replies",
        "Payments in chat",
      ],
      alt: "WhatsApp chatbot conversation with quick replies and payments",
    },
    {
      title: "Website Chatbots",
      image: webChat,
      bullets: [
        "Convert visitors into customers",
        "Automated FAQs & live takeover",
        "Personalized recommendations",
        "Lead form automation",
        "Works with any CMS",
      ],
      alt: "Website chatbot widget assisting a visitor on a modern website",
    },
    {
      title: "Custom Web Design",
      image: webDesign,
      bullets: [
        "Responsive, mobile-first",
        "SEO optimization",
        "Full bot integration",
        "E-commerce store setup",
        "Analytics dashboards",
      ],
      alt: "Designers collaborating on a responsive website UI",
    },
    {
      title: "Telegram Bot Development",
      image: telegram,
      bullets: [
        "Automated community management",
        "Lead generation from channels",
        "Customer support via Telegram",
        "Content scheduling",
        "Payments & CRM integrations",
      ],
      alt: "Telegram bot assisting a user inside a messaging app",
    },
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

        <section className="mx-auto max-w-6xl space-y-8">
          <header className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Core Capabilities</h2>
            <p className="mt-2 text-muted-foreground">Production‑ready building blocks for calls, chats, and conversions.</p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Reveal key={s.title}>
                <article className="glass card-hover rounded-2xl overflow-hidden">
                  <figure className="p-3">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className="w-full rounded-xl shadow"
                    />
                  </figure>
                  <div className="px-6 pb-6">
                    <h3 className="font-semibold">{s.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {s.bullets.slice(0, 4).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={14} /></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;


