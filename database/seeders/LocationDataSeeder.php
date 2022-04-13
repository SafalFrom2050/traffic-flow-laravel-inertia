<?php

namespace Database\Seeders;

use App\Models\LocationData;
use Illuminate\Database\Seeder;

class LocationDataSeeder extends Seeder
{
    public function run()
    {
        LocationData::create([
            'latitude' => '27.6610444',
            'longitude' => '85.4208976',
            'road_trip_id' => 1,
            'device_identifier' => 'Xiaomi',
            'speed' => '0'
        ]);

        LocationData::create([
            'latitude' => '27.662396724465182',
            'longitude' => '85.41982430569306',
            'road_trip_id' => 1,
            'device_identifier' => 'Xiaomi',
            'speed' => '30'
        ]);

        LocationData::create([
            'latitude' => '27.66365782852897',
            'longitude' => '85.42093623501711',
            'road_trip_id' => 2,
            'device_identifier' => 'Xiaomi',
            'speed' => '60'
        ]);
    }
}
