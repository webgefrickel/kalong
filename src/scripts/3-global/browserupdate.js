import browserUpdate from 'browser-update';

export default () => {
  browserUpdate({
    test: false, // set to true to test the class-addition/dialog below
    nomessage: true,
    shift_page_down: false,
    reminder: 0,
    required: { // last 2-3 versions allowed, a bit laxer than browserslist usually
      e: -2,
      f: -2,
      c: -2,
      o: -1,
      s: -1,
      ios: -1,
      samsung: -1,
    },
    onshow: () => {
      document.documentElement.classList.add('is-outdated-browser');
      /* eslint-disable no-alert */
      window.alert('You are using an outdated browser. Consider upgrading your browser or switching to something more modern for the best experience.\n\nSie verwenden einen veralteten Browser. Ein Upgrade oder Wechsel zu einem moderneren Browser sollte mit Darstellungs- oder Funktionalitätsproblemen helfen.');
    },
  });
};
