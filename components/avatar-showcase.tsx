import { DemoVideo } from './demo-video'
import { Reveal } from './reveal'

const clips = [
  { src: '/characters/ojousama-letter.webm', label: '送情书', note: '橙毛大小姐' },
  { src: '/characters/huangmao-fall.webm', label: '转圈摔倒', note: '黄毛该溜子' },
  { src: '/characters/baimao-wave.webm', label: '挥手打招呼', note: '白毛小龙娘' },
  { src: '/characters/xiaohuli-tail.webm', label: '不许碰尾巴', note: '黑毛小狐狸' },
]

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
            五位角色共 147 段透明视频。状态机按权重挑选基础动作，再用双视频交叉淡入切换，不会出现黑帧。
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
