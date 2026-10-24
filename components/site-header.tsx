'use client'

import { useEffect, useState } from 'react'

import { FishMark } from './fish-mark'

const links = [
  { href: '#characters', label: '角色' },
  { href: '#actions', label: '动作' },
  { href: '#abilities', label: '能力' },
  { href: '#models', label: '模型' },
  { href: '#download', label: '下载' },
  { href: '#faq', label: '问答' },
]

export const repoUrl = 'https://gitee.com/kallen-noelle/airi'
export const releasesUrl = `${repoUrl}/releases`

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
        <a className="brand" href="#top" aria-label="aipetdex 首页">
          <FishMark className="brand-mark" />
          <span>aipetdex</span>
          <span className="brand-sub">AI DESKTOP PET</span>
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
