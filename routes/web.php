<?php

use App\Http\Controllers\Inertia\DashboardController;
use App\Http\Controllers\Inertia\FalseReportsController;
use App\Http\Controllers\Inertia\IncidentsController;
use App\Http\Controllers\Inertia\IncidentTypesController;
use App\Http\Controllers\Inertia\RoadTripsController;
use App\Http\Controllers\Inertia\UsersController;
use App\Http\Controllers\Resource\VehiclesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => 'auth'], function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('/user-manager')->name('user-manager.')->group( function () {
        Route::get('/', [UsersController::class, 'index'])->name('index');
        Route::post('/', [UsersController::class, 'store'])->name('store');
        Route::get('/edit/{id}', [UsersController::class, 'edit'])->name('edit');
        Route::delete('/{id}', [UsersController::class, 'destroy'])->name('delete');
        Route::put('/{id}', [UsersController::class, 'update'])->name('update');
    });

    Route::prefix('/incident-manager')->name('incident-manager.')->group( function () {
        Route::get('/', [IncidentsController::class, 'index'])->name('index');
        Route::get('/edit/{id}', [IncidentsController::class, 'edit'])->name('edit');
        Route::delete('/{id}', [IncidentsController::class, 'destroy'])->name('delete');
        Route::put('/{id}', [IncidentsController::class, 'update'])->name('update');
    });

    Route::prefix('/incident-type-manager')->name('incident-type-manager.')->group( function () {
        Route::get('/', [IncidentTypesController::class, 'index'])->name('index');
        Route::post('/', [IncidentTypesController::class, 'store'])->name('store');
        Route::get('/edit/{id}', [IncidentTypesController::class, 'edit'])->name('edit');
        Route::delete('/{id}', [IncidentTypesController::class, 'destroy'])->name('delete');
        Route::put('/{id}', [IncidentTypesController::class, 'update'])->name('update');
    });

    Route::prefix('/road-trip-manager')->name('road-trip-manager.')->group( function () {
        Route::get('/', [RoadTripsController::class, 'index'])->name('index');
        Route::get('/edit/{id}', [RoadTripsController::class, 'edit'])->name('edit');
        Route::get('/{id}', [RoadTripsController::class, 'show'])->name('show');
        Route::delete('/{id}', [RoadTripsController::class, 'destroy'])->name('delete');
        Route::put('/{id}', [RoadTripsController::class, 'update'])->name('update');
    });

    Route::prefix('/false-report-manager')->name('false-report-manager.')->group( function () {
        Route::get('/', [FalseReportsController::class, 'index'])->name('index');
        Route::get('/edit/{id}', [FalseReportsController::class, 'edit'])->name('edit');
        Route::get('/{id}', [FalseReportsController::class, 'show'])->name('show');
        Route::delete('/{id}', [FalseReportsController::class, 'destroy'])->name('delete');
        Route::put('/{id}', [FalseReportsController::class, 'update'])->name('update');
    });

    Route::prefix('/vehicle-manager')->name('vehicle-manager.')->group( function () {
        Route::get('/', [VehiclesController::class, 'index'])->name('index');
        Route::get('/edit/{id}', [VehiclesController::class, 'edit'])->name('edit');
        Route::get('/{id}', [VehiclesController::class, 'show'])->name('show');
        Route::delete('/{id}', [VehiclesController::class, 'destroy'])->name('delete');
        Route::put('/{id}', [VehiclesController::class, 'update'])->name('update');
    });
});

require __DIR__.'/auth.php';
