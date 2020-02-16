<?php

class ProjectPage extends Page {
  public function cover() {
    return $this->gallery()->first()->toFile();
  }
}
