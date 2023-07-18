// Добавляем \u00A0 вместо пробелов, чтобы корректно работала заливка текста

export const navigationRoutes = [
  {
    route: '/',
    name: 'Главная',
  },
  {
    route: '/about',
    name: `Обо\u00A0мне`,
  },
  {
    route: '/projects',
    name: 'Проекты',
  },
  {
    route: '/services',
    name: 'Услуги',
  },
  {
    route: '/blogs',
    name: 'Блог',
  },
  {
    route: '/contacts',
    name: 'Контакты',
  },
];
