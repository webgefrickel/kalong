<?php

function kalong($pattern = null) {
  $path = kirby()->option('kalong');
  $site = kirby()->site();
  $pages = kirby()->site()->index();
  $page = $pages->current();

  // load the default page data, and override anything in need of override
  $globalData = YAML::decode(file_get_contents($path . 'page.yml'));
  $patternData = ($pattern !== null) ? YAML::decode(file_get_contents($path . $pattern . '.yml')) : [];
  $data = array_merge($globalData, $patternData);

  // debugging and deactivating styleguide
  $data['config']['debug'] = kirby()->option('debug');
  $data['config']['styleguide'] = false;

  // global data
  $data['kirby'] = kirby();
  $data['language'] = kirby()->language();

  // navigation objects
  $data['nav'] = [];
  $data['nav']['main'] = [];
  // loop through pages, build nav

  return $data;
}
