import { useEffect, useRef, useState, type MouseEvent, type ReactElement } from 'react'
import type { LightboxContent } from './Lightbox.types'

type LightboxProps = {
  content: LightboxContent
  onClose: () => void
}

export default function Lightbox({ content, onClose }: LightboxProps): ReactElement {
  const [zoomed, setZoomed] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const savedScroll = useRef(0)

  useEffect(() => {
    savedScroll.current = window.scrollY

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.documentElement.classList.add('dds-lightbox-locked')
    document.body.style.top = `-${savedScroll.current}px`
    requestAnimationFrame(() => closeButtonRef.current?.focus({ preventScroll: true }))

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.documentElement.classList.remove('dds-lightbox-locked')
      document.body.style.top = ''
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, savedScroll.current)
      document.documentElement.style.scrollBehavior = ''
    }
  }, [content, onClose])

  const closeLightbox = () => {
    onClose()
  }

  const toggleZoom = (event: MouseEvent<HTMLImageElement>) => {
    event.stopPropagation()
    setZoomed((value) => !value)
  }

  return (
    <div
      className={`dds-lightbox is-open is-visible${zoomed ? ' is-zoomed' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
      onClick={closeLightbox}
    >
      <div className="dds-lightbox-scroll">
        <img
          className="dds-lightbox-img"
          src={content.src}
          alt={content.alt}
          onClick={toggleZoom}
        />
      </div>
      <button
        ref={closeButtonRef}
        type="button"
        className="dds-lightbox-close"
        aria-label="Закрыть"
        onClick={closeLightbox}
      >
        ✕
      </button>
      <div className="dds-lightbox-caption">
        <p className="dds-lightbox-caption-title">{content.title}</p>
        <p className="dds-lightbox-caption-desc">{content.description}</p>
      </div>
    </div>
  )
}
