<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Models\FalseReport;
use App\Models\Incident;
use App\Models\LocationData;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $incidents_count = Incident::count();
        $road_trips_count = Incident::count();
        $false_reports_count = FalseReport::count();

        $recentIncidents = Incident::limit(5)->latest('created_at')->get();

        return Inertia::render('Dashboard');
    }
}
