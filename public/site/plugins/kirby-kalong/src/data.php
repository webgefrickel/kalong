<?php

function kalong($pattern = null) {
  $site = kirby()->site();
  $pages = kirby()->site()->index();
  $page = $pages->current();
  $patternPath = kirby()->option('kalong');

  // load the default page data, and override anything in need of override
  $globalData = YAML::decode(file_get_contents($patternPath . 'page.yml'));
  $patternData = ($pattern !== null) ? YAML::decode(file_get_contents($patternPath . $pattern . '.yml')) : [];
  $data = array_merge($globalData, $patternData);
  $homepage = $pages->find('home');

  // debugging and deactivating styleguide
  $data['debug'] = kirby()->option('debug');
  $data['styleguide'] = false;

  // global site data
  $data['site']['modifiers'] = '';
  $data['site']['dir'] = 'ltr';
  $data['site']['lang'] = $site->language()->code();
  $data['site']['title'] = $homepage->hometitle();
  $data['site']['description'] = $homepage->description();
  $data['site']['author'] = $homepage->hometitle();

  // page data
  $data['page']['title'] = $page->title();
  $data['page']['description'] = $page->description();

  // main navigation
  $data['global']['nav'] = [];

  return $data;
}
