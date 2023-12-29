function updateHeaderHeight(header) {
  if (!header) return;
  const headerHeight = header.offsetHeight - 1;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

export function initHeader(options = {}) {
  const { isScrolled = true, isHidden = true, headerSelector = '.header' } = options;

  const header = document.querySelector(headerSelector);
  if (!header) return;

  updateHeaderHeight(header);

  const headerHeight = header.offsetHeight;
  let prevScrollDistance = window.scrollY;

  const scrollHandler = () => {
    const scrollDistance = window.scrollY;

    if (isScrolled) {
      if (scrollDistance >= headerHeight) {
        header.classList.add('_scrolled');
      } else {
        header.classList.remove('_scrolled');
      }
    }

    if (isHidden && prevScrollDistance > 0 && prevScrollDistance !== 0) {
      if (prevScrollDistance >= scrollDistance) {
        header.classList.remove('_hidden');
      } else {
        header.classList.add('_hidden');
      }
    }

    prevScrollDistance = scrollDistance;
  };

  window.addEventListener('scroll', scrollHandler);

  const resizeHandler = () => {
    updateHeaderHeight(header);
  };

  window.addEventListener('resize', resizeHandler);

  return () => {
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('resize', resizeHandler);
  };
}
