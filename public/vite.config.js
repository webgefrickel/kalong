/* eslint-disable no-console */
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';
import kalong from './kalong.config';

const spriteConfig = {
  iconDirs: ['src/icons'],
  symbolId: 'icon-[name]',
  inject: 'body-last',
};

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      clearScreen: false,
      css: {
        devSourcemap: true,
      },
      plugins: [
        svgSpritePlugin(spriteConfig),
        tailwindcss(),
      ],
      server: {
        port: kalong.port,
        https: {
          key: readFileSync('/Users/webgefrickel/Devfiles/localhost+2-key.pem'),
          cert: readFileSync('/Users/webgefrickel/Devfiles/localhost+2.pem'),
        },
      },
    };
  }

  const target = browserslistToEsbuild();
  console.log(`\nBuilding for the following browsers/versions:\n${target.join(', ')}\n`);

  return {
    clearScreen: false,

    plugins: [
      svgSpritePlugin(spriteConfig),
      tailwindcss(),
      ViteImageOptimizer({
        avif: {
          effort: 9,
          quality: 50,
        },
        jpg: {
          quality: 70,
          progressive: true,
          mozjpeg: true,
        },
        png: {
          compressionLevel: 9,
          effort: 10,
        },
        svg: {
          multipass: true,
        },
        webp: {
          quality: 60,
          effort: 6,
        },
      }),
    ],

    build: {
      target,
      cssTarget: target,
      cssCodeSplit: false,
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        output: {
          format: 'iife',
        }
      }
    },
  };
});
