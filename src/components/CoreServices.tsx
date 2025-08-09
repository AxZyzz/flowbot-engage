import React from "react";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import aiCall from "@/assets/ai-call.jpg";
import whatsapp from "@/assets/whatsapp-real.jpg";
import webChat from "@/assets/website-chat.jpg";
import webDesign from "@/assets/web-design.jpg";
import telegram from "@/assets/telegram-bot.jpg";

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-2 text-sm text-muted-foreground">
    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={14} /></span>
    <span>{children}</span>
  </li>
);

const CoreServices: React.FC = () => {
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
    <section id="core-services" aria-label="Core services" className="mx-auto max-w-6xl space-y-10">
      <header className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Core Capabilities</h2>
        <p className="mt-2 text-muted-foreground">Lowcode is a SaaS platform delivering high‑impact automation with real results.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
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
                  {s.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
