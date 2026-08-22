import type { CSSProperties } from 'react'

const materials = ['Лендинг', 'Баннеры', 'Презентация', 'Видео']

export default function BriefToMaterials() {
  return (
    <section
      className="dds-brief-materials"
      id="brief-materials"
      aria-labelledby="brief-materials-title"
    >
      <div className="dds-brief-materials-copy">
        <h2 className="dds-brief-materials-title" id="brief-materials-title">
          <span>Один бриф.</span>
          <span>Все материалы.</span>
        </h2>
        <p className="dds-brief-materials-description">
          Задайте аудиторию, сообщение и правила бренда один раз — SnapBuild подготовит комплект для
          всей кампании.
        </p>
      </div>

      <div
        className="dds-brief-materials-flow"
        aria-label="Из одного брифа создаются лендинг, баннеры, презентация и видео"
      >
        <strong className="dds-brief-materials-source">
          <span>Бриф</span>
        </strong>
        <span className="dds-brief-materials-line" aria-hidden="true">
          <i />
        </span>
        <ul className="dds-brief-materials-list">
          {materials.map((material, index) => (
            <li key={material} style={{ '--material-index': index } as CSSProperties}>
              <span>{material}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
