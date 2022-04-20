<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicle extends Model
{
    protected $guarded = ['id'];

    protected $with = ['roadTrip'];

    public function roadTrip(): HasMany
    {
        return $this->hasMany(RoadTrip::class);
    }
}
