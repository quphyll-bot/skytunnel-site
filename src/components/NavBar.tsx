import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Sparkles } from "lucide-react";

export function NavBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neon.cyan to-neon.violet shadow-glow">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-[0.25em]">SKYTUNNEL</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#flow">
            Подключение
          </a>
          <a className="transition hover:text-white" href="#controls">
            Контроль
          </a>
          <a className="transition hover:text-white" href="#pricing">
            Тарифы
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/login" variant="ghost" className="hidden md:inline-flex">
            Войти
          </Button>
          <Button href="/setup">Начать</Button>
        </div>
      </Container>
    </header>
  );
}
