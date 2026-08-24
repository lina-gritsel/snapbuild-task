const MOBILE_LIGHTBOX_QUERY = '(max-width: 767px)'

export function canOpenMobileLightbox(): boolean {
  return window.matchMedia(MOBILE_LIGHTBOX_QUERY).matches
}
