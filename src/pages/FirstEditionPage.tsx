import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PersonCard } from "@/components/PersonCard";
import {
  FIRST_EDITION,
  FIRST_EDITION_SPEAKERS,
  FIRST_EDITION_ORGANIZERS,
  FIRST_EDITION_OPENREVIEW,
} from "@/data/site";

export default function FirstEditionPage() {
  return (
    <>
      {/* Page header */}
      <header className="relative overflow-hidden border-b-2 border-border bg-muted">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:pb-16 sm:pt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to NeurIPS 2026
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="chip chip-solid">
              <span className="font-pixel text-[0.55rem]">FIRST EDITION</span>
            </span>
            <span className="chip">Archive</span>
          </div>

          <h1 className="mt-6 font-display text-5xl leading-none sm:text-7xl">
            Building Bridges,
            <br />
            Not Weapons.
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-xl font-semibold text-muted-foreground sm:text-2xl">
            AI for Peaceful Progress
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm font-bold uppercase tracking-wider">
            <span>{FIRST_EDITION.venue}</span>
            <span className="text-accent">/</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {FIRST_EDITION.city}
            </span>
            <span className="text-accent">/</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {FIRST_EDITION.dateLabel}
            </span>
          </div>
        </div>
      </header>

      {/* Stats + blurb */}
      <section className="section-tight border-b-2 border-border bg-paper">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-6 md:grid-cols-2">
              {FIRST_EDITION.stats.map((s) => (
                <Reveal key={s.label}>
                  <p className="font-display text-4xl font-bold sm:text-5xl">{s.value}</p>
                  <p className="kicker mt-1 text-muted-foreground">{s.label}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="md:col-span-6" delay={80}>
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                The first AI for Peace workshop was held at ICLR 2026 in Rio de
                Janeiro. Researchers, practitioners, policy experts, and
                civil-society organizations discussed dual-use AI, military
                applications, and peace-oriented research. Approximately 300
                people attended across the day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading index="§01" kicker="Invited speakers" title="Speakers from the first edition." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FIRST_EDITION_SPEAKERS.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 60}>
                <PersonCard person={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="section border-t-2 border-border bg-paper">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading index="§02" kicker="Organizing committee" title="Who ran it." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FIRST_EDITION_ORGANIZERS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 60}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading index="§03" kicker="Accepted papers" title="Non-archival, on OpenReview.">
            The first edition ran a two-track, non-archival call. Of 28
            submissions, 13 were accepted as posters and 3 as oral presentations.
          </SectionHeading>
          <Reveal>
            <a
              href={FIRST_EDITION_OPENREVIEW}
              target="_blank"
              rel="noreferrer"
              className="ink-card ink-card-hover group flex flex-wrap items-center justify-between gap-4 p-6"
            >
              <div>
                <p className="font-sans text-lg font-semibold">ICLR 2026 Workshop — AI for Peace</p>
                <p className="font-mono text-sm text-muted-foreground">
                  Browse the accepted papers on OpenReview
                </p>
              </div>
              <span className="btn btn-accent">
                Open <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
