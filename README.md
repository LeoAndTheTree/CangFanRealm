# 苍梵界 · CangFanRealm

A new-player introduction to an original D&D world, built with Nuxt 4, Vue 3, strict TypeScript, and Tailwind CSS 4.

Current state: scroll-driven splash with the 苍梵界 title, five scattered abstract image placeholders, and a second world-map scene. Native scrolling drives staggered fades and movement with no animation dependency. The introduction is immediately accessible. Pausing motion, reduced motion, or disabling JavaScript presents both scenes in normal document flow. Lore and artwork await the DM. CMS, documents, and video hosting are future work.

## Development

Use Node 24 LTS (24.11 or newer) with npm. Node 22.19+ is also supported. From this directory:

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Nuxt. Other commands:

```sh
npm run typecheck
npm run build
npm run preview
npm run generate
```

`build` creates a Node server in `.output`; `generate` produces prerendered output for a future static deployment. No hosting provider is configured. Dependencies belong in local `node_modules`; commit `package-lock.json` and use `npm ci` for reproducible installs. Do not install Nuxt, Vue, or Tailwind globally.

Node.js 24 LTS and npm are now installed system-wide using the official Windows installer. Open a new terminal (or restart your editor) after installation to pick up PATH changes. The initial scaffold used the desktop app's bundled runtime; the project has no dependency on that runtime. In PowerShell, use npm.cmd if local execution policy prevents npm.ps1 from running.

## Editing

- `app/pages/index.vue`: landing route and introduction.
- `app/components/landing/Splash.vue`: splash presentation and pause interaction.
- `app/app.config.ts`: typed placeholder copy, separate from presentation.
- `app/assets/css/main.css`: Tailwind import, theme tokens, and motion.
- `nuxt.config.ts`: Nuxt, metadata, and Tailwind Vite integration.

The abstract CSS artwork requires no remote assets. Set `landing.images` and `landing.map` in `app/app.config.ts` to replace assets (`src`, `alt`, and labels). Empty or failed image sources retain the local placeholder. The map deliberately contains no invented geography. Replace placeholder copy with DM-approved content before publishing. No CMS or media dependency is installed yet.

- [Agent rules](AGENTS.md)
- [Architecture proposal](docs/architecture.md)
- [Feature phases](docs/project-plan.md)
- [Original notes](idea)

Tailwind follows the [official Nuxt Vite integration](https://tailwindcss.com/docs/installation/framework-guides/nuxt).


## Splash verification

Type checking and production build passed. Browser checks covered desktop and 390px mobile layouts, forward scrolling into the map scene, the pause/static toggle, keyboard skip-link focus and activation, and direct `/#introduction` entry. OS reduced-motion emulation, JavaScript-disabled browsing, and failed replacement-image requests were not exercised; those fallback paths were reviewed in source. All current visuals use local CSS and need no media requests.
