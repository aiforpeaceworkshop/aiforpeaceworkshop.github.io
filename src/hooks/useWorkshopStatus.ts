import { createContext, useContext } from "react";
import type { WorkshopStatus } from "@/data/workshopSchedule";

export const WorkshopStatusContext = createContext<WorkshopStatus | null>(null);

export function useWorkshopStatus() {
  const status = useContext(WorkshopStatusContext);

  if (!status) {
    throw new Error("useWorkshopStatus must be used inside WorkshopStatusProvider");
  }

  return status;
}
