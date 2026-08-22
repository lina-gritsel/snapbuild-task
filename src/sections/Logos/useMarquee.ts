import { useEffect, type RefObject } from 'react'

export function useMarquee(
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLDivElement | null>,
  contentRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const track = trackRef.current
    const content = contentRef.current
    const section = sectionRef.current

    if (!track || !content || !section) return

    section.querySelectorAll<HTMLElement>('.dds-marquee-item').forEach((item, index) => {
      item.style.setProperty('--logo-index', String(index))
    })

    const revealLogos = () => {
      section.classList.add('is-logos-revealed')
      revealObserver?.disconnect()
    }
    const revealObserver = window.IntersectionObserver
      ? new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) revealLogos()
          },
          { threshold: 0.18 },
        )
      : null
    if (revealObserver) revealObserver.observe(section)
    else revealLogos()

    const compactViewport = window.matchMedia('(max-width: 1023px)')
    const syncOffset = () => {
      if (!compactViewport.matches) {
        track.classList.remove('is-marquee-ready')
        track.style.removeProperty('--dds-marquee-loop-offset')
        return
      }

      const contentWidth = content.getBoundingClientRect().width
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
      if (contentWidth === 0) return

      track.style.setProperty('--dds-marquee-loop-offset', `-${contentWidth + gap}px`)
      track.classList.add('is-marquee-ready')
    }

    syncOffset()
    requestAnimationFrame(syncOffset)

    compactViewport.addEventListener('change', syncOffset)
    const resizeObserver = window.ResizeObserver ? new ResizeObserver(syncOffset) : null
    resizeObserver?.observe(content)

    return () => {
      compactViewport.removeEventListener('change', syncOffset)
      resizeObserver?.disconnect()
      revealObserver?.disconnect()
    }
  }, [contentRef, sectionRef, trackRef])
}
