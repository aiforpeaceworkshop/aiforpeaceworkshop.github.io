import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PersonCard } from "./PersonCard";
import { ORGANIZERS } from "@/data/site";

export function Organizers() {
  return (
    <section id="organizers" className="section border-t-2 border-border bg-paper">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="§04" kicker="Organizing committee" title="Organizing committee.">
          The committee spans computer vision, machine learning, and digital
          humanities.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ORGANIZERS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 60}>
              <PersonCard person={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
