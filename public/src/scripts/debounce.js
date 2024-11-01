/* eslint no-invalid-this: 'off', consistent-this: 'off', init-declarations: 'off' */

export default function debounce(fn, wait) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
