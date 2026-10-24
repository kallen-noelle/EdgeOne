'use client'

import { useEffect, useState } from 'react'

import { FishMark } from './fish-mark'

const links = [
  { href: '#actions', label: '动作' },
  { href: '#abilities', label: '能力' },
  { href: '#models', label: '模型' },
  { href: '#download', label: '下载' },
  { href: '#faq', label: '问答' },
]

export const releasesUrl = 'https://github.com/moeru-ai/airi/releases'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="AIRI 桌宠首页">
          <FishMark className="brand-mark" />
          <span>AIRI 桌宠</span>
          <span className="brand-sub">DESKTOP PET</span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {links.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a className="btn btn-primary btn-small nav-cta" href={releasesUrl} target="_blank" rel="noreferrer">
          下载安装包
        </a>
      </div>
    </header>
  )
}
