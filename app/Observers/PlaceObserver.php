<?php

namespace App\Observers;

use App\Place;

class PlaceObserver
{
    /**
     * Handle the place "created" event.
     *
     * @param  \App\Place  $place
     * @return void
     */

    public function creating(Place $place)
    {
      $doc = Place::where($place->toArray())->first();
      if ($doc) {
        $place->err = "Ya existe un lugar con el mismo nombre: {$place->name}";
        return false;
      }
    }

    public function created(Place $place)
    {
        error_log('Creamos');
    }

    /**
     * Handle the place "updated" event.
     *
     * @param  \App\Place  $place
     * @return void
     */
    public function updated(Place $place)
    {
        //
    }

    /**
     * Handle the place "deleted" event.
     *
     * @param  \App\Place  $place
     * @return void
     */
    public function deleted(Place $place)
    {
        //
    }

    /**
     * Handle the place "restored" event.
     *
     * @param  \App\Place  $place
     * @return void
     */
    public function restored(Place $place)
    {
        //
    }

    /**
     * Handle the place "force deleted" event.
     *
     * @param  \App\Place  $place
     * @return void
     */
    public function forceDeleted(Place $place)
    {
        //
    }
}
