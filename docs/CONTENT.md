# Content guide

This guide covers workshop copy, people, dates, links, images, and references.
The goal is simple: make routine updates easy without allowing unverified text
to enter the site.

## Source order

When two sources disagree, use this order:

1. The approved NeurIPS 2026 proposal for the current workshop.
2. The published call for presentations for submission rules and dates.
3. The first-edition website and OpenReview group for the ICLR 2026 archive.
4. Official university, employer, organization, or personal profiles for links
   and portraits.

Do not infer a missing role, affiliation, talk title, date, or biography. Leave
the field out until it can be confirmed.

## Where content lives

Most structured content is in [`src/data/site.ts`](../src/data/site.ts).
Submission dates, AoE boundaries, and the copy used for each automatic phase
are in [`src/data/workshopSchedule.ts`](../src/data/workshopSchedule.ts).

`SITE` contains global links and contact details. `CURRENT_EDITION` and
`FIRST_EDITION` contain edition-level facts. People are split into current and
archival arrays so the two editions can be updated independently.

The home-page prose that is not data-driven lives in:

- [`src/components/Hero.tsx`](../src/components/Hero.tsx)
- [`src/components/About.tsx`](../src/components/About.tsx)
- [`src/components/CallForPresentations.tsx`](../src/components/CallForPresentations.tsx)
- [`src/components/Speakers.tsx`](../src/components/Speakers.tsx)
- [`src/components/Organizers.tsx`](../src/components/Organizers.tsx)
- [`src/components/FirstEditionTeaser.tsx`](../src/components/FirstEditionTeaser.tsx)

## Adding or updating a person

People use the `Person` type:

```ts
{
  name: "Full Name",
  role: "Program Chair",              // organizers only
  affil: "Institution",
  affilLink: "https://institution.example",
  webpage: "https://official-profile.example",
  img: "/img/organizers/fullname.jpg",
  topic: "Proposed talk topic",        // speakers only
}
```

Only `name` is required by the type. In practice, add a verified affiliation,
profile, and portrait whenever they are available.

Keep the organizer order from the approved proposal. Keep the first-edition
speaker and organizer order from the original website. Publish current invited
speakers only after their participation is confirmed; order them alphabetically
by last name, as stated in the proposal.

## Portraits

Prefer an image published by the person, their university, employer, or the
organization they represent. Do not use search-result thumbnails or images
whose source cannot be recovered.

Before adding a portrait:

- Confirm that it depicts the correct person.
- Record the source URL in the pull request or commit message.
- Prefer at least 700 pixels on the shortest side.
- Check the crop on desktop and mobile.
- Avoid upscaling a small image to manufacture resolution.
- Keep the original aspect ratio; the card handles the square crop.

Use lowercase filenames without punctuation or spaces:

```text
public/img/speakers/veritycoyle.jpg
public/img/organizers/alexandravolokhova.jpg
```

## Editorial voice

Use plain, specific workshop language. The proposal is formal enough; the site
does not need extra claims about importance or impact.

Prefer:

- concrete subjects and verbs;
- short headings that say what the section contains;
- exact dates, roles, formats, and talk titles;
- one claim per sentence when the subject is technical or political.

Avoid:

- generic claims about a “rapidly evolving landscape”;
- promotional adjectives such as “groundbreaking” or “transformative”;
- vague significance claims using “underscores,” “highlights,” or “serves as”;
- repeated three-part lists added only for rhythm;
- unnecessary em dashes and negative parallel constructions;
- conclusions that promise broad future impact without support;
- rewriting official titles to make them sound smoother.

Some proposal and CFP text naturally contains lists or formal phrasing. Keep it
when it is the approved wording. Source fidelity matters more than mechanical
style rules.

## CFP changes

When updating the call:

1. Confirm the date and wording against the published call.
2. Update `CFP_TIMELINE` and `WORKSHOP_SCHEDULE` together.
3. Check the submission form URL in `SITE.submissionUrl`.
4. Express end-of-day deadlines as AoE (`UTC−12`) boundaries. For example,
   September 14 AoE ends at `2026-09-15T12:00:00Z`.
5. Update each grounded phase message without claiming that notifications were
   sent or an event occurred solely because its scheduled date passed.
6. Run `npm run check:schedule`, then inspect the mobile timeline for wrapping.

## References

Each bibliography entry has a number, citation text, and optional URL. Link to
the paper, publisher, DOI, or organization page rather than a search result.

Before merging a reference update:

- Open the URL and confirm that it exists.
- Check that the title and authors match the destination.
- Preserve the numbering used in the site data.
- Do not add tracking query parameters.
- Do not invent page numbers, DOIs, or publication details.

## Content review checklist

- [ ] Names and diacritics match official profiles.
- [ ] Affiliations are current for the workshop edition.
- [ ] Roles and ordering match the approved proposal.
- [ ] Dates agree across the hero, ticker, and CFP timeline.
- [ ] Talk titles have not been paraphrased.
- [ ] Statistics have a named source.
- [ ] Every external link opens the intended page.
- [ ] New portraits have a recoverable official source.
- [ ] Copy makes no claim that is absent from the supplied materials.
- [ ] `npm run lint` and `npm run build` pass.
