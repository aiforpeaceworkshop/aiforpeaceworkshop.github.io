import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(
  new URL("../src/data/workshopSchedule.ts", import.meta.url),
  "utf8",
);

const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
});

const encodedModule = Buffer.from(outputText).toString("base64");
const { getWorkshopStatus } = await import(
  `data:text/javascript;base64,${encodedModule}`
);

const cases = [
  ["2026-07-18T11:59:59.999Z", "upcoming", false, "open"],
  ["2026-07-18T12:00:00.000Z", "open", true, "deadline"],
  ["2026-09-22T11:59:59.999Z", "open", true, "deadline"],
  ["2026-09-22T12:00:00.000Z", "review", false, "decision"],
  ["2026-09-30T00:24:59.999Z", "review", false, "decision"],
  ["2026-09-30T00:25:00.000Z", "scheduled", false, "workshop"],
  ["2026-09-30T12:00:00.000Z", "scheduled", false, "workshop"],
  ["2026-12-11T22:59:59.999Z", "scheduled", false, "workshop"],
  ["2026-12-11T23:00:00.000Z", "workshop", false, "workshop"],
  ["2026-12-12T22:59:59.999Z", "workshop", false, "workshop"],
  ["2026-12-12T23:00:00.000Z", "concluded", false, null],
];

for (const [iso, expectedPhase, expectedOpen, expectedCurrent] of cases) {
  const status = getWorkshopStatus(new Date(iso));

  if (
    status.phase !== expectedPhase
    || status.submissionsOpen !== expectedOpen
    || status.currentTimelineId !== expectedCurrent
  ) {
    throw new Error(
      `${iso}: expected ${expectedPhase}/${expectedOpen}/${expectedCurrent}, got ${status.phase}/${status.submissionsOpen}/${status.currentTimelineId}`,
    );
  }
}

const released = getWorkshopStatus(new Date("2026-09-30T00:25:00.000Z"));
const beforeRelease = getWorkshopStatus(new Date("2026-09-30T00:24:59.999Z"));
if (
  !released.completedTimelineIds.includes("decision")
  || beforeRelease.completedTimelineIds.includes("decision")
  || released.announcement.href !== "/#accepted-talks"
  || !released.callNote.includes("Decisions have been released")
) {
  throw new Error("Confirmed decisions must complete the timeline step and link to accepted talks before the planned AoE boundary.");
}

console.log(`Schedule check passed: ${cases.length} submission, confirmed-decision, and workshop boundary cases.`);
