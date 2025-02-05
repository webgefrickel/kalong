export default () => {
  const reels = Array.from(document.querySelectorAll('.-reel'));

  const toggleOverflowClass = elem => {
    elem.classList.toggle('-reel--overflow', elem.scrollWidth > elem.clientWidth);
  };

  for (const reel of reels) {
    if ('ResizeObserver' in window) {
      new ResizeObserver(entries => {
        toggleOverflowClass(entries[0].target);
      }).observe(reel);
    }

    if ('MutationObserver' in window) {
      new MutationObserver(entries => {
        toggleOverflowClass(entries[0].target);
      }).observe(reel, { childList: true });
    }
  }
};
