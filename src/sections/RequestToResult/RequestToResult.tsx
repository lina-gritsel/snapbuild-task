import type { ReactElement } from 'react'

const metrics = [
  {
    value: '10×',
    title: 'быстрее производство',
    description: 'От первого запроса до готового маркетингового материала',
  },
  {
    value: '5 минут',
    title: 'до первого результата',
    description: 'Структура, контент и визуал появляются в одном процессе',
  },
  {
    value: '100%',
    title: 'в рамках вашего бренда',
    description: 'Дизайн-система применяется к каждому формату автоматически',
  },
]

export default function RequestToResult(): ReactElement {
  return (
    <section className="dds-metrics" id="request-result" aria-labelledby="request-result-title">
      <header className="dds-metrics-header">
        <h2 className="dds-metrics-title" id="request-result-title">
          Быстрее от идеи до публикации
        </h2>
        <p className="dds-metrics-subtitle">
          Один процесс вместо ручной сборки и переключений между инструментами
        </p>
      </header>

      <div className="dds-metrics-list">
        {metrics.map((metric) => (
          <article className="dds-metrics-item" key={metric.value}>
            <strong className="dds-metrics-value">{metric.value}</strong>
            <div className="dds-metrics-copy">
              <h3>{metric.title}</h3>
              <p>{metric.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
