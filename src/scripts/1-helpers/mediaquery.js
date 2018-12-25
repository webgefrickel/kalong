import mediaqueries from '~config/mediaqueries';

// same usage as the mediaquery-scss-mixin, just
// provide the shortcode used in the scss-file and if it
// is a custom query. this module return true if the
// given breakpoint matches or false if it doesnt
export default shortcode => {
  console.log(mediaqueries);
  const custom = false;

  const query = custom ? mediaqueries[shortcode] : `(min-width: ${mediaqueries[shortcode]}px)`;

  return window.matchMedia(query).matches;
};
