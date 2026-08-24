import { useState, type KeyboardEvent, type ReactElement } from 'react'
import { canOpenMobileLightbox } from '../../shared/lib/media'
import type { LightboxContent } from '../../shared/ui/Lightbox/Lightbox.types'
import {
  useCaseTabs,
  type UseCaseItem,
  type UseCaseItemId,
  type UseCaseTab,
  type UseCaseTabId,
} from './UseCases.data'

type ActiveItems = Record<UseCaseTabId, UseCaseItemId>

const initialActiveItems = useCaseTabs.reduce<ActiveItems>((items, tab) => {
  items[tab.id] = tab.items[0].id
  return items
}, {} as ActiveItems)

const getTabCmsKey = (tab: UseCaseTab) => tab.cmsKey
const getItemTitleCmsKey = (item: UseCaseItem) => item.titleCmsKey
const getItemDescriptionCmsKey = (item: UseCaseItem) => item.descriptionCmsKey

type UseCasesProps = {
  onPreview: (content: LightboxContent) => void
}

export default function UseCases({ onPreview }: UseCasesProps): ReactElement {
  const [activeTabId, setActiveTabId] = useState<UseCaseTabId>(useCaseTabs[0].id)
  const [activeItems, setActiveItems] = useState<ActiveItems>(initialActiveItems)

  const activeTab = useCaseTabs.find((tab) => tab.id === activeTabId) ?? useCaseTabs[0]
  const activeItem =
    activeTab.items.find((item) => item.id === activeItems[activeTab.id]) ?? activeTab.items[0]

  const selectItem = (tabId: UseCaseTabId, itemId: UseCaseItemId) => {
    setActiveItems((current) => ({ ...current, [tabId]: itemId }))
  }

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    tabId: UseCaseTabId,
    itemId: UseCaseItemId,
  ) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    selectItem(tabId, itemId)
  }

  const openPreview = () => {
    if (!canOpenMobileLightbox()) return

    onPreview({
      src: activeItem.image,
      alt: '',
      title: activeItem.title,
      description: activeItem.description,
    })
  }

  return (
    <section
      className="use-cases dds-use-cases dds-tabs"
      data-cms-section="use-cases.tabs"
      data-section-id="019f8703-47cb-7689-a38e-b7781d811c91"
      data-template-id="ad505775-7616-5cfe-b331-f54469d638ec"
      id="use-cases"
    >
      {useCaseTabs.map((tab) => (
        <input
          key={tab.id}
          type="radio"
          name="uc-tabs"
          id={`uc-tab-${tab.index}`}
          className="dds-tabs-radio"
          checked={activeTabId === tab.id}
          onChange={() => setActiveTabId(tab.id)}
        />
      ))}

      <div className="dds-tabs-inner">
        <div className="dds-tabs-header">
          <h2 className="dds-tabs-title">
            <span className="dds-tabs-wide" data-cms-key="use-cases.title">
              Любой контент в&nbsp;фирменном стиле за&nbsp;считанные минуты
            </span>
            <span className="dds-tabs-narrow" data-cms-key="use-cases.title-narrow">
              Любой контент в&nbsp;фирменном стиле за&nbsp;считанные минуты
            </span>
          </h2>

          <div className="dds-tabs-group" role="tablist" aria-label="Форматы контента">
            {useCaseTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className="dds-tabs-tab"
                data-cms-key={getTabCmsKey(tab)}
                role="tab"
                aria-selected={activeTabId === tab.id}
                aria-controls={`uc-panel-${tab.index}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="dds-tabs-body">
          <div className="dds-tabs-points">
            {useCaseTabs.map((tab) => (
              <div
                key={tab.id}
                className={`dds-tabs-points-set dds-tabs-points-set--${tab.index}`}
                id={`uc-panel-${tab.index}`}
                role="tabpanel"
                aria-hidden={activeTabId !== tab.id}
              >
                {tab.items.map((item) => {
                  const isActive = activeItems[tab.id] === item.id

                  return (
                    <article
                      key={item.id}
                      className={`dds-tabs-card${isActive ? ' dds-tabs-card--active' : ''}`}
                      data-media={item.id}
                      role="button"
                      tabIndex={activeTabId === tab.id ? 0 : -1}
                      aria-pressed={isActive}
                      onClick={() => selectItem(tab.id, item.id)}
                      onKeyDown={(event) => handleCardKeyDown(event, tab.id, item.id)}
                    >
                      <h3 className="dds-tabs-card-title" data-cms-key={getItemTitleCmsKey(item)}>
                        {item.title}
                      </h3>
                      <p
                        className="dds-tabs-card-desc"
                        data-cms-key={getItemDescriptionCmsKey(item)}
                      >
                        <span>{item.description}</span>
                      </p>
                      <div className="dds-tabs-card-progress">
                        <div className="dds-tabs-card-progress-fill" />
                      </div>
                    </article>
                  )
                })}
              </div>
            ))}
          </div>

          <div className="dds-tabs-panel" onClick={openPreview}>
            {useCaseTabs.flatMap((tab) =>
              tab.items.map((item) => (
                <img
                  key={item.id}
                  className={`dds-tabs-media dds-tabs-media--${item.id}${activeItem.id === item.id ? ' dds-tabs-media--active' : ''}`}
                  data-media={item.id}
                  src={item.image}
                  alt=""
                  width={2880}
                  height={1620}
                  loading={item.id === useCaseTabs[0].items[0].id ? 'eager' : 'lazy'}
                />
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
