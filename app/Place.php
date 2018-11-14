<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
  protected $fillable = [
      'name'
  ];

  public static function boot() {
    parent::boot();
    parent::observe(new \App\Observers\PlaceObserver);
  }
}
