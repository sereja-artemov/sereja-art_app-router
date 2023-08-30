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
