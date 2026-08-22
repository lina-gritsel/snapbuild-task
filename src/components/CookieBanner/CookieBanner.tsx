import { useState, type ReactElement } from 'react'
import { COOKIE_CONSENT_STORAGE_KEY } from '../../constants/storage'

export default function CookieBanner(): ReactElement | null {
  const [visible, setVisible] = useState(() => {
    try {
      return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) !== 'accepted'
    } catch {
      return true
    }
  })

  const accept = () => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, 'accepted')
    } catch {
      // Storage can be unavailable in private browsing; the banner can still close.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className="dds-cookie is-visible"
      id="dds-cookie"
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании файлов cookie"
    >
      <p className="dds-cookie-text">
        Мы используем файлы cookie, чтобы сделать наш сайт лучше. Используя сайт, вы принимаете нашу{' '}
        <a
          className="dds-cookie-link"
          href="https://snapbuild.ru/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          политику конфиденциальности
        </a>{' '}
        и{' '}
        <a
          className="dds-cookie-link"
          href="https://snapbuild.ru/agreement"
          target="_blank"
          rel="noopener noreferrer"
        >
          соглашение на обработку персональных данных
        </a>
        .
      </p>
      <div className="dds-cookie-actions">
        <button
          type="button"
          className="dds-btn dds-btn--secondary"
          id="dds-cookie-accept"
          onClick={accept}
        >
          <span>Принять</span>
        </button>
      </div>
    </aside>
  )
}
