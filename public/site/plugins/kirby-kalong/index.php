<?php

@include_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/src/helpers.php';
require_once __DIR__ . '/src/data.php';
require_once __DIR__ . '/src/plugins.php';

use Kirby\Cms\App;

Kirby::plugin('mgfagency/twig', [
    'options' => [
        'usephp' => true
    ],
    'components' => [
        'template' => function (App $kirby, string $name, string $contentType = 'html', string $defaultType = 'html') {
            return new mgfagency\Twig\Template($name, $contentType, $defaultType);
        }
    ]
]);

