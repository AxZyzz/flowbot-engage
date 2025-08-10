import React from "react";
import { Check } from "lucide-react";
import flowDiagram from "@/assets/flow-diagram.jpg";
import Reveal from "@/components/Reveal";

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={14} /></span><span>{children}</span></li>
);

const ServiceShowcase: React.FC = () => {
  return (
    <section id="solutions" aria-label="Solutions" className="mx-auto max-w-6xl space-y-24">
      {/* WhatsApp engagement */}
      <Reveal>
        <article className="feature-card rounded-2xl p-6 md:p-8 grid items-center gap-8 md:gap-12 md:grid-cols-2 card-hover sweep-glow-left overflow-hidden">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Engage customers on WhatsApp</h2>
            <p className="text-muted-foreground leading-relaxed">Broadcast campaigns, trigger smart replies, and handle support automatically while your team focuses on growth.</p>
            <ul className="space-y-2">
              <Bullet>98% open rates with rich messages</Bullet>
              <Bullet>Quick replies and payment-enabled flows</Bullet>
              <Bullet>CRM logging for every conversation</Bullet>
            </ul>
          </div>
          <figure className="flex items-center justify-center">
            <img
              src="/ui.png"
              alt="WhatsApp chatbot UI"
              loading="lazy"
              className="w-full max-w-[640px]"
            />
          </figure>
        </article>
      </Reveal>

      {/* Visual flow builder */}
      <Reveal>
        <article className="feature-card rounded-2xl p-6 md:p-8 grid items-center gap-8 md:gap-12 md:grid-cols-2 card-hover sweep-glow-right overflow-hidden">
          <figure className="order-last glass rounded-2xl p-3 md:order-first card-hover">
            <img
              src={flowDiagram}
              alt="Automation flow builder with Smart Delay, Randomizer, and message branches"
              loading="lazy"
              className="w-full rounded-xl shadow"
            />
          </figure>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Automate journeys with visual flows</h2>
            <p className="mt-3 text-muted-foreground">Design powerful, multi-branch automations for calls and chats—no code needed. Launch in minutes and iterate fast.</p>
            <ul className="mt-6 space-y-2">
              <Bullet>Drag-and-drop builder for bots and campaigns</Bullet>
              <Bullet>Multi-channel: Calls, WhatsApp, Website, Telegram</Bullet>
              <Bullet>Detailed analytics and conversion tracking</Bullet>
            </ul>
          </div>
        </article>
      </Reveal>
    </section>
  );
};

export default ServiceShowcase;
