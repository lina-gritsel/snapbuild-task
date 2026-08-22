import { useRef, type ReactElement } from 'react'
import { useUseCasesTabs } from './useUseCasesTabs'

export default function UseCases(): ReactElement {
  const sectionRef = useRef<HTMLElement>(null)

  useUseCasesTabs(sectionRef)

  return (
    <section
      ref={sectionRef}
      className="use-cases dds-use-cases dds-tabs"
      data-cms-section="use-cases.tabs"
      data-section-id="019f8703-47cb-7689-a38e-b7781d811c91"
      data-template-id="ad505775-7616-5cfe-b331-f54469d638ec"
      id="use-cases"
    >
      <input type="radio" name="uc-tabs" id="uc-tab-1" className="dds-tabs-radio" defaultChecked />
      <input type="radio" name="uc-tabs" id="uc-tab-2" className="dds-tabs-radio" />
      <input type="radio" name="uc-tabs" id="uc-tab-3" className="dds-tabs-radio" />
      <input type="radio" name="uc-tabs" id="uc-tab-4" className="dds-tabs-radio" />
      <input type="radio" name="uc-tabs" id="uc-tab-5" className="dds-tabs-radio" />
      <div className="dds-tabs-inner">
        <div className="dds-tabs-header">
          <h2 className="dds-tabs-title" style={{}}>
            <span className="dds-tabs-wide" data-cms-key="use-cases.title">
              Любой контент в&nbsp;фирменном стиле за&nbsp;считанные минуты
            </span>
            <span className="dds-tabs-narrow" data-cms-key="use-cases.title-narrow">
              Любой контент в&nbsp;фирменном стиле за&nbsp;считанные минуты
            </span>
          </h2>
          <div className="dds-tabs-group" role="tablist">
            <label
              htmlFor="uc-tab-1"
              className="dds-tabs-tab"
              data-cms-key="use-cases.tab1"
              style={{}}
            >
              Сайты
            </label>
            <label htmlFor="uc-tab-2" className="dds-tabs-tab" data-cms-key="use-cases.tab2">
              Изображения
            </label>
            <label htmlFor="uc-tab-3" className="dds-tabs-tab" data-cms-key="use-cases.tab3">
              Видео
            </label>
            <label htmlFor="uc-tab-4" className="dds-tabs-tab">
              Баннеры
            </label>
            <label htmlFor="uc-tab-5" className="dds-tabs-tab">
              Презентации
            </label>
          </div>
        </div>
        <div className="dds-tabs-body">
          <div className="dds-tabs-points">
            <div className="dds-tabs-points-set dds-tabs-points-set--1">
              <article className="dds-tabs-card dds-tabs-card--active" data-media="tab1-item1">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.item1.title">
                  Результат за&nbsp;один запрос
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.item1.desc">
                  <span>
                    Отправляйте документ или ссылку на&nbsp;описание продукта&nbsp;— платформа
                    собирает структуру
                  </span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab1-item2">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.item2.title">
                  Страница за&nbsp;минуту
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.item2.desc">
                  <span>
                    В&nbsp;вашей дизайн-системе, с&nbsp;вашими шрифтами, сеткой и&nbsp;компонентами
                  </span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab1-item3">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.item3.title">
                  AI или визуальный редактор
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.item3.desc">
                  <span>Меняйте контент через чат или редактируйте вручную</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab1-item4">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.item4.title">
                  Адаптация под&nbsp;ЦА за&nbsp;один клик
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.item4.desc">
                  <span>
                    Версия сайта под&nbsp;новый сегмент без&nbsp;работы дизайнеров
                    и&nbsp;копирайтеров
                  </span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
            </div>
            <div className="dds-tabs-points-set dds-tabs-points-set--2">
              <article className="dds-tabs-card" data-media="tab2-item1">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab2.item1.title">
                  В&nbsp;стиле и&nbsp;цвете бренда
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab2.item1.desc">
                  <span>Изображения по&nbsp;композиционным правилам вашей дизайн-системы</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab2-item2">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab2.item2.title">
                  Попадание с&nbsp;первой генерации
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab2.item2.desc">
                  <span>Без&nbsp;часов промптинга и&nbsp;поиска на&nbsp;стоках</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab2-item3">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab2.item3.title">
                  Редактирование объектов
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab2.item3.desc">
                  <span>Меняйте композицию и&nbsp;удаляйте элементы прямо на&nbsp;изображении</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab2-item4">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab2.item4.title">
                  Любой стиль и&nbsp;формат
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab2.item4.desc">
                  <span>
                    Портреты, иллюстрации, обложки&nbsp;— в&nbsp;нужном соотношении, до&nbsp;4K
                  </span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
            </div>
            <div className="dds-tabs-points-set dds-tabs-points-set--3">
              <article className="dds-tabs-card" data-media="tab3-item1">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab3.item1.title">
                  Изображения как&nbsp;ключевые кадры
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab3.item1.desc">
                  <span>Используйте графику из&nbsp;модуля изображений напрямую</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab3-item2">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab3.item2.title">
                  Контроль качества и&nbsp;формата
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab3.item2.desc">
                  <span>Длительность, соотношение, качество&nbsp;— под&nbsp;площадку</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab3-item3">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab3.item3.title">
                  Сохранение стиля и&nbsp;композиции
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab3.item3.desc">
                  <span>AI удерживает визуальную целостность ролика</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab3-item4">
                <h3 className="dds-tabs-card-title" data-cms-key="use-cases.tab3.item4.title">
                  Один сценарий&nbsp;— десятки адаптаций
                </h3>
                <p className="dds-tabs-card-desc" data-cms-key="use-cases.tab3.item4.desc">
                  <span>Версии под&nbsp;популярные форматы соцсетей и&nbsp;рекламные площадки</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
            </div>
            <div className="dds-tabs-points-set dds-tabs-points-set--4">
              <article className="dds-tabs-card" data-media="tab4-item1">
                <h3 className="dds-tabs-card-title">Креативы из&nbsp;одной идеи</h3>
                <p className="dds-tabs-card-desc">
                  <span>Готовые баннеры в&nbsp;фирменном стиле для&nbsp;любой кампании</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab4-item2">
                <h3 className="dds-tabs-card-title">Все размеры автоматически</h3>
                <p className="dds-tabs-card-desc">
                  <span>
                    Выбирайте готовые размеры для&nbsp;популярных площадок или&nbsp;задавайте
                    собственные&nbsp;— без&nbsp;ручной пересборки
                  </span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab4-item3">
                <h3 className="dds-tabs-card-title">Текст и&nbsp;графика под&nbsp;контролем</h3>
                <p className="dds-tabs-card-desc">
                  <span>Редактируйте оффер, композицию и&nbsp;визуальные акценты</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab4-item4">
                <h3 className="dds-tabs-card-title">Экспорт под&nbsp;площадку</h3>
                <p className="dds-tabs-card-desc">
                  <span>Форматы и&nbsp;вес файлов соответствуют требованиям размещения</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
            </div>
            <div className="dds-tabs-points-set dds-tabs-points-set--5">
              <article className="dds-tabs-card" data-media="tab5-item1">
                <h3 className="dds-tabs-card-title">Презентация из&nbsp;запроса</h3>
                <p className="dds-tabs-card-desc">
                  <span>Платформа собирает структуру и&nbsp;черновик слайдов</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab5-item2">
                <h3 className="dds-tabs-card-title">В&nbsp;вашей дизайн-системе</h3>
                <p className="dds-tabs-card-desc">
                  <span>Шрифты, сетки и&nbsp;компоненты применяются автоматически</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab5-item3">
                <h3 className="dds-tabs-card-title">Редактирование через AI</h3>
                <p className="dds-tabs-card-desc">
                  <span>Меняйте отдельный слайд или всю историю через чат</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
              <article className="dds-tabs-card" data-media="tab5-item4">
                <h3 className="dds-tabs-card-title">Экспорт в&nbsp;нужном формате</h3>
                <p className="dds-tabs-card-desc">
                  <span>Собирайте презентации для&nbsp;встречи, рассылки или публикации</span>
                </p>
                <div className="dds-tabs-card-progress">
                  <div className="dds-tabs-card-progress-fill" />
                </div>
              </article>
            </div>
          </div>
          <div className="dds-tabs-panel">
            <img
              className="dds-tabs-media dds-tabs-media--active dds-tabs-media--tab1-item1"
              data-media="tab1-item1"
              src="assets/images/use-cases-tab1-item1-v2.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab1-item2"
              data-media="tab1-item2"
              src="assets/images/use-cases-tab1-item2.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab1-item3"
              data-media="tab1-item3"
              src="assets/images/use-cases-tab1-item3.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab1-item4"
              data-media="tab1-item4"
              src="assets/images/use-cases-web-04.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab2-item1"
              data-media="tab2-item1"
              src="assets/images/use-cases-img-01.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab2-item2"
              data-media="tab2-item2"
              src="assets/images/use-cases-tab2-item2.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab2-item3"
              data-media="tab2-item3"
              src="assets/images/use-cases-tab2-item3.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab2-item4"
              data-media="tab2-item4"
              src="assets/images/use-cases-tab2-item4.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab3-item1"
              data-media="tab3-item1"
              src="assets/images/use-cases-vid-01.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab3-item2"
              data-media="tab3-item2"
              src="assets/images/use-cases-tab3-item2.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab3-item3"
              data-media="tab3-item3"
              src="assets/images/use-cases-tab3-item3.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab3-item4"
              data-media="tab3-item4"
              src="assets/images/use-cases-tab3-item4.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab4-item1"
              data-media="tab4-item1"
              src="assets/images/use-cases-tab4-item1.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab4-item2"
              data-media="tab4-item2"
              src="assets/images/use-cases-tab4-item2.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab4-item3"
              data-media="tab4-item3"
              src="assets/images/use-cases-tab4-item3.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab4-item4"
              data-media="tab4-item4"
              src="assets/images/use-cases-tab4-item4.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab5-item1"
              data-media="tab5-item1"
              src="assets/images/use-cases-pres-01.jpg"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab5-item2"
              data-media="tab5-item2"
              src="assets/images/use-cases-tab5-item2.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab5-item3"
              data-media="tab5-item3"
              src="assets/images/use-cases-tab5-item3.webp"
              alt={''}
              width={2880}
              height={1620}
            />
            <img
              className="dds-tabs-media dds-tabs-media--tab5-item4"
              data-media="tab5-item4"
              src="assets/images/use-cases-tab5-item4.webp"
              alt={''}
              width={2880}
              height={1620}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
