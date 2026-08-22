import { useRef, type ReactElement } from 'react'
import { useMarquee } from './useMarquee'

export default function Logos(): ReactElement {
  const trackRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useMarquee(sectionRef, trackRef, contentRef)

  return (
    <section
      ref={sectionRef}
      className="logos dds-logos dds-marquee"
      data-cms-section="logos.marquee"
      data-section-id="019f8703-47cb-7669-a38e-b7781c7e8174"
      data-template-id="e49c66ed-927c-5596-8eb2-bd01ea1cbc23"
      id="logos"
    >
      <p className="dds-marquee-eyebrow" data-cms-key="logos.eyebrow" style={{}}>
        С&nbsp;платформой работают команды, для&nbsp;которых бренд&nbsp;— закон
      </p>
      <div ref={trackRef} className="dds-marquee-track" data-marquee-built>
        <div ref={contentRef} className="dds-marquee-content">
          <div className="dds-marquee-item dds-marquee-item-3">
            <img
              src="assets/images/5cd01de0b6a5e001.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              data-cms-image="logos.marquee.asset-3"
              data-cms-no-generate
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-4">
            <img
              src="assets/images/ee341193d7cf46d6.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              data-cms-image="logos.marquee.asset-4"
              data-cms-no-generate
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-7">
            <img
              src="assets/images/logo-avito.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              data-cms-image="logos.marquee.asset-7"
              data-cms-no-generate
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-8">
            <img
              src="assets/images/logo-cian.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              data-cms-image="logos.marquee.asset-8"
              data-cms-no-generate
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-10">
            <img
              src="assets/images/logo-lenta.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              data-cms-image="logos.marquee.asset-10"
              data-cms-no-generate
              alt={''}
            />
          </div>
        </div>
        <div className="dds-marquee-content" aria-hidden="true">
          <div className="dds-marquee-item dds-marquee-item-3">
            <img
              src="assets/images/5cd01de0b6a5e001.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-4">
            <img
              src="assets/images/ee341193d7cf46d6.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-7">
            <img
              src="assets/images/logo-avito.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-8">
            <img
              src="assets/images/logo-cian.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              alt={''}
            />
          </div>
          <div className="dds-marquee-item dds-marquee-item-10">
            <img
              src="assets/images/logo-lenta.svg"
              style={{ display: 'block' }}
              width="100%"
              height="100%"
              alt={''}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
