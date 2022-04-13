<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Models\Incident;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IncidentsController extends Controller
{
    public function index()
    {
        $incidents = Incident::with('incidentType')->with(['user:id,fname,lname'])->paginate()->all();

        return Inertia::render('Incident/IncidentManager', compact('incidents'));
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
        //
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
        Incident::destroy($id);
        return back();
    }
}
