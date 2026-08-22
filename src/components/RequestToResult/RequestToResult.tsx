import type { ReactElement } from 'react'

export default function RequestToResult(): ReactElement {
  return (
    <section
      className="dds-request-result"
      id="request-result"
      aria-labelledby="request-result-title"
    >
      <div className="dds-request-result-header">
        <p className="dds-request-result-eyebrow">Один рабочий процесс</p>
        <h2 className="dds-request-result-title" id="request-result-title">
          От запроса до готового материала
        </h2>
      </div>

      <div className="dds-request-result-stage">
        <div className="dds-request-result-prompt">
          <div className="dds-request-result-prompt-top">
            <span className="dds-request-result-status-dot" aria-hidden="true" />
            <span>Новый запрос</span>
          </div>
          <p className="dds-request-result-query">
            Собери лендинг для запуска корпоративной платформы. Используй нашу дизайн-систему и
            адаптируй оффер для IT-директоров.
          </p>
          <div className="dds-request-result-files" aria-label="Материалы запроса">
            <span>Брендбук.pdf</span>
            <span>Описание.docx</span>
          </div>
          <div className="dds-request-result-action" aria-hidden="true">
            <span>Создать</span>
            <span className="dds-request-result-arrow">↗</span>
          </div>
        </div>

        <div className="dds-request-result-flow" aria-hidden="true">
          <span className="dds-request-result-line" />
          <span className="dds-request-result-flow-label">SnapBuild</span>
          <span className="dds-request-result-pulse" />
        </div>

        <div className="dds-request-result-output">
          <img
            src="assets/images/use-cases-tab1-item1-v2.webp"
            alt="Готовый лендинг, собранный SnapBuild по запросу"
            width="2880"
            height="1620"
          />
          <div className="dds-request-result-output-label">
            <span className="dds-request-result-ready" aria-hidden="true" />
            Готово к публикации
          </div>
        </div>
      </div>
    </section>
  )
}
