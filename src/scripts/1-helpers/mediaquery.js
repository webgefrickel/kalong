// Same usage as the mediaquery-scss-mixin, just provide the
// shortcode used in the scss-file. this module will return true
// if the given mediaquery matches
export default shortcode => {
  const currentMediaQuery = getComputedStyle(document.body)
    .getPropertyValue('--current-media-query')
    .replace(/\W/g, '');

  return currentMediaQuery === shortcode;
};
