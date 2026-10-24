import { Reveal } from './reveal'

const stages = [
  {
    title: 'DeepSeek',
    body: '当前版本已接入 DeepSeek，支持多轮对话、语音朗读与动作联动。日常聊天、写代码时的碎碎念都够用。',
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
    title: 'OpenAI · Gemma',
    body: '随后补充 OpenAI 与 Gemma。云端推理和本地模型都会保留，按你的机器与预算自由选择。',
    status: '规划中',
    live: false,
  },
]

const models = [
  { name: 'DeepSeek', now: true },
  { name: 'Claude Code', now: false },
  { name: 'OpenAI', now: false },
  { name: 'Gemma', now: false },
]

export function ModelRoadmap() {
  return (
    <section id="models" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">模型路线</span>
            <h2>先养熟大肥鱼，再换更多大脑</h2>
          </div>
          <p className="lede">
            当前只支持 DeepSeek，这是我们验证整条链路的起点。之后按顺序接入 Claude Code、OpenAI 与 Gemma。
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
