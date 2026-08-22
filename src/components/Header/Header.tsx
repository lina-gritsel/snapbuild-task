import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactElement,
} from 'react'

export default function Header(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)
  const burgerRef = useRef<HTMLLabelElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateHeader = () =>
      headerRef.current?.classList.toggle('is-scrolled', window.scrollY > 12)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    const compactHeader = window.matchMedia('(max-width: 1023px)')
    const syncMenu = () => {
      if (!compactHeader.matches && menuOpen) setMenuOpen(false)
      document.documentElement.classList.toggle('dds-menu-open', compactHeader.matches && menuOpen)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (!compactHeader.matches || !menuOpen) return
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        burgerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = [
        burgerRef.current,
        ...Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? []),
      ].filter((element): element is HTMLLabelElement | HTMLAnchorElement => element !== null)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    syncMenu()
    compactHeader.addEventListener('change', syncMenu)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      compactHeader.removeEventListener('change', syncMenu)
      document.removeEventListener('keydown', onKeyDown)
      document.documentElement.classList.remove('dds-menu-open')
    }
  }, [menuOpen])

  const openMenu = () => {
    setMenuOpen(true)
    requestAnimationFrame(() =>
      menuRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus(),
    )
  }

  const closeMenu = () => setMenuOpen(false)
  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) openMenu()
    else closeMenu()
  }
  const handleBurgerKeyDown = (event: ReactKeyboardEvent<HTMLLabelElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    setMenuOpen((current) => !current)
  }

  return (
    <section
      ref={headerRef}
      className="header dds-header dds-main"
      data-cms-section="header.main"
      data-section-id="019f8703-47cb-75b5-a38e-b7781ba182e2"
      data-template-id="d79698c3-0022-5a62-bab3-44a94925e7c7"
      id="header"
    >
      <input
        className="dds-main-toggle"
        id="dds-main-toggle"
        type="checkbox"
        aria-hidden="true"
        checked={menuOpen}
        onChange={handleToggleChange}
      />
      <div className="dds-main-bar">
        <a
          className="dds-main-logo"
          href="/"
          aria-label="Снэпбилд"
          data-cms-link="header.logo.href"
          data-cms-no-generate=""
          target="_self"
          data-cms-link-kind="page"
          data-cms-link-page-id="019f7fde-df04-7ed1-b554-24792c0e689c"
        >
          <img
            src="/assets/images/582db07d8ccd60da.svg"
            data-cms-logo=""
            data-cms-image="header.logo"
            data-cms-no-generate=""
            alt="Снэпбилд"
            width="153"
            height="22"
          />
        </a>
        <nav className="dds-main-nav" aria-label="Основная навигация">
          <a className="dds-main-link" href="#process" data-cms-link="header.nav.product.href">
            <span data-cms-key="header.nav.product" data-cms-generation-group="header.nav.product">
              Продукт
            </span>
          </a>
          <a className="dds-main-link" href="#use-cases" data-cms-link="header.nav.features.href">
            <span
              data-cms-key="header.nav.features"
              data-cms-generation-group="header.nav.features"
            >
              Возможности
            </span>
          </a>
          <a className="dds-main-link" href="#features" data-cms-link="header.nav.safety.href">
            <span data-cms-key="header.nav.safety" data-cms-generation-group="header.nav.safety">
              Безопасность
            </span>
          </a>
          <a className="dds-main-link" href="#faq" data-cms-link="header.nav.faq.href">
            <span data-cms-key="header.nav.faq" data-cms-generation-group="header.nav.faq">
              FAQ
            </span>
          </a>
        </nav>
        <div className="dds-main-actions">
          <a
            className="dds-btn dds-btn--l dds-btn--secondary dds-main-demo"
            href="https://builder.snapbuild.ru/"
            data-node-id="2804:15383"
            data-cms-link="header.cta.demo.href"
            target="_self"
          >
            <span data-cms-key="header.cta.demo" data-cms-generation-group="header.cta.demo">
              Начать сейчас
            </span>
          </a>
          <label
            ref={burgerRef}
            className="dds-main-burger"
            htmlFor="dds-main-toggle"
            role="button"
            tabIndex={0}
            aria-controls="dds-main-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onKeyDown={handleBurgerKeyDown}
          >
            <span className="dds-main-burger-icon" />
          </label>
        </div>
      </div>
      <nav
        ref={menuRef}
        className="dds-main-menu"
        id="dds-main-menu"
        aria-label="Мобильная навигация"
        aria-hidden={!menuOpen}
      >
        <a
          className="dds-main-menu-link"
          href="#use-cases"
          data-cms-link="header.nav.features.href.mobile"
          onClick={closeMenu}
        >
          <span
            data-cms-key="header.nav.features.mobile"
            data-cms-generation-group="header.nav.features"
          >
            Возможности
          </span>
        </a>
        <a
          className="dds-main-menu-link"
          href="#process"
          data-cms-link="header.nav.product.href.mobile"
          onClick={closeMenu}
        >
          <span
            data-cms-key="header.nav.product.mobile"
            data-cms-generation-group="header.nav.product"
          >
            Продукт
          </span>
        </a>
        <a
          className="dds-main-menu-link"
          href="#features"
          data-cms-link="header.nav.safety.href.mobile"
          onClick={closeMenu}
        >
          <span
            data-cms-key="header.nav.safety.mobile"
            data-cms-generation-group="header.nav.safety"
          >
            Безопасность
          </span>
        </a>
        <a
          className="dds-main-menu-link"
          href="#faq"
          data-cms-link="header.nav.faq.href.mobile"
          onClick={closeMenu}
        >
          <span data-cms-key="header.nav.faq.mobile" data-cms-generation-group="header.nav.faq">
            FAQ
          </span>
        </a>
        <a
          className="dds-btn dds-btn--l dds-btn--secondary"
          href="https://builder.snapbuild.ru/"
          data-cms-link="header.cta.demo.href.mobile"
          onClick={closeMenu}
        >
          <span data-cms-key="header.cta.demo.mobile" data-cms-generation-group="header.cta.demo">
            Начать сейчас
          </span>
        </a>
      </nav>
    </section>
  )
}
