import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'aipetdex · 五位 AI 伙伴住进你的桌面',
  description: 'aipetdex 是常驻 Windows 桌面的 AI 宠物。首批 5 位角色，透明视频动画、语音对话与点击互动，可接入 DeepSeek 及任意 OpenAI 兼容服务。',
  openGraph: {
    title: 'aipetdex · 五位 AI 伙伴住进你的桌面',
    description: '常驻桌面的 AI 宠物，5 位角色、147 段透明动画，支持语音对话与点击互动。',
    type: 'website',
    locale: 'zh_CN',
  },
}

export const viewport: Viewport = {
  themeColor: '#031017',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: '.reveal{opacity:1;transform:none}' }} />
        </noscript>
        {children}
      </body>
    </html>
  )
}
