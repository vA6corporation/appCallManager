<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Selection extends Model
{
  protected $fillable = [
      'name'
  ];

  public $err;

  public static function boot() {
    parent::boot();
    parent::observe(new \App\Observers\SelectionObserver);
  }
}
