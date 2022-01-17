<?php

return [
  'debug' => true,

  // default homepage
  'home' => 'home',

  // we use languages by default
  'languages' => true,
  'languages.detect' => false,
  'date.handler' => 'strftime',
  'slugs' => 'de',

  // thumbnail configuration
  'thumbs' => [
    'quality' => 80,
    'driver' => 'gd',
    'srcsets' => [
      'default' => [640, 750, 1280, 1920, 2560],
      'webp' => [
        '640w' => ['width' => 640, 'format' => 'webp', 'quality' => 60],
        '750w' => ['width' => 750, 'format' => 'webp', 'quality' => 60],
        '1280w' => ['width' => 1280, 'format' => 'webp', 'quality' => 60],
        '1920w' => ['width' => 1920, 'format' => 'webp', 'quality' => 60],
        '2560w' => ['width' => 2560, 'format' => 'webp', 'quality' => 60],
      ],
    ]
  ],

  // hooks and routes in their own files
  'hooks' => require_once('hooks.php'),
  'routes' => require_once('routes.php'),

  // with trailing slash for easier usage
  'kalong' => realpath(__DIR__ . '/../patterns') . '/',
];
