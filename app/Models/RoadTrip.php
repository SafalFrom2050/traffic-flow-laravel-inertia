<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

class RoadTrip extends Model
{
    protected $guarded = ['id'];
    protected $touches = ['locationData'];

    public function locationData(): HasMany
    {
        return $this->hasMany(LocationData::class);
    }

    public function locationDataRecent(): HasMany
    {
        return $this->hasMany(LocationData::class)->recent();
    }

    public function scopeRecent($query)
    {
        return $query->whereDate('updated_at', '>=',Carbon::now())
            ->whereTime('updated_at', '>=', Carbon::now()->subMinutes(30));
    }

    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(Vehicle::class);
    }
}
