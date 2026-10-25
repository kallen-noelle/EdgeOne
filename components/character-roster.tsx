import type { CSSProperties } from 'react'

import { characterCount, characters, totalClips } from '@/lib/characters'

import { DemoVideo } from './demo-video'
import { Reveal } from './reveal'

export function CharacterRoster() {
  return (
    <section id="characters" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">角色</span>
            <h2>{`${characterCount} 位伙伴，各有脾气`}</h2>
          </div>
          <p className="lede">
            {`${characterCount} 位角色共 ${totalClips} 段透明动画，各自有独立的人设与动作包。选中谁，桌面就住着谁，聊天语气也跟着换。`}
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
                  <p>{character.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
