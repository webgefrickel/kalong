/* eslint camelcase: 'off' */

// Simple favicons using only a few icons:
// https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs

import { favicons } from 'favicons';
import fs from 'fs/promises';
import kalong from '../../kalong.config.js';
import path from 'path';

const {
  name,
  shortName,
  description,
  favicon,
  background,
  theme
} = kalong;
const dest = './public';

const response = await favicons(favicon, {
  appDescription: description,
  appName: name,
  appShortName: shortName,
  background,
  icons: {
    android: [
      'android-chrome-192x192.png',
      'android-chrome-512x512.png',
    ],
    appleIcon: [
      'apple-touch-icon-180x180.png',
    ],
    appleStartup: false,
    favicons: [
      'favicon.ico',
    ],
    windows: false,
    yandex: false,
  },
  lang: 'de-DE',
  start_url: '/',
  theme_color: theme,
});

await fs.mkdir(dest, { recursive: true });
await Promise.all(response.images.map(
  async (img) => await fs.writeFile(path.join(dest, img.name), img.contents),
));

await Promise.all(response.files.map(
  async (file) => await fs.writeFile(path.join(dest, file.name), file.contents),
));
