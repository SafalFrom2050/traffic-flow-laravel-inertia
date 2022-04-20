<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resource\IncidentTypeCreateRequest;
use App\Http\Requests\Resource\IncidentTypeUpdateRequest;
use App\Models\IncidentType;
use App\Services\Web\IncidentTypeService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IncidentTypesController extends Controller
{

    public IncidentTypeService $incidentTypeService;

    public function __construct(IncidentTypeService $incidentTypeService)
    {
        $this->incidentTypeService = $incidentTypeService;
    }

    public function index()
    {
        $selectedIncidentType = false;
        if (request('incident-type')){
            $selectedIncidentType = IncidentType::withCount('incidents')->whereId(request('incident-type'))->get()->first();
        }

        $incidentTypes = IncidentType::withCount('incidents')->paginate()->all();
        return Inertia::render('IncidentType/IncidentTypeManager', compact('incidentTypes', 'selectedIncidentType'));
    }

    public function create()
    {

    }

    public function store(IncidentTypeCreateRequest $request)
    {
        $this->incidentTypeService->createIncidentType($request->validated());
        return back();
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $incidentType = IncidentType::find($id);
        return Inertia::render('IncidentType/EditIncidentType', compact('incidentType'));
    }

    public function update(IncidentTypeUpdateRequest $request, $id)
    {
        $this->incidentTypeService->updateIncidentType($request->validated(), $id);
        return back();
    }

    public function destroy($id)
    {
        IncidentType::destroy($id);
        return back();
    }
}
