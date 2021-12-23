import { join } from 'path';
import { mkdir } from 'fs/promises';
import del from 'del';
import config from '../kalong.config';

export default async () => {
  del.sync([
    join(config.root, 'serviceworker.js'),
    join(config.dest, config.styles),
    join(config.dest, config.scripts),
    join(config.dest, config.images),
    join(config.dest, config.fonts),
    join(config.library),
    join(config.library, '../', config.templates),
  ]);

  return Promise.all([
    mkdir(join(config.dest, config.styles)),
    mkdir(join(config.dest, config.scripts)),
    mkdir(join(config.dest, config.images)),
    mkdir(join(config.dest, config.fonts)),
    mkdir(join(config.library)),
    mkdir(join(config.library, '../', config.templates)),
  ]);
};
