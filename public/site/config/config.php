<?php

return [
  'debug' => false,

  // default homepage
  'home' => 'home',

  // we use languages by default
  'languages' => true,
  'languages.detect' => false,
  'date.handler' => 'strftime',
  'slugs' => 'de',

  // thumbnail configuration
  'thumbs' => [
    'quality' => 70,
    'driver' => 'gd',
    'srcsets' => [
      'default' => [
        '750w' => ['width' => 750, 'format' => 'webp', 'quality' => 70],
        '750w' => ['width' => 1200, 'format' => 'webp', 'quality' => 70],
        '1280w' => ['width' => 1600, 'format' => 'webp', 'quality' => 70],
        '1920w' => ['width' => 1920, 'format' => 'webp', 'quality' => 70],
        '2560w' => ['width' => 2560, 'format' => 'webp', 'quality' => 70],
      ],
    ]
  ],

  // hooks and routes in their own files
  'hooks' => require_once('hooks.php'),
  'routes' => require_once('routes.php'),

  // with trailing slash for easier usage
  'kalong' => realpath(__DIR__ . '/../patterns') . '/',
];
