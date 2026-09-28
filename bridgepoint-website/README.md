# Bridgepoint Contracting — website

Next.js 14 (App Router) + plain CSS. No Tailwind or other build dependencies.

## Deploy
1. Replace the contents of your GitHub repo with this folder (delete the old files first so nothing stale remains).
2. Vercel redeploys automatically. Framework preset must be **Next.js**.

## Edit routine content
Everything routine lives in `src/config/siteConfig.ts`: UEI, CAGE, SAM status/expiration, contact info, NAICS codes, service lists, form dropdown options.
Photos are in `public/images/` — replace a file, keeping the same filename.

## Forms
Forms open the visitor's email app, pre-filled and addressed to the company email. To receive submissions directly,
create a Formspree (or similar) endpoint and paste its URL into `FORM_ENDPOINT` in `siteConfig.ts`.

## Local development
npm install && npm run dev
