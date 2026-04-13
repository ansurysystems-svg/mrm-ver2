# Deployment Guide — Cloudflare Pages (recommended)

This repository is a static multi-page site (HTML/CSS/vanilla JS). It uses CDN-hosted Tailwind, AOS, and Font Awesome, and the contact form posts directly to Formspree. There is no build required, but a harmless `npm run build` script exists that echoes "No build step required".

This guide shows how to deploy the site to Cloudflare Pages, with local preview options.

Important repo files referenced:
- `contact.html` — the contact form action posts to Formspree by default: `https://formspree.io/f/manlrprn`.
- `package.json` — contains a safe `build` script: `echo 'No build step required'`.
- `netlify.toml` — legacy Netlify settings; not required for Cloudflare Pages.

1) Deploy via Cloudflare Pages Web UI
--------------------------------
1. Push your latest code to your GitHub repository.
2. Go to https://pages.cloudflare.com and sign in (or sign up).
3. Click "Create a project" and connect your GitHub repository.
4. Configure the project settings:
	- Framework preset: `None` (or leave blank)
	- Build command: leave blank, or use `npm run build` if the UI requires one. This is safe because the script only echoes a message.
	- Build output directory: `.`
5. Save the settings and deploy.

Notes / gotchas for Cloudflare Pages
- This is a static site, so the deploy only needs the repository root and no build step.
- Cloudflare Pages ignores `netlify.toml`; that file can remain in the repo but does not affect Pages.
- The contact form is still handled by Formspree, so no serverless function configuration is required.
- If the UI complains about a build command, use `npm run build`.

2) Local preview with Cloudflare Pages CLI (optional)
--------------------------------
If you want a local Cloudflare Pages-like preview, install Wrangler and run the Pages dev server.

Install Wrangler:

```powershell
npm install -g @cloudflare/wrangler
```

Run local preview:

```powershell
wrangler pages dev . --port 8080
```

3) Local preview without Cloudflare CLI
--------------------------------
Because this is a static site with CDN assets, you can preview locally with a simple static server.

```powershell
# Python simple server
python -m http.server 8080

# or
npx http-server . -p 8080 -c-1
```

4) Optional: contact form and server-side changes
--------------------------------
- Right now, contact submissions are sent directly to Formspree from `contact.html`.
- If you later want to replace Formspree with a server-side handler, Cloudflare Pages supports Cloudflare Workers and Pages Functions, but that requires a different setup than the old Netlify function flow.
- Do not hard-code any secrets in the repo; use Cloudflare environment variables if you add server-side logic.

5) Troubleshooting
--------------------------------
- If the site does not deploy, verify the build output directory is set to `.` and the repository root is selected.
- If contact submissions fail, confirm `contact.html` still points to the correct Formspree endpoint.
- If you see unexpected redirects, Cloudflare Pages will serve the static files directly from the repo; there is no `netlify.toml` redirect behavior on Pages.

6) Quick checklist before deploying
--------------------------------
- Commit and push all changes to the repo.
- Confirm `contact.html` form target is set to `https://formspree.io/f/manlrprn`.
- Confirm `assets/` includes the required images and `assets/mrm-logo.png` exists.
- Verify that Cloudflare Pages is configured to deploy from the repository root with no build or `npm run build`.

If you want, I can also:
- Update this guide with a short Cloudflare Pages section in `README.md`.
- Help you connect the GitHub repo to Cloudflare Pages step-by-step.
