<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationDataTable extends Migration
{
    public function up()
    {
        Schema::create('location_data', function (Blueprint $table) {
            $table->id();
            $table->string('latitude');
            $table->string('longitude');
            $table->decimal('speed');
            $table->string('device_identifier');
            $table->unsignedBigInteger('road_trip_id')->nullable();

            $table->timestamps();


            $table->foreign('road_trip_id')->references('id')->on('road_trips')->onDelete('CASCADE');

        });
    }

    public function down()
    {
        Schema::dropIfExists('location_data');
    }
}
