// Добавляем \u00A0 вместо пробелов, чтобы корректно работала заливка текста

export const navigationRoutes = [
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

export function lockScroll() {
  const root = document.getElementsByTagName('html')[0];
  root.style.overflow = 'hidden';
  root.style.paddingRight = '17px';
}
export function removeScrollLock() {
  const root = document.getElementsByTagName('html')[0];
  root.style.overflow = 'auto';
  root.style.paddingRight = '0';
}
