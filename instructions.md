# Easey's — brand & build instructions (source of truth)

This file is for **you** and for **Cursor**: keep it updated as decisions land.

## Easey's Style Guide (Gourou / Royal Beverage)

- **Colors:** Background **`#F4F1EA`** (textured off-white newsprint). Primary accent / transit red **`#D32F2F`**. “The Spread” scroll scene washes to **deep charcoal** (`#161616`) so video reads like a lightbox.
- **Typography:** Headlines: **Anton** — oversized, **tight tracking** (industrial poster). Body / UI copy: **Courier New** stack (gritty utilitarian; Courier Prime loaded as a close webfont fallback).
- **Layout:** **High-depth layering** — mega **EASEY’S** sits **behind** the hero burger clip; foreground lockup for **Burgers & Beers**. Scroll section pins the **triangle meal** (chips | burger | beer).
- **Vibe:** Melbourne industrial, rooftop train, **gritty but premium** — structure inspired by [Gourou](https://www.gourouindianfood.fr/) / Royal Beverage energy, **Easey's** marks and copy only.

## Product

- **Brand name:** **Easey's** (display often **EASEY’S** in mega-type with a typographic apostrophe).
- **Pitch:** Burgers and beers, rooftop / high-up energy, Melbourne cheek — comfort food with confidence. Tune specifics (address, hours, booking links) before launch.

## Visual direction

- **Hero:** Full-viewport **video** (Firefly export, **transparent background** when possible). Optional **`mix-blend-multiply`** on the clip for print-like depth on newsprint — turn off if alpha edges look muddy.
- **Scroll (“The Spread”):** GSAP **ScrollTrigger** — centre burger pinned; **chips** and **beer** fly in; background **scrubs** from newsprint to charcoal.

## Palette (tokens)

| Token          | Hex       | Use                                      |
| -------------- | --------- | ---------------------------------------- |
| Newsprint      | `#f4f1ea` | Page / hero background                   |
| Ink            | `#1a1a1a` | Default body text on light             |
| Transit red    | `#d32f2f` | Hero lockup, key CTAs                  |
| Spread charcoal| `#161616` | Pinned “Spread” stage at end of scrub    |
| Muted          | `#5c5c5c` | Secondary lines on light               |

## Typography

- **Display:** Anton — poster headlines, negative letter-spacing where it stays legible.
- **Body:** Courier New, Courier, monospace — site-wide default in `layout.tsx` / `globals.css`.
- **Mono UI:** Courier Prime (Google) as enhancement when available.

## Motion

- **ScrollTrigger:** “The Spread” — scrub fly-ins + background wash; **`prefers-reduced-motion`** → static strip, no pin.
- **Firefly:** Enable **transparent background** on exports that sit above type or charcoal so edges stay clean.

## Assets

- **Hero burger:** `public/hero/burger-generated.mp4` (primary in current build), `public/hero/result.mp4` (alternate). `object-contain`, `autoplay` + `loop` + `muted` + `playsInline`.
- **The Spread:** `public/hero/beer.mp4`, `public/hero/chips.mp4` — placeholders until present.
- **Optional GLB:** `public/models/burger.glb` — only if you return to real-time 3D.

## Legal / content

- Ship **Easey's**-approved logo lockups, photography, and menu wording. Keep spelling and the mark consistent across site, print, and social.
