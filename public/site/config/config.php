<?php

return [
  'debug' => true,
  'languages' => true,
  'date.handler' => 'strftime',
  'routes' => require_once('routes.php'),
  'hooks' => require_once('hooks.php'),
  'thumbs' => [
    'driver' => 'img',
    'quality' => '75',
  ],

  // with trailing slash for easier usage
  'kalong' => realpath(__DIR__ . '/../patterns') . '/',
];
