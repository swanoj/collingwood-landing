# collingwood-landing

Standalone Next.js marketing shell: **cream / mega-type** hero, **React Three Fiber** placeholder burger (swap in `public/models/burger.glb` later), **MP4 fallbacks** under `public/hero/`, and **`prefers-reduced-motion`** support.

## Location

Project path: **`/Users/oliver/collingwood-landing`** (sibling to `sniperform-landing`, its own git repo).

## Commands

```bash
cd /Users/oliver/collingwood-landing
npm run dev
npm run build
npm run lint
```

## Docs

- **[instructions.md](./instructions.md)** — brand tokens, tone, asset checklist (source of truth for Cursor).

## Stack

- Next.js 16 (App Router), React 19, Tailwind CSS v4
- `three`, `@react-three/fiber`, `@react-three/drei`
- `gsap` (installed for future ScrollTrigger / DOM motion; hero currently R3F + CSS)

## Assets

| Path | Purpose |
|------|---------|
| `public/hero/result.mp4` | Primary fallback video (copied from Downloads when scaffolded) |
| `public/hero/burger-generated.mp4` | Secondary MP4 source |
| `public/models/burger.glb` | Optional real burger mesh (add when ready) |

## Fonts

Anton (display), Courier Prime (mono labels), Geist Sans / Mono (UI) — wired in `app/layout.tsx` and CSS variables in `app/globals.css`.
