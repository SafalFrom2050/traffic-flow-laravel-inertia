<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Incident extends Model
{

    protected $guarded = ['id'];
    protected $with = ['incidentType', 'user:id,fname,lname'];

    public function incidentType(): BelongsTo
    {
        return $this->belongsTo(IncidentType::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function falseReports(): HasMany
    {
        return $this->hasMany(FalseReport::class);
    }
}
