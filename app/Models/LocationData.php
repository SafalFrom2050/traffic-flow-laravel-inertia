<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class LocationData extends Model
{
    protected $guarded = ['id'];

    protected $casts = ['speed' => 'double'];

    public function scopeRecent($query)
    {
        return $query->whereDate('created_at', '>=',Carbon::now())
            ->whereTime('created_at', '>=', Carbon::now()->subMinutes(30));
    }

    public function roadTrip()
    {
        return $this->hasOne(RoadTrip::class);
    }
}
