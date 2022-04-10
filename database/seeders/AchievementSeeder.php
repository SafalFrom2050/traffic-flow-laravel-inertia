<?php

namespace Database\Seeders;

use App\Models\Achievement;
use Illuminate\Database\Seeder;

class AchievementSeeder extends Seeder
{
    public function run()
    {
        Achievement::insert($this->achievements);
    }

    private array $achievements = [
        [
            'name' => 'Beginner',
            'level' => 1,
            'points_required' => 20
        ],
        [
            'name' => 'Contributor',
            'level' => 2,
            'points_required' => 50
        ],
        [
            'name' => 'Valued Contributor',
            'level' => 3,
            'points_required' => 200
        ],
        [
            'name' => 'Expert',
            'level' => 4,
            'points_required' => 500
        ],
    ];
}
