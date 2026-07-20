import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { NewsTicker } from "./NewsTicker";
import { Footer } from "./Footer";
import { WorkshopStatusProvider } from "@/components/WorkshopStatusProvider";

/** Scroll to top on route change, or to the hash target when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <WorkshopStatusProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-border focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
      >
        Skip to content
      </a>
      <ScrollManager />
      <NewsTicker />
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </WorkshopStatusProvider>
  );
}
