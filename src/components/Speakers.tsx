import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PersonCard } from "./PersonCard";
import {
  NEURIPS_SPEAKERS,
  FIRST_EDITION_SPEAKERS,
  FIRST_EDITION,
} from "@/data/site";

// Flip this once the invited speakers have individually confirmed.
const SHOW_NEURIPS_SPEAKERS = false;

export function Speakers() {
  return (
    <section id="speakers" className="section">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="§03"
          kicker="Invited speakers"
          title="Speakers."
        />

        {SHOW_NEURIPS_SPEAKERS ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NEURIPS_SPEAKERS.map((speaker, index) => (
              <Reveal key={speaker.name} delay={(index % 3) * 60}>
                <PersonCard person={speaker} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="speaker-teaser">
              <div className="speaker-teaser-copy">
                <span className="speaker-teaser-label">NeurIPS 2026 / Program update</span>
                <p className="speaker-teaser-title">
                  Coming <span>soon.</span>
                </p>
                <p className="speaker-teaser-note">
                  Invited speakers will be announced here.
                </p>
              </div>

              <div className="speaker-teaser-slots" aria-hidden="true">
                {["P1", "P2", "P3", "P4", "P5", "P6"].map((slot) => (
                  <div key={slot} className="speaker-teaser-slot">
                    <span className="speaker-teaser-slot-number">{slot}</span>
                    <span className="speaker-teaser-avatar">
                      <span className="speaker-teaser-avatar-head" />
                      <span className="speaker-teaser-avatar-body" />
                    </span>
                    <span className="speaker-teaser-lock">
                      <span className="speaker-teaser-lock-shackle" />
                      <span className="speaker-teaser-lock-body">
                        <span className="speaker-teaser-lock-key" />
                      </span>
                    </span>
                    <span className="speaker-teaser-slot-status">Locked</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

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
