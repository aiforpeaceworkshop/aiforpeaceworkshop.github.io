/*
 * Workshop schedule and date-aware status.
 *
 * Anywhere on Earth (AoE) is UTC−12. A deadline dated September 21 therefore
 * remains open until 2026-09-22T12:00:00Z, when September 21 ends in AoE.
 */

export const WORKSHOP_SCHEDULE = {
  timeZoneLabel: "AoE (UTC−12)",
  submissionsOpenAt: "2026-07-18T12:00:00.000Z",
  submissionsCloseAt: "2026-09-22T12:00:00.000Z",
  decisionDateEndsAt: "2026-09-30T12:00:00.000Z",
  workshopWindowStartsAt: "2026-12-12T12:00:00.000Z",
  workshopWindowEndsAt: "2026-12-14T12:00:00.000Z",
} as const;

export type TimelineId = "open" | "deadline" | "decision" | "workshop";

export type TimelineItem = {
  id: TimelineId;
  date: string;
  event: string;
};

export const CFP_TIMELINE: TimelineItem[] = [
  { id: "open", date: "Jul 18, 2026", event: "Submission site opens" },
  { id: "deadline", date: "Sep 21, 2026", event: "Submission deadline" },
  { id: "decision", date: "Sep 29, 2026", event: "Decision notification" },
  { id: "workshop", date: "Dec 12 or 13, 2026", event: "Workshop day (TBC)" },
];

export type WorkshopPhase =
  | "upcoming"
  | "open"
  | "review"
  | "scheduled"
  | "workshop"
  | "concluded";

export type WorkshopStatus = {
  phase: WorkshopPhase;
  submissionsOpen: boolean;
  announcement: {
    date: string;
    text: string;
    href?: string;
  };
  navLabel: string;
  heroActionLabel: string;
  callActionLabel: string;
  callNote: string;
  currentTimelineId: TimelineId | null;
  completedTimelineIds: TimelineId[];
};

const SCHEDULE_MS = {
  submissionsOpenAt: Date.parse(WORKSHOP_SCHEDULE.submissionsOpenAt),
  submissionsCloseAt: Date.parse(WORKSHOP_SCHEDULE.submissionsCloseAt),
  decisionDateEndsAt: Date.parse(WORKSHOP_SCHEDULE.decisionDateEndsAt),
  workshopWindowStartsAt: Date.parse(WORKSHOP_SCHEDULE.workshopWindowStartsAt),
  workshopWindowEndsAt: Date.parse(WORKSHOP_SCHEDULE.workshopWindowEndsAt),
} as const;

export function getWorkshopStatus(now: Date = new Date()): WorkshopStatus {
  const timestamp = now.getTime();

  if (timestamp < SCHEDULE_MS.submissionsOpenAt) {
    return {
      phase: "upcoming",
      submissionsOpen: false,
      announcement: {
        date: "2026.07.18",
        text: "Call for presentations opens July 18 (AoE).",
        href: "/#call",
      },
      navLabel: "Opens Jul 18",
      heroActionLabel: "Call opens July 18",
      callActionLabel: "Opens July 18",
      callNote: "Submissions open July 18, Anywhere on Earth.",
      currentTimelineId: "open",
      completedTimelineIds: [],
    };
  }

  if (timestamp < SCHEDULE_MS.submissionsCloseAt) {
    return {
      phase: "open",
      submissionsOpen: true,
      announcement: {
        date: "2026.07.18",
        text: "Call for presentations is open. Submit by September 21 (AoE).",
        href: "submission",
      },
      navLabel: "Submit",
      heroActionLabel: "Submit a presentation",
      callActionLabel: "Submit an abstract",
      callNote: "Deadline: September 21, 2026, Anywhere on Earth.",
      currentTimelineId: "deadline",
      completedTimelineIds: ["open"],
    };
  }

  if (timestamp < SCHEDULE_MS.decisionDateEndsAt) {
    return {
      phase: "review",
      submissionsOpen: false,
      announcement: {
        date: "2026.09.22",
        text: "Submissions are closed. Decision notification is September 29.",
        href: "/#call",
      },
      navLabel: "Closed",
      heroActionLabel: "Submissions closed",
      callActionLabel: "Submissions closed",
      callNote: "Decision notification is scheduled for September 29.",
      currentTimelineId: "decision",
      completedTimelineIds: ["open", "deadline"],
    };
  }

  if (timestamp < SCHEDULE_MS.workshopWindowStartsAt) {
    return {
      phase: "scheduled",
      submissionsOpen: false,
      announcement: {
        date: "2026.09.30",
        text: "Next: AI for Peace at NeurIPS 2026, December 12 or 13 in Paris.",
        href: "/#top",
      },
      navLabel: "Dec 12/13",
      heroActionLabel: "Submissions closed",
      callActionLabel: "Submissions closed",
      callNote: "The submission deadline has passed.",
      currentTimelineId: "workshop",
      completedTimelineIds: ["open", "deadline", "decision"],
    };
  }

  if (timestamp < SCHEDULE_MS.workshopWindowEndsAt) {
    return {
      phase: "workshop",
      submissionsOpen: false,
      announcement: {
        date: "2026.12.12",
        text: "Workshop date window: December 12 or 13, Paris.",
        href: "/#top",
      },
      navLabel: "Workshop",
      heroActionLabel: "Submissions closed",
      callActionLabel: "Submissions closed",
      callNote: "The workshop day is December 12 or 13 (TBC).",
      currentTimelineId: "workshop",
      completedTimelineIds: ["open", "deadline", "decision"],
    };
  }

  return {
    phase: "concluded",
    submissionsOpen: false,
    announcement: {
      date: "2026.12.14",
      text: "The scheduled NeurIPS 2026 workshop date has passed.",
      href: "/#about",
    },
    navLabel: "Past edition",
    heroActionLabel: "Submissions closed",
    callActionLabel: "Submissions closed",
    callNote: "The submission period has ended.",
    currentTimelineId: null,
    completedTimelineIds: ["open", "deadline", "decision", "workshop"],
  };
}
