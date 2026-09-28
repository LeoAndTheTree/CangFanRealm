# 苍梵界 · CangFanRealm

A new-player introduction to an original D&D world, built with Nuxt 4, Vue 3, strict TypeScript, and Tailwind CSS 4.

Current state: runnable scaffold with a responsive, animated placeholder splash, pause control, reduced-motion support, and an introductory section. Lore and artwork await the DM. CMS, documents, and video hosting are future work.

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

The abstract CSS artwork requires no remote assets and remains visible if external media is unavailable. Replace placeholder copy with DM-approved content before publishing. No CMS or media dependency is installed yet.

- [Agent rules](AGENTS.md)
- [Architecture proposal](docs/architecture.md)
- [Feature phases](docs/project-plan.md)
- [Original notes](idea)

Tailwind follows the [official Nuxt Vite integration](https://tailwindcss.com/docs/installation/framework-guides/nuxt).

