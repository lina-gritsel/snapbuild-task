import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/app.css'
import './sections/Process/Process.css'
import './sections/Compare/Compare.css'
import './sections/Cta/Cta.css'
import './sections/UseCases/UseCases.css'
import './styles/legacy/generated-layout.css'
import './sections/Features/Features.css'
import './sections/Roadmap/Roadmap.css'
import './sections/RequestToResult/RequestToResult.css'
import './sections/BriefToMaterials/BriefToMaterials.css'
import './sections/Testimonials/Testimonials.css'
import './sections/Pricing/Pricing.css'
import './sections/ContactForm/ContactForm.css'
import './sections/Faq/Faq.css'
import './sections/Hero/Hero.css'
import './sections/Logos/Logos.css'
import './styles/font-face.css'
import './styles/motion.css'
import './styles/legacy/compat.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element "#root" was not found')
}

createRoot(rootElement).render(<App />)
