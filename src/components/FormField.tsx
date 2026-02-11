import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
};

export function FormField({ label, placeholder, type = "text", className }: FormFieldProps) {
  return (
    <label className={cn("flex flex-col gap-2 text-sm text-slate-200", className)}>
      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-neon.cyan/60 focus:ring-2 focus:ring-neon.cyan/20"
      />
    </label>
  );
}
