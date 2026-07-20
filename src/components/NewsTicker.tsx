import { NEWS } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function NewsTicker() {
  const announcement = NEWS[0];

  if (!announcement) return null;

  const content = (
    <>
      <span className="hidden font-mono text-[0.68rem] text-background/55 md:inline">
        {announcement.date}
      </span>
      <span className="font-mono text-xs text-background/90">
        {announcement.text}
      </span>
      {announcement.href && <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />}
    </>
  );

  return (
    <div className="border-b-2 border-border bg-ink text-background">
      <div className="mx-auto flex min-h-9 max-w-6xl items-stretch px-5">
        <span className="hidden shrink-0 items-center border-x border-background/20 px-3 font-mono text-[0.65rem] font-bold uppercase tracking-widest sm:flex">
          Update
        </span>
        {announcement.href ? (
          <a
            href={announcement.href}
            target="_blank"
            rel="noreferrer"
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
