<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeviceVehiclesTable extends Migration
{
    public function up()
    {
        Schema::create('device_vehicles', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('device_id');
            $table->unsignedBigInteger('vehicle_id');

            $table->timestamps();


            $table->foreign('device_id')->references('id')->on('devices');
            $table->foreign('vehicle_id')->references('id')->on('vehicles');

        });
    }

    public function down()
    {
        Schema::dropIfExists('device_vehicles');
    }
}
