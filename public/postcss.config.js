export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 2,
      features: { 'nesting-rules': false },
    },
    cssnano: {},
  },
};
