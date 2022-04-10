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
            'image' => ''
        ],
        [
            'name' => 'Traffic Jam',
            'image' => ''
        ],
        [
            'name' => 'Construction',
            'image' => ''
        ],
        [
            'name' => 'Protests',
            'image' => ''
        ],

    ];
}
