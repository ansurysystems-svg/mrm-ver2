# Project Guidelines

## Architecture
Static multi-page website (HTML/CSS/vanilla JS) for a law firm. Key pages: `index.html`, `aboutus.html`, `services.html`, `contact.html`, `booking.html`, `thank-you.html`.

- Styles in `css/` (global `style.css` + page-specific files). Client logic centralized in `js/main.js` (initializer hub).
- Calendly integration for booking on `booking.html`.
- Assets in `assets/`.

See [README.md](README.md) for feature overview and project structure.

## Build and Test
No build step required. Edit files directly.

- Local preview: `python -m http.server 8080` or `npx http-server . -p 8080 -c-1`
- With functions: `netlify dev`
- Deploy: Push to git (Netlify auto-deploys from main branch)

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for Netlify setup and function integration.

## Conventions
- `js/main.js` exposes initializer functions (e.g., `initializeContactForm`, `initializeTestimonials`). Modify behavior there.
- CSS: Global rules in `css/style.css`; page-specific files (e.g., `css/home.css`). Tailwind via CDN—no local build.
- Forms: `contact.html` posts to Formspree. `netlify/functions/zoho-submit.js` is deprecated (returns 410).
- New functions: `netlify/functions/` with `exports.handler = async (event) => { ... }`, bundleable by esbuild.
- Deep links redirect to `index.html` via `netlify.toml`.

Keep changes minimal and localized. Avoid adding build pipeline unless requested.

## For AI Agents
- Reference exact files and lines in changes.
- Prefer minimal patches; explain integration with `js/main.js`.
- For new functions, include test event and document required environment variables.
