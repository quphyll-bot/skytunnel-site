"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Radio,
  Gauge,
  Globe2,
  Sparkles,
  Fingerprint,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeading } from "@/components/SectionHeading";
import { NavBar } from "@/components/NavBar";

const features = [
  {
    title: "Private access, global scale",
    description:
      "Route through ultra-low latency gateways with automatic path selection and zero-touch optimization.",
    icon: Globe2,
  },
  {
    title: "Always-on protection",
    description:
      "Multi-layer encryption, adaptive threat detection, and instant key rotation keep every session clean.",
    icon: ShieldCheck,
  },
  {
    title: "Turbo performance",
    description:
      "Smart compression and AI acceleration deliver peak speeds for work, play, and streaming.",
    icon: Gauge,
  },
];

const steps = [
  {
    title: "Pick a zone",
    description: "Select a region tuned for speed, stability, and local compliance.",
    icon: Radio,
  },
  {
    title: "Link your devices",
    description: "Create a secure tunnel that follows you across every screen.",
    icon: Fingerprint,
  },
  {
    title: "Stay in control",
    description: "Monitor sessions, throttle traffic, and automate access rules.",
    icon: Sparkles,
  },
];

const pricing = [
  {
    name: "Pulse",
    price: "$6",
    description: "For solo creators and founders who need privacy on the go.",
    perks: ["3 devices", "Smart routing", "Session insights"],
  },
  {
    name: "Orbit",
    price: "$12",
    description: "For teams syncing across time zones with shared control.",
    perks: ["10 devices", "Shared workspaces", "Priority lanes"],
  },
  {
    name: "Nova",
    price: "$22",
    description: "For high-throughput operations and advanced policy control.",
    perks: ["Unlimited devices", "Dedicated gateways", "24/7 concierge"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#11162a_0%,#070910_65%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-mesh-neon opacity-70" />
      <NavBar />

      <main className="relative">
        <Container className="grid gap-14 pb-16 pt-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neon.cyan/80">
              <Sparkles className="h-4 w-4" />
              SkyTunnel Core
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Private access that feels like a neon dream.
            </h1>
            <p className="text-base text-slate-300 md:text-lg">
              SKYTUNNEL blends performance, control, and cinematic design into a secure tunnel that keeps you online, focused, and protected.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/setup">
                Launch setup <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/login" variant="outline">
                View dashboard
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <div>
                <p className="text-white">120+</p>
                <p className="text-xs uppercase tracking-[0.2em]">Gateways</p>
              </div>
              <div>
                <p className="text-white">99.99%</p>
                <p className="text-xs uppercase tracking-[0.2em]">Uptime</p>
              </div>
              <div>
                <p className="text-white">24/7</p>
                <p className="text-xs uppercase tracking-[0.2em]">Command</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-5"
          >
            {features.map((feature) => (
              <GlowCard key={feature.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon.cyan/40 to-neon.violet/40">
                  <feature.icon className="h-5 w-5 text-neon.cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-slate-300">{feature.description}</p>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </Container>

        <section id="flow" className="py-16">
          <Container className="grid gap-10">
            <SectionHeading
              eyebrow="Flow"
              title="A setup flow that glows"
              description="Go from zero to protected in minutes with guided flows and instant diagnostics."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-3xl p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    <step.icon className="h-5 w-5 text-neon.pink" />
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="controls" className="py-16">
          <Container className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
            <SectionHeading
              eyebrow="Controls"
              title="Your command center"
              description="Visualize every session, deploy automation, and let the neural router handle the rest."
            />
            <div className="grid gap-5">
              <GlowCard className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan">Realtime map</p>
                <p className="text-lg font-semibold">Adaptive routing with live telemetry</p>
                <p className="text-sm text-slate-300">
                  Track latency, jitter, and packet health for every lane with full visibility.
                </p>
              </GlowCard>
              <GlowCard className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan">Policy engine</p>
                <p className="text-lg font-semibold">Granular access rules</p>
                <p className="text-sm text-slate-300">
                  Build custom policies for devices, apps, and schedules without touching a line of code.
                </p>
              </GlowCard>
            </div>
          </Container>
        </section>

        <section id="pricing" className="py-16">
          <Container className="grid gap-10">
            <SectionHeading
              eyebrow="Pricing"
              title="Plans that scale with you"
              description="Select the plan that fits your velocity. Upgrade or pause anytime."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {pricing.map((plan) => (
                <GlowCard key={plan.name} className="flex h-full flex-col">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan">{plan.name}</p>
                    <p className="text-3xl font-semibold">
                      {plan.price}
                      <span className="text-sm text-slate-400">/mo</span>
                    </p>
                    <p className="text-sm text-slate-300">{plan.description}</p>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-300">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon.cyan" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6">Choose {plan.name}</Button>
                </GlowCard>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <Container className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 SKYTUNNEL. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="transition hover:text-white" href="/login">
              Account
            </a>
            <a className="transition hover:text-white" href="/setup">
              Setup
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
