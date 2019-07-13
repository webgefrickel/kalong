<?php

return [
  'debug' => true,

  // default homepage
  'home' => 'home',

  // we use languages by default
  'languages' => true,
  'date.handler' => 'strftime',

  // thumbnail configuration
  'thumbs' => [
    'driver' => 'im',
    'quality' => '75',
    'srcsets' => [
      'default' => [480, 960, 1440, 2400],
    ]
  ],

  // hooks and routes in their own files
  'hooks' => require_once('hooks.php'),
  'routes' => require_once('routes.php'),

  // with trailing slash for easier usage
  'kalong' => realpath(__DIR__ . '/../patterns') . '/',
];
