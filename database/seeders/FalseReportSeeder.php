<?php

namespace Database\Seeders;

use App\Models\FalseReport;
use Illuminate\Database\Seeder;

class FalseReportSeeder extends Seeder
{
    public function run()
    {
        FalseReport::insert($this->getFalseReports());
    }

    private function getFalseReports(): array
    {
        return [
            [
                'details' => 'The road condition is fine in this area.',
                'user_id' => 2,
                'incident_id' => 1
            ],
            [
                'details' => 'No issues as stated.',
                'user_id' => 10,
                'incident_id' => 1
            ],
            [
                'details' => '',
                'user_id' => 4,
                'incident_id' => 1
            ],
            [
                'details' => 'The road condition is fine in this area.',
                'user_id' => 2,
                'incident_id' => 3
            ],
            [
                'details' => 'No issues as stated.',
                'user_id' => 10,
                'incident_id' => 2
            ],
            [
                'details' => '',
                'user_id' => 4,
                'incident_id' => 2
            ],
        ];
    }
}
