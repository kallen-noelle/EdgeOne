import { DemoVideo } from './demo-video'
import { Reveal } from './reveal'

const clips = [
  { src: '/animations/demo/idle-breathing.webm', label: '待机呼吸', note: 'IDLE' },
  { src: '/animations/demo/talk-murmur.webm', label: '说话低语', note: 'TALK' },
  { src: '/animations/demo/thinking-bubble.webm', label: '思考冒泡', note: 'THINK' },
  { src: '/animations/demo/click-wave.webm', label: '点击回应', note: 'CLICK' },
]

export function AvatarShowcase() {
  return (
    <section id="actions" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">动作片段</span>
            <h2>它会呼吸，也会回应你</h2>
          </div>
          <p className="lede">
            每个动作都是独立的透明视频片段。状态机按权重挑选基础动作，再用双视频交叉淡入切换，不会出现黑帧。
          </p>
        </div>

        <div className="clip-grid">
          {clips.map((clip, index) => (
            <Reveal key={clip.src} delay={index * 90}>
              <article className="clip">
                <div className="clip-window">
                  <DemoVideo src={clip.src} label={`大肥鱼${clip.label}动画`} />
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
