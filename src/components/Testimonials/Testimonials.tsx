const testimonials = [
  {
    quote:
      'Раньше на запуск лендинга уходило две недели. Теперь собираем и согласовываем страницу за два дня.',
    name: 'Анна Волкова',
    role: 'Директор по маркетингу, Forma',
    initials: 'АВ',
    result: '7× быстрее запуск',
  },
  {
    quote:
      'Команда перестала пересобирать одни и те же материалы вручную — всё остаётся в рамках дизайн-системы.',
    name: 'Илья Морозов',
    role: 'Head of Design, North',
    initials: 'ИМ',
    result: '−35% ручной работы',
  },
  {
    quote: 'Запускаем региональные кампании параллельно и больше не теряем качество на адаптациях.',
    name: 'Ольга Никифорова',
    role: 'Brand Lead, Level',
    initials: 'ОН',
    result: '18 рынков одновременно',
  },
  {
    quote:
      'Маркетинг сам выпускает страницы, а разработчики подключаются только к действительно сложным задачам.',
    name: 'Павел Соколов',
    role: 'CTO, Relay',
    initials: 'ПС',
    result: '3× больше релизов',
  },
  {
    quote: 'Впервые AI-инструмент не ломает наш визуальный язык, а аккуратно продолжает его.',
    name: 'Мария Крылова',
    role: 'Creative Director, Vektor',
    initials: 'МК',
    result: '100% бренд-консистентность',
  },
  {
    quote:
      'Согласования стали короче: команда видит готовый результат, а не обсуждает макеты неделями.',
    name: 'Роман Беляев',
    role: 'Product Lead, Basis',
    initials: 'РБ',
    result: '−42% времени на запуск',
  },
  {
    quote:
      'Собрали продуктовую страницу к конференции за один вечер и успели протестировать две версии.',
    name: 'Елена Лазарева',
    role: 'CMO, Volna',
    initials: 'ЕЛ',
    result: '2 версии за вечер',
  },
  {
    quote:
      'Новые сотрудники начинают выпускать материалы в первый день — правила бренда уже встроены.',
    name: 'Денис Орлов',
    role: 'Operations Lead, Mono',
    initials: 'ДО',
    result: '1 день на онбординг',
  },
]

const featured = {
  quote:
    'SnapBuild стал общей рабочей средой для маркетинга и дизайна. Мы выпускаем больше материалов, быстрее проверяем гипотезы и при этом не отступаем от бренд-системы.',
  name: 'Алексей Громов',
  role: 'VP Marketing, Orbit',
  initials: 'АГ',
}

function Person({ testimonial }) {
  return (
    <div className="dds-testimonials-person">
      <span className="dds-testimonials-avatar" aria-hidden="true">
        {testimonial.initials}
      </span>
      <span className="dds-testimonials-person-copy">
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </span>
    </div>
  )
}

function ReviewCard({ testimonial }) {
  return (
    <article className="dds-testimonials-card">
      <p className="dds-testimonials-result">{testimonial.result}</p>
      <blockquote>{testimonial.quote}</blockquote>
      <Person testimonial={testimonial} />
    </article>
  )
}

function ReviewRow({ items, reverse = false }) {
  const loopItems = [...items, ...items]
  return (
    <div className={`dds-testimonials-row${reverse ? ' dds-testimonials-row--reverse' : ''}`}>
      <div className="dds-testimonials-track">
        {loopItems.map((testimonial, index) => (
          <ReviewCard testimonial={testimonial} key={`${testimonial.name}-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="dds-testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <header className="dds-testimonials-header">
        <h2 className="dds-rmap-title dds-testimonials-title" id="testimonials-title">
          Команды выпускают больше
        </h2>
        <p className="dds-rmap-subtitle dds-testimonials-subtitle">
          Результаты тех, кто уже встроил SnapBuild в ежедневную работу.
        </p>
      </header>

      <article className="dds-testimonials-featured">
        <div className="dds-testimonials-featured-copy">
          <span className="dds-testimonials-mark" aria-hidden="true">
            “
          </span>
          <blockquote>{featured.quote}</blockquote>
          <Person testimonial={featured} />
        </div>
        <div
          className="dds-testimonials-metric"
          aria-label="Результат: 4,6 раза быстрее от идеи до релиза"
        >
          <strong>4,6×</strong>
          <span>
            быстрее от идеи
            <br />
            до релиза
          </span>
        </div>
      </article>

      <div className="dds-testimonials-marquee" aria-label="Отзывы клиентов">
        <ReviewRow items={testimonials.slice(0, 4)} />
        <ReviewRow items={testimonials.slice(4)} reverse />
      </div>
    </section>
  )
}
