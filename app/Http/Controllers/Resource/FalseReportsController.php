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
        //
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
        //
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
