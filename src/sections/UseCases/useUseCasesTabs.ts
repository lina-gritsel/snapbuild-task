import { useEffect, type RefObject } from 'react'

export function useUseCasesTabs(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = sectionRef.current
    const panel = section?.querySelector<HTMLElement>('.dds-tabs-panel')

    if (!section || !panel) return

    const activateCard = (card: HTMLElement | null) => {
      if (!card) return

      card
        .closest('.dds-tabs-points-set')
        ?.querySelectorAll<HTMLElement>('.dds-tabs-card')
        .forEach((item) => item.classList.toggle('dds-tabs-card--active', item === card))

      const key = card.dataset.media
      panel.querySelectorAll<HTMLElement>('.dds-tabs-media').forEach((media) => {
        media.classList.toggle(
          'dds-tabs-media--active',
          media.classList.contains(`dds-tabs-media--${key}`),
        )
      })
    }

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.dds-tabs-card'))
    const onCardClick = (event: MouseEvent) => activateCard(event.currentTarget as HTMLElement)
    cards.forEach((card) => card.addEventListener('click', onCardClick))

    const radios = Array.from(section.querySelectorAll<HTMLInputElement>('input[name="uc-tabs"]'))
    const onRadioChange = (event: Event) => {
      const radio = event.currentTarget as HTMLInputElement
      if (!radio.checked) return

      const set = section.querySelector<HTMLElement>(
        `.dds-tabs-points-set--${radio.id.replace('uc-tab-', '')}`,
      )
      activateCard(
        set?.querySelector<HTMLElement>('.dds-tabs-card--active') ??
          set?.querySelector<HTMLElement>('.dds-tabs-card') ??
          null,
      )
    }
    radios.forEach((radio) => radio.addEventListener('change', onRadioChange))

    return () => {
      cards.forEach((card) => card.removeEventListener('click', onCardClick))
      radios.forEach((radio) => radio.removeEventListener('change', onRadioChange))
    }
  }, [sectionRef])
}
