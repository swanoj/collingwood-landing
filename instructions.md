# Easey's — brand & build instructions (source of truth)

This file is for **you** and for **Cursor**: keep it updated as decisions land.

## Product

- **Brand name:** **Easey's** (display often **EASEY’S** in mega-type with a typographic apostrophe).
- **Pitch:** Burgers and beers, rooftop / high-up energy, Melbourne cheek — comfort food with confidence. Tune specifics (address, hours, booking links) before launch.

## Visual direction

- **Gourou-style influence (structure only):** warm **cream** canvas, **mega display type**, occasional **saturated bands** (red / royal blue / yellow / green) in **sections below** the hero — not a rainbow hero.
- **Hero centerpiece:** **interactive 3D** (React Three Fiber). **MP4** in `/public/hero/` is **fallback** (reduced motion, low GPU, or while GLB is missing).
- **GLB:** drop `burger.glb` into `public/models/` when ready; until then the site uses a **stylized placeholder mesh**.

## Palette (initial tokens)

| Token         | Hex       | Use                               |
| ------------- | --------- | --------------------------------- |
| Cream base    | `#f4f1ea` | Page background, hero             |
| Ink           | `#1a1a1a` | Body text                         |
| Accent red    | `#e31e24` | CTAs, key headlines (tune by eye) |
| Royal blue    | `#1e3a8a` | Section bands / cards             |
| Golden yellow | `#f5c542` | Highlights / cards                |
| Emerald       | `#0f6b4d` | Cards / dividers                  |
| Paper shadow  | `#e8e3d9` | Subtle borders                    |

## Typography

- **Display:** Anton — short headlines only, tight leading.
- **Mono / labels:** Courier Prime — tags, metadata, “Scroll”, small UI.
- **UI body:** Geist Sans — paragraphs and buttons.

## Motion

- **3D:** subtle **idle float** + **pointer tilt** (capped ~0.2 rad); respect **`prefers-reduced-motion`** → no WebGL motion path; show **video or static** instead.
- **DOM:** optional GSAP for headline / subhead parallax — keep subtle; never block interaction.

## Assets

- **Video:** `public/hero/result.mp4`, `public/hero/burger-generated.mp4` — hero loop vs secondary use.
- **Model:** `public/models/burger.glb` — web-optimized GLB when ready.

## Legal / content

- Ship **Easey's**-approved logo lockups, photography, and menu wording. Keep spelling and the mark consistent across site, print, and social.
