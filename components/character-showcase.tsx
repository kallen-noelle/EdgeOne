'use client'

import type { CSSProperties } from 'react'

import type { SiteCharacter } from '@/lib/characters'

import { useCallback, useEffect, useRef, useState } from 'react'

import { characters } from '@/lib/characters'

const GITHUB_URL = 'https://github.com/kallen-noelle/aipetdex'
const FADE_MS = 180

type Chain = 'idle' | 'talk' | 'thinking' | 'happy' | 'poke'

interface ChainButton {
  key: Chain | 'pause'
  label: string
}

const chainButtons: ChainButton[] = [
  { key: 'idle', label: 'Idle' },
  { key: 'talk', label: 'Talk' },
  { key: 'thinking', label: 'Think' },
  { key: 'happy', label: 'Happy' },
  { key: 'poke', label: 'Poke' },
  { key: 'pause', label: 'Pause' },
]

function clipFor(character: SiteCharacter, chain: Chain) {
  if (chain === 'talk')
    return character.talk ?? character.idle

  if (chain === 'thinking')
    return character.thinking ?? character.idle

  if (chain === 'happy' || chain === 'poke')
    return character.click ?? character.action ?? character.idle

  return character.idle
}

function isOneShot(chain: Chain) {
  return chain === 'happy' || chain === 'poke'
}

/**
 * Interactive character stage that mirrors the pet app stage.
 *
 * Two stacked videos crossfade on every clip change, so the swap never shows
 * an empty frame. The site loads one clip per chain, not the full pack.
 */
export function CharacterShowcase() {
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const activeSlotRef = useRef<'a' | 'b'>('a')
  const chainRef = useRef<Chain>('idle')
  const characterRef = useRef<SiteCharacter>(characters[0])

  const [index, setIndex] = useState(0)
  const [activeSlot, setActiveSlot] = useState<'a' | 'b'>('a')
  const [chain, setChain] = useState<Chain>('idle')
  const [clip, setClip] = useState(characters[0].idle)
  const [paused, setPaused] = useState(false)

  const character = characters[index]

  const playChain = useCallback((next: Chain, target: SiteCharacter) => {
    const nextClip = clipFor(target, next)
    const from = activeSlotRef.current
    const to = from === 'a' ? 'b' : 'a'
    const video = to === 'a' ? videoARef.current : videoBRef.current
    if (!video)
      return

    video.src = nextClip
    video.loop = !isOneShot(next)
    void video.play().catch(() => {})

    activeSlotRef.current = to
    chainRef.current = next
    setActiveSlot(to)
    setChain(next)
    setClip(nextClip)
    setPaused(false)
  }, [])

  const selectCharacter = (next: SiteCharacter, nextIndex: number) => {
    characterRef.current = next
    setIndex(nextIndex)
    playChain('idle', next)
  }

  const togglePause = () => {
    const video = activeSlotRef.current === 'a' ? videoARef.current : videoBRef.current
    if (!video)
      return

    if (paused) {
      void video.play().catch(() => {})
      setPaused(false)
    }
    else {
      video.pause()
      setPaused(true)
    }
  }

  useEffect(() => {
    void videoARef.current?.play().catch(() => {})
  }, [])

  useEffect(() => {
    const handleEnded = (event: Event) => {
      const target = event.currentTarget
      const slot = target === videoARef.current ? 'a' : 'b'
      if (slot !== activeSlotRef.current || !isOneShot(chainRef.current))
        return

      playChain('idle', characterRef.current)
    }

    const videos = [videoARef.current, videoBRef.current]
    for (const video of videos)
      video?.addEventListener('ended', handleEnded)

    return () => {
      for (const video of videos)
        video?.removeEventListener('ended', handleEnded)
    }
  }, [playChain])

  return (
    <main
      className="showcase"
      id="stage"
      style={{ '--stage-accent': character.accent, '--fade': `${FADE_MS}ms` } as CSSProperties}
    >
      <div className="showcase-tabs" role="tablist" aria-label="选择角色">
        {characters.map((item, itemIndex) => {
          const active = item.id === character.id
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`showcase-tab${active ? ' is-active' : ''}`}
              style={active ? { borderColor: item.accent, color: item.accent } : undefined}
              onClick={() => selectCharacter(item, itemIndex)}
            >
              {item.name}
            </button>
          )
        })}
      </div>

      <div className="showcase-stage">
        <video
          ref={videoARef}
          className={`showcase-video${activeSlot === 'a' ? ' is-active' : ''}`}
          src={characters[0].idle}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          aria-label={`${character.name}动画`}
        />
        <video
          ref={videoBRef}
          className={`showcase-video${activeSlot === 'b' ? ' is-active' : ''}`}
          muted
          loop
          playsInline
          preload="auto"
          aria-label={`${character.name}动画`}
        />
      </div>

      <p className="showcase-caption">
        chain
        {' '}
        <span>{chain}</span>
        {' · '}
        clip
        {' '}
        <span>{clip.replace(/^\//, '')}</span>
      </p>

      <div className="showcase-actions">
        {chainButtons.map(button => (
          <button
            key={button.key}
            type="button"
            className={`showcase-btn${button.key === chain ? ' is-active' : ''}`}
            onClick={() => {
              if (button.key === 'pause')
                togglePause()
              else
                playChain(button.key, character)
            }}
          >
            {button.key === 'pause' && paused ? 'Resume' : button.label}
          </button>
        ))}
      </div>

      <a className="showcase-github" href={GITHUB_URL} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
        </svg>
        项目源码 · kallen-noelle/aipetdex
      </a>
    </main>
  )
}
