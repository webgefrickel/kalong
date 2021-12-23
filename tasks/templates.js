import { basename, join } from 'path';
import { sync } from 'glob';
import { readFile, writeFile } from 'fs/promises';
import config from '../kalong.config';

export default async () => {
  const patternFolders = sync(join(config.src, config.patterns, '*'));
  const templateFolder = patternFolders.filter(folder => folder.includes(config.templates.replace(/^\/|\/$/g, '')));
  const files = sync(join(templateFolder[0], '**/*.html'));

  files.forEach(async file => {
    // Regex for replacing extends, for use in kirby/twig
    const extendsRegex = /{%\s?extends\s?'(?<all>.+)'\s?%}/g;
    const contents = await readFile(file);
    const lines = contents.toString().split('\n');
    let newContents = '';

    lines.forEach(line => {
      const match = extendsRegex.exec(line);
      if (match === null) {
        newContents += `${line}\n`;
      } else {
        // Replace html with twig for usage in kirby
        const pattern = match[1].slice(1);
        const newLine = line.replace(`@${pattern}`, `@pattern/${pattern}.twig`);
        newContents += `${newLine}\n`;
      }
    });

    const outFile = join(config.library, '../', config.templates, basename(file).replace('.html', '.twig'));

    try {
      await writeFile(outFile, newContents);
    } catch (error) {
      throw new Error(error);
    }
  });
};
