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

            $table->text('details');
            $table->unsignedBigInteger('report_id');
            $table->unsignedBigInteger('user_id');

            $table->timestamps();


            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('report_id')->references('id')->on('reports');

        });
    }

    public function down()
    {
        Schema::dropIfExists('false_reports');
    }
}
