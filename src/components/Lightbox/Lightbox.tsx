import { useEffect, useRef, useState, type ReactElement } from 'react'
import type { LightboxCaption } from '../../types/lightbox'
import { getTrimmedText } from '../../utils/dom'

export default function Lightbox(): ReactElement | null {
  const [source, setSource] = useState<string | null>(null)
  const [caption, setCaption] = useState<LightboxCaption>({ title: '', desc: '' })
  const [zoomed, setZoomed] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const savedScroll = useRef<number>(0)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const targets = [
      document.querySelector<HTMLImageElement>('#hero .dds-app-preview-shot'),
      document.querySelector<HTMLElement>('#use-cases .dds-tabs-panel'),
    ].filter((target): target is HTMLImageElement | HTMLElement => target !== null)
    const openFromTarget = (event: MouseEvent) => {
      if (!mobile.matches) return
      const target = event.currentTarget as HTMLElement
      const image =
        target instanceof HTMLImageElement
          ? target
          : target.querySelector<HTMLImageElement>('.dds-tabs-media--active')
      if (!image?.src) return
      const activeCard = document.querySelector<HTMLElement>('#use-cases .dds-tabs-card--active')
      setCaption({
        title: getTrimmedText(activeCard?.querySelector('.dds-tabs-card-title') ?? null),
        desc: getTrimmedText(activeCard?.querySelector('.dds-tabs-card-desc') ?? null),
      })
      savedScroll.current = window.scrollY
      setZoomed(false)
      setSource(image.src)
    }
    targets.forEach((target) => target.addEventListener('click', openFromTarget))
    return () => targets.forEach((target) => target.removeEventListener('click', openFromTarget))
  }, [])

  useEffect(() => {
    if (!source) return undefined
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSource(null)
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
  }, [source])

  const closeLightbox = () => setSource(null)

  if (!source) return null

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
          src={source}
          alt=""
          onClick={(event) => {
            event.stopPropagation()
            setZoomed((value) => !value)
          }}
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
        <p className="dds-lightbox-caption-title">{caption.title}</p>
        <p className="dds-lightbox-caption-desc">{caption.desc}</p>
      </div>
    </div>
  )
}
