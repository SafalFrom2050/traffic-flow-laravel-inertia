<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Models\FalseReport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FalseReportsController extends Controller
{
    public function index()
    {
        if (request()->has('incident')){
            $falseReports = FalseReport::where('incident_id', request('incident'))->get();
            $subHeading = $falseReports[0]->incident->incidentType->name;
        }else{
            $falseReports = FalseReport::paginate()->all();
            $subHeading = false;
        }
        return Inertia::render('FalseReport/FalseReportManager', compact('falseReports', 'subHeading'));
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
        $selectedFalseReport = FalseReport::find($id);
        return Inertia::render('FalseReport/FalseReportManager', compact('selectedFalseReport'));
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
        //
    }
}
