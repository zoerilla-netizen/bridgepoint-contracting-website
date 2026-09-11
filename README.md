# Bridgepoint Contracting LLC — Website

A Next.js + Tailwind CSS site with four pages: Home, Capabilities, About,
and Contact.

## File structure

```
bridgepoint-contracting/
├── src/
│   ├── config/
│   │   └── siteConfig.js        ⭐ EDIT THIS FILE for content, contact info,
│   │                                the Google Form URL, image/logo paths,
│   │                                nav links, markets, process steps,
│   │                                and about-page principles
│   ├── app/
│   │   ├── layout.tsx            Root layout: fonts, SEO defaults, Nav/Footer
│   │   ├── globals.css           Base styles
│   │   ├── page.tsx              HOME
│   │   ├── capabilities/page.tsx CAPABILITIES
│   │   ├── about/page.tsx        ABOUT
│   │   └── contact/page.tsx      CONTACT
│   └── components/
│       ├── Nav.tsx, Footer.tsx, SectionLabel.tsx
│       ├── Hero.tsx, MarketsSection.tsx, ProcessSection.tsx,
│       │   ApproachSection.tsx, PartnershipsSection.tsx, CapabilitiesCTA.tsx
├── public/
│   ├── favicon.ico                The one file NOT inside /images/ (browsers
│   │                                require it at the top level of /public/)
│   └── images/                    ⭐ EVERY photo and the logo live here —
│       ├── hero-main.jpg              one folder, nothing nested
│       ├── construction-01.jpg
│       ├── facility-01.jpg
│       ├── real-estate-01.jpg
│       ├── about-main.jpg
│       ├── partners-01.jpg
│       └── logo.png
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── postcss.config.js
```

---

## Uploading your images and logo

Everything lives in **one folder: `public/images/`**. No subfolders, nothing
to hunt for. To replace a photo or the logo, just upload a file with the
exact same name, overwriting the placeholder:

| File to upload | Exact filename | Where it's used |
|---|---|---|
| Hero photo | `hero-main.jpg` | Home page banner |
| Construction photo | `construction-01.jpg` | Home + Capabilities |
| Facility Maintenance photo | `facility-01.jpg` | Home + Capabilities |
| Real Estate photo | `real-estate-01.jpg` | Home + Capabilities |
| About photo | `about-main.jpg` | About page |
| Partners photo | `partners-01.jpg` | Home page partnerships section |
| Logo | `logo.png` | Nav bar + footer |

The **favicon** (`favicon.ico`) is the one exception — it stays directly in
`public/`, not in `public/images/`, because browsers specifically look for
it at that top-level location.

---

## Replacing files on GitHub (simple, no local setup needed)

You can do this entirely from github.com, in your browser:

1. Go to your repository on GitHub.
2. Click into the `public/images/` folder.
3. Click **Add file → Upload files** (top right).
4. Drag in your new image — as long as it's named exactly the same as the
   file you're replacing (e.g. `hero-main.jpg`), GitHub will show "This
   file already exists" and ask to replace it.
5. Scroll down, add a short commit message (e.g. "Update hero photo"), and
   click **Commit changes**.

That's it — no downloads, no code editor required.

---

## Vercel — nothing extra to do

Vercel is already connected to watch your GitHub repository. Every time you
commit a change (like the upload above), Vercel automatically rebuilds and
redeploys the live site within a minute or two — you don't need to log into
Vercel or click anything there.

---

## Other things to edit later

Almost everything else — contact info, the Google Form URL, nav links, the
three Markets, the six process steps, the four About principles — lives in
**`src/config/siteConfig.js`**. Open that file, find the labeled section,
and edit the text directly.

---

## Run it locally (optional, requires Node.js 18+)

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying from scratch (if not already on GitHub/Vercel)

```bash
cd bridgepoint-contracting
git init
git add .
git commit -m "Initial Bridgepoint Contracting website"
git remote add origin https://github.com/YOUR-USERNAME/bridgepoint-contracting.git
git branch -M main
git push -u origin main
```

Then on [vercel.com](https://vercel.com): **Add New… → Project**, select the
repo, leave the default settings, and click **Deploy**. Vercel will give you
a live URL immediately. To use `bpointcontracting.com`, go to your Vercel
project's **Settings → Domains**, add the domain, and add the DNS records
Vercel shows you at your domain registrar.
