<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\RoadTripRequest;
use App\Models\RoadTrip;
use App\Services\Api\RoadTripService;
use Illuminate\Http\Request;

class RoadTripsController extends Controller
{
    private RoadTripService $roadTripService;

    public function __construct(RoadTripService $roadTripService)
    {
        $this->roadTripService = $roadTripService;
    }

    public function index()
    {
        return $this->roadTripService->getRoadTrips();
    }

    public function create()
    {
        //
    }

    public function store(RoadTripRequest $request)
    {
        return $this->roadTripService->createRoadTrip($request->validated());
    }

    public function show(RoadTrip $roadTrip)
    {
        //
    }

    public function edit(RoadTrip $roadTrip)
    {
        //
    }

    public function update(Request $request, RoadTrip $roadTrip)
    {
        //
    }

    public function destroy(RoadTrip $roadTrip)
    {
        //
    }
}
