<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vehicle extends Model
{
    protected $guarded = ['id'];

    protected $with = ['roadTrip'];

    public function roadTrip(): BelongsTo
    {
        return $this->belongsTo(RoadTrip::class);
    }
}
