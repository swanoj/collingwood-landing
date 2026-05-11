# Easey’s — marketing site (Next.js 16)

Poster-style, typography-first rebuild (Gourou-inspired chassis): utility header/footer, stacked editorial sections, GSAP scroll moments, local TypeScript content.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (`src/styles/globals.css` + `@theme`)
- **GSAP** + **ScrollTrigger** (`src/lib/gsap.ts`)
- **Fonts:** Anton, Geist, Courier Prime (`src/app/layout.tsx`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com) (framework: Next.js, root `.`, build `next build`, output default).
3. Production deploys on every push to the connected branch.

CLI (optional): `npx vercel --prod`

## Edit content & links

| What | Where |
|------|--------|
| Address, hours, phone, email, **status strip** (mono identity line), outbound URLs, vouchers, `/order` microcopy | `src/content/site.ts` (header + footer) |
| Shared menu row UI (Food + Drinks) | `src/components/PosterRow.tsx` |
| Nav labels + paths | `src/content/routes.ts` |
| Food menu (categories + items) | `src/content/menu.ts` — **ONLINE MENU SEED**; replace with dine-in PDF when final |
| Drinks | `src/content/drinks.ts` |
| Functions copy + packages | `src/content/functions.ts` |
| Royal CC copy | `src/content/royalCc.ts` |
| Reservation “good to know” bullets | `src/content/faqs.ts` |

## Media

- **Hero video:** add `public/hero.mp4` (H.264 + AAC, muted loop). Until then, poster `public/images/hero-poster.svg` shows under the overlay.
- **Cutouts:** `public/cutouts/*.svg` (transparent); swap for PNG when you have photography.

## Analytics (`dataLayer`)

`src/lib/analytics.ts` pushes: `order_click` (with `provider`, `mode`), `reservation_click`, `function_enquiry_submit`, `contact_submit`, `phone_click`, `email_click`.

## Routes

`/`, `/food`, `/drinks`, `/order`, `/reservations`, `/functions`, `/royal-easeys-cc`, `/shop`, `/vouchers`, `/contact`, plus `sitemap.xml`. Legacy URLs redirect in `next.config.ts` (e.g. `/menu` → `/food`).

## Replace later

- Dine-in **PDF menu** as source of truth (swap `menu.ts` or wire a CMS).
- Real **booking** iframe URL (`site.reservationsEmbedUrl`).
- Confirmed **pickup / delivery** provider URLs and naming.
- **Commerce** for shop + vouchers providers.
