import type { ReactElement } from 'react'

const checks = [
  {
    title: 'Фирменный стиль',
    description: 'Цвета, типографика и композиция соответствуют бренд-системе',
    status: 'Проверено',
  },
  {
    title: 'Контент и факты',
    description: 'Команда видит текст и источники до публикации материала',
    status: 'Согласовано',
  },
  {
    title: 'Доступ и версии',
    description: 'Роли, комментарии и история изменений остаются в одном месте',
    status: 'Сохранено',
  },
]

export default function BriefToMaterials(): ReactElement {
  return (
    <section className="dds-control" id="brief-materials" aria-labelledby="brief-materials-title">
      <div className="dds-control-panel">
        <header className="dds-control-header">
          <div>
            <h2 className="dds-control-title" id="brief-materials-title">
              Всё остаётся
              <br />
              под контролем
            </h2>
            <p className="dds-control-subtitle">
              От первого запроса до публикации — команда видит, проверяет и согласовывает каждый
              этап.
            </p>
          </div>
        </header>

        <div className="dds-control-checks" aria-label="Этапы проверки материала">
          {checks.map((check, index) => (
            <article className="dds-control-check" key={check.title}>
              <span className="dds-control-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="dds-control-check-copy">
                <h3>{check.title}</h3>
                <p>{check.description}</p>
              </div>
              <span className="dds-control-status">
                <i aria-hidden="true" />
                {check.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
