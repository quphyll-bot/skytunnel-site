import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
};

export function Button({ href, children, className, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-300";
  const variants = {
    primary:
      "bg-gradient-to-r from-neon.cyan via-neon.blue to-neon.violet text-slate-950 shadow-glow hover:shadow-glow-strong",
    ghost: "text-slate-200 hover:text-white",
    outline:
      "border border-white/20 text-white/80 hover:border-white/40 hover:text-white",
  };

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} type="button">
      {children}
    </button>
  );
}
