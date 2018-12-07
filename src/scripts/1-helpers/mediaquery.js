import { breakpoints } from '../../styles/1-config/shared.json';

// same usage as the mediaquery-scss-mixin, just
// provide the shortcode used in the scss-file and if it
// is a custom query. this module return true if the
// given breakpoint matches or false if it doesnt
export default (shortcode, custom = false) => {
  const query = custom
    ? breakpoints[shortcode]
    : `(min-width: ${breakpoints[shortcode]}px)`;

  return window.matchMedia(query).matches;
};
