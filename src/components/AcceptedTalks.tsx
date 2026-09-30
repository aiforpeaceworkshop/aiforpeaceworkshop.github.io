import { ACCEPTED_TALKS, CURRENT_EDITION } from "@/data/site";
import { ChevronDown } from "lucide-react";

export function AcceptedTalks() {
  return (
    <section id="accepted-talks" className="section-tight border-y-2 border-border bg-paper">
      <div className="mx-auto max-w-6xl px-5">
        <div className="section-heading-label">
          <span className="section-index" aria-hidden="true">05</span>
          <span className="section-kicker">Contributed presentations · {CURRENT_EDITION.venue}</span>
          <span className="pixel-rule-sm h-[3px] flex-1 text-line" />
        </div>
        <details className="group">
          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <h2 className="text-2xl leading-tight tracking-tight sm:text-3xl">Accepted talks.</h2>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="group-open:hidden">View accepted talks</span>
              <span className="hidden group-open:inline">Hide accepted talks</span>
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
            </span>
          </summary>
          <ol className="mt-6 grid gap-x-8 md:grid-cols-2" role="list">
            {ACCEPTED_TALKS.map((talk) => (
              <li key={talk.title} className="border-t border-line py-4">
                <h3 className="text-base leading-snug tracking-tight">{talk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{talk.authors}</p>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
