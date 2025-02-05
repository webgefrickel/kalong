export default () => {
  if ('IntersectionObserver' in window) {
    const targets = Array.from(document.querySelectorAll('.-cover'));

    targets.forEach(target => target.setAttribute('data-observe', ''));
    const callback = entries => {
      entries.forEach(entry => {
        entry.target.setAttribute('data-visible', entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback);
    targets.forEach(target => observer.observe(target));
  }
};
