'use client'

import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  type ReactElement,
} from 'react'

const topics = ['Вопрос о продукте', 'Обсудить сотрудничество', 'Запросить демонстрацию', 'Другое']
const fieldNames = ['name', 'email', 'message', 'consent'] as const

type FieldName = (typeof fieldNames)[number]
type FormErrors = Partial<Record<FieldName, string>>

function validateField(name: FieldName, value: string, checked = false): string | undefined {
  if (name === 'name' && value.trim().length < 2) return 'Укажите имя'
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
    return 'Введите корректный e-mail'
  if (name === 'message' && value.trim().length < 10)
    return 'Опишите задачу хотя бы в нескольких словах'
  if (name === 'consent' && !checked) return 'Нужно согласиться с политикой конфиденциальности'
  return undefined
}

export default function ContactForm(): ReactElement {
  const [status, setStatus] = useState('idle')
  const [topic, setTopic] = useState(topics[0])
  const [topicListOpen, setTopicListOpen] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateControl = (name: FieldName, value: string, checked = false) => {
    const error = validateField(name, value, checked)
    setErrors((current) => ({ ...current, [name]: error }))
    return error
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.currentTarget.name as FieldName
    if (!fieldNames.includes(name)) return
    validateControl(
      name,
      event.currentTarget.value,
      event.currentTarget instanceof HTMLInputElement && event.currentTarget.checked,
    )
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.currentTarget.name as FieldName
    if (!fieldNames.includes(name) || !errors[name]) return
    validateControl(
      name,
      event.currentTarget.value,
      event.currentTarget instanceof HTMLInputElement && event.currentTarget.checked,
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors: FormErrors = {}

    fieldNames.forEach((name) => {
      const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null
      const error = validateField(
        name,
        input?.value ?? '',
        input instanceof HTMLInputElement && input.checked,
      )
      if (error) nextErrors[name] = error
    })

    setErrors(nextErrors)
    const firstInvalidField = fieldNames.find((name) => nextErrors[name])
    if (firstInvalidField) {
      const input = form.elements.namedItem(firstInvalidField) as
        HTMLInputElement | HTMLTextAreaElement | null
      input?.focus()
      return
    }

    const subject = `Обратная связь с сайта SnapBuild — ${data.get('topic')}`
    const body = [
      `Имя: ${data.get('name')}`,
      `Почта: ${data.get('email')}`,
      `Тема: ${data.get('topic')}`,
      '',
      `${data.get('message')}`,
    ].join('\n')

    setStatus('opening')
    window.location.href = `mailto:hey@snapbuild.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.setTimeout(() => setStatus('idle'), 1600)
  }

  return (
    <section className="dds-contact" id="contact" aria-labelledby="contact-title">
      <div className="dds-contact-shell">
        <div className="dds-contact-copy">
          <h2 className="dds-rmap-title dds-contact-title" id="contact-title">
            Напишите нам
          </h2>
          <p className="dds-rmap-subtitle dds-contact-subtitle">
            Задайте вопрос, поделитесь идеей или расскажите, что хотите обсудить с командой.
          </p>
          <a className="dds-contact-direct" href="mailto:hey@snapbuild.ru">
            hey@snapbuild.ru
          </a>
        </div>

        <form className="dds-contact-form" noValidate onSubmit={handleSubmit}>
          <div className="dds-contact-fields">
            <label className="dds-contact-field">
              <span>Имя</span>
              <input
                aria-describedby={errors.name ? 'dds-contact-name-error' : undefined}
                aria-invalid={Boolean(errors.name)}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                autoComplete="name"
                placeholder="Как к вам обращаться"
                required
              />
              {errors.name && (
                <span className="dds-contact-error" id="dds-contact-name-error">
                  {errors.name}
                </span>
              )}
            </label>
            <label className="dds-contact-field">
              <span>Почта</span>
              <input
                aria-describedby={errors.email ? 'dds-contact-email-error' : undefined}
                aria-invalid={Boolean(errors.email)}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                autoComplete="email"
                placeholder="name@company.ru"
                required
              />
              {errors.email && (
                <span className="dds-contact-error" id="dds-contact-email-error">
                  {errors.email}
                </span>
              )}
            </label>
            <div className="dds-contact-field dds-contact-field-wide">
              <span id="dds-contact-topic-label">Тема</span>
              <div className="dds-contact-topic-select">
                <input name="topic" type="hidden" value={topic} />
                <button
                  type="button"
                  className="dds-contact-topic-trigger"
                  aria-labelledby="dds-contact-topic-label"
                  aria-haspopup="listbox"
                  aria-expanded={topicListOpen}
                  onClick={() => setTopicListOpen((open) => !open)}
                >
                  <span>{topic}</span>
                  <span className="dds-contact-topic-chevron" aria-hidden="true" />
                </button>
                {topicListOpen && (
                  <ul className="dds-contact-topic-list" role="listbox" aria-label="Тема">
                    {topics.map((item) => (
                      <li key={item} role="presentation">
                        <button
                          type="button"
                          role="option"
                          aria-selected={item === topic}
                          className={item === topic ? 'is-selected' : undefined}
                          onClick={() => {
                            setTopic(item)
                            setTopicListOpen(false)
                          }}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <label className="dds-contact-field dds-contact-field-wide">
              <span>Сообщение</span>
              <textarea
                aria-describedby={errors.message ? 'dds-contact-message-error' : undefined}
                aria-invalid={Boolean(errors.message)}
                name="message"
                onBlur={handleBlur}
                onChange={handleChange}
                rows={4}
                placeholder="Расскажите, чем можем помочь"
                required
              />
              {errors.message && (
                <span className="dds-contact-error" id="dds-contact-message-error">
                  {errors.message}
                </span>
              )}
            </label>
          </div>

          <div className="dds-contact-consent-wrap">
            <label className="dds-contact-consent">
              <input
                aria-describedby={errors.consent ? 'dds-contact-consent-error' : undefined}
                aria-invalid={Boolean(errors.consent)}
                name="consent"
                onBlur={handleBlur}
                onChange={handleChange}
                type="checkbox"
                required
              />
              <span>
                Я согласен с{' '}
                <a href="https://snapbuild.ru/privacy" target="_blank" rel="noopener noreferrer">
                  политикой конфиденциальности
                </a>
              </span>
            </label>
            {errors.consent && (
              <p className="dds-contact-error" id="dds-contact-consent-error">
                {errors.consent}
              </p>
            )}
          </div>

          <button className="dds-contact-submit" type="submit" disabled={status === 'opening'}>
            <span>{status === 'opening' ? 'Открываем почту…' : 'Отправить сообщение'}</span>
            <span className="dds-contact-submit-arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
