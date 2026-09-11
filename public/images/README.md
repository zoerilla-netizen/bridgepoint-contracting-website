# Where to put your images

Drop image files directly in this folder (`/public/images/`) using these
exact filenames. Each one is already wired up on the site — no code
changes needed.

| Filename         | Used on                | Suggested shape         |
|-------------------|-------------------------|--------------------------|
| `hero.jpg`         | Home page hero          | Portrait, roughly 4:5    |
| `about.jpg`        | About section           | Landscape, roughly 4:3   |
| `services.jpg`     | (reserved for future use) | Landscape, roughly 4:3 |
| `ai-govcon.jpg`     | AI for GovCon section   | Landscape, roughly 4:3   |
| `logo.svg`          | Replaces the text logo in the nav — see the comment in `components/Nav.js` | — |

Until a file exists at one of these paths, the site shows a plain dark
placeholder panel instead of a broken image, so it always looks
finished. As soon as you add a correctly named file here, it appears
automatically the next time the site is built/deployed.

Keep file sizes reasonable (under ~500KB each) so pages load quickly.
