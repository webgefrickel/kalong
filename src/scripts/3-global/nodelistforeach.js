export default () => {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function forEach(callback, thisArg) {
      const arg = thisArg || window;

      for (let i = 0; i < this.length; i += 1) {
        callback.call(arg, this[i], i, this);
      }
    };
  }
};
