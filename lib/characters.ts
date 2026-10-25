import charactersJson from '@/data/characters.json'

export interface SiteCharacter {
  id: string
  name: string
  roman: string
  role: string
  description: string
  accent: string
  clips: number
  idle: string
  /** Talk chain. `null` means the character falls back to the idle clip. */
  talk: string | null
  /** Thinking chain. `null` means the character falls back to the idle clip. */
  thinking: string | null
  /** One-shot reaction used for the happy and poke controls. */
  click: string | null
  action: string | null
  actionLabel: string | null
}

/**
 * Curated character data for the site.
 *
 * Keep `data/characters.json` in sync with the clips in `public/characters/`.
 * The desktop app reads the full registry from the monorepo `assets/` folders.
 */
export const characters = charactersJson as SiteCharacter[]

export const characterCount = characters.length

export const totalClips = characters.reduce((sum, character) => sum + character.clips, 0)
