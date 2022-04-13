<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RoadTrip extends Model
{
    protected $guarded = ['id'];
    protected $touches = ['location_data'];

    public function locationData(): HasMany
    {
        return $this->hasMany(LocationData::class);
    }
}
