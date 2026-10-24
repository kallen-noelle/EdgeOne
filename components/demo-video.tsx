'use client'

import { useEffect, useRef } from 'react'

interface DemoVideoProps {
  src: string
  label: string
}

export function DemoVideo({ src, label }: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video)
      return

    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      if (query.matches)
        video.pause()
      else
        void video.play().catch(() => {})
    }

    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      aria-label={label}
    />
  )
}
