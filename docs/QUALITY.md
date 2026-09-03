# Quality checklist

Use this checklist before publishing changes to the workshop website. It covers
the checks that are easy to miss when content, portraits, layout, and deployment
change together.

## Automated preflight

Install exactly the versions in the lockfile and run the combined check:

```bash
npm ci
npm run check
```

`npm run check` runs Oxlint and the production build. The build includes the
TypeScript project check and creates `dist/index.html`,
`dist/iclr-2026/index.html`, a compatibility entry at
`dist/first-edition/index.html`, and the general `dist/404.html` fallback.
It also tests the upcoming, open, review, post-notification, workshop-window,
and concluded transitions at their exact AoE boundaries.

During local development, append `?statusAt=<ISO timestamp>` to preview a phase
without changing the system clock. This override is excluded from production.
For example, `?statusAt=2026-09-22T12:00:00Z` previews the closed/review state.

## Content integrity

- Names, affiliations, roles, dates, and talk topics match the approved source.
- The hero, announcement bar, and call timeline agree on submission dates.
- Submission links are available only while the call is open in AoE.
- Every local portrait path in `src/data/site.ts` exists under `public/img/`.
- External links point to the intended official page, paper, or profile.
- Current-edition and first-edition facts are not mixed.
- No copy adds an unsupported biography, statistic, claim, or event detail.

See [CONTENT.md](CONTENT.md) for the source hierarchy and editorial rules.

## Responsive visual review

Check at least these viewport sizes in both light and dark themes:

| Viewport | Focus |
| --- | --- |
| 390 × 844 | Header controls, stacked hero panel, cards, mobile menu |
| 768 × 1024 | Grid transitions, long affiliations, call timeline |
| 1440 × 1000 | Hero balance, section rhythm, three-column card grids |

Review both `/` and `/iclr-2026`. Confirm that:

- the original wordmark remains legible and is not duplicated at the top;
- Pac-Man, pellets, and halftone shading render cleanly;
- portrait crops do not cut off faces;
- keyboard focus is visible;
- text does not overlap or overflow;
- reveal effects settle quickly and reduced-motion mode remains usable.

## Functional review

- The announcement, submission, contact, profile, affiliation, archive, and
  reference links open the expected destinations.
- The theme toggle works and persists during navigation.
- The mobile menu opens, closes, and follows links.
- The sticky wordmark returns after the hero leaves the viewport.
- The references disclosure opens and closes.
- A direct visit to `/iclr-2026` works in the preview build.
- `/first-edition` redirects to `/iclr-2026`.
- The browser console contains no errors or missing-asset warnings.

## Release record

The final commit or pull request should state:

- what changed and why;
- which content sources were used;
- whether portraits or generated wordmark assets changed;
- the result of `npm run check`;
- the viewports and themes reviewed manually.
