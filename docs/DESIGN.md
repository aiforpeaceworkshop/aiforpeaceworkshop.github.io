# Design system

The site is editorial first and pixel-inspired second. The original AI for
Peace wordmark supplies the pixel geometry; the surrounding interface stays
quiet enough for workshop information and portraits to lead.

## Principles

### Follow the logo

Use square pixels, hard edges, monochrome contrast, and dither-like repetition.
Pixel details belong in labels, rules, small status elements, and shadows. They
should not compete with the wordmark.

### Keep the subject serious

The workshop deals with military AI, surveillance, conflict, and research
responsibility. The site can be distinctive without looking like a game.

Do not add:

- Pac-Man or arcade animations;
- neon effects or colored glows;
- scan effects that reduce readability;
- decorative weapons, drones, or military imagery;
- novelty cursors or sound.

### Use restraint

Most of the page is warm paper, near-black ink, and color photography. Interface
emphasis stays monochrome to follow the wordmark; red marks the open call,
deadlines, pellets, and weapon/drone portion of the mark. The interface does not
use color glows.

## Tokens

Design tokens live at the top of [`src/index.css`](../src/index.css).

| Token | Purpose |
| --- | --- |
| `--background` | Page canvas |
| `--paper` | Cards and alternate sections |
| `--foreground` | Main text |
| `--muted-foreground` | Secondary copy |
| `--border`, `--line` | Hard keylines and quiet dividers |
| `--accent` | Monochrome links, selected states, and supporting emphasis |
| `--alert` | Deadline and weapons-related emphasis |

Every token has light and dark values. New components must use tokens instead
of hard-coded color values.

## Typography

- **Space Grotesk**: block headings, statistics, paragraphs, names, and interface text.
- **Space Mono**: metadata, dates, roles, and compact supporting text.
- **Press Start 2P**: navigation, buttons, section labels, and other short
  interface text.

Press Start 2P becomes arcade-like at display sizes. Keep it small and do not
use it for headings, paragraphs, names, affiliations, or talk descriptions.

## Core patterns

### Section heading

`SectionHeading` combines a numbered marker, mono kicker, dithered rule, and
heavy block title. Use it for major home-page sections rather than inventing a second
heading treatment.

### Ink card

`.ink-card` uses a two-pixel border and a hard offset shadow. It is the main
container language for facts, people, timelines, and archive links.

Use `.ink-card-hover` only when the entire card is interactive. Static cards
should not move.

### Person card

Portraits remain in color. A small scale change on hover indicates that linked
cards are interactive. Names, affiliations, roles, and talk topics come from
`site.ts`; do not bake text into images.

### Pixel rule

`.pixel-rule` and `.pixel-rule-sm` echo the repeating blocks in the wordmark.
They are dividers, not decoration for every empty area.

### Buttons and chips

Buttons are rectangular and use hard shadows. Chips are compact metadata
labels. Red chips indicate the open call or deadline; they do not imply an
error state.

## Motion

`Reveal` applies one short fade-and-rise transition as a section enters the
viewport. Motion is disabled when the user requests reduced motion.

Do not add looping motion. Avoid stagger delays long enough to hide content
during normal scrolling or automated screenshots.

## Responsive checks

Test at minimum:

- 390 × 844 for a small phone;
- 768 × 1024 for a tablet;
- 1440 × 1000 for desktop.

Check:

- hero line breaks and both calls to action;
- date and format wrapping in the edition card;
- CFP timeline dates;
- portrait crops;
- long affiliations and talk titles;
- mobile navigation and theme toggle;
- first-edition grids.

## Favicon and logo

The original bitmap wordmark remains the source of truth.
`scripts/generate_logo.py` removes its white background without tracing or
simplifying the artwork, strengthens the principal ink, crops dead canvas, and
exports the 1440px browser masks. It also builds Pac-Man’s down-left shadow from
the same measured offset and diagonal halftone used by the letters. The browser
therefore receives an appropriately sized asset without substituting or tracing
the original mark.

Do not use the horizontal wordmark as a favicon: browsers squeeze it into a
square and it becomes unreadable. `public/favicon.svg` is the dedicated square
pixel monogram.

To change the wordmark, replace the source bitmap and rerun
`python3 scripts/generate_logo.py`. Verify both themes.
