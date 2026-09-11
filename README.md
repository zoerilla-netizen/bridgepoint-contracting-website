# Bridgepoint Contracting — Website

A Next.js website for Bridgepoint Contracting LLC. Built to be deployed
through GitHub + Vercel and to be easy for a non-developer to update.

## 1. File structure

```
bridgepoint-site/
├── app/
│   ├── layout.js        # Root layout: fonts, page metadata/SEO
│   ├── page.js           # Home page — assembles all sections in order
│   └── globals.css       # Global styles, colors, the "bridge line" motif
├── components/
│   ├── Nav.js             # Header nav + mobile hamburger menu
│   ├── Hero.js            # Home hero section
│   ├── WhatWeDo.js        # Services list
│   ├── Approach.js        # 4-step process (Identify/Qualify/Compete/Perform)
│   ├── AIGovCon.js        # AI for GovCon section
│   ├── WhoWeHelp.js       # Industries list
│   ├── Capabilities.js    # Capabilities Statement request block (Google Form)
│   ├── About.js           # About section
│   ├── Contact.js         # Contact form + contact details
│   ├── Footer.js          # Site footer
│   └── ImageSlot.js       # Handles image display + placeholder fallback
├── config/
│   └── site.js            # <-- EDIT HERE: company info, phone, email, Google Form URL, nav links
├── public/
│   └── images/             # <-- Put your image files here (see images/README.md)
├── package.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 2. Where to change things

Everything you're likely to update lives in **`config/site.js`**:

- Company name, tagline, email, phone → edit the `SITE` object.
- Google Form link → edit `GOOGLE_FORM_URL` at the top of the file.
- Navigation menu items → edit the `NAV_LINKS` array.

Images → drop files into **`public/images/`** using the filenames listed
in `public/images/README.md` (`hero.jpg`, `about.jpg`, `ai-govcon.jpg`,
optionally `logo.svg`). No code edits required.

Logo → by default the nav shows the text "BRIDGEPOINT." To use a real
logo image instead, open `components/Nav.js` and follow the comment
right above the logo link — it shows exactly what to swap in.

Service list, process steps, and industries → each has its own small
array at the top of `components/WhatWeDo.js`, `components/Approach.js`,
and `components/WhoWeHelp.js`. Add, remove, or edit entries there.

## 3. Run it locally (optional, to preview changes)

You'll need [Node.js](https://nodejs.org) (version 18 or later) installed.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## 4. Put it on GitHub

1. Create a new repository on [github.com](https://github.com) (e.g. `bridgepoint-website`). Leave it empty — no README/license.
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bridgepoint-website.git
   git push -u origin main
   ```

## 5. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in (you can sign in directly with your GitHub account).
2. Click **Add New → Project**.
3. Select the `bridgepoint-website` repository you just pushed.
4. Vercel auto-detects Next.js — leave the default build settings as-is.
5. Click **Deploy**. In about a minute you'll get a live URL like `bridgepoint-website.vercel.app`.

Every time you push a change to the `main` branch on GitHub, Vercel
automatically rebuilds and redeploys the site.

## 6. Connect your domain (bpointcontracting.com)

1. In your Vercel project, go to **Settings → Domains**.
2. Type `bpointcontracting.com` and click **Add**. Also add `www.bpointcontracting.com` if you want the `www` version to work too.
3. Vercel will show you DNS records to add (usually an `A` record for the root domain and a `CNAME` for `www`).
4. Go to wherever you registered `bpointcontracting.com` (e.g. GoDaddy, Namecheap, Google Domains) and open its DNS settings.
5. Add the exact records Vercel showed you in step 3.
6. Wait for DNS to propagate (usually a few minutes, sometimes up to 24-48 hours). Vercel will show a green checkmark next to the domain once it's live, and will automatically issue a free SSL certificate (so the site loads as `https://bpointcontracting.com`).

## 7. Updating the live site later

To change text, images, the Google Form link, or contact info:

1. Edit the relevant file (see section 2 above).
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update site content"
   git push
   ```
3. Vercel redeploys automatically within a minute or two.

You can also edit files directly on GitHub.com (click the pencil icon
on any file) if you'd rather not use the command line — GitHub will
create the commit for you, and Vercel will still redeploy automatically.

## 8. About the contact form

The contact form works out of the box with no backend: submitting it
opens the visitor's email app with a pre-filled message addressed to
the email in `config/site.js`. If you'd rather have submissions land
directly in an inbox or spreadsheet without opening the visitor's mail
app, connect a form service such as Formspree or EmailJS — the form
fields themselves don't need to change, only the `handleSubmit`
function in `components/Contact.js`.
