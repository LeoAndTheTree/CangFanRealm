# 苍梵界 website plan

## Purpose

Introduce new players to the DM's original D&D world with an atmospheric first impression and a short, approachable reading path. The original `idea` notes also propose a possible questionnaire; that remains exploratory.

## Phase 0 — Project foundation

- Establish repository agent rules and architecture boundaries.
- Record a proposed familiar stack without committing to hosting or a CMS.
- Distinguish supplied canon from placeholders and public information from spoilers.

Status: project rules and a runnable Nuxt/Vue/TypeScript/Tailwind scaffold are implemented. The landing page includes an animated CSS placeholder, pause control, reduced-motion support, and an introductory placeholder. DM-approved content and artwork are still outstanding.

## Phase 1 — Dynamic splash and introduction

- Responsive landing page titled 苍梵界.
- Animated visual treatment that can accept the DM's assets later.
- Static fallback, reduced-motion behavior, motion pause, and an immediate entry action.
- Short introduction using DM-approved copy; clearly marked placeholders during development.
- A brief optional path into deeper reading, populated only when actual content exists.

Done when a new player can enter immediately on mobile or desktop, read the introduction without waiting for media, and navigate with a keyboard. Verify fallback and reduced-motion behavior. Do not publish invented lore as real content.

## Phase 2 — Reading and media library

- Article pages for world introductions and later blog-style posts.
- Browsable document/video entries with concise descriptions and accessible viewing/download links.
- Metadata and content validation, useful empty/missing-content states, and stable shareable URLs.
- Add categories or search when the content volume makes them useful.

Done when representative DM-approved articles, one document, and one video work on direct links and mobile, and drafts/spoilers are excluded from all public outputs.

## Phase 3 — Nontechnical authoring

- Evaluate an existing browser editor before building a custom CMS.
- Authenticated editing, drafts, previews, media attachment, publication, and revision recovery.
- Select editor/publisher roles based on how the DM wants to review changes.
- Explain publication delays and show actionable save/upload errors.

Done when a nontechnical contributor can create and revise a Chinese-language article, attach media, preview it, and publish through the agreed workflow without touching code. Verify unauthorized writes fail and drafts do not reach readers.

## Later possibilities

A short onboarding questionnaire may help direct players to relevant content. Its questions and outcomes need the DM's input. It is not part of the initial build. Accounts for readers, character sheets, campaign tracking, and interactive maps are not currently requested.

## Inputs that improve the first build

- DM-approved short introduction and the first few things a new player should know.
- Visual references, logo/art/video assets, available credits, and usage permissions.
- Whether all content is public and spoiler-free or future restricted material is needed.
- Stack confirmed: Nuxt + Vue + TypeScript + Tailwind.

CMS and hosting decisions can wait until their phase; missing artwork does not prevent a clearly labeled local layout prototype.

