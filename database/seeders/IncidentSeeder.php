<?php

namespace Database\Seeders;

use App\Models\Incident;
use Illuminate\Database\Seeder;

class IncidentSeeder extends Seeder
{
    public function run()
    {
        Incident::insert($this->getTestIncidents());
    }

    public function getTestIncidents(): array
    {
        return [
            [
                'name' => '',
                'description' => 'The traffic condition is very worse!',
                'latitude' => '27.66365782852897',
                'longitude' => '85.42093623501711',
                'device_identifier' => 'Xiaomi',
                'severity' => 2,
                'user_id' => 1,
                'incident_type_id' => 2
            ],
            [
                'name' => '',
                'description' => 'Only one wheelers can move!',
                'latitude' => '27.662396724465182',
                'longitude' => '85.41982430569306',
                'device_identifier' => 'Xiaomi',
                'severity' => 3,
                'user_id' => 1,
                'incident_type_id' => 1
            ],
            [
                'name' => '',
                'description' => 'There might be a delay in travel time if traveling in bus or car!',
                'latitude' => '27.6610444',
                'longitude' => '85.4208976',
                'device_identifier' => 'Xiaomi',
                'severity' => 1,
                'user_id' => 1,
                'incident_type_id' => 3
            ]
        ];
    }
}
