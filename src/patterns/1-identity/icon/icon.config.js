// Read all svg icons files, and provide them as variants
// this file uses es5/node syntax, fractal does not understand modern js
// you should not have to change it anyway... just throw in new svg-icons
const config = require('../../../../kalong.config');
const path = require('path');
const fs = require('fs');
const icons = [];

fs.readdirSync(path.join(config.src, config.icons))
  .filter(name => /(?<svg>\.svg)/i.test(path.extname(name)))
  .forEach(iconFile => {
    icons.push({
      name: iconFile.replace('.svg', ''),
      context: {
        icon: iconFile.replace('.svg', ''),
      },
    });
  });

module.exports = {
  label: 'Icons & Sprites',
  status: 'done',
  default: 'default',
  collated: true,
  context: {
    modifiers: '',
    sprite: '/images/sprite.svg',
  },
  variants: icons,
};
