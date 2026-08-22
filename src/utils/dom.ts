export function getTrimmedText(element: Element | null): string {
  return element?.textContent?.trim() ?? ''
}
