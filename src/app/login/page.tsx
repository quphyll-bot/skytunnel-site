"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FormField } from "@/components/FormField";
import { GlowCard } from "@/components/GlowCard";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#12172c_0%,#070910_70%)] text-white">
      <Container className="flex min-h-screen flex-col items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <GlowCard className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <ShieldCheck className="h-5 w-5 text-neon.cyan" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Welcome back</p>
                <h1 className="text-2xl font-semibold">Sign in to SKYTUNNEL</h1>
              </div>
            </div>

            <div className="grid gap-4">
              <FormField label="Email" placeholder="you@skytunnel.io" type="email" />
              <FormField label="Access key" placeholder="••••••••" type="password" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/5" />
                Keep me signed in
              </label>
              <button className="text-neon.cyan/80 hover:text-neon.cyan" type="button">
                Need help?
              </button>
            </div>

            <Button className="w-full">Enter dashboard</Button>
            <p className="text-center text-xs text-slate-400">
              New here? <a className="text-neon.cyan" href="/setup">Start setup</a>
            </p>
          </GlowCard>
        </motion.div>
      </Container>
    </div>
  );
}
