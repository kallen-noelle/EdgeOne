# aipetdex Site

Product site for aipetdex, the Windows desktop pet. It uses Next.js static export and deploys to EdgeOne Pages.

## What this app does

- Shows three built-in characters: 蓝毛大肥鱼, 橙毛大小姐, and 白毛小龙娘.
- Plays interactive idle, talk, thinking, and one-shot reaction clips on the hero stage.
- Explains the desktop pet features, model support, and download steps.
- Links the Windows installer to the project releases.
- Links the source repository from a GitHub icon in the header.
- Switches between the black and white theme. The choice is stored in local storage.

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
| `components/` | Page sections, including the character roster. |
| `data/characters.json` | Character data, including the clip for each animation chain. |
| `public/characters/` | Idle, talk, thinking, and action clips for the three site characters. |
| `public/fonts/` | Subset of Chill Round M and Departure Mono. |
| `edgeone.json` | EdgeOne Pages build and cache settings. |

## Character data

This repository carries its own copy of the site data and clips. It shows three characters only: `main`, `character2`, and `character4`.

`data/characters.json` maps each character to one clip per chain. `talk` and `thinking` can be `null`, and the showcase then falls back to the idle clip. `click` drives the one-shot Happy and Poke buttons.

The clips come from the monorepo `assets/<id>/animations/` folders. When you copy a new clip, keep the ASCII file names in `public/characters/` unchanged.

The site uses `640 × 360` VP9-alpha webm clips. Keep clips under 5 MB to limit the static export size.

Running `pnpm characters:build` at the monorepo root rewrites this data for all five characters. Do not run it while this repository must show three characters.

## Do not use this app

Do not add server features here. The site is a static export, so route handlers, SSR, and middleware do not run on EdgeOne Pages.

## Update the installer link

The download button reads `releasesUrl` in `components/site-header.tsx`. The footer reads `repoUrl` and `releasesUrl` from the same file. Change them when the project moves to a new repository.
