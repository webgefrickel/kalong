export default {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': null,
    'import-notation': null,
    'selector-class-pattern': '^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },
};
