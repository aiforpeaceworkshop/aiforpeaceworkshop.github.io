import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { FIRST_EDITION } from "@/data/site";

export function FirstEditionTeaser() {
  return (
    <section id="first-edition" className="section">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="§05" kicker="The archive" title="AI for Peace at ICLR 2026." />

        <Reveal>
          <Link
            to="/first-edition"
            className="ink-card ink-card-hover group block overflow-hidden"
          >
            <div className="grid items-center gap-8 p-7 md:grid-cols-2 md:p-10">
              <div>
                <span className="font-pixel text-[0.6rem] text-accent">
                  FIRST EDITION
                </span>
                <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  “{FIRST_EDITION.theme}”
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    {FIRST_EDITION.dateLabel}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    {FIRST_EDITION.city}
                  </span>
                </div>
              </div>

              <div className="md:border-l-2 md:border-line md:pl-10">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-2">
                  {FIRST_EDITION.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-3xl font-bold sm:text-4xl">{s.value}</p>
                      <p className="kicker mt-1 text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wide text-accent">
                  Explore the first edition
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
