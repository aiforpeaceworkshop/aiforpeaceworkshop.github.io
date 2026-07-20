import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getWorkshopStatus } from "@/data/workshopSchedule";
import { WorkshopStatusContext } from "@/hooks/useWorkshopStatus";

function getCurrentStatus() {
  if (import.meta.env.DEV) {
    const statusAt = new URLSearchParams(window.location.search).get("statusAt");
    const timestamp = statusAt ? Date.parse(statusAt) : Number.NaN;

    if (!Number.isNaN(timestamp)) {
      return getWorkshopStatus(new Date(timestamp));
    }
  }

  return getWorkshopStatus();
}

export function WorkshopStatusProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState(getCurrentStatus);

  useEffect(() => {
    const refresh = () => setStatus(getCurrentStatus());
    const timer = window.setInterval(refresh, 60_000);
    const refreshWhenVisible = () => {
      if (!document.hidden) refresh();
    };

    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, []);

  return (
    <WorkshopStatusContext.Provider value={status}>
      {children}
    </WorkshopStatusContext.Provider>
  );
}
