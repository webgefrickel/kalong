import { join } from 'path';
import { sync } from 'glob';
import { copyFile } from 'fs/promises';
import config from '../kalong.config';

export default async (opts = {}) => {
  const options = {
    input: opts.input || join(config.src, config.images, '**/*'),
    output: opts.output || join(config.dest, config.images),
    rename: opts.rename || [],
  };

  const files = sync(options.input);
  const copies = [];
  const renamers = [file => file.replace(/^.*[\\/]/, '')];
  options.rename.forEach(func => {
    renamers.push(func);
  });

  // Create the target first
  files.forEach(file => {
    let filename = file;
    renamers.forEach(func => {
      filename = func(filename);
    });

    copies.push(copyFile(file, join(options.output, filename)));
  });

  return Promise.all(copies);
};
