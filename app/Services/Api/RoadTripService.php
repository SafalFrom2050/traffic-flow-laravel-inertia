<?php

namespace App\Services\Api;

use App\Models\RoadTrip;

class RoadTripService
{

    public function createRoadTrip($requestData): RoadTrip
    {
        return RoadTrip::create($requestData);
    }

    public function getRoadTrips()
    {
        $userId = auth("sanctum")->id();

        return RoadTrip::with('locationData')->where('user_id', $userId)->get();
    }

    public function getLocationDataInGeoJson(): array
    {
        $roadTrips = RoadTrip::with('locationData')->get();

        $geoJson['type'] = 'FeatureCollection';


        $crsProperties['name'] = 'urn:ogc:def:crs:OGC:1.3:CRS84';
        $crs['type'] = 'name';
        $crs['properties'] = $crsProperties;
        $geoJson['crs'] = $crs;


        foreach ($roadTrips as $roadTrip) {
            foreach ($roadTrip['locationData'] as $locationDatum) {
                $feature['type'] = 'Feature';
                $feature['properties']['speed'] = (double) $locationDatum['speed'];

                $geometry['type'] = 'Point';
                $geometry['coordinates'] =  [(double) $locationDatum['longitude'], (double) $locationDatum['latitude']];
                $feature['geometry'] = $geometry;
                $geoJson['features'][] = $feature;
            }
        }

        return $geoJson;
    }
}
