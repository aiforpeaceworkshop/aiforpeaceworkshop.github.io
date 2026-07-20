import { ArrowUpRight, Mail } from "lucide-react";
import { SITE, CURRENT_EDITION, NAV_LINKS } from "@/data/site";
import { BrandWordmark } from "@/components/BrandWordmark";

export function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-border bg-ink text-background">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="font-pixel text-[0.6rem] text-background/60">
              GET IN TOUCH
            </span>
            <h2 className="mt-4 max-w-[16ch] font-display text-3xl leading-tight text-background sm:text-4xl">
              Contact the organizers.
            </h2>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wide text-background link-underline"
            >
              <Mail className="h-4 w-4" />
              {SITE.contactEmail}
            </a>
          </div>

          <div className="md:col-span-3">
            <span className="kicker text-background/50">Pages</span>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="kicker text-background/50">Elsewhere</span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={SITE.submissionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-sm text-background/80 transition-colors hover:text-background"
                >
                  Submission form <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-background/20 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <BrandWordmark className="w-36 opacity-90" />
          </div>
          <p className="font-mono text-xs text-background/60">
            AI for Peace · {CURRENT_EDITION.venue} · {CURRENT_EDITION.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
