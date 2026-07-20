import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  kicker,
  title,
  className,
  children,
}: {
  index?: string;
  kicker: string;
  title: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("section-heading mb-10 md:mb-12", className)}>
      <div className="section-heading-label">
        {index && (
          <span className="section-index" aria-hidden>
            {index.replace("§", "")}
          </span>
        )}
        <span className="section-kicker">{kicker}</span>
        <span className="pixel-rule-sm h-[3px] flex-1 text-line" />
      </div>
      <h2 className="text-section section-title max-w-[20ch]">{title}</h2>
      {children && (
        <div className="mt-4 max-w-2xl text-muted-foreground">{children}</div>
      )}
    </div>
  );
}
