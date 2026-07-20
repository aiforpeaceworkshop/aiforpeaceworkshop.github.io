import { ArrowUpRight, Check, FileText, Mic2, LayoutGrid } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SITE, CFP_TOPICS, CFP_TIMELINE, CURRENT_EDITION } from "@/data/site";
import { cn } from "@/lib/utils";

const FACTS = [
  { icon: FileText, label: "Abstract", value: "One page max" },
  { icon: LayoutGrid, label: "Formats", value: "Poster, talk, or both" },
  { icon: Mic2, label: "Review", value: "Single-blind" },
];

export function CallForPresentations() {
  return (
    <section id="call" className="section border-y-2 border-border bg-paper">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="§02"
          kicker={`Call for presentations · ${CURRENT_EDITION.venue}`}
          title="Call for in-person presentations."
        >
          Submit published work, new work, or work in progress on the topics
          below. Every accepted contribution will be presented as a poster.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: facts + topics */}
          <div className="lg:col-span-7">
            <Reveal className="grid gap-4 sm:grid-cols-3">
              {FACTS.map((f) => (
                <div key={f.label} className="ink-card p-4">
                  <f.icon className="h-5 w-5 text-accent" />
                  <p className="kicker mt-3 text-muted-foreground">{f.label}</p>
                  <p className="mt-1 font-sans text-sm font-semibold">{f.value}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-8" delay={60}>
              <h3 className="font-sans text-lg font-semibold tracking-tight">
                Topics of interest
              </h3>
              <ul className="mt-4 space-y-3">
                {CFP_TOPICS.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/90 sm:text-base">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: timeline + CTA */}
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <div className="ink-card ink-card-accent overflow-hidden">
                <div className="border-b-2 border-border bg-ink px-5 py-3">
                  <span className="font-pixel text-[0.55rem] text-background">
                    TIMELINE
                  </span>
                </div>
                <ol className="divide-y divide-line">
                  {CFP_TIMELINE.map((item) => (
                    <li
                      key={item.event}
                      className={cn(
                        "flex items-center justify-between gap-3 px-5 py-4",
                        item.highlight && "bg-accent/10",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "grid h-5 w-5 place-items-center rounded-full border-2 text-[0.6rem]",
                            item.done
                              ? "border-accent bg-accent text-accent-foreground"
                              : item.highlight
                                ? "border-accent text-accent"
                                : "border-line text-transparent",
                          )}
                        >
                          {item.done && <Check className="h-3 w-3" />}
                        </span>
                        <span
                          className={cn(
                            "font-sans text-sm",
                            item.highlight ? "font-bold" : "font-medium",
                          )}
                        >
                          {item.event}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        {item.date}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="border-t-2 border-border p-5">
                  <a
                    href={SITE.submissionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-accent w-full"
                  >
                    Submit an abstract <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
                    Submit via the workshop form
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
