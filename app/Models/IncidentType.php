<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class IncidentType extends Model
{
    protected $guarded = ['id'];

    public function incidents(): HasMany
    {
        return $this->hasMany(Incident::class)->withCount('falseReports');
    }
}
