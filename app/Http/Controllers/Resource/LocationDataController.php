<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LocationDataRequest;
use App\Models\LocationData;
use App\Services\Api\LocationDataService;
use Database\Seeders\LocationDataSeeder;
use Illuminate\Http\Request;

class LocationDataController extends Controller
{
    private LocationDataService $locationDataService;

    public function __construct(LocationDataService $locationDataService)
    {
        $this->locationDataService = $locationDataService;
    }

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(LocationDataRequest $request)
    {
        $this->locationDataService->handleNewLocationData($request->validated());
    }

    public function show(LocationData $locationData)
    {
        //
    }

    public function edit(LocationData $locationData)
    {
        //
    }

    public function update(Request $request, LocationData $locationData)
    {
        //
    }

    public function destroy(LocationData $locationData)
    {
        //
    }
}
