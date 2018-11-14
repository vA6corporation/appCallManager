<?php

namespace App\Observers;

use App\Selection;

class SelectionObserver
{
    /**
     * Handle the selection "created" event.
     *
     * @param  \App\Selection  $selection
     * @return void
     */

     public function creating(Selection $selection)
     {
       $doc = Selection::where($selection->toArray())->first();
       if ($doc) {
         $selection->err = "Ya existe una seleccion con el mismo nombre: {$selection->name}";
         return false;
       }
     }

    public function created(Selection $selection)
    {
        //
    }

    /**
     * Handle the selection "updated" event.
     *
     * @param  \App\Selection  $selection
     * @return void
     */
    public function updated(Selection $selection)
    {
        //
    }

    /**
     * Handle the selection "deleted" event.
     *
     * @param  \App\Selection  $selection
     * @return void
     */
    public function deleted(Selection $selection)
    {
        //
    }

    /**
     * Handle the selection "restored" event.
     *
     * @param  \App\Selection  $selection
     * @return void
     */
    public function restored(Selection $selection)
    {
        //
    }

    /**
     * Handle the selection "force deleted" event.
     *
     * @param  \App\Selection  $selection
     * @return void
     */
    public function forceDeleted(Selection $selection)
    {
        //
    }
}
