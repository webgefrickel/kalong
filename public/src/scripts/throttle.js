/* eslint no-invalid-this: 'off' */

export default function throttle(fn, wait) {
  let throttled = false;

  return (...args) => {
    if (!throttled) {
      fn.apply(this, args);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, wait);
    }
  };
}
