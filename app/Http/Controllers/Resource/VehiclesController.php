<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\VehicleCreateRequest;
use App\Models\Vehicle;
use App\Models\VehicleType;
use Illuminate\Http\Request;

class VehiclesController extends Controller
{
    public function index()
    {
        dd('yay');
    }

    public function create()
    {
        dd('nay');
    }

    public function store(VehicleCreateRequest $request)
    {
        $vehicle = $request->validated();
        $vehicleType = $vehicle['vehicle_type'];

        $vehicleTypeId = VehicleType::create($vehicleType)->id;

        $vehicle['vehicle_type_id'] = $vehicleTypeId;

        $response['vehicle'] = Vehicle::create($vehicle);
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
