import { join } from 'path';
import { writeFile } from 'fs/promises';
import sass from 'node-sass';
import magic from 'node-sass-magic-importer';
import json from 'node-sass-json-importer';
import config from '../kalong.config';

export default async (opts = {}) => {
  // Set some sane defaults for development
  const options = {
    file: opts.input || join(config.src, config.styles, `${config.main}.scss`),
    outFile: opts.output || join(config.dest, config.styles, `${config.main}.css`),
    sourceMap: opts.sourceMap === undefined,
    outputStyle: 'expanded',
    importer: [json(), magic()],
  };

  try {
    const result = sass.renderSync(options);
    await writeFile(options.outFile, result.css);
  } catch (error) {
    throw new Error(error);
  }
};
