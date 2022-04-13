<?php

namespace Database\Seeders;

use App\Models\RoadTrip;
use Illuminate\Database\Seeder;

class RoadTripSeeder extends Seeder
{
    public function run()
    {
        RoadTrip::insert([
           [
               'vehicle_id' => 1,
               'user_id' => 1,
               'destination' => 'Kathmandu',
               'starting_point' => 'Bhaktapur'
           ],
            [
                'vehicle_id' => 1,
                'user_id' => 2,
                'destination' => 'Bhaktapur',
                'starting_point' => 'Kathmandu'
            ],
        ]);
    }
}
