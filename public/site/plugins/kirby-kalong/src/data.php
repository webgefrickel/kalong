<?php

function kalong($pattern = null, $page = null) {
  $site = kirby()->site();
  $page = ($page === null) ? $site->page() : $page;
  $path = kirby()->option('kalong');

  // load the default page data, and override anything in need of override
  $globalData = YAML::decode(file_get_contents($path . 'default.yml'));
  $patternData = ($pattern !== null) ? YAML::decode(file_get_contents($path . $pattern . '.yml')) : [];
  $__ = array_merge($globalData, $patternData);

  // debugging and deactivating styleguide
  $__['config']['debug'] = kirby()->option('debug');
  $__['config']['styleguide'] = false;

  // YOU CAN EDIT / ADD DATA BELOW THIS LINE
  //========================================

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

  $__['nav'] = [];
  $__['nav']['main'] = [];
  foreach ($site->children()->listed() as $p) {
    $__['nav']['main'][] = [
      'href' => $p->url(),
      'label' => $p->title(),
    ];
  }

  //========================================
  return $__;
}

