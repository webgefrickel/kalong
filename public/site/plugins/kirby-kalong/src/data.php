<?php

function kalong($pattern = null, $page = null) {
  $path = kirby()->option('kalong');
  $site = kirby()->site();
  $home = $site->homepage();
  $page = ($page !== null) ? $page : $home;

  // load the default page data, and override anything in need of override
  $globalData = YAML::decode(file_get_contents($path . 'default.yml'));
  $patternData = ($pattern !== null) ? YAML::decode(file_get_contents($path . $pattern . '.yml')) : [];
  $data = array_merge($globalData, $patternData);

  // debugging and deactivating styleguide
  $data['config']['debug'] = kirby()->option('debug');
  $data['config']['styleguide'] = false;

  // global data
  $data['language'] = kirby()->language();

  // global page data
  $data['pageTitle'] = $page->title() . ' — ' . $home->seotitle();
  $data['pageDescription'] = $page->seodescription();

  // logo, global data
  $data['logo'] = [];
  $data['logo']['text'] = implode(' <br />', explode(' ', $site->title()->value()));
  $data['logo']['label'] = 'zurück zur Startseite';

  // navigation objects
  $data['nav'] = [];
  $data['nav']['main'] = [];
  $data['nav']['meta'] = [];
  $data['nav']['footer'] = [];

  // loop through pages, build nav
  $data['nav']['main'][] = [
    'url' => 'projekte/alle-projekte',
    'label' => 'Alle Projekte',
  ];
  foreach ($site->children()->listed()->find('projekte')->tags()->split() as $category) {
    $data['nav']['main'][] = [
      'url' => 'projekte/' . Str::slug($category),
      'label' => $category,
    ];
  }

  foreach ($site->children()->listed()->not('projekte') as $p) {
    $data['nav']['meta'][] = [
      'url' => $p->url(),
      'label' => $p->title(),
    ];
  }

  foreach ($site->children()->unlisted()->filterBy('template', 'in', ['meta']) as $p) {
    $data['nav']['footer'][] = [
      'url' => $p->url(),
      'label' => $p->title(),
    ];
  }

  // INTRO is global from $home
  $data['intro'] = [];
  $data['intro']['introgallery'] = [];
  $data['intro']['introgallery']['modifiers'] = 'intro__gallery';
  $data['intro']['introgallery']['gallery'] = [];

  $data['intro']['news'] = false;
  if ($home->isnews()->bool()) {
    $data['intro']['news'] = [
      'date' => $home->date()->toDate('%d.%m.%Y'),
      'datetime' => $home->date()->toDate('%d-%m-%YT10:00+02:00'),
      'content' => $home->text()->kirbytext(),
    ];
  }

  $intro = $home->intro()->toStructure();
  foreach ($intro as $i) {
    $link = $i->link()->toLink();
    $isLinked = ($link !== null);
    $image = $home->files()->first()->kalongImage('gallery__image', '(min-width: 960px) 67vw, 100vw');
    $image['href'] = ($isLinked) ? $link : false;
    $image['type'] = 'image';
    $data['intro']['introgallery']['gallery'][] = $image;
  }

  // BACK, global default
  $data['back'] = [
    'url' => 'javascript:history.back()',
    'label' => 'Zurück',
  ];


  return $data;
}
