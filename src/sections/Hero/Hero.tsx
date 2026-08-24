import type { ReactElement } from 'react'
import { MOBILE_LIGHTBOX_QUERY, useMediaQuery } from '../../shared/lib/media'
import type { LightboxContent } from '../../shared/ui/Lightbox/Lightbox.types'

const heroTitle = 'Платформа, где все создается в рамках вашего бренда и дизайн-системы'
const heroDescription =
  'Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы в фирменном стиле за минуты, а не дни.'
const heroImage = 'assets/images/hero-snapbuild-2026-08-07-v2.webp'

type HeroProps = {
  onPreview: (content: LightboxContent) => void
}

export default function Hero({ onPreview }: HeroProps): ReactElement {
  const mobilePreviewEnabled = useMediaQuery(MOBILE_LIGHTBOX_QUERY)

  const openPreview = () => {
    onPreview({
      src: heroImage,
      alt: '',
      title: heroTitle,
      description: heroDescription,
    })
  }

  const previewImage = (
    <img
      className="dds-app-preview-shot"
      data-cms-image="hero.app-screenshot"
      data-cms-no-generate=""
      src={heroImage}
      alt=""
      width={2880}
      height={1620}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  )

  return (
    <section
      className="hero dds-app-preview"
      data-cms-section="hero.app-preview"
      data-section-id="019f8703-47cb-764d-a38e-b7781ba86d98"
      data-template-id="a271bc92-1b82-5fa8-ac69-76260677f17b"
      id="hero"
    >
      <div className="dds-app-preview-card">
        <div className="dds-app-preview-inner">
          <div className="dds-app-preview-intro">
            <div className="dds-app-preview-heading">
              <h1 className="dds-app-preview-title" data-cms-key="hero.title">
                {heroTitle}
              </h1>
              <p className="dds-app-preview-subtitle" data-cms-key="hero.subtitle">
                {heroDescription}
              </p>
            </div>
            <a
              className="dds-app-preview-cta"
              data-node-id="2804:15411"
              data-cms-link-original-tag="div"
              data-cms-node="div:0/div:0/div:0/a:1"
              data-cms-link="div:0-div:0-div:0-a:1"
              href="#contact"
              data-cms-link-preserved-style-props="display,text-decoration,color"
              style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
            >
              <span className="dds-app-preview-cta-text" data-cms-key="hero.cta">
                Начать сейчас
              </span>
            </a>
          </div>
          {mobilePreviewEnabled ? (
            <button
              type="button"
              className="dds-app-preview-media dds-preview-trigger"
              aria-label="Открыть изображение платформы"
              onClick={openPreview}
            >
              {previewImage}
            </button>
          ) : (
            <div className="dds-app-preview-media">{previewImage}</div>
          )}
        </div>
      </div>
    </section>
  )
}
