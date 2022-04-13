<?php

use App\Http\Controllers\Api\AuthenticationController;
use App\Http\Controllers\Api\RegistrationController;
use App\Http\Controllers\GeoJsonLocationDataController;
use App\Http\Controllers\IncidentTypesController;
use App\Http\Controllers\Resource\AchievementsController;
use App\Http\Controllers\Resource\AdminsController;
use App\Http\Controllers\Resource\DevicesController;
use App\Http\Controllers\Resource\FalseReportsController;
use App\Http\Controllers\Resource\IncidentsController;
use App\Http\Controllers\Resource\LocationDataController;
use App\Http\Controllers\Resource\ReportsController;
use App\Http\Controllers\Resource\RoadTripsController;
use App\Http\Controllers\Resource\UserAchievementsController;
use App\Http\Controllers\Resource\UserAddressesController;
use App\Http\Controllers\Resource\VehiclesController;
use Database\Seeders\IncidentTypesSeeder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('test', function () {
    return 'test';
});

Route::name('api.')->middleware('auth:sanctum')->group( function () {
    Route::apiResources(
        [
            'vehicles' => VehiclesController::class,
            'road_trips' => RoadTripsController::class,
            'location_data' => LocationDataController::class,
            'devices' => DevicesController::class,
            'user_addresses' => UserAddressesController::class,
            'achievements' => AchievementsController::class,
            'user_achievements' => UserAchievementsController::class,
            'incident_types' => IncidentTypesController::class,
            'incidents' => IncidentsController::class,
            'reports' => ReportsController::class,
            'false_reports' => FalseReportsController::class,
            'admins' => AdminsController::class,
        ]);

});

Route::get('geojson', [GeoJsonLocationDataController::class, 'index'])->name('geojson');


Route::post('/user/login', [AuthenticationController::class, 'store']);
Route::post('/user/signup', [RegistrationController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
