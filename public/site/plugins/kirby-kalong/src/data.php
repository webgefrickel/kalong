<?php

function kalong($pattern = null, $page = null) {
  $path = kirby()->option('kalong');
  $site = kirby()->site();
  $home = $site->homepage();
  $page = ($page !== null) ? $page : $home;

  // load the default page data, and override anything in need of override
  $globalData = YAML::decode(file_get_contents($path . 'layout.yml'));
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

  // navigation objects
  $data['nav'] = [];
  $data['nav']['main'] = [];
  // loop through pages, build nav

  return $data;
}
