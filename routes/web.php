<?php

use App\Http\Controllers\Inertia\IncidentsController;
use App\Http\Controllers\Inertia\RoadTripsController;
use App\Http\Controllers\Inertia\UsersController;
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
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('/user-manager')->name('user-manager.')->group( function () {
        Route::get('/', [UsersController::class, 'index'])->name('index');
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

    Route::prefix('/road-trip-manager')->name('road-trip-manager.')->group( function () {
        Route::get('/', [RoadTripsController::class, 'index'])->name('index');
        Route::get('/edit/{id}', [RoadTripsController::class, 'edit'])->name('edit');
        Route::get('/{id}', [RoadTripsController::class, 'show'])->name('show');
        Route::delete('/{id}', [RoadTripsController::class, 'destroy'])->name('delete');
        Route::put('/{id}', [RoadTripsController::class, 'update'])->name('update');
    });
});

require __DIR__.'/auth.php';
