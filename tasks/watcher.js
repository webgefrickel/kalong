// TODO refactor to start -- use browsersync + bs.watch?
import { join } from 'path';
import chokidar from 'chokidar';
import runPostcss from './postcss';
import runSass from './sass';
import runSassLint from './sassLint';
import run from './lib/run';
import sassLint from './sassLint';
import eslint from './eslint';
import htmlhint from './htmlhint';
import clean from './clean';
import styles from './styles';
import scripts from './scripts';
import styleguide from './fractal';
import copy from './copy';
import sprite from './svgSprite';
import config from '../kalong.config';

