# Brand & build instructions (source of truth)

This file is for **you** and for **Cursor**: keep it updated as decisions land.

## Product

- **Working name:** Night Train Burgers (placeholder — replace with your real venue).
- **Pitch:** Burgers and cold beer with rooftop energy and a bit of Melbourne cheek — **not** affiliated with any existing venue; references to “train / rooftop / Collingwood” are **mood only**.

## Visual direction

- **Gourou-style influence (structure only):** warm **cream** canvas, **mega display type**, occasional **saturated bands** (red / royal blue / yellow / green) in **sections below** the hero — not a rainbow hero.
- **Hero centerpiece:** **interactive 3D** (React Three Fiber). **MP4** in `/public/hero/` is **fallback** (reduced motion, low GPU, or while GLB is missing).
- **GLB:** drop `burger.glb` into `public/models/` when ready; until then the site uses a **stylized placeholder mesh**.

## Palette (initial tokens)

| Token        | Hex       | Use                                      |
| ------------ | --------- | ---------------------------------------- |
| Cream base   | `#f4f1ea` | Page background, hero                    |
| Ink          | `#1a1a1a` | Body text                                |
| Accent red   | `#e31e24` | CTAs, key headlines (tune by eye)        |
| Royal blue   | `#1e3a8a` | Section bands / cards                    |
| Golden yellow| `#f5c542` | Highlights / cards                       |
| Emerald      | `#0f6b4d` | Cards / dividers                         |
| Paper shadow | `#e8e3d9` | Subtle borders                           |

## Typography

- **Display:** Anton (or similar) — short headlines only, tight leading.
- **Mono / labels:** Courier Prime — tags, metadata, “Scroll”, small UI.
- **UI body:** Geist Sans — paragraphs and buttons.

## Motion

- **3D:** subtle **idle float** + **pointer tilt** (capped ~0.2 rad); respect **`prefers-reduced-motion`** → no WebGL motion path; show **video or static** instead.
- **DOM:** optional GSAP for headline / subhead parallax — keep subtle; never block interaction.

## Assets

- **Video:** `public/hero/result.mp4`, `public/hero/burger-generated.mp4` — assign roles after review (hero loop vs secondary section).
- **Model:** `public/models/burger.glb` — web-optimized GLB; see plan for poly / material guidance.

## Legal

- Do **not** use Easey’s, Gourou, or Indian Food Company **logos, marks, or photography** as if they were ours.
