import { mediaqueries } from '../../config/mediaqueries.json';

// Same usage as the mediaquery-scss-mixin, just provide the
// shortcode used in the scss-file. this module will return true
// if the given mediaquery matches
export default shortcode => {
  const queryValue = mediaqueries[shortcode];
  let mediaquery;

  if (Number.isInteger(queryValue)) {
    mediaquery = `(min-width: ${queryValue}px)`;
  } else {
    mediaquery = queryValue;
  }

  return window.matchMedia(mediaquery).matches;
};
