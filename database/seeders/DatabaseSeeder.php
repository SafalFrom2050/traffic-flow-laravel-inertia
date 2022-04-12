<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(1)->create([
            'email' => 'aa@aa.aa',
            'password' => bcrypt('pass'),
            'is_approved' => true,
            'reward_points' => 32
        ]);

        User::factory(10)->create();

        $this->call(IncidentTypesSeeder::class);
        $this->call(AchievementSeeder::class);
        $this->call(IncidentSeeder::class);
    }
}
