<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\VehicleCreateRequest;
use App\Models\RoadTrip;
use App\Models\Vehicle;
use App\Models\VehicleType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehiclesController extends Controller
{
    public function index()
    {
//        $vehicles = Vehicle::whereHas('roadTrip', function ($query) {
//            $query->where('updated_at', Carbon::now()->subMinutes(30));
//            $query->where('destination', null);
//        })->whereHas('vehicleType', function ($query) {
//            $query->where('is_public', true);
//        })->get();

        $vehicles = Vehicle::whereHas('vehicleType', function ($query) {
            $query->where('is_public', true);
        })->get();

        return Inertia::render('Vehicle/VehicleManager', compact('vehicles'));
    }

    public function create()
    {

    }

    public function store(VehicleCreateRequest $request)
    {
        $vehicle = $request->validated();
        $vehicleType = $vehicle['vehicle_type'];

        // Create the new vehicle type
        $vehicleTypeId = VehicleType::create($vehicleType)->id;

        $vehicle['vehicle_type_id'] = $vehicleTypeId;

        // create the vehicle
        $createdVehicle = Vehicle::create($vehicle);

        // update the road trip with new vehicle id
        RoadTrip::find($vehicle['road_trip_id'])->update(['vehicle_id' => $createdVehicle->id]);

        $response['vehicle'] = $createdVehicle;
        $response['count'] = 1;

        return $response;
    }

    public function show(Vehicle $vehicle)
    {
        //
    }

    public function edit(Vehicle $vehicle)
    {
        //
    }

    public function update(Request $request, Vehicle $vehicle)
    {
        //
    }

    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
