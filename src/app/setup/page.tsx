"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FormField } from "@/components/FormField";
import { GlowCard } from "@/components/GlowCard";

const zones = ["North America", "Europe", "Middle East", "Asia Pacific"];
const plans = ["Pulse", "Orbit", "Nova"];

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#0f1528_0%,#070910_75%)] text-white">
      <Container className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-5xl gap-8"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan/70">Quick setup</p>
            <h1 className="text-3xl font-semibold md:text-4xl">Activate your private tunnel</h1>
            <p className="text-sm text-slate-300 md:text-base">
              Create a secure profile, select your zone, and launch in minutes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <GlowCard className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <Zap className="h-5 w-5 text-neon.cyan" />
                </div>
                <h2 className="text-xl font-semibold">Profile details</h2>
              </div>
              <div className="grid gap-4">
                <FormField label="Full name" placeholder="Sky Operator" />
                <FormField label="Work email" placeholder="operator@skytunnel.io" type="email" />
                <FormField label="Device label" placeholder="Studio MacBook" />
              </div>
              <Button className="w-full">Continue</Button>
            </GlowCard>

            <div className="grid gap-6">
              <GlowCard className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                    <MapPin className="h-5 w-5 text-neon.pink" />
                  </div>
                  <h2 className="text-xl font-semibold">Preferred zone</h2>
                </div>
                <div className="grid gap-3">
                  {zones.map((zone) => (
                    <label
                      key={zone}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    >
                      <span>{zone}</span>
                      <input type="radio" name="zone" className="h-4 w-4" />
                    </label>
                  ))}
                </div>
              </GlowCard>

              <GlowCard className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                    <CheckCircle2 className="h-5 w-5 text-neon.cyan" />
                  </div>
                  <h2 className="text-xl font-semibold">Select plan</h2>
                </div>
                <div className="grid gap-3">
                  {plans.map((plan) => (
                    <label
                      key={plan}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    >
                      <span>{plan}</span>
                      <input type="radio" name="plan" className="h-4 w-4" />
                    </label>
                  ))}
                </div>
                <Button className="w-full">Activate access</Button>
              </GlowCard>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
