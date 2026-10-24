# AIRI Pet Site

Product site for the Windows desktop pet. It uses Next.js static export and deploys to EdgeOne Pages.

## What this app does

- Explains the product, the character, and the model roadmap.
- Plays the packaged demo animation clips.
- Links the Windows installer to GitHub Releases.

## Use this app

```sh
cd EdgeOne
pnpm install
pnpm dev
```

The dev server listens on `http://localhost:3100`.

Build the static site:

```sh
pnpm build
```

The output is in `out/`.

## Deploy to EdgeOne Pages

Connect the repository, set the project root to `EdgeOne`, and use the settings in `edgeone.json`:

| Setting | Value |
| --- | --- |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Output directory | `./out` |
| Node version | `22.11.0` |

EdgeOne Pages supports Next.js only in static export mode. Keep `output: 'export'` and `images.unoptimized: true` in `next.config.mjs`.

## Structure

| Path | Content |
| --- | --- |
| `app/` | Layout, page, and global styles. |
| `components/` | Page sections and client widgets. |
| `public/animations/demo/` | Transparent video clips copied from the stage demo. |
| `public/fonts/` | Subset of Chill Round M and Departure Mono. |
| `edgeone.json` | EdgeOne Pages build and cache settings. |

## Do not use this app

Do not add server features here. The site is a static export, so route handlers, SSR, and middleware do not run on EdgeOne Pages.

## Update the installer link

The download button reads `releasesUrl` in `components/site-header.tsx`. Change it when the installer moves to a dedicated release page.
