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
                'latitude' => 0,
                'longitude' => 0,
                'device_identifier' => '',
                'severity' => 3,
                'user_id' => 1,
                'incident_type_id' => 1
            ],
            [
                'name' => '',
                'description' => 'Only one wheelers can move!',
                'latitude' => 0,
                'longitude' => 0,
                'device_identifier' => '',
                'severity' => 3,
                'user_id' => 1,
                'incident_type_id' => 1
            ],
            [
                'name' => '',
                'description' => 'There might be a delay in travel time if traveling in bus or car!',
                'latitude' => 0,
                'longitude' => 0,
                'device_identifier' => '',
                'severity' => 3,
                'user_id' => 1,
                'incident_type_id' => 1
            ]
        ];
    }
}
