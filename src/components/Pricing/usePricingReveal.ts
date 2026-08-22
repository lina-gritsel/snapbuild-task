import { useEffect, type RefObject } from 'react'

export function usePricingReveal(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!window.IntersectionObserver) {
      section.classList.add('is-pricing-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        section.classList.add('is-pricing-revealed')
        observer.disconnect()
      },
      { threshold: 0.12 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [sectionRef])
}
