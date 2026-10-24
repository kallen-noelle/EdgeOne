import { DemoVideo } from './demo-video'
import { Reveal } from './reveal'
import { releasesUrl } from './site-header'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal>
            <span className="eyebrow">aipetdex × dsh-pet</span>
          </Reveal>

          <Reveal delay={80}>
            <h1>
              桌面住进
              <br />
              <span className="accent">五位 AI 伙伴</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede">
              aipetdex 是常驻 Windows 桌面的 AI 宠物。
              五位性格各异的角色，用透明视频动画、语音对话与点击互动陪你工作。
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
              <a className="btn btn-ghost" href="#characters">认识五位角色</a>
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
                首发角色 5 位
              </span>
              <span className="chip">
                <span className="dot" />
                147 段透明动画
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
              <DemoVideo
                className="is-character"
                src="/characters/ojousama-idle.webm"
                label="橙毛大小姐待机翻书动画"
              />
            </div>

            <div className="aquarium-tag is-bottom">
              <strong>橙毛大小姐</strong>
              <span>OJOU-SAMA · IDLE</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
