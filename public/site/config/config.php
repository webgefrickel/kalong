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
    'quality' => 70,
    'driver' => 'im',
    'srcsets' => [
      'default' => [640, 750, 1080, 1536, 1920, 2224, 3072],
    ]
  ],

  // hooks and routes in their own files
  'hooks' => require_once('hooks.php'),
  'routes' => require_once('routes.php'),

  // with trailing slash for easier usage
  'kalong' => realpath(__DIR__ . '/../patterns') . '/',
];
