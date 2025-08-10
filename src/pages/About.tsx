import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Check, Star } from "lucide-react";

type UseCaseKey = "Support" | "Sales" | "Marketing" | "Healthcare" | "Real Estate";

const About: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState<UseCaseKey>("Support");
  const [integrationQuery, setIntegrationQuery] = useState("");

  const [roiInputs, setRoiInputs] = useState({
    monthlyLeads: 500,
    teamSize: 5,
    avgResponseMins: 60,
  });

  const roi = useMemo(() => {
    const baseConvRate = 0.05; // 5%
    const improvementFactor = Math.min(2.1, 1 + Math.max(0, (60 - Math.min(roiInputs.avgResponseMins, 60)) / 100));
    const conversions = Math.round(roiInputs.monthlyLeads * baseConvRate * improvementFactor);
    const savedHours = Math.round((roiInputs.teamSize * 10 * improvementFactor));
    const estimatedCostSaved = savedHours * 25; // $25/hour equivalent
    return { conversions, savedHours, estimatedCostSaved };
  }, [roiInputs]);

  const useCases: Record<UseCaseKey, { outcomes: string[]; proof: string }> = {
    Support: {
      outcomes: [
        "24/7 instant replies",
        "Deflect repetitive queries",
        "Seamless live‑agent handoff",
      ],
      proof: "−38% average response time",
    },
    Sales: {
      outcomes: ["Qualify leads automatically", "Book meetings on the spot", "Route by region/ICP"],
      proof: "+27% qualified leads",
    },
    Marketing: {
      outcomes: ["Capture visitors with playbooks", "Broadcasts & triggers", "Attribution & analytics"],
      proof: "2.1x ROI in 60 days",
    },
    Healthcare: {
      outcomes: ["Scheduling & reminders", "HIPAA‑aware flows", "Multilingual triage"],
      proof: "<1 hr to first bot",
    },
    "Real Estate": {
      outcomes: ["Lead capture & nurture", "Property discovery", "Calendar sync"],
      proof: "+19% show‑up rate",
    },
  };

  const integrations = [
    { name: "CRM", tag: "crm" },
    { name: "Calendars", tag: "calendar" },
    { name: "WhatsApp", tag: "whatsapp" },
    { name: "Telegram", tag: "telegram" },
    { name: "Web Chat", tag: "web" },
    { name: "Email", tag: "email" },
    { name: "Stripe", tag: "payments" },
    { name: "Zapier", tag: "automation" },
  ];

  const filteredIntegrations = integrations.filter((i) =>
    i.name.toLowerCase().includes(integrationQuery.toLowerCase().trim())
  );

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

      <main className="container mx-auto space-y-20 pb-20">
        {/* Hero */}
        <Reveal>
          <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight">Launch AI call & chat bots that convert in days, not months.</h1>
              <p className="mt-3 text-muted-foreground">Low‑code automation for support, sales, and scheduling—integrated with your stack.</p>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
                <Button variant="premium" size="lg" className="hover-lift">Start Free</Button>
                <Button variant="hero" size="lg" className="hover-lift">Book a Demo</Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-xs text-muted-foreground">Rated 4.9/5</span>
                </div>
                <span>Trusted by 500+ teams</span>
                <span className="italic">“2.1x ROI in 60 days.”</span>
              </div>
            </div>
            <figure className="rounded-2xl bg-muted p-3">
              <img src="/ui.png" alt="Product UI preview" loading="lazy" className="w-full rounded-xl shadow" />
            </figure>
          </section>
        </Reveal>

        {/* Outcome metrics */}
        <Reveal>
          <section className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 rounded-2xl border p-6 text-center md:grid-cols-4">
              {["+27% qualified leads", "−38% response time", "2.1x ROI in 60 days", "<1 hr to first bot"].map((m) => (
                <div key={m} className="glass rounded-xl p-4">
                  <p className="font-semibold">{m}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Methodology available on request.</p>
          </section>
        </Reveal>

        {/* Product tour */}
        <section className="mx-auto max-w-6xl space-y-8">
          <header className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">What you can build</h2>
            <p className="mt-2 text-muted-foreground">No‑code building blocks for real outcomes.</p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "No‑code Builder", img: "/new.gif", desc: "Design flows visually and publish in minutes." },
              { title: "CRM & Calendar Integrations", img: "/image.png", desc: "Auto‑sync contacts and book meetings instantly." },
              { title: "Inbox & Analytics", img: "/message.jpg", desc: "Search conversations and track outcomes in one place." },
              { title: "Broadcasts & Triggers", img: "/call-bot.gif", desc: "Engage at the right time with targeted outreach." },
              { title: "Multilingual", img: "/ai-bot.jpg", desc: "Serve customers in their language automatically." },
            ].map((c) => (
              <Reveal key={c.title}>
                <article className="feature-card card-hover rounded-2xl p-6">
                  <figure className="mb-4 overflow-hidden rounded-xl">
                    <img src={c.img} alt={c.title} loading="lazy" className="w-full rounded-xl" />
                  </figure>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Interactive demo / sandbox */}
        <Reveal>
          <section className="mx-auto max-w-4xl">
            <article className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Try the bot</h3>
              <p className="mb-4 text-sm text-muted-foreground">Ask a question to see a sample response.</p>
              <DemoWidget />
            </article>
          </section>
        </Reveal>

        {/* Use cases by persona */}
        <Reveal>
          <section className="mx-auto max-w-6xl">
            <header className="mb-4 text-center">
              <h3 className="text-2xl font-bold">Use cases</h3>
            </header>
            <div className="flex flex-wrap justify-center gap-2">
              {(Object.keys(useCases) as UseCaseKey[]).map((k) => (
                <button
                  key={k}
                  aria-pressed={activeUseCase === k}
                  onClick={() => setActiveUseCase(k)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    activeUseCase === k ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border p-6">
              <ul className="space-y-2">
                {useCases[activeUseCase].outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={14} /></span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium">Proof: {useCases[activeUseCase].proof}</p>
            </div>
          </section>
        </Reveal>

        {/* Integrations */}
        <Reveal>
          <section className="mx-auto max-w-6xl space-y-4">
            <header className="text-center">
              <h3 className="text-2xl font-bold">Integrations</h3>
              <p className="text-muted-foreground">Don’t see yours? We can add it in days.</p>
            </header>
            <div className="mx-auto max-w-md">
              <Input
                placeholder="Search integrations"
                value={integrationQuery}
                onChange={(e) => setIntegrationQuery(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {filteredIntegrations.map((i) => (
                <div key={i.name} className="card-hover rounded-xl border p-4 text-center text-sm">
                  <div className="mx-auto mb-2 size-10 rounded-md bg-muted" />
                  {i.name}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Case studies & testimonials */}
        <Reveal>
          <section className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { logo: "Acme Health", metric: "−42% response time", quote: "We moved from weeks to hours." },
                { logo: "Nova Realty", metric: "+31% qualified leads", quote: "Appointments book themselves now." },
                { logo: "Orbital SaaS", metric: "2.3x ROI", quote: "Fast to launch, faster to value." },
              ].map((c) => (
                <article key={c.logo} className="feature-card rounded-2xl p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">{c.logo.split(" ").map((w) => w[0]).join("")}</div>
                    <span className="font-medium">{c.logo}</span>
                  </div>
                  <p className="text-sm font-semibold">{c.metric}</p>
                  <p className="mt-2 text-sm text-muted-foreground">“{c.quote}”</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ROI calculator */}
        <Reveal>
          <section className="mx-auto max-w-4xl">
            <article className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">ROI calculator</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Monthly leads</label>
                  <Input
                    type="number"
                    min={0}
                    value={roiInputs.monthlyLeads}
                    onChange={(e) => setRoiInputs((s) => ({ ...s, monthlyLeads: Number(e.target.value) }))}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Team size</label>
                  <Input
                    type="number"
                    min={1}
                    value={roiInputs.teamSize}
                    onChange={(e) => setRoiInputs((s) => ({ ...s, teamSize: Number(e.target.value) }))}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Avg response (mins)</label>
                  <Input
                    type="number"
                    min={0}
                    value={roiInputs.avgResponseMins}
                    onChange={(e) => setRoiInputs((s) => ({ ...s, avgResponseMins: Number(e.target.value) }))}
                  />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl border p-4 text-center sm:grid-cols-3">
                <div>
                  <p className="text-xs text-muted-foreground">Projected conversions/month</p>
                  <p className="text-lg font-semibold">{roi.conversions}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Hours saved/month</p>
                  <p className="text-lg font-semibold">{roi.savedHours}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Estimated cost saved</p>
                  <p className="text-lg font-semibold">${roi.estimatedCostSaved.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="premium" className="hover-lift">Email me the report</Button>
              </div>
            </article>
          </section>
        </Reveal>

        {/* Security & compliance */}
        <Reveal>
          <section className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {["SOC 2", "GDPR", "Encryption", "Data residency"].map((b) => (
                <div key={b} className="rounded-xl border p-4 text-center text-sm">
                  <p className="font-medium">{b}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">Your data, your control. Role‑based access and audit logs.</p>
          </section>
        </Reveal>

        {/* Pricing teaser */}
        <Reveal>
          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { name: "Starter", desc: "Get going fast", cta: "Start Free" },
                { name: "Growth", desc: "Scale with confidence", cta: "Choose Growth" },
                { name: "Enterprise", desc: "Advanced security & SLAs", cta: "Talk to Sales" },
              ].map((t) => (
                <article key={t.name} className="glass rounded-2xl p-6 text-center">
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  <div className="mt-4">
                    <Button variant="hero" className="hover-lift">{t.cta}</Button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Why us / Comparison */}
        <Reveal>
          <section className="mx-auto max-w-4xl">
            <h3 className="mb-3 text-2xl font-bold">Why teams choose Lowcode</h3>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {["Launch in days, not months", "Integrated analytics & inbox", "Native channels: calls, WhatsApp, web", "Done‑with‑you onboarding", "Secure by default", "Great support"].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={14} /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section className="mx-auto max-w-3xl">
            <h3 className="mb-3 text-2xl font-bold">FAQ</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger>How long does setup take?</AccordionTrigger>
                <AccordionContent>Most teams launch in under a week; first bot often goes live in under an hour.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Do you support our CRM and calendar?</AccordionTrigger>
                <AccordionContent>We integrate with major CRMs and calendars; custom integrations are typically added in days.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>What about data privacy?</AccordionTrigger>
                <AccordionContent>We follow best practices for security and compliance with options for data residency.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </Reveal>

        {/* Final CTA */}
        <Reveal>
          <section className="mx-auto max-w-4xl text-center">
            <h3 className="text-2xl font-bold">Automate calls and chats that convert—launch your first bot in under an hour.</h3>
            <p className="mt-2 text-muted-foreground">Teams see 2.1x ROI in 60 days on average.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="premium" size="lg" className="hover-lift">Start Free</Button>
              <Button variant="hero" size="lg" className="hover-lift">Book a Demo</Button>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
};

const DemoWidget: React.FC = () => {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! Ask me about automating your support or sales." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }, { role: "bot", text: "Thanks! A specialist will reach out with a tailored plan." }]);
    setInput("");
  };

  return (
    <div>
      <div className="max-h-56 overflow-auto rounded-xl border p-3 text-sm">
        <ul className="space-y-2">
          {messages.map((m, i) => (
            <li key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <span className={`inline-block max-w-[75%] rounded-xl px-3 py-2 ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                {m.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 flex gap-2">
        <Input
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />
        <Button onClick={send} className="hover-lift">Send</Button>
      </div>
    </div>
  );
};

export default About;


