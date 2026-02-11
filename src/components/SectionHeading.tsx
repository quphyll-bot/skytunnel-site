import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs uppercase tracking-[0.3em] text-neon.cyan/70">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-sm text-slate-300 md:text-base">{description}</p> : null}
    </div>
  );
}
