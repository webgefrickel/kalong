import { Listr } from 'listr2';
import { join } from 'path';
import clean from './clean';
import rollup from './rollup';
import sass from './sass';
import postcss from './postcss';
import sprite from './sprite';
import copy from './copy';
import templates from './templates';
import fractal from './fractal';
import eslint from './eslint';
import validate from './validate';
import stylelint from './stylelint';
import config from '../kalong.config';

const build = async () => {
  const task = new Listr(
    [
      {
        title: 'Linting source files',
        task: (_, subtask) => subtask.newListr(
          [
            {
              title: 'Linting JavaScript via ESlint',
              task: async () => { await eslint(); },
            },
            {
              title: 'Linting Sass and CSS via Stylelint',
              task: async () => { await stylelint(); },
            },
          ],
          { concurrent: true },
        ),
      },
      {
        title: 'Cleaning destination files and folders',
        task: async () => { await clean(); },
      },
      {
        title: 'Building assets',
        task: (_, subtask) => subtask.newListr(
          [
            {
              title: 'JavaScript',
              task: (__, subsubtask) => subsubtask.newListr(
                [
                  {
                    title: 'Building main Rollup JavaScript-bundle',
                    task: async () => {
                      await rollup();
                    },
                  },
                  {
                    title: 'Building main minified Rollup JavaScript-bundle for production',
                    task: async () => {
                      await rollup({
                        output: join(config.dest, config.scripts, `${config.main}.min.js`),
                        sourceMap: false,
                      });
                    },
                  },
                  {
                    title: 'Building the ServiceWorker script',
                    task: async () => {
                      await rollup({
                        input: join(config.src, config.scripts, 'serviceworker.js'),
                        output: join(config.root, '.well-known/', 'serviceworker.js'),
                        sourceMap: false,
                      });
                    },
                  },
                ],
                { concurrent: true },
              ),
            },
            {
              title: 'Sass, CSS and PostCSS',
              task: (__, subsubtask) => subsubtask.newListr(
                [
                  {
                    title: 'Sass',
                    task: (___, subsubsubtask) => subsubsubtask.newListr(
                      [
                        {
                          title: 'Building main CSS-bundle',
                          task: async () => { await sass(); },
                        },
                        {
                          title: 'Building main minified CSS-bundle for production',
                          task: async () => {
                            await sass({
                              output: join(config.dest, config.styles, `${config.main}.min.css`),
                              sourceMap: false,
                            });
                          },
                        },
                      ],
                      { concurrent: true },
                    ),
                  },
                  {
                    title: 'PostCSS ',
                    task: (___, subsubsubtask) => subsubsubtask.newListr(
                      [
                        {
                          title: 'Running PostCSS on main CSS-bundle',
                          task: async () => { await postcss(); },
                        },
                        {
                          title: 'Running PostCSS on minified CSS-bundle',
                          task: async () => {
                            await postcss({
                              output: join(config.dest, config.styles, `${config.main}.min.css`),
                              sourceMap: false,
                            });
                          },
                        },
                      ],
                      { concurrent: true },
                    ),
                  },
                ],
                { concurrent: false },
              ),
            },
            {
              title: 'SVG-Sprites',
              task: async () => { await sprite(); },
            },
          ],
          { concurrent: true },
        ),
      },
      {
        title: 'Copying other assets to their destination folders',
        task: (_, subtask) => subtask.newListr(
          [
            {
              title: 'Copying images',
              task: async () => { await copy(); },
            },
            {
              title: 'Copying font files',
              task: async () => {
                await copy({
                  input: join(config.src, config.fonts, '*.{woff,woff2}'),
                  output: join(config.dest, config.fonts),
                });
              },
            },
          ],
          { concurrent: true },
        ),
      },
      {
        title: 'Building the styleguide',
        task: async () => { await fractal(); },
      },
      {
        title: 'Checking resulting HTML from the styleguide-build for errors',
        task: async () => { await validate(); },
      },
      {
        title: 'Copying styleguide patterns as reusable files to kirby',
        task: (_, subtask) => subtask.newListr(
          [
            {
              title: 'Copying patterns',
              task: async () => {
                await copy({
                  input: join(config.src, config.patterns, '**/*.html'),
                  output: join(config.library),
                  rename: [file => file.replace('_', '').replace('.html', '.twig')],
                });
              },
            },
            {
              title: 'Copying pattern YAML data',
              task: async () => {
                await copy({
                  input: join(config.styleguide, 'components/data/**/*.html'),
                  output: join(config.library),
                  rename: [file => file.replace('_', ''), file => file.replace('.html', '.yml')],
                });
              },
            },
            {
              title: 'Copying templates',
              task: async () => { await templates(); },
            },
          ],
          { concurrent: true },
        ),
      },

    ],
    {
      exitOnError: true,
      concurrent: false,
      rendererOptions: {
        clearOutput: false,
        collapse: false,
        showErrorMessage: false,
      },
    },
  );

  try {
    await task.run();
    console.log('\n🎉 Build successful!');
  } catch (e) {
    console.log('\n☠️  Build failed!\n\n', e);
  }
};

build();
