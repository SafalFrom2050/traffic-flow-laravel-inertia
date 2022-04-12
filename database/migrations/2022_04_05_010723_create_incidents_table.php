<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidentsTable extends Migration
{
    public function up()
    {
        Schema::create('incidents', function (Blueprint $table) {
            $table->id();

            $table->string('name')->default('');
            $table->text('description')->nullable();
            $table->tinyInteger('severity')->default(2);

            $table->string('latitude');
            $table->string('longitude');
            $table->string('device_identifier');

            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('incident_type_id');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('incidents');
    }
}
