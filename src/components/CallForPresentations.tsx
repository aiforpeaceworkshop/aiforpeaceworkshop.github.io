import { ArrowUpRight, Check, X, FileText, Mic2, LayoutGrid } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SITE, CFP_TOPICS, CFP_EXCLUSIONS, CFP_POSITION, CURRENT_EDITION } from "@/data/site";
import { CFP_TIMELINE, WORKSHOP_SCHEDULE } from "@/data/workshopSchedule";
import { cn } from "@/lib/utils";
import { useWorkshopStatus } from "@/hooks/useWorkshopStatus";

const FACTS = [
  { icon: FileText, label: "Abstract", value: "One page max" },
  { icon: LayoutGrid, label: "Formats", value: "Poster, talk, or both" },
  { icon: Mic2, label: "Review", value: "Single-blind" },
];

export function CallForPresentations() {
  const workshopStatus = useWorkshopStatus();
  const completedTimelineIds = new Set(workshopStatus.completedTimelineIds);

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

        <Reveal className="mb-10">
          <div className="ink-card ink-card-alert border-alert p-5 sm:p-6">
            <span className="kicker text-alert">Our position</span>
            <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
              {CFP_POSITION}
            </p>
          </div>
        </Reveal>

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

            <Reveal className="mt-8" delay={80}>
              <h3 className="font-sans text-lg font-semibold tracking-tight">
                Out of scope
              </h3>
              <ul className="mt-4 space-y-3">
                {CFP_EXCLUSIONS.map((t) => (
                  <li key={t} className="flex gap-3">
                    <X className="mt-1 h-4 w-4 shrink-0 text-alert" />
                    <span className="text-sm text-muted-foreground sm:text-base">{t}</span>
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
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-pixel text-[0.55rem] text-background">
                      TIMELINE
                    </span>
                    <span className="font-mono text-[0.62rem] font-bold uppercase tracking-wide text-background/60">
                      All dates · {WORKSHOP_SCHEDULE.timeZoneLabel}
                    </span>
                  </div>
                </div>
                <ol className="divide-y divide-line">
                  {CFP_TIMELINE.map((item) => {
                    const done = completedTimelineIds.has(item.id);
                    const current = workshopStatus.currentTimelineId === item.id;

                    return (
                      <li
                        key={item.id}
                        data-timeline-id={item.id}
                        data-timeline-state={done ? "done" : current ? "current" : "upcoming"}
                        className={cn(
                          "flex items-center justify-between gap-3 px-5 py-4",
                          current && "bg-alert/10",
                        )}
                      >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "grid h-5 w-5 place-items-center rounded-full border-2 text-[0.6rem]",
                            done
                              ? "border-accent bg-accent text-accent-foreground"
                              : current
                                ? "border-alert text-alert"
                                : "border-line text-transparent",
                          )}
                        >
                          {done && <Check className="h-3 w-3" />}
                        </span>
                        <span
                          className={cn(
                            "font-sans text-sm",
                            current ? "font-bold" : "font-medium",
                          )}
                        >
                          {item.event}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        {item.date}
                      </span>
                      </li>
                    );
                  })}
                </ol>
                <div className="border-t-2 border-border p-5" data-status-cta>
                  {workshopStatus.submissionsOpen ? (
                    <a
                      href={SITE.submissionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-accent w-full"
                    >
                      {workshopStatus.callActionLabel} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="btn btn-ghost w-full" aria-disabled="true">
                      {workshopStatus.callActionLabel}
                    </span>
                  )}
                  <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
                    {workshopStatus.callNote}
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
