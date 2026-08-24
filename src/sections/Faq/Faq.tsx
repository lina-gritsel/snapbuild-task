import { Fragment, useState, type ReactElement } from 'react'
import { faqColumns, type FaqItem } from './Faq.data'

const faqIcon = 'assets/images/c2663c497fb468e1.webp'

function FaqAnswer({ answer }: Pick<FaqItem, 'answer'>): ReactElement {
  if (typeof answer === 'string') return <>{answer}</>

  return (
    <>
      {answer.map((paragraph, index) => (
        <Fragment key={paragraph}>
          {index > 0 ? (
            <>
              <br />
              <br />
            </>
          ) : null}
          {paragraph}
        </Fragment>
      ))}
    </>
  )
}

function FaqEntry({ item }: { item: FaqItem }): ReactElement {
  const buttonId = `dds-faq-${item.index}-button`
  const panelId = `dds-faq-${item.index}-panel`
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`dds-accordion-item${isOpen ? ' is-open' : ''}`}
      data-cms-node={`faq.accordion.item-${item.index}`}
      data-cms-interaction="disclosure"
      data-label={`Вопрос FAQ ${item.index}`}
    >
      <button
        className="dds-accordion-head"
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        data-cms-interaction-control
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="dds-accordion-question" data-cms-key={`faq.q${item.index}`}>
          {item.question}
        </span>
        <span className="dds-accordion-icon" aria-hidden="true">
          <img
            src={faqIcon}
            style={{ display: 'block', objectFit: 'fill' }}
            width="100%"
            height="100%"
            data-cms-image={`faq.accordion.asset-${item.index}`}
            data-cms-no-generate
            alt=""
            loading="lazy"
            decoding="async"
          />
        </span>
      </button>
      <div
        className="dds-accordion-panel"
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
      >
        <p className="dds-accordion-answer" data-cms-key={`faq.a${item.index}`}>
          <FaqAnswer answer={item.answer} />
        </p>
      </div>
    </div>
  )
}

export default function Faq(): ReactElement {
  return (
    <section
      className="faq dds-faq dds-accordion"
      data-cms-section="faq.accordion"
      data-section-id="019f8703-47cb-76c5-a38e-b7781ec54f1f"
      data-template-id="0b2a9570-0ea2-5b19-a79c-7d4f47af5430"
      id="faq"
    >
      <div className="dds-accordion-header">
        <h2 className="dds-accordion-title" data-cms-key="faq.title">
          Часто задаваемые вопросы
        </h2>
        <p className="dds-accordion-subtitle" data-cms-key="faq.subtitle">
          Ответы, которые помогут вам принять решение уверенно&nbsp;— без&nbsp;рисков
          для&nbsp;бренда и&nbsp;безопасности
        </p>
      </div>
      <div className="dds-accordion-list">
        {faqColumns.map((column) => (
          <div className="dds-accordion-col" key={column[0].index}>
            {column.map((item) => (
              <FaqEntry item={item} key={item.index} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
