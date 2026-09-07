const CARDS_COUNT = Number(process.env.CARDS_COUNT) || 100
const MENU_COUNT = Number(process.env.MENU_COUNT) || 14

const TITLES = [
  'Lorem ipsum',
  'Dolor sit amet',
  'Consectetur',
  'Adipiscing elit',
  'Sed do eiusmod',
  'Tempor incididunt',
  'Labore et dolore',
  'Magna aliqua',
  'Ut enim ad minim',
  'Quis nostrud',
  'Exercitation ullamco',
  'Laboris nisi'
]

const PARAGRAPHS = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.',
  'Короткий текст.',
  'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
]

const cards = Array.from({ length: CARDS_COUNT }, (_, i) => ({
  index: i + 1,
  title: TITLES[i % TITLES.length],
  text:
    i % 5 === 4
      ? `${PARAGRAPHS[i % PARAGRAPHS.length]} Pneumonoultramicroscopicsilicovolcanoconiosis-supercalifragilisticexpialidocious.`
      : PARAGRAPHS[i % PARAGRAPHS.length],
  tag: ['Design', 'Markup', 'Motion', 'Grid', 'Type'][i % 5]
}))

const MENU_LABELS = [
  'Главная',
  'Проекты',
  'Компоненты',
  'Типографика',
  'Сетка и модуль',
  'Анимации и ховеры',
  'Документация по вёрстке',
  'Библиотека иконок',
  'Тёмная тема',
  'Доступность',
  'Производительность',
  'Кроссбраузерность',
  'Гайдлайны',
  'Контакты',
  'Очень длинный пункт меню, который обязан обрезаться многоточием',
  'Архив',
  'Черновики',
  'Настройки'
]

const menu = Array.from({ length: MENU_COUNT }, (_, i) => ({
  label: MENU_LABELS[i % MENU_LABELS.length],
  href: '#',
  current: i === 0
}))

export default {
  lang: 'ru',
  title: 'SVEAK',
  description:
    'Тестовое задание',
  brand: 'SVEAK',
  menu,
  cards,
  footer: {
    title: 'What is Lorem Ipsum?',
    paragraphs: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.'
    ]
  }
}
