import { ACCEPTED_TALKS, CURRENT_EDITION } from "@/data/site";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function AcceptedTalks() {
  return (
    <section id="accepted-talks" className="section-tight border-y-2 border-border bg-paper">
      <div className="mx-auto max-w-6xl px-5">
        <div className="section-heading-label">
          <span className="section-index" aria-hidden="true">04</span>
          <span className="section-kicker">Contributed presentations · {CURRENT_EDITION.venue}</span>
          <span className="pixel-rule-sm h-[3px] flex-1 text-line" />
        </div>
        <details className="group">
          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <h2 className="text-2xl leading-tight tracking-tight sm:text-3xl">Accepted talks.</h2>
            <span className="inline-flex items-center gap-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
              <span className="group-open:hidden">View accepted talks</span>
              <span className="hidden group-open:inline">Hide accepted talks</span>
              <ChevronDown className="h-3.5 w-3.5 text-alert transition-transform group-open:rotate-180" aria-hidden="true" />
            </span>
          </summary>
          <ol className="mt-7 grid gap-x-10 md:grid-cols-2" role="list">
            {ACCEPTED_TALKS.map((talk, index) => (
              <li key={talk.title} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 border-t border-line py-5 sm:gap-4">
                <span className="pt-0.5 font-mono text-[0.65rem] text-muted-foreground" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-col items-start">
                  <h3 className="text-base font-semibold leading-snug tracking-tight">{talk.title}</h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">{talk.authors}</p>
                  {talk.resource && (
                    <a
                      href={talk.resource.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${talk.resource.label}: ${talk.title} (opens in a new tab)`}
                      className="mt-3 inline-flex items-center gap-1 border-b border-alert/30 pb-0.5 font-mono text-[0.65rem] text-alert transition-colors hover:border-alert"
                    >
                      {talk.resource.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
