import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PersonCard } from "./PersonCard";
import {
  NEURIPS_SPEAKERS,
  FIRST_EDITION_SPEAKERS,
  CURRENT_EDITION,
  FIRST_EDITION,
} from "@/data/site";

export function Speakers() {
  return (
    <section id="speakers" className="section">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="§03"
          kicker="Invited speakers"
          title="Speakers for NeurIPS 2026."
        >
          Proposed talks address AI’s social consequences, autonomous weapons,
          regulation, refusal, and academic–military ties.
        </SectionHeading>

        {/* Current edition */}
        <div className="mb-6 flex items-center gap-3">
          <span className="chip">
            <span className="status-dot" /> {CURRENT_EDITION.venue}
          </span>
          <span className="pixel-rule-sm h-[3px] flex-1 text-line" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEURIPS_SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 60}>
              <PersonCard person={s} />
            </Reveal>
          ))}
        </div>

        {/* First edition — kept visible for continuity & credibility */}
        <div className="mb-6 mt-16 flex items-center gap-3">
          <span className="chip chip-solid">
            First edition · {FIRST_EDITION.venue}
          </span>
          <span className="pixel-rule-sm h-[3px] flex-1 text-line" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FIRST_EDITION_SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={(i % 6) * 40}>
              <PersonCard person={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
