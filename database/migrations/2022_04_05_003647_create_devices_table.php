<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('os');
            $table->string('os_version');
            $table->string('manufacturer');
            $table->unsignedInteger('number_of_trips');
            $table->unsignedBigInteger('user_id');


            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('devices');
    }
}
