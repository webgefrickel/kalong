<?php

function kalong($pattern = null, $page = null) {
  $path = kirby()->option('kalong');
  $site = kirby()->site();
  $home = $site->homepage();
  $page = ($page !== null) ? $page : $home;

  // load the default page data, and override anything in need of override
  $globalData = YAML::decode(file_get_contents($path . 'default.yml'));
  $patternData = ($pattern !== null) ? YAML::decode(file_get_contents($path . $pattern . '.yml')) : [];
  $__ = array_merge($globalData, $patternData);

  // debugging and deactivating styleguide
  $__['config']['debug'] = kirby()->option('debug');
  $__['config']['styleguide'] = false;

  // global data
  $__['language'] = kirby()->language();
  $__['languages'] = [];
  foreach (kirby()->languages() as $lang) {
    $__['languages'][] = [
      'key' => $lang->code(),
      'label' => $lang->name(),
      'url' => $page->url($lang->code()),
      'current' => ($lang === kirby()->language()),
    ];
  }

  // global page data
  $__['modifiers'] = '';
  $__['pageTitle'] = $page->kalongPageTitle();
  $__['pageDescription'] = $page->kalongPageDescription();

  // navigation objects
  $__['nav'] = [];
  $__['archiveLabel'] = $home->title();
  $__['worksLabel'] = (kirby()->language()->code() === 'de') ? 'Werke' : 'Works';
  $__['titleLabel'] = (kirby()->language()->code() === 'de') ? 'Titel' : 'Captions';

  $firstArchive = true;
  $archives = $home->children()->listed();

  foreach ($archives as $archive) {
    $current;
    $works = $archive->children()->listed();

    $years = [];
    foreach ($works as $work) {
      $years[] = $work->year()->value();
    }
    $years = array_unique($years);
    rsort($years, SORT_NUMERIC);

    if ($firstArchive && count($years) > 0) {
      $current = true;
      $firstArchive = false;
    } else {
      $current = false;
    }

    if (!empty($years)) {
      $__['nav'][] = [
        'id' => $archive->slug(),
        'label' => $archive->title(),
        'current' => $current,
        'years' => $years,
      ];
    }
  }

  return $__;
}
