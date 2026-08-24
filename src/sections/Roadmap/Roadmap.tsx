import { useRef, type CSSProperties, type ReactElement } from 'react'
import { roadmapItems, roadmapProgress } from './Roadmap.data'
import { useRoadmapDragScroll } from './useRoadmapDragScroll'

export default function Roadmap(): ReactElement {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useRoadmapDragScroll(scrollerRef)

  return (
    <section
      className="roadmap dds-rmap"
      data-cms-section="roadmap.platform"
      data-section-id="019f8703-47cb-76b5-a38e-b7781e65d44b"
      data-template-id="3e95b975-11d0-4fdb-8edb-7d1c7073bd94"
      id="roadmap"
    >
      <header className="dds-rmap-header">
        <h2 className="dds-rmap-title" data-cms-key="roadmap.platform.title">
          Каждый день&nbsp;— новый релиз
        </h2>
        <p className="dds-rmap-subtitle" data-cms-key="roadmap.platform.subtitle">
          Приоритизируем бэклог для&nbsp;ваших целей
        </p>
      </header>
      <div ref={scrollerRef} className="dds-rmap-scroller" data-dds-drag-scroll>
        <div
          className="dds-rmap-track"
          style={{ '--ddsRmapProgress': roadmapProgress } as CSSProperties}
        >
          {roadmapItems.map((item) => (
            <article
              className={`dds-rmap-item${item.reached ? ' is-reached' : ''}`}
              key={item.cmsIndex}
            >
              <span className="dds-rmap-dot">
                <span className="dds-rmap-dot-halo" />
                <span className="dds-rmap-dot-core" />
              </span>
              <div className="dds-rmap-body">
                <h3
                  className="dds-rmap-name"
                  data-cms-key={`roadmap.platform.item${item.cmsIndex}.title`}
                >
                  {item.title}
                </h3>
                <p
                  className="dds-rmap-desc"
                  data-cms-key={`roadmap.platform.item${item.cmsIndex}.desc`}
                >
                  {item.description}
                </p>
                <p
                  className="dds-rmap-date"
                  data-cms-key={`roadmap.platform.item${item.cmsIndex}.date`}
                >
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
