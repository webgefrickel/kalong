const config = require('../../kalong.config.js');
const shared = require('../styles/1-config/shared.json');

module.exports = {
  context: {
    debug: true,
    shared,
    site: {
      lang: 'de',
      dir: 'ltr',
      title: config.title + '—Styleguide, v' + config.version,
      description: 'Some useful description of the page',
      themecolor: '#ffffff',
      modifiers: '' // global css-classes, applied to <html>
    },
    global: {
      nav: {
      }
    },
    page: {
    }
  }
};

