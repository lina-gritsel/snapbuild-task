import type { ReactElement } from 'react'

export default function Footer(): ReactElement {
  return (
    <section
      className="footer dds-footer"
      data-cms-section="footer.main"
      data-section-id="019f8703-47cb-76e5-a38e-b7781f24944c"
      data-template-id="3dfda3e0-7355-520c-8dc1-84bba71c9907"
      id="footer"
    >
      <div className="dds-footer-top">
        <div className="dds-footer-brand">
          <a
            className="dds-footer-logo"
            href="/"
            aria-label="Снэпбилд"
            data-cms-link="footer.logo.href"
            data-cms-no-generate
            target="_self"
            data-cms-link-kind="page"
            data-cms-link-page-id="019f7fde-df04-7ed1-b554-24792c0e689c"
            style={{}}
          >
            <img
              src="/assets/images/582db07d8ccd60da.svg"
              data-cms-logo
              data-cms-image="footer.logo"
              data-cms-no-generate
              alt="Снэпбилд"
              width={153}
              height={22}
            />
          </a>
          <p className="dds-footer-tagline" data-cms-key="footer.tagline">
            Платформа, где все создается в&nbsp;рамках вашего бренда и&nbsp;дизайн-системы
          </p>
        </div>
        <nav className="dds-footer-links" aria-label="Подвал" style={{}}>
          <div className="dds-footer-col">
            <p className="dds-footer-col-title" data-cms-key="footer.nav.title">
              Навигация
            </p>
            <div className="dds-footer-list">
              <a className="dds-footer-link" href="#process" data-cms-link="footer.nav.link1.href">
                <span data-cms-key="footer.nav.link1">Продукт</span>
              </a>
              <a className="dds-footer-link" href="#use-cases">
                <span>Возможности</span>
              </a>
              <a className="dds-footer-link" href="#compare">
                <span>Преимущества</span>
              </a>
              <a className="dds-footer-link" href="#features" data-cms-link="footer.nav.link2.href">
                <span data-cms-key="footer.nav.link2">Безопасность</span>
              </a>
              <a className="dds-footer-link" href="#roadmap">
                <span>Роадмап</span>
              </a>
              <a className="dds-footer-link" href="#faq">
                <span>Частые вопросы</span>
              </a>
            </div>
          </div>
          <div className="dds-footer-col">
            <p className="dds-footer-col-title" data-cms-key="footer.docs.title">
              Документация
            </p>
            <div className="dds-footer-list">
              <a
                className="dds-footer-link"
                data-cms-link-original-tag="div"
                data-cms-node="div:0/nav:1/div:1/div:1/a:0"
                data-cms-link="div:0-nav:1-div:1-div:1-a:0"
                href="https://snapbuild.ru/privacy"
                data-cms-link-preserved-style-props="display,text-decoration,color"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span data-cms-key="footer.docs.link3">Политика конфиденциальности</span>
              </a>
              <a className="dds-footer-link" href="#faq" data-cms-link="footer.docs.link4.href">
                <span data-cms-key="footer.docs.link4">FAQ</span>
              </a>
            </div>
          </div>
          <div className="dds-footer-col">
            <p className="dds-footer-col-title" data-cms-key="footer.contacts.title">
              Контакты
            </p>
            <div className="dds-footer-list">
              <a
                className="dds-footer-link"
                data-cms-key="footer.contacts.link1"
                data-cms-link-original-tag="span"
                data-cms-link="footer.contacts.link1"
                href="https://t.me/ochen_darya"
                data-cms-link-preserved-style-props="text-decoration,color,font-family,font-size,font-weight,line-height,letter-spacing,text-align,text-transform"
                style={{ textDecoration: 'none', textTransform: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Запросить демо
              </a>
              <a
                className="dds-footer-link"
                data-cms-link-original-tag="div"
                data-cms-node="div:0/nav:1/div:2/div:1/a:1"
                data-cms-link="div:0-nav:1-div:2-div:1-a:1"
                href="https://t.me/snapbuild"
                data-cms-link-preserved-style-props="display,text-decoration,color"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span data-cms-key="footer.contacts.link2">Telegram</span>
              </a>
              <a className="dds-footer-link dds-footer-email-mobile" href="mailto:hey@snapbuild.ru">
                hey@snapbuild.ru
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="dds-footer-legal">
        <p className="dds-footer-copyright" data-cms-key="footer.copyright" style={{}}>
          © Сгенерировано в&nbsp;Снэпбилде. Все права защищены.
        </p>
        <a
          className="dds-footer-email"
          href="mailto:hey@snapbuild.ru"
          data-cms-link="footer.legal.email.href"
        />
        <a
          className="dds-footer-legal-email"
          data-cms-key="footer.legal.email"
          data-cms-link-original-tag="span"
          data-cms-link="footer.legal.email"
          href="mailto:hey@snapbuild.ru"
          data-cms-link-preserved-style-props="text-decoration,color,font-family,font-size,font-weight,line-height,letter-spacing,text-align,text-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          hey@snapbuild.ru
        </a>
      </div>
    </section>
  )
}
