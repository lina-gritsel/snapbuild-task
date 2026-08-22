import type { ReactElement } from 'react'

export default function Cta(): ReactElement {
  return (
    <section
      className="cta dds-cta dds-launch"
      data-cms-section="cta.launch"
      data-section-id="019f8703-47cb-76d5-a38e-b7781f231618"
      data-template-id="446caefe-0e6d-4699-bc97-768d73d57176"
      data-section-type="cta"
      data-section-name="Призыв к действию — Запуск"
      id="cta"
    >
      <div className="dds-launch-dust" aria-hidden="true">
        <img
          className="dds-launch-dust--d"
          src="/assets/images/c3714c375a04149c.webp"
          data-cms-image="cta.launch.dust-d"
          data-cms-no-generate
          alt={''}
        />
        <img
          className="dds-launch-dust--t"
          src="/assets/images/f38670cf14e4b7dd.webp"
          data-cms-image="cta.launch.dust-t"
          data-cms-no-generate
          alt={''}
        />
        <img
          className="dds-launch-dust--m"
          src="/assets/images/a4285c4b0717be2b.webp"
          data-cms-image="cta.launch.dust-m"
          data-cms-no-generate
          alt={''}
        />
      </div>
      <div className="dds-launch-shine" aria-hidden="true" />
      <div className="dds-launch-content">
        <div className="dds-launch-intro">
          <h2 className="dds-launch-title" data-cms-key="cta.launch.title" style={{}}>
            <span className="dds-launch-title-desktop">
              Профессиональные материалы в&nbsp;фирменном стиле
              <br />
              за&nbsp;минуты, а&nbsp;не&nbsp;дни
            </span>
            <span className="dds-launch-title-responsive">
              Профессиональные материалы в&nbsp;фирменном стиле за&nbsp;минуты, а&nbsp;не&nbsp;дни
            </span>
          </h2>
          <p className="dds-launch-subtitle" data-cms-key="cta.launch.subtitle" style={{}}>
            Выстройте маркетинг в&nbsp;единый поток&nbsp;— от&nbsp;первой идеи до&nbsp;финального
            взаимодействия с&nbsp;клиентом.
          </p>
        </div>
        <div className="dds-launch-actions">
          <a
            className="dds-launch-btn"
            data-cms-link-original-tag="div"
            data-cms-node="div:1/div:1/a:0"
            data-cms-link="div:1-div:1-a:0"
            href="https://builder.snapbuild.ru/page/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c"
            data-cms-link-preserved-style-props="display,text-decoration,color"
            style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="dds-launch-btn-text" data-cms-key="cta.launch.button1">
              Начать сейчас
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
