import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE, CURRENT_EDITION } from "@/data/site";
import { BrandWordmark } from "@/components/BrandWordmark";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-dot-grid dot-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="hero-layout relative mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-14 md:pb-12 md:pt-16">
        <div className="min-w-0">
          <h1 className="hero-logo">
            <BrandWordmark className="hero-logo-mark" label="" />
            <span className="sr-only">{SITE.title}</span>
          </h1>

          <p className="hero-deck mt-8">
            A one-day workshop on how AI research enters military use—and
            researchers’ responsibilities when it does.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href={SITE.submissionUrl} target="_blank" rel="noreferrer" className="btn btn-accent">
              Submit a presentation <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#call" className="hero-text-link">
              Read the call <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <dl className="hero-facts" aria-label="Workshop details">
          <div>
            <dt>Edition</dt>
            <dd>{CURRENT_EDITION.n} · {CURRENT_EDITION.venue}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{CURRENT_EDITION.city}</dd>
          </div>
          <div>
            <dt>Date · TBC</dt>
            <dd>{CURRENT_EDITION.dateLabel}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
