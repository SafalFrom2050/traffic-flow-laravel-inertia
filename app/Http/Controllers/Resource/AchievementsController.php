<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use Illuminate\Http\Request;

class AchievementsController extends Controller
{
    public function index()
    {
        $response['achievements'] = Achievement::all();
        $response['count'] = $response['achievements']->count();

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

    public function show(Achievement $achievement)
    {
        //
    }

    public function edit(Achievement $achievement)
    {
        //
    }

    public function update(Request $request, Achievement $achievement)
    {
        //
    }

    public function destroy(Achievement $achievement)
    {
        //
    }
}
