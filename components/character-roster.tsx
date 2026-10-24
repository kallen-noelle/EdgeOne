import type { CSSProperties } from 'react'

import { DemoVideo } from './demo-video'
import { Reveal } from './reveal'

interface Character {
  id: string
  name: string
  roman: string
  role: string
  body: string
  idle: string
  clips: number
  accent: string
}

const characters: Character[] = [
  {
    id: 'main',
    name: '蓝毛小女仆',
    roman: 'MAID',
    role: '温柔 · 俏皮',
    body: '最早住进桌面的小女仆。温柔勤快，也有点调皮，遇到麻烦会去找大小姐撑腰。',
    idle: '/characters/main-idle.webm',
    clips: 106,
    accent: '#7dd3fc',
  },
  {
    id: 'ojousama',
    name: '橙毛大小姐',
    roman: 'OJOU-SAMA',
    role: '优雅 · 傲娇',
    body: '嘴硬心软的大小姐。待机时安静翻书，被戳中会先回嘴，再偷偷关心你。',
    idle: '/characters/ojousama-idle.webm',
    clips: 19,
    accent: '#ffb168',
  },
  {
    id: 'huangmao',
    name: '黄毛该溜子',
    roman: 'GAL',
    role: '活泼 · 大方',
    body: '伙伴里最大方的一个。爱开玩笑、爱分享，热闹永远不嫌多。',
    idle: '/characters/huangmao-idle.webm',
    clips: 8,
    accent: '#ffe066',
  },
  {
    id: 'baimao',
    name: '白毛小龙娘',
    roman: 'DRAGON',
    role: '温柔 · 逞强',
    body: '说话轻轻的龙娘。喜欢黏人，也喜欢逗人，被反过来捉弄会鼓脸。',
    idle: '/characters/baimao-idle.webm',
    clips: 10,
    accent: '#8fd8ff',
  },
  {
    id: 'xiaohuli',
    name: '黑毛小狐狸',
    roman: 'FOX',
    role: '狡黠 · 分寸',
    body: '聪明的小狐狸。爱搞善意的小恶作剧，发现你真的不高兴就收手。',
    idle: '/characters/xiaohuli-idle.webm',
    clips: 4,
    accent: '#ff9a8b',
  },
]

export function CharacterRoster() {
  return (
    <section id="characters" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">角色</span>
            <h2>五位伙伴，五种脾气</h2>
          </div>
          <p className="lede">
            五位角色共 147 段透明动画，各自有独立的人设与动作包。选中谁，桌面就住着谁，聊天语气也跟着换。
          </p>
        </div>

        <div className="roster-grid">
          {characters.map((character, index) => (
            <Reveal key={character.id} delay={index * 80}>
              <article
                className="roster-card"
                style={{ '--card-accent': character.accent } as CSSProperties}
              >
                <div className="roster-window">
                  <DemoVideo
                    className="is-character"
                    src={character.idle}
                    label={`${character.name}待机动画`}
                  />
                  <span className="roster-count">{`${character.clips} 段动作`}</span>
                </div>

                <div className="roster-body">
                  <div className="roster-title">
                    <h3>{character.name}</h3>
                    <span>{character.roman}</span>
                  </div>
                  <span className="roster-role">{character.role}</span>
                  <p>{character.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
