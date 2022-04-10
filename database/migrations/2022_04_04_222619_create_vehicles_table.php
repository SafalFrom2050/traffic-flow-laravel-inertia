<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('make')->nullable();
            $table->string('model')->nullable();
            $table->string('registration_no')->nullable();
            $table->string('description')->nullable();
            $table->string('top_speed')->nullable();
            $table->unsignedBigInteger('vehicle_type_id')->nullable();

            $table->timestamps();

            $table->foreign('vehicle_type_id')->references('id')->on('vehicle_types');

        });
    }

    public function down()
    {
        Schema::dropIfExists('vehicles');
    }
}
