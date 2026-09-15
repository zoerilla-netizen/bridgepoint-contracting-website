# Bridgepoint Contracting — Full Site (v3)

A cinematic homepage plus five standalone pages, built with Next.js,
Tailwind CSS, and Framer Motion.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — cinematic scroll through all core sections |
| `/solutions` | Full detail on the four business verticals + the Bridgepoint model |
| `/for-contractors` | Contractor-facing overview + relevant verticals + industries |
| `/government` | Government-facing page with real UEI/SAM credentials + Capitol banner |
| `/team-with-us` | Teaming & Contract Execution detail — relationship types |
| `/resources` | Federal Contractor Starter Guide request |
| `/privacy` | Privacy policy |

`/#about` (the About/Mission section) lives on the homepage rather than as
a separate route.

Every button on every page does something real: it either navigates to a
page/section that exists, or opens a pre-addressed email (since no
external forms exist yet). Nothing links to a dead `#` or a blank page.

## File structure

```
bridgepoint-contracting/
├── src/
│   ├── config/
│   │   └── siteConfig.js       ⭐ EDIT: pricing, copy, contact info, UEI/SAM,
│   │                               industries, nav links, resources
│   ├── app/
│   │   ├── layout.tsx           Fonts, SEO, Nav + Footer (shared everywhere)
│   │   ├── page.tsx             Homepage
│   │   ├── solutions/page.tsx
│   │   ├── for-contractors/page.tsx
│   │   ├── government/page.tsx
│   │   ├── team-with-us/page.tsx
│   │   └── resources/page.tsx
│   └── components/
│       ├── Nav.tsx, Footer.tsx
│       ├── PageHeader.tsx        Reusable header for standalone pages
│       ├── PageCTA.tsx           Reusable closing CTA block
│       ├── Hero.tsx, Introduction.tsx, TwoPathways.tsx
│       ├── WhatWeDo.tsx          Four verticals (reused on Home + Solutions)
│       ├── BridgepointModel.tsx, Industries.tsx
│       ├── TeamWithBridgepoint.tsx, GovernmentAgencies.tsx
│       ├── AboutMission.tsx, FinalCTA.tsx
├── public/
│   ├── favicon.ico
│   ├── logo/logo-dark.png, logo-light.png
│   └── images/
│       ├── hero-main.jpg          Homepage hero + Two Pathways
│       ├── construction-01.jpg    Industries (Home, Solutions pages)
│       ├── facility-01.jpg        Industries
│       ├── real-estate-01.jpg     Industries
│       └── about-main.jpg         Government page banner (Capitol dome)
├── package.json
├── tailwind.config.ts
└── ...
```

Every image slot uses a real photo — there are no gray placeholder boxes
anywhere on the site.

## Capability statement requests

Every "Download Capability Statement" button opens your Google Form in a
new tab. The URL lives in one place — `GOOGLE_CAPABILITIES_FORM_URL` at
the top of `src/config/siteConfig.js` — so it's a one-line change if the
form URL ever changes.

## Government credentials

`src/config/siteConfig.js` → `govCredentials`:

```js
export const govCredentials = [
  { label: "UEI", value: "ZK3KPNUE36H1" },
  { label: "SAM Status", value: "Active" },
];
```

Only these two fields are shown, as requested — no CAGE, NAICS, or
certifications. Add more later by adding objects to this array; the layout
adjusts automatically.

## Still open (flagged, not fabricated)

- **The privacy policy is a standard, generic template** — not a
  substitute for legal advice. It's built from your real contact
  information and describes actual current data practices (email
  contact, the Google Form for capability statement requests, no
  cookies/trackers). Have it reviewed by an attorney before relying on
  it, especially if that changes.

## Run it locally (optional, requires Node.js 18+)

```bash
npm install
npm run dev
```

## Deploying

```bash
cd bridgepoint-contracting
git init
git add .
git commit -m "Bridgepoint full site v3"
git remote add origin https://github.com/YOUR-USERNAME/bridgepoint-contracting.git
git branch -M main
git push -u origin main
```

Then on [vercel.com](https://vercel.com): **Add New… → Project**, select the
repo, leave default settings, **Deploy**. Connect `bpointcontracting.com`
under **Settings → Domains** using the DNS records Vercel shows you.

## Latest changes

- **All pricing removed** — no dollar amounts anywhere on the site. The
  four services are described by what they do, not what they cost.
- **Repositioned as a company, not a concept**: the homepage no longer
  says Bridgepoint "operates at the intersection of four things" — it now
  states plainly that Bridgepoint is a federal contracting company that
  offers four services (pulled dynamically from `verticals` in
  `siteConfig.js`, so adding a fifth service updates this section
  automatically).
- **14 new photos added** (from the batch of 15 — file "8" never actually
  arrived in the upload, only 1–7 and 9–15 came through) — real photography
  now appears on every page: the homepage hero, both Two Pathways panels,
  the Real Estate industry photo, the Government page banner, and new
  banner/section images on Solutions, For Contractors, Team With Us,
  Resources, and the homepage About/Mission and Team With Bridgepoint
  sections. The original bridge hero photo wasn't discarded — it's saved as
  `bridge-accent.jpg` and now lives behind the "I'm a contractor" panel.
- Four uploaded images were near-duplicates of others in the same batch
  (two Capitol shots, two hands shots, two chart graphics, two network
  graphics) — only one of each pair was used, to avoid repeating the same
  photo twice on the site.
- One uploaded photo (courthouse with a large American flag) was
  deliberately not used, since the original brief asked to avoid excessive
  flag imagery — happy to add it somewhere specific if you'd like it back.
