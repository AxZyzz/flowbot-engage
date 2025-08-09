import React from "react";
import { Check } from "lucide-react";
import whatsappImage from "@/assets/whatsapp-showcase.jpg";
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
        <article className="grid items-center gap-10 md:grid-cols-2 card-hover">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Engage customers on WhatsApp</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Broadcast campaigns, trigger smart replies, and handle support automatically while your team focuses on growth.</p>
            <ul className="mt-6 space-y-2">
              <Bullet>98% open rates with rich messages</Bullet>
              <Bullet>Quick replies and payment-enabled flows</Bullet>
              <Bullet>CRM logging for every conversation</Bullet>
            </ul>
          </div>
          <figure className="glass rounded-2xl p-3 card-hover">
            <img
              src={whatsappImage}
              alt="Realistic WhatsApp chatbot showcasing quick reply options and rich messages"
              loading="lazy"
              className="w-full rounded-xl shadow"
            />
          </figure>
        </article>
      </Reveal>

      {/* Visual flow builder */}
      <Reveal>
        <article className="grid items-center gap-10 md:grid-cols-2 card-hover">
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
