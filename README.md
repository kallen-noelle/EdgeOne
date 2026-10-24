# aipetdex Site

Product site for aipetdex, the Windows desktop pet. It uses Next.js static export and deploys to EdgeOne Pages.

## What this app does

- Shows the five built-in characters: 蓝毛小女仆, 橙毛大小姐, 黄毛该溜子, 白毛小龙娘, and 黑毛小狐狸.
- Plays one idle clip for each of the five characters and four action clips.
- Explains the desktop pet features, model support, and download steps.
- Links the Windows installer to the project releases.

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
| `public/characters/` | Idle and action clips for the five characters. |
| `public/fonts/` | Subset of Chill Round M and Departure Mono. |
| `edgeone.json` | EdgeOne Pages build and cache settings. |

## Character clips

The site uses `640 × 360` VP9-alpha webm clips. Each file is a copy of one clip from the repository `assets/` folder. Keep the file names in ASCII so URLs stay simple.

To swap a clip, copy another webm over the file in `public/characters/`. Keep the same file name. Large clips increase the static export size, so prefer clips under 5 MB.

## Do not use this app

Do not add server features here. The site is a static export, so route handlers, SSR, and middleware do not run on EdgeOne Pages.

## Update the installer link

The download button reads `releasesUrl` in `components/site-header.tsx`. The footer reads `repoUrl` and `releasesUrl` from the same file. Change them when the project moves to a new repository.
