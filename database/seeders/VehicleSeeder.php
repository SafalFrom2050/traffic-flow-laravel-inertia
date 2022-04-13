<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    public function run()
    {
        Vehicle::create(['name' => 'Tesla', 'description' => '', 'model' => '2021']);
    }
}
