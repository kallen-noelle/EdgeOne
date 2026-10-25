'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'aipetdex-theme'

type Theme = 'dark' | 'light'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const next: Theme = stored === 'light' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <button
      type="button"
      className="icon-btn"
      aria-label={theme === 'dark' ? '切换到白色主题' : '切换到黑色主题'}
      title={theme === 'dark' ? '切换到白色主题' : '切换到黑色主题'}
      onClick={toggle}
    >
      {theme === 'dark'
        ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )
        : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 14.4A8.4 8.4 0 0 1 9.6 4a8.4 8.4 0 1 0 10.4 10.4Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          )}
    </button>
  )
}
