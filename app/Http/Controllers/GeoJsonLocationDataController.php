<?php

namespace App\Http\Controllers;

use App\Services\Api\RoadTripService;

class GeoJsonLocationDataController extends Controller
{
    private RoadTripService $roadTripService;

    public function __construct(RoadTripService $roadTripService)
    {
        $this->roadTripService = $roadTripService;
    }

    public function index()
    {
        return response()->json($this->roadTripService->getLocationDataInGeoJson());
    }
}
