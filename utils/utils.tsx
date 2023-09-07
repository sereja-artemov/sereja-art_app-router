function lockScroll() {
  const root = document.getElementsByTagName('html')[0];
  root.style.overflow = 'hidden';
  root.style.paddingRight = '17px';
}

function removeScrollLock() {
  const root = document.getElementsByTagName('html')[0];
  root.style.overflow = 'auto';
  root.style.paddingRight = '0';
}

const activeLink = (url: string, pathname: string) =>
  pathname === url ? 'link-group:bg-darkPrimary link-group:text-whitePrimary' : '';

export { activeLink, lockScroll, removeScrollLock };
