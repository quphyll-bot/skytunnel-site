"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FormField } from "@/components/FormField";
import { GlowCard } from "@/components/GlowCard";

const zones = ["Северная Америка", "Европа", "Ближний Восток", "Азия"];
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
            <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan/70">Подключение</p>
            <h1 className="text-3xl font-semibold md:text-4xl">Как подключить ускорение?</h1>
            <p className="text-sm text-slate-300 md:text-base">
              Создай профиль, выбери регион и запусти приватный канал за пару минут.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <GlowCard className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <Zap className="h-5 w-5 text-neon.cyan" />
                </div>
                <h2 className="text-xl font-semibold">Данные профиля</h2>
              </div>
              <div className="grid gap-4">
                <FormField label="Имя" placeholder="Sky Operator" />
                <FormField label="Email" placeholder="operator@skytunnel.io" type="email" />
                <FormField label="Устройство" placeholder="MacBook / Android" />
              </div>
              <Button className="w-full">Продолжить</Button>
            </GlowCard>

            <div className="grid gap-6">
              <GlowCard className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                    <MapPin className="h-5 w-5 text-neon.pink" />
                  </div>
                  <h2 className="text-xl font-semibold">Предпочитаемый регион</h2>
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
                  <h2 className="text-xl font-semibold">Выбери тариф</h2>
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
                <Button className="w-full">Активировать доступ</Button>
              </GlowCard>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
