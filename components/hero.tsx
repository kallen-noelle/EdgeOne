import { DemoVideo } from './demo-video'
import { Reveal } from './reveal'
import { releasesUrl } from './site-header'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal>
            <span className="eyebrow">AIRI × dsh-pet</span>
          </Reveal>

          <Reveal delay={80}>
            <h1>
              桌面养一只
              <br />
              <span className="accent">会说话的大肥鱼</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede">
              结合 AIRI 对话内核与 dsh-pet 透明视频动画的 Windows 桌面宠物。
              这只蓝鲸系的小家伙常驻桌面、听得见你、看得懂你的话，也会在你写代码时自己找点事做。
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-actions">
              <a className="btn btn-primary" href={releasesUrl} target="_blank" rel="noreferrer">
                下载 Windows 安装包
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4v11m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M5 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
              <a className="btn btn-ghost" href="#actions">看看它会做什么</a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-meta">
              <span className="chip">
                <span className="dot" />
                当前模型 DeepSeek
              </span>
              <span className="chip">
                <span className="dot" />
                形象 大肥鱼
              </span>
              <span className="chip is-planned">
                <span className="dot" />
                Claude Code · OpenAI · Gemma 在路上
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="aquarium">
            <div className="bubbles" aria-hidden="true">
              <span className="bubble" />
              <span className="bubble" />
              <span className="bubble" />
              <span className="bubble" />
              <span className="bubble" />
              <span className="bubble" />
            </div>

            <div className="aquarium-tag is-top">
              <span className="live">LIVE</span>
              <strong>透明视频动画</strong>
            </div>

            <div className="aquarium-inner">
              <DemoVideo src="/animations/demo/idle-breathing.webm" label="大肥鱼待机呼吸动画" />
            </div>

            <div className="aquarium-tag is-bottom">
              <strong>大肥鱼</strong>
              <span>BIG FISH · IDLE</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
