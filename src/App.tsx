import type { ReactElement } from 'react'
import {
  BriefToMaterials,
  ContactForm,
  CookieBanner,
  Header,
  Lightbox,
  Pricing,
  RequestToResult,
  Testimonials,
} from './components'
import {
  Hero,
  Logos,
  Process,
  UseCases,
  Compare,
  Features,
  Roadmap,
  Faq,
  Cta,
  Footer,
} from './sections'

export default function App(): ReactElement {
  return (
    <div className="react-page">
      <Header />
      <Hero />
      <Logos />
      <Process />
      <UseCases />
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
      <Footer />
      <CookieBanner />
      <Lightbox />
    </div>
  )
}
