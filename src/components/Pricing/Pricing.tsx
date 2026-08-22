const plans = [
  {
    name: 'Старт',
    description: 'Для небольших команд, которым нужен единый визуальный язык.',
    price: '49 000',
    suffix: '₽ / месяц',
    action: 'Попробовать',
    features: [
      'До 5 участников',
      '1 дизайн-система',
      'Сайты, баннеры и изображения',
      'Базовая аналитика',
    ],
  },
  {
    name: 'Команда',
    description: 'Для маркетинга, который выпускает материалы каждый день.',
    price: '129 000',
    suffix: '₽ / месяц',
    action: 'Выбрать Команду',
    featured: true,
    features: [
      'До 20 участников',
      '3 дизайн-системы',
      'Все форматы контента',
      'Совместная работа и роли',
      'Приоритетная поддержка',
    ],
  },
  {
    name: 'Бизнес',
    description: 'Для компаний с особыми требованиями к контуру и процессам.',
    price: 'от 290 000',
    suffix: '₽ / месяц',
    action: 'Обсудить внедрение',
    features: [
      'Участники без ограничений',
      'Дизайн-системы без ограничений',
      'Интеграции и API',
      'Частное облако и SSO',
      'Персональный SLA',
    ],
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  usePricingReveal(sectionRef)

  return (
    <section ref={sectionRef} className="dds-pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="dds-pricing-header">
        <h2 className="dds-rmap-title dds-pricing-title" id="pricing-title">
          Тарифы для команд любого масштаба
        </h2>
        <p className="dds-rmap-subtitle dds-pricing-subtitle">
          Начните с&nbsp;готового решения или соберите конфигурацию под&nbsp;ваши процессы
          и&nbsp;контур.
        </p>
      </div>

      <div className="dds-pricing-grid">
        {plans.map((plan, index) => (
          <article
            className={`dds-pricing-card${plan.featured ? ' dds-pricing-card--featured' : ''}`}
            key={plan.name}
            style={{ '--pricing-index': index } as CSSProperties}
          >
            <div className="dds-pricing-card-top">
              <div className="dds-pricing-plan-heading">
                <h3 className="dds-pricing-plan-name">{plan.name}</h3>
                {plan.featured && <span className="dds-pricing-label">Популярный</span>}
              </div>
              <p className="dds-pricing-description">{plan.description}</p>
            </div>

            <div className="dds-pricing-price-wrap">
              <p className="dds-pricing-price">{plan.price}</p>
              <p className="dds-pricing-suffix">{plan.suffix}</p>
            </div>

            <a className="dds-pricing-action" href="#cta">
              <span>{plan.action}</span>
              <span className="dds-pricing-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <div className="dds-pricing-divider" aria-hidden="true" />
            <p className="dds-pricing-includes">В тариф входит</p>
            <ul className="dds-pricing-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="dds-pricing-check" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="dds-pricing-note">
        Цены указаны для демонстрации. Финальная стоимость зависит от&nbsp;конфигурации
        и&nbsp;объёма внедрения.
      </p>
    </section>
  )
}
import { useRef, type CSSProperties } from 'react'
import { usePricingReveal } from './usePricingReveal'
