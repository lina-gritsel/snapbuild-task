'use client'

import { useState, type ReactElement } from 'react'

const topics = ['Вопрос о продукте', 'Обсудить сотрудничество', 'Запросить демонстрацию', 'Другое']

export default function ContactForm(): ReactElement {
  const [status, setStatus] = useState('idle')
  const [topic, setTopic] = useState(topics[0])
  const [topicListOpen, setTopicListOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
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

        <form className="dds-contact-form" onSubmit={handleSubmit}>
          <div className="dds-contact-fields">
            <label className="dds-contact-field">
              <span>Имя</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Как к вам обращаться"
                required
              />
            </label>
            <label className="dds-contact-field">
              <span>Почта</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.ru"
                required
              />
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
                name="message"
                rows={4}
                placeholder="Расскажите, чем можем помочь"
                required
              />
            </label>
          </div>

          <label className="dds-contact-consent">
            <input name="consent" type="checkbox" required />
            <span>
              Я согласен с{' '}
              <a href="https://snapbuild.ru/privacy" target="_blank" rel="noopener noreferrer">
                политикой конфиденциальности
              </a>
            </span>
          </label>

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
