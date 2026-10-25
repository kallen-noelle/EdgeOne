import { characterCount, totalClips } from '@/lib/characters'

import { Reveal } from './reveal'
import { releasesUrl } from './site-header'

export function DownloadSection() {
  return (
    <section id="download" className="section">
      <div className="wrap">
        <Reveal>
          <div className="download-panel">
            <div className="download-copy">
              <span className="eyebrow">下载</span>
              <h2>{`把 ${characterCount} 位伙伴放进你的桌面`}</h2>
              <p className="lede">
                安装包从项目 Releases 发布。装好之后填入自己的 DeepSeek API Key，她们就能开口说话。
              </p>

              <ol className="steps">
                <li>
                  <strong>下载安装包</strong>
                  打开 Releases 页面，选择最新的 Windows setup.exe。
                </li>
                <li>
                  <strong>双击安装</strong>
                  {`按向导完成安装，首次启动会自带 ${characterCount} 位角色的动画包。`}
                </li>
                <li>
                  <strong>填入密钥</strong>
                  在设置里粘贴 DeepSeek API Key，或者换成任意 OpenAI 兼容服务。
                </li>
              </ol>
            </div>

            <div className="installer">
              <div className="installer-head">
                <span className="installer-mark">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 5.5 10.5 4.5v15L3 18.5v-13Zm9-1.2L21 3v18l-9-1.3V4.3Z" />
                  </svg>
                </span>
                <div>
                  <strong>Windows 安装包</strong>
                  <span>SETUP.EXE · X64</span>
                </div>
              </div>

              <dl className="spec-list">
                <div className="spec">
                  <dt>系统要求</dt>
                  <dd>Windows 10 / 11</dd>
                </div>
                <div className="spec">
                  <dt>当前模型</dt>
                  <dd>DeepSeek</dd>
                </div>
                <div className="spec">
                  <dt>内置角色</dt>
                  <dd>{`${characterCount} 位 · ${totalClips} 段动画`}</dd>
                </div>
                <div className="spec">
                  <dt>安装包格式</dt>
                  <dd>setup.exe</dd>
                </div>
                <div className="spec">
                  <dt>下载来源</dt>
                  <dd>Gitee Releases</dd>
                </div>
              </dl>

              <a className="btn btn-primary" href={releasesUrl} target="_blank" rel="noreferrer">
                前往 Releases 下载
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17 17 7M17 7H9m8 0v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <p className="fine-print">
                当前安装包尚未做代码签名。如果 Windows 弹出 SmartScreen 提示，请选择「更多信息」后点击「仍要运行」。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
