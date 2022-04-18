<?php

namespace Database\Seeders;

use App\Models\IncidentType;
use Illuminate\Database\Seeder;

class IncidentTypesSeeder extends Seeder
{

    public function run()
    {
        IncidentType::insert($this->incidentTypes);
    }

    private array $incidentTypes = [
        [
            'name' => 'Road Block',
            'image' => 'public/images/road-block.jpg',
            'marker' => 'public/images/markers/road-block-marker.jpg'
        ],
        [
            'name' => 'Traffic Jam',
            'image' => 'public/images/traffic-jam.png',
            'marker' => 'public/images/markers/traffic-jam-marker.png'
        ],
        [
            'name' => 'Construction',
            'image' => 'public/images/construction.jpg',
            'marker' => 'public/images/markers/construction-marker.jpg'
        ],
        [
            'name' => 'Protest',
            'image' => 'public/images/protest.png',
            'marker' => 'public/images/markers/protest-marker.png'
        ],
        [
            'name' => 'Accident',
            'image' => 'public/images/accident.jpg',
            'marker' => 'public/images/markers/accident-marker.jpg'
        ],

    ];
}
