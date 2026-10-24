import { Reveal } from './reveal'

const stages = [
  {
    title: 'DeepSeek',
    body: '默认接入 DeepSeek，支持多轮对话、语音朗读与动作联动。也可以在设置里换成任意 OpenAI 兼容服务。',
    status: '已上线',
    live: true,
  },
  {
    title: 'Claude Code',
    body: '下一站接入 Claude Code，把终端里的编码过程带进桌宠，让它能跟着你的项目一起忙起来。',
    status: '下一站',
    live: false,
  },
  {
    title: 'Gemma 本地',
    body: '随后补充本地 Gemma。云端推理和本地模型都会保留，按你的机器与预算自由选择。',
    status: '规划中',
    live: false,
  },
]

const models = [
  { name: 'DeepSeek', now: true },
  { name: 'OpenAI 兼容', now: true },
  { name: 'Claude Code', now: false },
  { name: 'Gemma 本地', now: false },
]

export function ModelRoadmap() {
  return (
    <section id="models" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">模型路线</span>
            <h2>先养熟五位伙伴，再换更多大脑</h2>
          </div>
          <p className="lede">
            默认接入 DeepSeek，同时支持任意 OpenAI 兼容服务。之后按顺序补充 Claude Code 与本地 Gemma。
          </p>
        </div>

        <div className="roadmap">
          {stages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 90}>
              <article className={`stage${stage.live ? ' is-now' : ''}`}>
                <span className="stage-index">{stage.live ? 'NOW' : 'NEXT'}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
                <span className={`badge ${stage.live ? 'is-live' : 'is-planned'}`}>{stage.status}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="models-row">
          {models.map(model => (
            <span key={model.name} className={`model-pill${model.now ? ' is-now' : ''}`}>
              {model.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
