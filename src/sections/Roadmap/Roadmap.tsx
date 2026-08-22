import { useRef, type CSSProperties, type ReactElement } from 'react'
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
        <h2 className="dds-rmap-title" data-cms-key="roadmap.platform.title" style={{}}>
          Каждый день&nbsp;— новый релиз
        </h2>
        <p className="dds-rmap-subtitle" data-cms-key="roadmap.platform.subtitle">
          Приоритизируем бэклог для&nbsp;ваших целей
        </p>
      </header>
      <div ref={scrollerRef} className="dds-rmap-scroller" data-dds-drag-scroll>
        <div className="dds-rmap-track" style={{ '--ddsRmapProgress': 8 } as CSSProperties}>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item1.title">
                Сайты за&nbsp;5 минут
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item1.desc">
                Генерация корпоративных сайтов по&nbsp;вашей дизайн-системе&nbsp;— 100%
                консистентность, без&nbsp;разработчиков
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item1.date">
                Декабрь,&nbsp;2025
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item2.title">
                Консистентные AI-иллюстрации
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item2.desc">
                Настраиваете фирменный стиль один раз&nbsp;— графика для&nbsp;каждой секции сайта
                в&nbsp;едином виде через стилевые пресеты
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item2.date">
                Январь,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item3.title">
                Дизайн-система из&nbsp;вашего сайта
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item3.desc" style={{}}>
                Сканируем существующие страницы и&nbsp;собираем из&nbsp;них готовую дизайн-систему;
                AI&nbsp;сам выстраивает структуру
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item3.date">
                Февраль,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item4.title">
                Режим изображений
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item4.desc">
                Брендовая графика в&nbsp;один клик: управление стилями и&nbsp;темами, десятки
                параметров редактирования
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item4.date">
                Март,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item5.title">
                Генерация видео
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item5.desc" style={{}}>
                Видео из&nbsp;ваших изображений с&nbsp;ключевыми кадрами; AI&nbsp;точнее
                на&nbsp;78%, панель рассуждений и&nbsp;управление правами
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item5.date">
                Апрель,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item6.title">
                Ресайзы изображений
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item6.desc">
                Одна фокус-точка → все форматы (16:9, 9:16, 1:1 и&nbsp;другие) с&nbsp;автоматическим
                бюджетом веса на&nbsp;экспорт
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item6.date">
                Май,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item7.title">
                Расширенный редактор, как&nbsp;в&nbsp;Figma
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item7.desc">
                Слои, изменение размеров любого контейнера, превью структуры в&nbsp;чате, версии
                промптов и&nbsp;ветвление диалогов
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item7.date">
                Июнь,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item8.title">
                Канвас, баннеры и&nbsp;презентации
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item8.desc">
                Канвас во&nbsp;всех режимах; новые режимы&nbsp;— генерация рекламных баннеров
                и&nbsp;корпоративных презентаций
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item8.date">
                Июль,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item is-reached">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item9.title">
                ИИ-маркетолог
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item9.desc">
                Следит за&nbsp;данными, сам обновляет ваши материалы и&nbsp;собирает кампанию
                целиком&nbsp;— от&nbsp;изображений до&nbsp;сайта
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item9.date">
                Август,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item10.title">
                Компонентный подход
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item10.desc">
                AI сам компонует секции сайтов из&nbsp;элементов вашей дизайн-библиотеки
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item10.date">
                Сентябрь,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item11.title">
                Предиктивные рекомендации
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item11.desc">
                Платформа сама предлагает, что&nbsp;обновить в&nbsp;кампаниях&nbsp;— от&nbsp;секций
                сайта до&nbsp;баннеров
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item11.date">
                Октябрь,&nbsp;2026
              </p>
            </div>
          </article>
          <article className="dds-rmap-item">
            <span className="dds-rmap-dot">
              <span className="dds-rmap-dot-halo" />
              <span className="dds-rmap-dot-core" />
            </span>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name" data-cms-key="roadmap.platform.item13.title">
                Инфраструктура
              </h3>
              <p className="dds-rmap-desc" data-cms-key="roadmap.platform.item13.desc">
                Развертывание в&nbsp;вашей сети и&nbsp;контуре
              </p>
              <p className="dds-rmap-date" data-cms-key="roadmap.platform.item13.date">
                Ноябрь,&nbsp;2026
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
