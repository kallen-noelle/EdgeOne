import { characterCount, characters, totalClips } from '@/lib/characters'

import { DemoVideo } from './demo-video'
import { Reveal } from './reveal'

const clips = characters.flatMap(character => character.action
  ? [{ src: character.action, label: character.actionLabel ?? character.name, note: character.name }]
  : [])

export function AvatarShowcase() {
  return (
    <section id="actions" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">动作片段</span>
            <h2>每个动作，都是独立片段</h2>
          </div>
          <p className="lede">
            {`${totalClips} 段透明视频分布在 ${characterCount} 位角色上。状态机按权重挑选基础动作，再用双视频交叉淡入切换，不会出现黑帧。`}
          </p>
        </div>

        <div className="clip-grid">
          {clips.map((clip, index) => (
            <Reveal key={clip.src} delay={index * 90}>
              <article className="clip">
                <div className="clip-window">
                  <DemoVideo className="is-character" src={clip.src} label={`${clip.label}动画`} />
                </div>
                <div className="clip-label">
                  {clip.label}
                  <span>{clip.note}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
