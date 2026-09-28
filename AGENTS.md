# 苍梵界 project rules

## Purpose and scope

Build an inviting introduction to the DM's original D&D setting, 苍梵界. Prioritize new players, short reading paths, and gradual discovery. Read `docs/project-plan.md` for scope and `docs/architecture.md` before changing architecture. Preserve `idea` as the original notes.

The initial deliverable is a dynamic landing experience and a short introduction. Documents, videos, and browser-based authoring are later phases. Implement the requested phase without adding speculative campaign managers, character builders, or social features.

## Technical direction

- Confirmed stack: Nuxt (Vue), strict TypeScript, and Tailwind CSS. Use Nuxt 4 app-directory conventions and the Tailwind Vite plugin; do not introduce React.
- Follow framework conventions and the ownership boundaries in `docs/architecture.md`. Create directories only when they contain a real implementation.
- Keep route files focused on composition. Place reusable presentation in components, reusable reactive behavior in composables, and content validation/querying outside presentation components.
- Keep authored world content outside application components. Use typed, validated content records; do not build a generic provider abstraction before a second source is needed.
- Centralize colors, typography, spacing, and motion tokens. Use Tailwind for layout and CSS for bespoke splash effects. Add animation dependencies only when CSS cannot reasonably deliver the effect.
- On scaffolding, select mutually compatible supported versions, use npm with a committed lockfile unless the user chooses otherwise, and document actual development, type-check, and build commands.

## Lore and editorial boundaries

- The DM is the authority on canon. Do not invent geography, factions, characters, history, or game rules and present them as established lore.
- Clearly label prototype text and assets as placeholders. Preserve supplied Chinese names exactly; default to Simplified Chinese reader-facing copy until the user requests another language.
- Treat this as a public, spoiler-safe introduction. Do not put DM secrets or unpublished sensitive material in public assets, client bundles, generated routes, search indexes, or browser-delivered data. A hidden link or client-side filter is not access control.
- Separate publication status from lore approval. A draft is not automatically approved canon. Only explicitly published, player-safe entries should enter public output.
- Keep summaries short and deeper reading optional. Use approved content for reading-time estimates and avoid a large glossary as a prerequisite to entering the site.

## Experience and media

- The splash must allow immediate access to the introduction. Never require an animation or video to finish.
- Support keyboard navigation, visible focus, readable Chinese typography, mobile layouts, and reduced motion. Long-running decorative motion needs a pause control.
- Provide a static splash fallback. Do not autoplay sound. Load large video only when needed; provide a poster and controls, and captions/transcripts for informative video when supplied.
- Keep replaceable asset references in content/configuration. Large video and document originals belong in suitable media storage rather than the source repository. Record source, credit, and permission information supplied by the DM.
- Render authored content through a constrained renderer. Do not execute scripts or arbitrary Vue/HTML from editor content. Validate attachment and embed URLs and restrict embeds to supported providers.

## Validation and completion

- Run the implemented project's type check and production build after code changes. Add focused tests for meaningful behavior such as public-content filtering and content validation; avoid tests that merely duplicate markup.
- For UI work, verify small and large screens, keyboard operation, reduced motion, media failure fallbacks, and direct entry to content routes. Report checks that could not be run.
- When publishing functionality is added, verify server-side authorization, draft exclusion, upload limits, and recovery from failed saves. Never describe local browser storage as shared publishing.
- Keep documentation aligned with actual implementation. Clearly distinguish planned, implemented, and verified features.

