import { ArrowUpRight } from "lucide-react";
import type { Person } from "@/data/site";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function PersonCard({
  person,
  className,
}: {
  person: Person;
  className?: string;
}) {
  const inner = (
    <>
      <div className="relative aspect-square overflow-hidden border-b-2 border-border bg-muted">
        {person.img ? (
          <img
            src={person.img}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="dot-grid grid h-full w-full place-items-center bg-muted">
            <span className="font-display text-5xl font-bold text-muted-foreground/70">
              {initials(person.name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        {person.role && (
          <p className="mb-1 font-mono text-[0.62rem] font-bold uppercase tracking-widest text-alert">
            {person.role}
          </p>
        )}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-sans text-base font-semibold leading-tight tracking-tight">
            {person.name}
          </h3>
          {person.webpage && (
            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
          )}
        </div>
        {person.affil && (
          <p className="font-mono text-xs leading-snug text-muted-foreground">
            {person.affil}
          </p>
        )}
        {person.topic && (
          <p className="mt-2 border-t border-line pt-2 text-sm italic leading-snug text-foreground/80">
            “{person.topic}”
          </p>
        )}
      </div>
    </>
  );

  const base = cn(
    "ink-card ink-card-hover group flex h-full flex-col overflow-hidden",
    className,
  );

  return person.webpage ? (
    <a href={person.webpage} target="_blank" rel="noreferrer" className={base}>
      {inner}
    </a>
  ) : (
    <div className={base}>{inner}</div>
  );
}
