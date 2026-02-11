import { cn } from "@/lib/utils";

type GlowCardProps = {
  className?: string;
  children: React.ReactNode;
};

export function GlowCard({ className, children }: GlowCardProps) {
  return (
    <div
      className={cn(
        "glass relative rounded-3xl border border-white/10 p-6 shadow-[0_0_40px_rgba(52,245,255,0.12)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(52,245,255,0.18),transparent_60%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
