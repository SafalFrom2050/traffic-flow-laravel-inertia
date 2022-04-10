<?php

namespace App\Http\Controllers;

use App\Models\IncidentType;
use Illuminate\Http\Request;

class IncidentTypesController extends Controller
{
    public function index()
    {
        $incidentTypes = IncidentType::all();

        $response['incident_types'] = $incidentTypes;
        $response['count'] = $incidentTypes->count();
        return $response;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(IncidentTypes $incidentTypes)
    {
        //
    }

    public function edit(IncidentTypes $incidentTypes)
    {
        //
    }

    public function update(Request $request, IncidentTypes $incidentTypes)
    {
        //
    }

    public function destroy(IncidentTypes $incidentTypes)
    {
        //
    }
}
