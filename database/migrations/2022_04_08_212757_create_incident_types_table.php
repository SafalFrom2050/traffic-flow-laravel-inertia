<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidentTypesTable extends Migration
{
    public function up()
    {
        Schema::create('incident_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->string('default_severity')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('incident_types');
    }
}
