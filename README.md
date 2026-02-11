# SKYTUNNEL Site

Dark neon glass UI built with Next.js 14 App Router, Tailwind CSS, Lucide icons, and Framer Motion.

## Pages
- `/` – Landing page
- `/login` – Sign-in screen
- `/setup` – Onboarding flow

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Static export

This project is configured for static export.

```bash
npm run build
npm run export
```

The output will be in the `out/` folder.

## GitHub Pages (username: quphyll-bot)

1. Create a new repo on GitHub (for example `skytunnel-site`).
2. Add the remote and push:

```bash
git remote add origin git@github.com:quphyll-bot/skytunnel-site.git
git push -u origin main
```

3. Enable GitHub Pages for the repo and set it to deploy from the `gh-pages` branch.
4. Deploy the `out/` folder:

```bash
npm run build
npm run export
npx gh-pages -d out
```

If you plan to host from a subpath, update `next.config.mjs` with a `basePath` and `assetPrefix` matching your repo name.
