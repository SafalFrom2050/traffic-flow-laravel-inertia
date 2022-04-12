<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoadTripsTable extends Migration
{
    public function up()
    {
        Schema::create('road_trips', function (Blueprint $table) {
            $table->id();

            $table->string('starting_point');
            $table->string('destination')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('vehicle_id');


            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('vehicle_id')->references('id')->on('vehicles');
        });
    }

    public function down()
    {
        Schema::dropIfExists('road_trips');
    }
}
