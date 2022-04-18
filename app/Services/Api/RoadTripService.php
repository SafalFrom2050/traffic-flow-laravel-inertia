<?php

namespace App\Services\Api;

use App\Models\RoadTrip;

class RoadTripService
{

    public function createRoadTrip($requestData): array
    {
        $response['count'] = 1;
        $response['roadTrip'] = RoadTrip::create($requestData);
        return $response;
    }

    public function getRoadTrips()
    {
        $userId = auth("sanctum")->id();

        return RoadTrip::with('locationData')->where('user_id', $userId)->get();
    }


    // Gets recent location data by default for generating all location data geoJson
    public function getAllRoadTripsInGeoJson($getRecent = true): array
    {
        if ($getRecent) {
            $roadTrips = RoadTrip::with('locationDataRecent')
                ->withAvg('locationData', 'speed')
                ->with('vehicle')->get();
        }else{
            $roadTrips = RoadTrip::with(['locationData', 'vehicle'])
                ->withAvg('locationData', 'speed')
                ->get();
        }

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

        $response['geoJson'] = $geoJson;
        $response['roadTrips'] = $roadTrips;
        return $response;
    }

    public function getLocationDataInGeoJson()
    {
        return $this->getAllRoadTripsInGeoJson()['geoJson'];
    }

    public function getRoadTripGeoJson($id)
    {
        return $this->getRoadTripData($id)['roadTrip'];
    }

    public function getRoadTripData($id): array
    {
        $roadTrip = RoadTrip::with(['locationData', 'vehicle'])->withAvg('locationData', 'speed')
            ->withMax('locationData', 'speed')
            ->withMin('locationData', 'speed')
            ->whereId($id)->get()->first();

        $geoJson['type'] = 'FeatureCollection';


        $crsProperties['name'] = 'urn:ogc:def:crs:OGC:1.3:CRS84';
        $crs['type'] = 'name';
        $crs['properties'] = $crsProperties;
        $geoJson['crs'] = $crs;

        foreach ($roadTrip['locationData'] as $locationDatum) {
            $feature['type'] = 'Feature';
            $feature['properties']['speed'] = (double) $locationDatum['speed'];

            $geometry['type'] = 'Point';
            $geometry['coordinates'] =  [(double) $locationDatum['longitude'], (double) $locationDatum['latitude']];
            $feature['geometry'] = $geometry;
            $geoJson['features'][] = $feature;
        }

        $response['geoJson'] = $geoJson;
        $response['roadTrip'] = $roadTrip;

        return $response;
    }
}
