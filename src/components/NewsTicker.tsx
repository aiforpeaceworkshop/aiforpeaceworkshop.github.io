import { SITE } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import { useWorkshopStatus } from "@/hooks/useWorkshopStatus";

export function NewsTicker() {
  const { announcement, phase, submissionsOpen } = useWorkshopStatus();
  const href = announcement.href === "submission"
    ? SITE.submissionUrl
    : announcement.href;
  const external = href?.startsWith("http");

  const content = (
    <>
      <span className="hidden font-mono text-[0.68rem] text-background/55 md:inline">
        {announcement.date}
      </span>
      <span className="font-mono text-xs text-background/90">
        {announcement.text}
      </span>
      {href && <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />}
    </>
  );

  return (
    <div
      className="border-b-2 border-border bg-ink text-background"
      data-workshop-phase={phase}
      data-submissions-open={submissionsOpen}
    >
      <div className="mx-auto flex min-h-9 max-w-6xl items-stretch px-5">
        <span className="hidden shrink-0 items-center border-x border-background/20 px-3 font-mono text-[0.65rem] font-bold uppercase tracking-widest sm:flex">
          Update
        </span>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="flex items-center gap-3 px-4 py-2 transition-colors hover:text-white"
          >
            {content}
          </a>
        ) : (
          <div className="flex items-center gap-3 px-4 py-2">{content}</div>
        )}
      </div>
    </div>
  );
}
