import { cn } from "@/lib/utils";

export function BrandWordmark({
  className,
  label = "AI for Peace",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={cn("brand-wordmark", className)}
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <span className="brand-wordmark-pacman-shadow" aria-hidden="true" />
      <span className="brand-wordmark-first-dot" aria-hidden="true" />
    </span>
  );
}
