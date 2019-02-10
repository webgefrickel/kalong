const config = require('../../kalong.config');
const fonts = require('../config/fonts');
const colors = require('../config/colors');
const mediaqueries = require('../config/mediaqueries');

module.exports = {
  context: {
    debug: true,
    styleguide: true,
    hash: new Date().getTime(),
    config: {
      config,
      fonts,
      mediaqueries,
    },
    site: {
      lang: 'de',
      dir: 'ltr',
      title: config.title + '—Styleguide',
      description: '',
      defaultColor: colors.colors.default,
      mainColor: colors.colors.main,
      modifiers: '', // global css-classes, applied to <html>
    },
    global: {
      nav: {
        main: [
          {
            href: '#somepage',
            label: 'Somepage',
          },
        ],
      },
    },
  },
};
