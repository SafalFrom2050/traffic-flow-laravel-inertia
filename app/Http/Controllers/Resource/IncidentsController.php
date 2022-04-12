<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\IncidentRequest;
use App\Models\Incident;
use Illuminate\Http\Request;

class IncidentsController extends Controller
{
    public function index()
    {
        $incidents = Incident::with('incidentType')->get();

        $response['incidents'] = $incidents;
        $response['count'] = $incidents->count();
        return $response;
    }

    public function create()
    {
        //
    }

    public function store(IncidentRequest $request)
    {
        $incident = Incident::create($request->validated());

        $response['incident'] = $incident;

        return $response;
    }

    public function show(Incident $incident)
    {
        //
    }

    public function edit(Incident $incident)
    {
        //
    }

    public function update(Request $request, Incident $incident)
    {
        //
    }

    public function destroy(Incident $incident)
    {
        //
    }
}
