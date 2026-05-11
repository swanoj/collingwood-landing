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

## Site architecture (App Router — not `pages/`)

| Route | File | Role |
|-------|------|------|
| `/` | [`app/page.tsx`](file:///Users/oliver/collingwood-landing/app/page.tsx) | [`HomeView.tsx`](file:///Users/oliver/collingwood-landing/components/home/HomeView.tsx) — masthead, hero video, editorial, cutouts, [`SpreadShowcase.tsx`](file:///Users/oliver/collingwood-landing/components/home/SpreadShowcase.tsx), [`MealScrollSection.tsx`](file:///Users/oliver/collingwood-landing/components/MealScrollSection.tsx), locations, functions, marquee |
| `/menu` | [`app/menu/page.tsx`](file:///Users/oliver/collingwood-landing/app/menu/page.tsx) | [`MenuGrid.tsx`](file:///Users/oliver/collingwood-landing/components/MenuGrid.tsx) |
| `/order` | [`app/order/page.tsx`](file:///Users/oliver/collingwood-landing/app/order/page.tsx) | Location list + placeholder outbound links + `order_click` analytics |
| `/locations` | [`app/locations/page.tsx`](file:///Users/oliver/collingwood-landing/app/locations/page.tsx) | Four-up cards |
| `/locations/[slug]` | [`app/locations/[slug]/page.tsx`](file:///Users/oliver/collingwood-landing/app/locations/[slug]/page.tsx) | Collingwood, CBD, Footscray, South Yarra — data from [`src/content/locations.ts`](file:///Users/oliver/collingwood-landing/src/content/locations.ts) |
| `/functions` | [`app/functions/page.tsx`](file:///Users/oliver/collingwood-landing/app/functions/page.tsx) | Copy + [`EnquiryForm`](file:///Users/oliver/collingwood-landing/components/EnquiryForm.tsx) |
| `/reservations` | [`app/reservations/page.tsx`](file:///Users/oliver/collingwood-landing/app/reservations/page.tsx) | Booking widget shell (TBC) |
| `/shop`, `/gift-cards` | `app/shop/page.tsx`, `app/gift-cards/page.tsx` | Commerce / cards — shells (TBC) |
| `/about`, `/contact`, `/careers`, `/faqs` | `app/*/page.tsx` | Editorial + forms + [`src/content/faqs.ts`](file:///Users/oliver/collingwood-landing/src/content/faqs.ts) |
| `/privacy`, `/terms`, `/accessibility` | `app/*/page.tsx` | Legal placeholders |
| `not-found` | [`app/not-found.tsx`](file:///Users/oliver/collingwood-landing/app/not-found.tsx) | On-brand 404 |

Redirects in [`next.config.ts`](file:///Users/oliver/collingwood-landing/next.config.ts): `/train` → `/functions`, `/bookings` → `/reservations`, `/merch` → `/shop`.

**Content:** [`src/content/`](file:///Users/oliver/collingwood-landing/src/content/) — `site.ts`, `locations.ts`, `menu.ts`, `functions.ts`, `faqs.ts`, `social.ts`. **Analytics:** [`lib/analytics.ts`](file:///Users/oliver/collingwood-landing/lib/analytics.ts) (`dataLayer` pushes).

Global chrome: [`layout.tsx`](file:///Users/oliver/collingwood-landing/app/layout.tsx) → [`GrainOverlay.tsx`](file:///Users/oliver/collingwood-landing/components/GrainOverlay.tsx), [`SiteNav.tsx`](file:///Users/oliver/collingwood-landing/components/SiteNav.tsx), [`SiteFooter.tsx`](file:///Users/oliver/collingwood-landing/components/SiteFooter.tsx).
