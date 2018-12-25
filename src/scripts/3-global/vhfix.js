export default () => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  window.addEventListener('resize', () => {
    window.requestAnimationFrame(() => {
      setVh();
    });
  });

  setVh();
};
