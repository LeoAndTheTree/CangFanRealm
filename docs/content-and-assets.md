# Content and asset structure

## Repository boundary

The DM's complete working archive is private source material, not website content. Keep `content/organized thing/` and `content/unorganized things/` outside Git; both paths are ignored. If the archive needs backup or collaboration, use access-controlled storage rather than the public website repository.

Only material intentionally selected for the public, player-safe site belongs in Git. Copy and optimize selected images into `public/media/<feature>/`, where paths match website ownership rather than the archive's temporary organization. Components and content records must reference these published copies, never the raw archive.

This gives each layer one purpose:

- `content/landing.ts`: typed reader-facing copy and public media references.
- `shared/landing-content.ts`: the data contract used by landing content.
- `public/media/landing/`: optimized images owned by the opening scene.
- `public/media/towns/`: optimized images owned by the places scene.
- `content/organized thing/`: local curated source archive, ignored by Git.
- `content/unorganized things/`: local intake archive, ignored by Git.

## Current selection

The first implementation favors images without embedded text.

| Public asset | Source material | Use |
| --- | --- | --- |
| `landing/hero-emblem.jpg` | `background image/large emblem.png` | Opening background |
| `landing/atumaha-overlook.jpg` | `background image/atumaha.png` | Opening collage |
| `landing/desert-city.jpg` | `background image/generic desert city.png` | Opening collage |
| `landing/hillside-town.jpg` | `background image/generic town verticle.png` | Opening collage |
| `landing/mountain-landscape.jpg` | `background image/generic landscape poster verticle.png` | Opening collage |
| `landing/cathedral.jpg` | `background image/generic cathedral poster verticle.png` | Opening collage |
| `towns/atumaha.jpg` | `background image/atumaha horizontal.png` | Places scene: 阿图玛哈城 |
| `towns/lumina-court.webp` | `towns/辉庭城（Lumina Court）3.webp` | Places scene: 辉庭城 |
| `towns/crypt-of-stars.webp` | `towns/星冢陵（Crypt of Stars）.webp` | Places scene: 星冢陵 |

The published selection is about 2.2 MB, compared with roughly 215 MB in the organized archive. The two WebP files are copied as supplied; PNG sources are resized and encoded as JPEGs for this photographic artwork.

## Editorial metadata

The files were supplied by the DM, but creator credit, generation source, and public-use permission have not been recorded. Confirm those details before public deployment, then add them to the relevant content records. Selection for this local build does not itself mean canon approval or publication approval.
