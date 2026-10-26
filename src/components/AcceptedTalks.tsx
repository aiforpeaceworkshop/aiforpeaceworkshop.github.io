import { ACCEPTED_TALKS, CURRENT_EDITION } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function AcceptedTalks() {
  return (
    <section id="accepted-talks" className="section-tight border-y-2 border-border bg-paper">
      <div className="mx-auto max-w-6xl px-5">
        <div className="section-heading-label">
          <span className="section-index" aria-hidden="true">04</span>
          <span className="section-kicker">Contributed presentations · {CURRENT_EDITION.venue}</span>
          <span className="pixel-rule-sm h-[3px] flex-1 text-line" />
        </div>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-section section-title">Talks &amp; posters.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From humanitarian mapping and testimony archives to de-escalation
              and accountability: research on AI, conflict, and peace.
            </p>
          </div>
          <span className="chip chip-solid">{ACCEPTED_TALKS.length} contributions</span>
        </div>
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
                      className="mt-3 inline-flex items-center gap-1 border-b border-alert/30 pb-0.5 font-mono text-xs text-alert transition-colors hover:border-alert"
                    >
                      {talk.resource.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
      </div>
    </section>
  );
}
