import load from '../../../scripts/2-vendor/useLazyload';

export default () => {
  const observer = load();
  observer.observe();
};
