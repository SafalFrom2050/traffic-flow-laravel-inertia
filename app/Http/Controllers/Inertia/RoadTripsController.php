<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Models\RoadTrip;
use App\Services\Api\RoadTripService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoadTripsController extends Controller
{
    public RoadTripService $roadTripService;

    public function __construct(RoadTripService $roadTripService)
    {
        $this->roadTripService = $roadTripService;
    }

    public function index()
    {
        $allRoadTripsGeoJson = $this->roadTripService->getAllRoadTripsInGeoJson();
        $trafficGeoJson = $allRoadTripsGeoJson['geoJson'];
        $roadTrips = $allRoadTripsGeoJson['roadTrips'];
        return Inertia::render('RoadTrip/RoadTripManager', compact('trafficGeoJson', 'roadTrips'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $roadTripData = $this->roadTripService->getRoadTripData($id);

        $trafficGeoJson = $roadTripData['geoJson'];
        $selectedRoadTrip = $roadTripData['roadTrip'];
        return Inertia::render('RoadTrip/RoadTripManager', compact('trafficGeoJson', 'selectedRoadTrip'));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
       RoadTrip::destroy($id);
       return back();
    }
}
