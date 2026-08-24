import { useCallback, useState, type ReactElement } from 'react'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import BriefToMaterials from './sections/BriefToMaterials/BriefToMaterials'
import Compare from './sections/Compare/Compare'
import ContactForm from './sections/ContactForm/ContactForm'
import Cta from './sections/Cta/Cta'
import Faq from './sections/Faq/Faq'
import Features from './sections/Features/Features'
import Hero from './sections/Hero/Hero'
import Logos from './sections/Logos/Logos'
import Pricing from './sections/Pricing/Pricing'
import Process from './sections/Process/Process'
import RequestToResult from './sections/RequestToResult/RequestToResult'
import Roadmap from './sections/Roadmap/Roadmap'
import Testimonials from './sections/Testimonials/Testimonials'
import UseCases from './sections/UseCases/UseCases'
import CookieBanner from './shared/ui/CookieBanner/CookieBanner'
import Lightbox from './shared/ui/Lightbox/Lightbox'
import type { LightboxContent } from './shared/ui/Lightbox/Lightbox.types'

export default function App(): ReactElement {
  const [lightboxContent, setLightboxContent] = useState<LightboxContent | null>(null)

  const openLightbox = useCallback((content: LightboxContent) => {
    setLightboxContent(content)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxContent(null)
  }, [])

  return (
    <>
      <Header />
      <main className="react-page">
        <Hero onPreview={openLightbox} />
        <Logos />
        <Process />
        <UseCases onPreview={openLightbox} />
        <Compare />
        <Features />
        <Roadmap />
        <RequestToResult />
        <BriefToMaterials />
        <Testimonials />
        <Pricing />
        <Faq />
        <ContactForm />
        <Cta />
      </main>
      <Footer />
      <CookieBanner />
      {lightboxContent ? <Lightbox content={lightboxContent} onClose={closeLightbox} /> : null}
    </>
  )
}
