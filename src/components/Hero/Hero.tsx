import type { ReactElement } from 'react'

export default function Hero(): ReactElement {
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
                Платформа, где все создается в рамках вашего бренда и дизайн-системы
              </h1>
              <p className="dds-app-preview-subtitle" data-cms-key="hero.subtitle">
                Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать
                профессиональные материалы в фирменном стиле за минуты, а не дни.
              </p>
            </div>
            <a
              className="dds-app-preview-cta"
              data-node-id="2804:15411"
              data-cms-link-original-tag="div"
              data-cms-node="div:0/div:0/div:0/a:1"
              data-cms-link="div:0-div:0-div:0-a:1"
              href="https://builder.snapbuild.ru/page/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c"
              data-cms-link-preserved-style-props="display,text-decoration,color"
              style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dds-app-preview-cta-text" data-cms-key="hero.cta">
                Начать сейчас
              </span>
            </a>
          </div>
          <div className="dds-app-preview-media">
            <img
              className="dds-app-preview-shot"
              data-cms-image="hero.app-screenshot"
              data-cms-no-generate=""
              src="assets/images/hero-snapbuild-2026-08-07-v2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
