import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { OBJECTIVES, REFERENCES } from "@/data/site";
import { cn } from "@/lib/utils";

export function About() {
  const [refsOpen, setRefsOpen] = useState(false);

  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="§01"
          kicker="About the workshop"
          title="From research to military use."
        />

        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="about-statement md:col-span-7">
            <span className="about-statement-label">CIVILIAN → MILITARY</span>
            <p className="font-sans text-2xl font-medium leading-snug text-background sm:text-3xl">
              AI is used in military operations, surveillance, targeting, and
              autonomous weapons. The path from civilian research to military
              use is often hidden.
            </p>
            <p className="mt-6 border-t border-background/25 pt-5 text-base leading-relaxed text-background/75 md:text-lg">
              AI for Peace gives researchers a place to discuss those pathways
              and their own responsibilities. At{" "}
              <span className="font-semibold text-background">NeurIPS 2026 in Paris</span>, the
              workshop will cover harm prevention, research ethics, civilian
              protection, and international law. It also includes a facilitated
              discussion and an after-workshop social.
            </p>
            <p className="mt-5 text-base font-semibold leading-relaxed text-background md:text-lg">
              We reject the normalization of AI for military and surveillance
              systems.
            </p>
          </Reveal>

          <Reveal className="md:col-span-5" delay={80}>
            <div className="ink-card ink-card-accent p-6">
              <span className="kicker text-accent">Workshop objectives</span>
              <ol className="mt-5 space-y-5">
                {OBJECTIVES.map((o, i) => (
                  <li key={o.title} className="flex gap-3.5">
                    <span className="font-pixel mt-0.5 shrink-0 text-[0.6rem] text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-semibold tracking-tight">
                        {o.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {o.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* References */}
        <Reveal className="mt-14">
          <button
            onClick={() => setRefsOpen((o) => !o)}
            aria-expanded={refsOpen}
            className="flex w-full items-center justify-between gap-3 border-2 border-border bg-paper px-5 py-4 text-left transition-colors hover:bg-muted"
          >
            <span className="kicker">References &amp; further reading — {REFERENCES.length}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 transition-transform",
                refsOpen && "rotate-180",
              )}
            />
          </button>
          {refsOpen && (
            <ol className="mt-4 grid gap-x-8 gap-y-3 border-l-2 border-line pl-5 sm:grid-cols-2">
              {REFERENCES.map((r) => (
                <li key={r.n} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="font-mono text-xs font-bold text-accent">[{r.n}]</span>
                  <span>
                    {r.text}
                    {r.href && (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-1 inline-flex items-center text-accent link-underline"
                      >
                        link <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </Reveal>
      </div>
    </section>
  );
}
