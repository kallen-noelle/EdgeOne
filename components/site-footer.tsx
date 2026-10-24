import { FishMark } from './fish-mark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <FishMark className="brand-mark" />
              <span>AIRI 桌宠</span>
            </a>
            <p>
              由 AIRI 对话内核与 dsh-pet 透明视频动画组成。当前支持 DeepSeek，即将支持 Claude Code、OpenAI 与 Gemma。
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Project</strong>
              <a href="https://github.com/moeru-ai/airi" target="_blank" rel="noreferrer">AIRI 仓库</a>
              <a href="https://github.com/moeru-ai/airi/releases" target="_blank" rel="noreferrer">发布版本</a>
              <a href="https://github.com/moeru-ai/airi/issues" target="_blank" rel="noreferrer">问题反馈</a>
            </div>
            <div>
              <strong>Site</strong>
              <a href="#actions">动作片段</a>
              <a href="#abilities">能力</a>
              <a href="#models">模型路线</a>
              <a href="#download">下载</a>
            </div>
          </div>
        </div>

        <div className="footer-base">
          <span>AIRI × DSH-PET · WINDOWS DESKTOP PET</span>
          <span>2026 AIRI PET SITE</span>
        </div>
      </div>
    </footer>
  )
}
