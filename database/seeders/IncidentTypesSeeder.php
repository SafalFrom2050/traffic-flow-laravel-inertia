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
            'image' => 'storage/images/road-block.jpg',
            'marker' => 'storage/images/marker/road-block-marker.png'
        ],
        [
            'name' => 'Traffic Jam',
            'image' => 'storage/images/traffic-jam.png',
            'marker' => 'storage/images/marker/traffic-jam-marker.png'
        ],
        [
            'name' => 'Construction',
            'image' => 'storage/images/construction.jpg',
            'marker' => 'storage/images/marker/construction-marker.png'
        ],
        [
            'name' => 'Protest',
            'image' => 'storage/images/protest.png',
            'marker' => 'storage/images/marker/protest-marker.png'
        ],
        [
            'name' => 'Accident',
            'image' => 'storage/images/accident.jpg',
            'marker' => 'storage/images/marker/accident-marker.png'
        ],

    ];
}
