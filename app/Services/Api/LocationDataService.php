<?php

namespace App\Services\Api;

use App\Models\LocationData;


class LocationDataService
{

    public function handleNewLocationData($requestData): LocationData
    {
        return LocationData::create($requestData);
    }
}
