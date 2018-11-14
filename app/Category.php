<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
  protected $fillable = [
      'name'
  ];

  public $err; //This property will receive any message error

  public static function boot() {
    parent::boot();
    parent::observe(new \App\Observers\CategoryObserver);
  }
}
