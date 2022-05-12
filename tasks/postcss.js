import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import normalize from 'postcss-normalize';
import config from '../kalong.config';

export default async (opts = {}) => {
  const options = {
    input: opts.input || join(config.dest, config.styles, `${config.main}.css`),
    sourceMap: opts.sourceMap === undefined,
    plugins: [normalize(), autoprefixer()],
  };

  // Add cssnano if the sourceMap option is set to false
  if (opts.sourceMap === false) {
    options.plugins.push(cssnano({ preset: 'default' }));
  }

  // If no output file is specified, use the input, overwriting same file
  options.output = opts.output || options.input;

  try {
    const css = await readFile(options.input);
    const result = await postcss(options.plugins).process(css, {
      from: options.input,
      to: options.output,
      map: options.sourceMap ? { inline: options.sourceMap } : false,
    });

    if (result.warnings().length) {
      let messages = '';
      result.warnings().forEach(warning => {
        messages += `${warning.toString()}\n\n`;
      });

      if (messages !== '') {
        throw new Error(messages);
      }
    }

    await writeFile(options.output, result.css);
  } catch (error) {
    throw new Error(error);
  }
};
