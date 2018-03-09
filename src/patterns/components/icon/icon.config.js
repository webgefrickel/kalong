// read all svg icons files, and provide them as variants
const config = require('../../../../kalong.config');
const path = require('path');
const fs = require('fs');
const icons = [];

fs.readdirSync(path.join(config.src, config.icons))
  .filter(name => (/(\.svg)/i).test(path.extname(name)))
  .forEach(iconFile => {
    icons.push({
      name: iconFile.replace('.svg', ''),
      context: {
        icon: iconFile.replace('.svg', '')
      }
    });
  });

module.exports = {
  status: 'wip',
  // you should set the default icon to something useful, e.g. the logo
  default: 'logo',
  context: {
    modifiers: '',
    sprite: '/images/sprite.svg'
  },
  variants: icons
};
