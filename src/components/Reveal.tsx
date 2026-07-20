import type { ReactNode } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("fade-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
