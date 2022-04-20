<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFalseReportsTable extends Migration
{
    public function up()
    {
        Schema::create('false_reports', function (Blueprint $table) {
            $table->id();
            $table->text('details')->nullable();

            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('incident_id');

            $table->timestamps();


            $table->foreign('user_id')->references('id')->on('users')->onDelete('CASCADE');
            $table->foreign('incident_id')->references('id')->on('incidents')->onDelete('CASCADE');

        });
    }

    public function down()
    {
        Schema::dropIfExists('false_reports');
    }
}
