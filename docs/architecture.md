# Architecture proposal

Status: Nuxt application scaffold implemented. CMS, media storage, and hosting remain planned.

## Stack

Confirmed stack: Nuxt 4 with Vue 3, strict TypeScript, and Tailwind CSS 4 through its Vite plugin. The scaffold uses app/pages, app/components, app/assets/css, and app/app.config.ts. Landing copy is held in typed application configuration until authored content is introduced.

Start with file-based authored content once the reader pages need it. Nuxt Content is the first candidate to evaluate. Its static deployment support makes an initially simple public site feasible. Browser editing is a separate capability: evaluate Nuxt Studio against the DM's actual workflow before committing to it or another CMS. Do not assume a static host alone can provide authenticated editing.

Official references checked during planning:

- [Nuxt Content static deployment](https://content.nuxt.com/docs/deploy/static)
- [Nuxt Studio browser editing](https://content.nuxt.com/blog/studio-oss)
- [Studio Git provider integration](https://content.nuxt.com/docs/studio/providers)

Resolved dependency versions are recorded in package-lock.json. Hosting, CMS provider, login method, and media storage remain undecided.

## Intended layout

This is a target layout, not a request to create empty folders. Adapt to the installed Nuxt version's conventions.

```text
app/
  pages/              Route composition: landing, start, articles, library
  layouts/            Shared reader shell
  components/
    ui/               Reusable controls with no lore dependencies
    landing/          Splash and introductory sections
    content/          Article and media presentation
  composables/        Shared reactive behavior when needed
  assets/css/         Theme tokens, typography, motion
content/              Public-safe, authored articles and introductions
shared/               Types and pure validation used across boundaries
public/               Small public assets, favicon, optimized images
server/               Only when a server capability is implemented
tests/                Focused behavior and integration tests
docs/                 Product scope and architectural decisions
```

Use framework/content configuration for collection schemas and asset references. Add server code, global state, and repository layers only when a concrete feature requires them.

## Content shape

Define and validate these records when building the content phase:

- Article: stable ID, unique slug, title, summary, category, tags, body, draft/published status, publication/update dates, player-safe flag, and optional cover/attachments.
- Media: stable ID, image/video/document kind, URL or storage key, title, accessible description, optional poster/captions, content type, optional size/duration, and source/credit information.
- Landing configuration: approved introduction, splash media reference, fallback image, and entry action.

Keep canon review as an editorial field or process distinct from publication status. Prefer Markdown or constrained structured content over arbitrary executable component markup. Validate unique routes, required metadata, allowed media protocols/providers, and referenced assets at build or publish time.

Public output must contain only published, player-safe records. Enforce this before delivery, including article routes, generated payloads, indexes, and media. Keep confidential drafts outside the public repository/build inputs; a public Git history would expose them even if the site excluded them.

## Editing and hosting path

Initially, developer-maintained content is acceptable while the splash and reading experience are being designed. It is not the final solution for nontechnical contributors.

The eventual author flow is: sign in, create or edit, attach media, preview, save a draft, publish, and revise or restore. Decide whether contributors can publish directly or the DM reviews their drafts. Evaluate the editor with a real article, a Chinese title, an image, a document attachment, and a video before selecting it.

For Git-backed publishing, document that edits need a successful build/deployment to reach readers. For a runtime CMS, define cache refresh and failure behavior. In either case, require server-enforced write access and keep credentials out of browser code.

Store large media outside Git, using a video provider or object storage suited to the selected host. References in content should survive layout changes. The editor needs file-type/size checks, useful upload progress/errors, and descriptive attachment links. Choose providers when asset sizes, budget, and hosting preferences are known.

## Splash design boundary

Use a replaceable visual layer with a static poster underneath, title and short approved introduction above it, and an immediately usable entry link. A CSS motion prototype can establish layout before the DM supplies artwork. Do not infer a visual genre or fictional history from the world's name alone.

Animate opacity and transforms where practical. Respect reduced motion, provide pause for ongoing animation, and keep the introductory text usable when media fails or JavaScript is unavailable. Avoid a WebGL engine unless the approved design calls for it.

