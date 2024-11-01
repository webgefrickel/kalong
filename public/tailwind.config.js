/* CONFIGURATION IS DONE IN styleguide.config.json */
/* You should rather not touch this file... */

import plugin from 'tailwindcss/plugin';
import kalong from './kalong.config';

const {
  config,
  colors,
  fonts,
  sizes,
  breakpoints,
  globals,
} = kalong;
const { lineHeight, viewportMin, viewportMax, contentMax } = globals;
const baseCss = {};
const rootCss = {};

const pxToRem = pxValue => Number.parseFloat(pxValue / 16).toFixed(3);

const clamp = (sizeMin, sizeMax, scale = 1.25) => {
  const min = sizeMin || 16;
  const max = sizeMax || sizeMin * scale;
  const change = (max - min) / (viewportMax - viewportMin);
  const size = sizeMax - viewportMax * change;
  const rate = Number.parseFloat(change * 100).toFixed(3);
  return `clamp(${pxToRem(sizeMin)}rem,${pxToRem(size)}rem + ${rate}vw,${pxToRem(sizeMax)}rem)`;
};

// Breakpoints and screens
const screens = {};
Object.keys(breakpoints).forEach(bp => {
  screens[bp] = `${pxToRem(breakpoints[bp])}rem`;
});

// Fonts, sizes and typo definition
const fontSize = {};
Object.keys(sizes).forEach(sz => {
  const size = sizes[sz];

  if (sz.indexOf('text-') === 0) {
    const sizeName = sz.replace('text-', '');
    fontSize[sizeName] = [clamp(size[0], size[1])];
    fontSize[sizeName].push(size[2] || lineHeight);
  }
});

const fontFamily = {};
Object.keys(fonts).forEach(ft => {
  const { name, fallback, files } = fonts[ft];
  fontFamily[ft] = [name, fallback];
  if (files && files.length && files[0].filename) {
    baseCss['@font-face'] = [];
    files.forEach(({ filename, weight, style }) => {
      baseCss['@font-face'].push({
        src: `local('${name}'), url('/src/fonts/${filename}.woff2') format('woff2'), url('/src/fonts/${filename}.woff') format('woff')`,
        fontFamily: name,
        fontWeight: weight,
        fontStyle: style,
        fontDisplay: 'swap',
      });
    });
  }
});

// CSS global custom properties
Object.keys(sizes).forEach(sz => {
  const size = sizes[sz];
  const clamped = clamp(size[0], size[1]);
  rootCss[`--size-${sz}`] = clamped;
});

Object.keys(colors).forEach(cl => {
  rootCss[`--color-${cl}`] = colors[cl];
});

rootCss['--content-max'] = contentMax;
rootCss['--line-height'] = lineHeight;
rootCss['--stack'] = '1em';
rootCss['--viewport-min'] = `${pxToRem(viewportMin)}rem`;
rootCss['--viewport-max'] = `${pxToRem(viewportMax)}rem`;

export default {
  corePlugins: {
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    textOpacity: false,
  },
  content: config.content,
  theme: {
    colors,
    fontFamily,
    fontSize,
    screens,
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase(baseCss);
      addBase({ ':root': rootCss });
    }),
  ],
};
