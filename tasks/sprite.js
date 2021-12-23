import { join, resolve } from 'path';
import { writeFile, readFile } from 'fs/promises';
import { sync } from 'glob';
import SvgSprite from 'svg-sprite';
import config from '../kalong.config';

export default async (opts = {}) => {
  const options = {
    dest: opts.output || join(config.src, config.images),
    mode: {
      symbol: {
        dest: './',
        sprite: opts.output || join('../', config.images, 'sprite.svg'),
      },
    },
    shape: {
      meta: opts.sprite || join(config.src, config.icons, 'sprite.yml'),
      id: {
        generator: 'icon--%s',
      },
    },
  };

  const sprite = new SvgSprite(options);
  const icons = sync(opts.input || join(config.src, config.icons, '*.svg'));

  await Promise.all(icons.map(async icon => {
    const iconContent = await readFile(icon, 'utf8');
    sprite.add(
      resolve(icon),
      icon.replace(/^.*[\\/]/, ''), // Filename only
      iconContent,
    );
  }));

  try {
    sprite.compile(async (error, result) => {
      await writeFile(opts.output || join(config.src, config.images, 'sprite.svg'), result.symbol.sprite.contents);
    });
  } catch (error) {
    throw new Error(error);
  }
};
