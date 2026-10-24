import type { ReactNode } from 'react'

import { Reveal } from './reveal'

type IconName = 'desktop' | 'mic' | 'film' | 'tap' | 'layers' | 'shield'

const iconPaths: Record<IconName, ReactNode> = {
  desktop: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </>
  ),
  tap: (
    <path d="M4 4l7.5 17 2.2-6.3 6.3-2.2L4 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m3 13 9 5 9-5M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.6" opacity="0.55" fill="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3 8-8 10-5-2-8-5-8-10V6l8-3Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m9 12 2.2 2.2L15 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </>
  ),
}

const features: { icon: IconName, title: string, body: string }[] = [
  {
    icon: 'desktop',
    title: '桌面常驻',
    body: '无边框透明窗口浮在桌面上，不打断你的工作。按住角色就能拖动到任意位置，窗口位置会记住。',
  },
  {
    icon: 'mic',
    title: '语音对话',
    body: '支持听写与朗读。你说话时它听着，它说话时会切到 talk 动作链，讲完再回到待机。',
  },
  {
    icon: 'film',
    title: '透明视频动画',
    body: '形象是带透明通道的视频片段，A/B 双播放器交叉淡入，动作衔接自然，不闪黑屏。',
  },
  {
    icon: 'tap',
    title: '点击互动',
    body: '摸头、戳身体、拖动窗口都有独立反馈片段。点哪里、怎么点，它都分得清。',
  },
  {
    icon: 'layers',
    title: '模型可切换',
    body: '当前接入 DeepSeek。聊天走 OpenAI 兼容协议，后续会加入 Claude Code、OpenAI 与 Gemma。',
  },
  {
    icon: 'shield',
    title: '本地优先',
    body: '密钥与角色配置保存在本机。聊天记录默认不上传到自有服务器，只有你启用的服务商才会收到请求。',
  },
]

export function Features() {
  return (
    <section id="abilities" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">能力</span>
            <h2>不只是会说话</h2>
          </div>
          <p className="lede">
            从透明的桌面窗口，到语音、动作与模型接入，整条链路都围绕「像养了一只生物」来设计。
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <article className="feature">
                <span className="feature-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{iconPaths[feature.icon]}</svg>
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
