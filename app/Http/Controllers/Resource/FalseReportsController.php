<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\FalseReportRequest;
use App\Models\FalseReport;
use Illuminate\Http\Request;

class FalseReportsController extends Controller
{
    public function index()
    {
        if (request('incident_id')) {
            $falseReports = FalseReport::where('incident_id', request('incident_id'))->latest('created_at')->get();
        }else {
            $falseReports = FalseReport::latest('created_at')->get();
        }

        $response['false_reports'] = $falseReports;
        $response['count'] = $falseReports->count();

        return $response;
    }

    public function create()
    {
        //
    }

    public function store(FalseReportRequest $request)
    {
        $falseReport = FalseReport::create($request->validated());
        $response['false_report'] = $falseReport;

        return $response;
    }

    public function show(FalseReport $falseReport)
    {

    }

    public function edit(FalseReport $falseReport)
    {
        //
    }

    public function update(Request $request, FalseReport $falseReport)
    {
        //
    }

    public function destroy(FalseReport $falseReport)
    {
        //
    }
}
