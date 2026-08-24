export type RoadmapItem = {
  cmsIndex: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 13
  title: string
  description: string
  date: string
  reached: boolean
}

export const roadmapItems = [
  {
    cmsIndex: 1,
    title: 'Сайты за\u00a05 минут',
    description:
      'Генерация корпоративных сайтов по\u00a0вашей дизайн-системе\u00a0— 100% консистентность, без\u00a0разработчиков',
    date: 'Декабрь,\u00a02025',
    reached: true,
  },
  {
    cmsIndex: 2,
    title: 'Консистентные AI-иллюстрации',
    description:
      'Настраиваете фирменный стиль один раз\u00a0— графика для\u00a0каждой секции сайта в\u00a0едином виде через стилевые пресеты',
    date: 'Январь,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 3,
    title: 'Дизайн-система из\u00a0вашего сайта',
    description:
      'Сканируем существующие страницы и\u00a0собираем из\u00a0них готовую дизайн-систему; AI\u00a0сам выстраивает структуру',
    date: 'Февраль,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 4,
    title: 'Режим изображений',
    description:
      'Брендовая графика в\u00a0один клик: управление стилями и\u00a0темами, десятки параметров редактирования',
    date: 'Март,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 5,
    title: 'Генерация видео',
    description:
      'Видео из\u00a0ваших изображений с\u00a0ключевыми кадрами; AI\u00a0точнее на\u00a078%, панель рассуждений и\u00a0управление правами',
    date: 'Апрель,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 6,
    title: 'Ресайзы изображений',
    description:
      'Одна фокус-точка → все форматы (16:9, 9:16, 1:1 и\u00a0другие) с\u00a0автоматическим бюджетом веса на\u00a0экспорт',
    date: 'Май,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 7,
    title: 'Расширенный редактор, как\u00a0в\u00a0Figma',
    description:
      'Слои, изменение размеров любого контейнера, превью структуры в\u00a0чате, версии промптов и\u00a0ветвление диалогов',
    date: 'Июнь,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 8,
    title: 'Канвас, баннеры и\u00a0презентации',
    description:
      'Канвас во\u00a0всех режимах; новые режимы\u00a0— генерация рекламных баннеров и\u00a0корпоративных презентаций',
    date: 'Июль,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 9,
    title: 'ИИ-маркетолог',
    description:
      'Следит за\u00a0данными, сам обновляет ваши материалы и\u00a0собирает кампанию целиком\u00a0— от\u00a0изображений до\u00a0сайта',
    date: 'Август,\u00a02026',
    reached: true,
  },
  {
    cmsIndex: 10,
    title: 'Компонентный подход',
    description: 'AI сам компонует секции сайтов из\u00a0элементов вашей дизайн-библиотеки',
    date: 'Сентябрь,\u00a02026',
    reached: false,
  },
  {
    cmsIndex: 11,
    title: 'Предиктивные рекомендации',
    description:
      'Платформа сама предлагает, что\u00a0обновить в\u00a0кампаниях\u00a0— от\u00a0секций сайта до\u00a0баннеров',
    date: 'Октябрь,\u00a02026',
    reached: false,
  },
  {
    cmsIndex: 13,
    title: 'Инфраструктура',
    description: 'Развертывание в\u00a0вашей сети и\u00a0контуре',
    date: 'Ноябрь,\u00a02026',
    reached: false,
  },
] as const satisfies readonly RoadmapItem[]

export const roadmapProgress = roadmapItems.filter((item) => item.reached).length - 1
