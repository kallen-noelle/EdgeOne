'use client'

import { useEffect, useState } from 'react'

import { FishMark } from './fish-mark'
import { ThemeToggle } from './theme-toggle'

const githubUrl = 'https://github.com/kallen-noelle/aipetdex'

const links = [
  { href: '#characters', label: '角色' },
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

        <div className="nav-actions">
          <a
            className="icon-btn"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="项目 GitHub 仓库"
            title="项目 GitHub 仓库"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>

        <a className="btn btn-primary btn-small nav-cta" href={releasesUrl} target="_blank" rel="noreferrer">
          下载安装包
        </a>
      </div>
    </header>
  )
}
