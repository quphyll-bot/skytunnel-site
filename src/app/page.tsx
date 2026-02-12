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
    title: "Сверхнизкий пинг в играх",
    description:
      "Ускоритель маршрутов автоматически выбирает самый быстрый путь и снижает задержки.",
    icon: Gauge,
  },
  {
    title: "Стабильное защищённое соединение",
    description:
      "Многоуровневое шифрование и умные правила доступа держат канал чистым и быстрым.",
    icon: ShieldCheck,
  },
  {
    title: "Работает на всех устройствах",
    description:
      "Единый приватный канал для компьютеров, телефонов и планшетов — без лишней настройки.",
    icon: Globe2,
  },
];

const steps = [
  {
    title: "Выбери регион",
    description: "Подберём оптимальную точку ускорения по скорости и стабильности.",
    icon: Radio,
  },
  {
    title: "Подключи устройства",
    description: "Создай защищённый туннель и подключайся в один тап.",
    icon: Fingerprint,
  },
  {
    title: "Управляй скоростью",
    description: "Контроль трафика, диагностика и автоматизация в одном центре.",
    icon: Sparkles,
  },
];

const pricing = [
  {
    name: "Pulse",
    price: "399₽",
    description: "Идеально для личного ускорителя и приватного канала.",
    perks: ["3 устройства", "Умная маршрутизация", "Диагностика сессий"],
  },
  {
    name: "Orbit",
    price: "799₽",
    description: "Для тех, кто хочет стабильность везде и всегда.",
    perks: ["10 устройств", "Общий контроль", "Приоритетные линии"],
    badge: "Хит",
  },
  {
    name: "Nova",
    price: "1490₽",
    description: "Максимальная скорость и продвинутые правила доступа.",
    perks: ["Безлимит устройств", "Выделенные узлы", "24/7 поддержка"],
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
              SKYTUNNEL • Ускоритель
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Интернет на сверхзвуковой скорости
            </h1>
            <p className="text-base text-slate-300 md:text-lg">
              Забудь о лагах, высоком пинге и медленной загрузке. Стабильный доступ к
              любимым сервисам и играм через защищённый приватный канал.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/setup">
                Ускорить интернет <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/login" variant="outline">
                Войти
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <div>
                <p className="text-white">120+</p>
                <p className="text-xs uppercase tracking-[0.2em]">Узлов</p>
              </div>
              <div>
                <p className="text-white">99.99%</p>
                <p className="text-xs uppercase tracking-[0.2em]">Аптайм</p>
              </div>
              <div>
                <p className="text-white">24/7</p>
                <p className="text-xs uppercase tracking-[0.2em]">Контроль</p>
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
              eyebrow="Подключение"
              title="Быстрый старт за минуты"
              description="Запуск ускорения — за несколько простых шагов и без лишней ручной настройки."
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
              eyebrow="Контроль"
              title="Центр управления ускорением"
              description="Смотри статистику, управляй потоками и автоматизируй правила — всё в одном месте."
            />
            <div className="grid gap-5">
              <GlowCard className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan">Телеметрия</p>
                <p className="text-lg font-semibold">Живые метрики скорости</p>
                <p className="text-sm text-slate-300">
                  Контроль пинга, джиттера и качества каналов в реальном времени.
                </p>
              </GlowCard>
              <GlowCard className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan">Политики</p>
                <p className="text-lg font-semibold">Гибкие правила доступа</p>
                <p className="text-sm text-slate-300">
                  Настраивай приватные каналы под устройства и задачи без лишней сложности.
                </p>
              </GlowCard>
            </div>
          </Container>
        </section>

        <section id="pricing" className="py-16">
          <Container className="grid gap-10">
            <SectionHeading
              eyebrow="Тарифы"
              title="Планы под любую нагрузку"
              description="Выбери нужную скорость и масштабируйся в один клик."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {pricing.map((plan) => (
                <GlowCard key={plan.name} className="flex h-full flex-col">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan">{plan.name}</p>
                      {plan.badge ? (
                        <span className="rounded-full bg-neon.pink/20 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-neon.pink">
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-3xl font-semibold">
                      {plan.price}
                      <span className="text-sm text-slate-400">/мес</span>
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
                  <Button className="mt-6">Выбрать {plan.name}</Button>
                </GlowCard>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <Container className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 SKYTUNNEL. Все права защищены.</p>
          <div className="flex gap-4">
            <a className="transition hover:text-white" href="/login">
              Войти
            </a>
            <a className="transition hover:text-white" href="/setup">
              Подключение
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
