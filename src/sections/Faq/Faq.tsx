import { Fragment, type ReactElement } from 'react'
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
  const inputId = `dds-faq-${item.index}`

  return (
    <div
      className="dds-accordion-item"
      data-cms-node={`faq.accordion.item-${item.index}`}
      data-cms-interaction="disclosure"
      data-label={`Вопрос FAQ ${item.index}`}
    >
      <input
        type="checkbox"
        id={inputId}
        className="dds-accordion-state"
        data-cms-interaction-control
      />
      <label className="dds-accordion-head" htmlFor={inputId}>
        <p className="dds-accordion-question" data-cms-key={`faq.q${item.index}`}>
          {item.question}
        </p>
        <span className="dds-accordion-icon">
          <img
            src={faqIcon}
            style={{ display: 'block', objectFit: 'fill' }}
            width="100%"
            height="100%"
            data-cms-image={`faq.accordion.asset-${item.index}`}
            data-cms-no-generate
            alt=""
          />
        </span>
      </label>
      <div className="dds-accordion-panel">
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
