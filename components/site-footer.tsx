import { characterCount, totalClips } from '@/lib/characters'

import { FishMark } from './fish-mark'
import { releasesUrl, repoUrl } from './site-header'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <FishMark className="brand-mark" />
              <span>aipetdex</span>
            </a>
            <p>
              {`常驻 Windows 桌面的 AI 宠物。内置 ${characterCount} 位角色与 ${totalClips} 段透明动画，支持 DeepSeek 与任意 OpenAI 兼容服务。`}
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Project</strong>
              <a href={repoUrl} target="_blank" rel="noreferrer">项目仓库</a>
              <a href={releasesUrl} target="_blank" rel="noreferrer">发布版本</a>
              <a href={`${repoUrl}/issues`} target="_blank" rel="noreferrer">问题反馈</a>
            </div>
            <div>
              <strong>Site</strong>
              <a href="#characters">角色</a>
              <a href="#actions">动作片段</a>
              <a href="#abilities">能力</a>
              <a href="#models">模型路线</a>
              <a href="#download">下载</a>
            </div>
            <div>
              <strong>Credits</strong>
              <a href="https://github.com/PC2005-cloud/dsh-pet" target="_blank" rel="noreferrer">dsh-pet 动画方案</a>
            </div>
          </div>
        </div>

        <div className="footer-base">
          <span>aipetdex · WINDOWS DESKTOP PET</span>
          <span>2026 aipetdex</span>
        </div>
      </div>
    </footer>
  )
}
