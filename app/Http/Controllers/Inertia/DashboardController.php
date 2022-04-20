<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Models\FalseReport;
use App\Models\Incident;
use App\Models\LocationData;
use App\Models\User;
use App\Models\Vehicle;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $incidents_count = Incident::count();
        $road_trips_count = Incident::count();
        $false_reports_count = FalseReport::count();
        $vehicles_count = Vehicle::count();
        $location_data_count = LocationData::count();
        $users_count = User::count();

        $recentIncidents = Incident::limit(5)->latest('created_at')->get();

        return Inertia::render('Dashboard', compact('incidents_count',
            'road_trips_count',
            'false_reports_count',
            'recentIncidents',
            'vehicles_count',
            'location_data_count',
            'users_count'
        ));
    }
}
