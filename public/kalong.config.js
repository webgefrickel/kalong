export default {
  config: {
    name: 'kalong',
    shortName: 'kl',
    description: '...',
    favicon: './public/favicon.svg',
    port: 4000,
    proxy: 'dev.dev.localhost',
    content: [
      './index.html',
      './src/blocks/**/*.js',
      './src/compositions/**/*.js',
      './src/utilities/**/*.js',
    ],
  },
  colors: {
    // must set colors
    transparent: 'transparent',
    current: 'currentcolor',
    black: '#000',
    white: '#fff',
    theme: ' #ff0000',

    // custom color maps
    main: 'var(--color-theme)',
    default: 'var(--color-white)',
  },
  fonts: {
    serif: {
      name: 'Roboto',
      fallback: 'sans-serif',
      files: [
        {
          filename: 'Roboto',
          weight: 400,
          style: 'normal',
        },
      ],
    },
  },
  sizes: {
    'text-sm': [14, 18, 1.3],
    'text-md': [18, 24, 1.4],
    'text-lg': [24, 32, 1.3],
    'text-xl': [36, 72, 1],
    sm: [24, 36],
    md: [40, 56],
    lg: [72, 96],
    xl: [96, 120],
  },
  breakpoints: {
    sm: 640,
    md: 960,
    lg: 1280,
  },
  globals: {
    contentMax: 960,
    lineHeight: 1.4,
    viewportMin: 360,
    viewportMax: 1440,
  },
};
