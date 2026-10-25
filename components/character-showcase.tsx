'use client'

import type { CSSProperties } from 'react'

import type { SiteCharacter } from '@/lib/characters'

import { useCallback, useEffect, useRef, useState } from 'react'

import { characters } from '@/lib/characters'

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
              style={{ '--tab-accent': item.accent } as CSSProperties}
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
    </main>
  )
}
