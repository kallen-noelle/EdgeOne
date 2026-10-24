import { AvatarShowcase } from '@/components/avatar-showcase'
import { CharacterRoster } from '@/components/character-roster'
import { DownloadSection } from '@/components/download-section'
import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { ModelRoadmap } from '@/components/model-roadmap'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <Hero />
        <CharacterRoster />
        <AvatarShowcase />
        <Features />
        <ModelRoadmap />
        <DownloadSection />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
