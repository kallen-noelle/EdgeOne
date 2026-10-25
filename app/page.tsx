import { CharacterRoster } from '@/components/character-roster'
import { DownloadSection } from '@/components/download-section'
import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <div className="page">
      <SiteHeader />
      <div className="page-body">
        <Hero />
        <CharacterRoster />
        <Features />
        <DownloadSection />
        <Faq />
      </div>
      <SiteFooter />
    </div>
  )
}
