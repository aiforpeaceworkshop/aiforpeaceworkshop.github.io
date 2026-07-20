import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS, SITE, CURRENT_EDITION } from "@/data/site";
import { BrandWordmark } from "@/components/BrandWordmark";
import { useTheme } from "@/hooks/useTheme";

const linkClass =
  "link-underline font-pixel text-[0.5rem] uppercase leading-relaxed text-muted-foreground transition-colors hover:text-foreground";

function NavLink({
  href,
  label,
  onClick,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  // Hash links stay as anchors (in-page scroll); route paths use the router.
  return href.includes("#") ? (
    <a href={href} onClick={onClick} className={className}>
      {label}
    </a>
  ) : (
    <Link to={href} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { pathname } = useLocation();
  const hideHomeWordmark = pathname === "/" && atTop;
  const editionLabel = pathname === "/first-edition"
    ? "ICLR 2026 · First edition"
    : "NeurIPS 2026 · Second edition";

  useEffect(() => {
    const update = () => setAtTop(window.scrollY < 180);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          to="/"
          className={`site-lockup transition-opacity duration-200 ${hideHomeWordmark ? "pointer-events-none opacity-0" : "opacity-100"}`}
          aria-label="AI for Peace — home"
          aria-hidden={hideHomeWordmark || undefined}
          tabIndex={hideHomeWordmark ? -1 : undefined}
        >
          <BrandWordmark className="site-lockup-mark" label="" />
          <span className="site-lockup-meta">{editionLabel}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} className={linkClass} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SITE.submissionUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-submit font-pixel text-[0.5rem] uppercase leading-relaxed chip chip-alert"
          >
            <span className="status-dot" />
            Submit
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-9 w-9 place-items-center text-foreground transition-colors hover:text-alert"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center text-foreground transition-colors hover:text-alert lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t-2 border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            <span className="pixel-label mb-2 text-muted-foreground">
              {CURRENT_EDITION.venue}
            </span>
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 font-pixel text-[0.58rem] uppercase leading-loose last:border-0"
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
