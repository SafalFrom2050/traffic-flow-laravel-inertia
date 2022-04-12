<?php

namespace App\Services\Api;

use App\Models\LocationData;
use App\Models\RoadTrip;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class LocationDataService
{

    public function handleNewLocationData($requestData)
    {
        DB::beginTransaction();
        $locationData = LocationData::create($requestData);
        if ($locationData->roadTrip()->destination =! null) {
            DB::commit();
        }

        DB::rollBack();

        $roadTrip = RoadTrip::find($requestData['road_trip_id']);

        if ($roadTrip == null) {
            throw ValidationException::withMessages([
                'road_trip_id' => ["Road Trip doesn't exist!"],
            ]);
        }

        if($roadTrip->destination != null) {
            LocationData::create($requestData);
        }else{
            throw ValidationException::withMessages([
                'road_trip_id' => ['Road Trip has been already been completed.'],
            ]);
        }
    }

}
