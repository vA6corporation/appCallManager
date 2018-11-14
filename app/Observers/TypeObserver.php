<?php

namespace App\Observers;

use App\Type;

class TypeObserver
{
    /**
     * Handle the type "created" event.
     *
     * @param  \App\Type  $type
     * @return void
     */

     public function creating(Type $type)
     {
       $doc = Type::where($type->toArray())->first();
       if ($doc) {
         $type->err = "Ya existe un tipo con el mismo nombre: {$type->name}";
         return false;
       }
     }

    public function created(Type $type)
    {
        //
    }

    /**
     * Handle the type "updated" event.
     *
     * @param  \App\Type  $type
     * @return void
     */
    public function updated(Type $type)
    {
        //
    }

    /**
     * Handle the type "deleted" event.
     *
     * @param  \App\Type  $type
     * @return void
     */
    public function deleted(Type $type)
    {
        //
    }

    /**
     * Handle the type "restored" event.
     *
     * @param  \App\Type  $type
     * @return void
     */
    public function restored(Type $type)
    {
        //
    }

    /**
     * Handle the type "force deleted" event.
     *
     * @param  \App\Type  $type
     * @return void
     */
    public function forceDeleted(Type $type)
    {
        //
    }
}
