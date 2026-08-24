import { useEffect, useRef, useState, type MouseEvent, type ReactElement } from 'react'
import type { LightboxContent } from './Lightbox.types'

type LightboxProps = {
  content: LightboxContent
  onClose: () => void
}

export default function Lightbox({ content, onClose }: LightboxProps): ReactElement {
  const [zoomed, setZoomed] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const savedScroll = useRef(0)

  useEffect(() => {
    savedScroll.current = window.scrollY
    previousFocusRef.current = document.activeElement as HTMLElement | null

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const controls = Array.from(
        dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)') ?? [],
      )
      if (controls.length === 0) return

      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
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
      previousFocusRef.current?.focus({ preventScroll: true })
    }
  }, [content, onClose])

  const closeLightbox = () => {
    onClose()
  }

  const toggleZoom = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setZoomed((value) => !value)
  }

  return (
    <div
      ref={dialogRef}
      className={`dds-lightbox is-open is-visible has-caption${zoomed ? ' is-zoomed' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dds-lightbox-title"
      aria-describedby="dds-lightbox-description"
      onClick={closeLightbox}
    >
      <div className="dds-lightbox-scroll">
        <button
          type="button"
          className="dds-lightbox-image-button"
          aria-label={zoomed ? 'Уменьшить изображение' : 'Увеличить изображение'}
          onClick={toggleZoom}
        >
          <img
            className="dds-lightbox-img"
            src={content.src}
            alt={content.alt}
            loading="eager"
            decoding="async"
          />
        </button>
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
        <p className="dds-lightbox-caption-title" id="dds-lightbox-title">
          {content.title}
        </p>
        <p className="dds-lightbox-caption-desc" id="dds-lightbox-description">
          {content.description}
        </p>
      </div>
    </div>
  )
}
