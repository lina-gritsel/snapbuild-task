export type UseCaseTabId = 'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5'
export type UseCaseItemId = `${UseCaseTabId}-item${1 | 2 | 3 | 4}`

export type UseCaseItem = {
  id: UseCaseItemId
  title: string
  description: string
  image: string
  titleCmsKey?: string
  descriptionCmsKey?: string
}

export type UseCaseTab = {
  id: UseCaseTabId
  index: 1 | 2 | 3 | 4 | 5
  label: string
  cmsKey?: string
  items: readonly UseCaseItem[]
}

export const useCaseTabs = [
  {
    id: 'tab1',
    index: 1,
    label: 'Сайты',
    cmsKey: 'use-cases.tab1',
    items: [
      {
        id: 'tab1-item1',
        title: 'Результат за\u00a0один запрос',
        description:
          'Отправляйте документ или ссылку на\u00a0описание продукта\u00a0— платформа собирает структуру',
        image: 'assets/images/use-cases-tab1-item1-v2.webp',
        titleCmsKey: 'use-cases.item1.title',
        descriptionCmsKey: 'use-cases.item1.desc',
      },
      {
        id: 'tab1-item2',
        title: 'Страница за\u00a0минуту',
        description:
          'В\u00a0вашей дизайн-системе, с\u00a0вашими шрифтами, сеткой и\u00a0компонентами',
        image: 'assets/images/use-cases-tab1-item2.webp',
        titleCmsKey: 'use-cases.item2.title',
        descriptionCmsKey: 'use-cases.item2.desc',
      },
      {
        id: 'tab1-item3',
        title: 'AI или визуальный редактор',
        description: 'Меняйте контент через чат или редактируйте вручную',
        image: 'assets/images/use-cases-tab1-item3.webp',
        titleCmsKey: 'use-cases.item3.title',
        descriptionCmsKey: 'use-cases.item3.desc',
      },
      {
        id: 'tab1-item4',
        title: 'Адаптация под\u00a0ЦА за\u00a0один клик',
        description:
          'Версия сайта под\u00a0новый сегмент без\u00a0работы дизайнеров и\u00a0копирайтеров',
        image: 'assets/images/use-cases-web-04.webp',
        titleCmsKey: 'use-cases.item4.title',
        descriptionCmsKey: 'use-cases.item4.desc',
      },
    ],
  },
  {
    id: 'tab2',
    index: 2,
    label: 'Изображения',
    cmsKey: 'use-cases.tab2',
    items: [
      {
        id: 'tab2-item1',
        title: 'В\u00a0стиле и\u00a0цвете бренда',
        description: 'Изображения по\u00a0композиционным правилам вашей дизайн-системы',
        image: 'assets/images/use-cases-img-01.webp',
        titleCmsKey: 'use-cases.tab2.item1.title',
        descriptionCmsKey: 'use-cases.tab2.item1.desc',
      },
      {
        id: 'tab2-item2',
        title: 'Попадание с\u00a0первой генерации',
        description: 'Без\u00a0часов промптинга и\u00a0поиска на\u00a0стоках',
        image: 'assets/images/use-cases-tab2-item2.webp',
        titleCmsKey: 'use-cases.tab2.item2.title',
        descriptionCmsKey: 'use-cases.tab2.item2.desc',
      },
      {
        id: 'tab2-item3',
        title: 'Редактирование объектов',
        description: 'Меняйте композицию и\u00a0удаляйте элементы прямо на\u00a0изображении',
        image: 'assets/images/use-cases-tab2-item3.webp',
        titleCmsKey: 'use-cases.tab2.item3.title',
        descriptionCmsKey: 'use-cases.tab2.item3.desc',
      },
      {
        id: 'tab2-item4',
        title: 'Любой стиль и\u00a0формат',
        description: 'Портреты, иллюстрации, обложки\u00a0— в\u00a0нужном соотношении, до\u00a04K',
        image: 'assets/images/use-cases-tab2-item4.webp',
        titleCmsKey: 'use-cases.tab2.item4.title',
        descriptionCmsKey: 'use-cases.tab2.item4.desc',
      },
    ],
  },
  {
    id: 'tab3',
    index: 3,
    label: 'Видео',
    cmsKey: 'use-cases.tab3',
    items: [
      {
        id: 'tab3-item1',
        title: 'Изображения как\u00a0ключевые кадры',
        description: 'Используйте графику из\u00a0модуля изображений напрямую',
        image: 'assets/images/use-cases-vid-01.webp',
        titleCmsKey: 'use-cases.tab3.item1.title',
        descriptionCmsKey: 'use-cases.tab3.item1.desc',
      },
      {
        id: 'tab3-item2',
        title: 'Контроль качества и\u00a0формата',
        description: 'Длительность, соотношение, качество\u00a0— под\u00a0площадку',
        image: 'assets/images/use-cases-tab3-item2.webp',
        titleCmsKey: 'use-cases.tab3.item2.title',
        descriptionCmsKey: 'use-cases.tab3.item2.desc',
      },
      {
        id: 'tab3-item3',
        title: 'Сохранение стиля и\u00a0композиции',
        description: 'AI удерживает визуальную целостность ролика',
        image: 'assets/images/use-cases-tab3-item3.webp',
        titleCmsKey: 'use-cases.tab3.item3.title',
        descriptionCmsKey: 'use-cases.tab3.item3.desc',
      },
      {
        id: 'tab3-item4',
        title: 'Один сценарий\u00a0— десятки адаптаций',
        description: 'Версии под\u00a0популярные форматы соцсетей и\u00a0рекламные площадки',
        image: 'assets/images/use-cases-tab3-item4.webp',
        titleCmsKey: 'use-cases.tab3.item4.title',
        descriptionCmsKey: 'use-cases.tab3.item4.desc',
      },
    ],
  },
  {
    id: 'tab4',
    index: 4,
    label: 'Баннеры',
    items: [
      {
        id: 'tab4-item1',
        title: 'Креативы из\u00a0одной идеи',
        description: 'Готовые баннеры в\u00a0фирменном стиле для\u00a0любой кампании',
        image: 'assets/images/use-cases-tab4-item1.webp',
      },
      {
        id: 'tab4-item2',
        title: 'Все размеры автоматически',
        description:
          'Выбирайте готовые размеры для\u00a0популярных площадок или\u00a0задавайте собственные\u00a0— без\u00a0ручной пересборки',
        image: 'assets/images/use-cases-tab4-item2.webp',
      },
      {
        id: 'tab4-item3',
        title: 'Текст и\u00a0графика под\u00a0контролем',
        description: 'Редактируйте оффер, композицию и\u00a0визуальные акценты',
        image: 'assets/images/use-cases-tab4-item3.webp',
      },
      {
        id: 'tab4-item4',
        title: 'Экспорт под\u00a0площадку',
        description: 'Форматы и\u00a0вес файлов соответствуют требованиям размещения',
        image: 'assets/images/use-cases-tab4-item4.webp',
      },
    ],
  },
  {
    id: 'tab5',
    index: 5,
    label: 'Презентации',
    items: [
      {
        id: 'tab5-item1',
        title: 'Презентация из\u00a0запроса',
        description: 'Платформа собирает структуру и\u00a0черновик слайдов',
        image: 'assets/images/use-cases-pres-01.jpg',
      },
      {
        id: 'tab5-item2',
        title: 'В\u00a0вашей дизайн-системе',
        description: 'Шрифты, сетки и\u00a0компоненты применяются автоматически',
        image: 'assets/images/use-cases-tab5-item2.webp',
      },
      {
        id: 'tab5-item3',
        title: 'Редактирование через AI',
        description: 'Меняйте отдельный слайд или всю историю через чат',
        image: 'assets/images/use-cases-tab5-item3.webp',
      },
      {
        id: 'tab5-item4',
        title: 'Экспорт в\u00a0нужном формате',
        description: 'Собирайте презентации для\u00a0встречи, рассылки или публикации',
        image: 'assets/images/use-cases-tab5-item4.webp',
      },
    ],
  },
] as const satisfies readonly UseCaseTab[]
