import { characterCount, characters } from '@/lib/characters'

import { Reveal } from './reveal'

const characterNames = characters.map(character => character.name).join('、')

const questions = [
  {
    question: '现在支持哪些模型？',
    answer: '默认接入 DeepSeek，也支持任意 OpenAI 兼容服务。聊天走 OpenAI 兼容协议，后续会补充 Claude Code 与本地 Gemma。',
  },
  {
    question: `${characterCount} 位角色有什么区别？`,
    answer: `${characterNames} 各有独立的人设、待机与小动作动画。切换角色后聊天语气也会跟着换。`,
  },
  {
    question: '需要自己准备 API Key 吗？',
    answer: '需要。在设置页填入 DeepSeek 的 API Key，配置只保存在本机。没有密钥时，形象与动作照样能用，只是不会开口回答。',
  },
  {
    question: '能换成别的形象吗？',
    answer: `可以。程序内置 ${characterCount} 位角色，也可以在设置里导入带透明通道的视频 ZIP 动画包，不需要重新安装。`,
  },
  {
    question: '会收集我的聊天记录吗？',
    answer: '聊天记录与角色配置默认保存在本机。只有你启用的模型服务商会收到对话内容，启用云同步时数据才会上传。',
  },
  {
    question: '为什么安装时会看到 SmartScreen 提示？',
    answer: '当前安装包还没有做代码签名，Windows 会给出未知发布者提示。选择「更多信息」后点击「仍要运行」即可继续安装。',
  },
]

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">常见问题</span>
            <h2>安装之前想知道的</h2>
          </div>
          <p className="lede">
            还有别的问题，可以在 GitHub 上开 issue。我们更愿意把限制说清楚，而不是藏着。
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
