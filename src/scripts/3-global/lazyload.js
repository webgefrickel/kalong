import lozad from 'lozad';

export default () => {
  // this loads videos as well
  const observer = lozad(document.querySelectorAll('[data-src], [data-srcset], [data-poster]'));
  observer.observe();
};
