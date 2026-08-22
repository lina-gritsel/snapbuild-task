import { useEffect, type RefObject } from 'react'

export function useRoadmapDragScroll(scrollerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let dragging = false
    let startX = 0
    let startLeft = 0

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      dragging = true
      startX = event.pageX
      startLeft = scroller.scrollLeft
      scroller.classList.add('is-dragging')
      event.preventDefault()
    }
    const onPointerMove = (event: PointerEvent) => {
      if (dragging) scroller.scrollLeft = startLeft - (event.pageX - startX)
    }
    const release = () => {
      dragging = false
      scroller.classList.remove('is-dragging')
    }

    scroller.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', release)
    window.addEventListener('pointercancel', release)
    window.addEventListener('blur', release)

    return () => {
      scroller.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', release)
      window.removeEventListener('pointercancel', release)
      window.removeEventListener('blur', release)
    }
  }, [scrollerRef])
}
