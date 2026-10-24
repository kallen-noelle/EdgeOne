import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'AIRI 桌宠 · 桌面养一只会说话的大肥鱼',
  description: '基于 AIRI 对话内核与 dsh-pet 透明视频动画的 Windows 桌面宠物。当前形象为大肥鱼，已接入 DeepSeek，即将支持 Claude Code、OpenAI 与 Gemma。',
  openGraph: {
    title: 'AIRI 桌宠 · 桌面养一只会说话的大肥鱼',
    description: '常驻桌面的 AI 宠物，支持语音对话、透明视频动画与点击互动。',
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
