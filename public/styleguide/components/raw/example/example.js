import mediaquery from '#helper/mediaquery';

export default (scope = document) => {
  const example = scope.querySelectorAll('.js-example');

  console.log(mediaquery('s'), 'mediaquery above breakpoint S');
  console.log(example);
};
