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
            'image' => 'storage/images/road-block.jpg'
        ],
        [
            'name' => 'Traffic Jam',
            'image' => 'storage/images/traffic-jam.png'
        ],
        [
            'name' => 'Construction',
            'image' => 'storage/images/construction.jpg'
        ],
        [
            'name' => 'Protests',
            'image' => 'storage/images/protest.png'
        ],

    ];
}
