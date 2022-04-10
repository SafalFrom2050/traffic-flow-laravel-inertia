<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Models\Incident;
use Illuminate\Http\Request;

class IncidentsController extends Controller
{
    public function index()
    {
        $incidents = Incident::all();

        $response['incidents'] = $incidents;
        $response['count'] = $incidents->count();
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
