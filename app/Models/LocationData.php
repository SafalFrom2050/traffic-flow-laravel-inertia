<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocationData extends Model
{
    protected $guarded = ['id'];

    public function roadTrip()
    {
        $this->hasOne(RoadTrip::class);
    }
}
