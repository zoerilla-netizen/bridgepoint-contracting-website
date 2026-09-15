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
