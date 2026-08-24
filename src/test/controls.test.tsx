import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Header from '../layout/Header/Header'
import ContactForm from '../sections/ContactForm/ContactForm'
import Faq from '../sections/Faq/Faq'
import Hero from '../sections/Hero/Hero'
import UseCases from '../sections/UseCases/UseCases'
import Lightbox from '../shared/ui/Lightbox/Lightbox'

function mockMediaQuery(matches: boolean): void {
  vi.mocked(window.matchMedia).mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

describe('semantic controls', () => {
  it('opens and closes the mobile menu with a native button', async () => {
    mockMediaQuery(true)
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Открыть меню' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Закрыть меню' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('navigation', { name: 'Мобильная навигация' })).toHaveAttribute(
      'aria-hidden',
      'false',
    )

    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Открыть меню' })).toHaveFocus()
  })

  it('supports disclosure semantics in FAQ', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', {
      name: /Как\s+работает анализ бренда\?/,
    })
    const panel = document.getElementById(question.getAttribute('aria-controls') ?? '')

    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(panel).toHaveAttribute('aria-hidden', 'true')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(panel).toHaveAttribute('aria-hidden', 'false')
  })

  it('supports keyboard navigation and native item buttons in use cases', async () => {
    const user = userEvent.setup()
    render(<UseCases onPreview={vi.fn()} />)

    const sitesTab = screen.getByRole('tab', { name: 'Сайты' })
    sitesTab.focus()
    await user.keyboard('{ArrowRight}')

    const imagesTab = screen.getByRole('tab', { name: 'Изображения' })
    expect(imagesTab).toHaveAttribute('aria-selected', 'true')
    expect(imagesTab).toHaveFocus()

    const item = screen.getByRole('button', {
      name: /Попадание\s+с\s+первой генерации/,
    })
    await user.click(item)
    expect(item).toHaveAttribute('aria-pressed', 'true')

    document.querySelectorAll<HTMLImageElement>('#use-cases img').forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy')
    })
  })

  it('opens the selected use-case preview on mobile', async () => {
    mockMediaQuery(true)
    const onPreview = vi.fn()
    const user = userEvent.setup()
    render(<UseCases onPreview={onPreview} />)

    await user.click(screen.getByRole('button', { name: /Открыть изображение/ }))
    expect(onPreview).toHaveBeenCalledWith(
      expect.objectContaining({ title: 'Результат за\u00a0один запрос' }),
    )
  })

  it('opens the custom topic list and selects an option with the keyboard', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const topic = screen.getByRole('button', { name: 'Тема' })
    await user.click(topic)
    expect(topic).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{ArrowDown}{Enter}')
    expect(topic).toHaveTextContent('Обсудить сотрудничество')
    expect(topic).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the hero image eager and makes lightbox controls keyboard-accessible', async () => {
    mockMediaQuery(false)
    const { unmount } = render(<Hero onPreview={vi.fn()} />)
    const heroImage = document.querySelector<HTMLImageElement>('#hero img')

    expect(heroImage).toHaveAttribute('loading', 'eager')
    expect(heroImage).toHaveAttribute('fetchpriority', 'high')
    unmount()

    const onClose = vi.fn()
    const user = userEvent.setup()
    render(
      <Lightbox
        content={{ src: '/preview.webp', alt: '', title: 'Превью', description: 'Описание' }}
        onClose={onClose}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Увеличить изображение' }))
    expect(screen.getByRole('button', { name: 'Уменьшить изображение' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledOnce()
  })
})
