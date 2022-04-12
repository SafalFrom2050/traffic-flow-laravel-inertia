<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateIncidentsTable extends Migration
{
    public function up()
    {
        Schema::table('incidents', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('incident_type_id')->references('id')->on('incident_types');
        });
    }

    public function down()
    {
        Schema::table('incidents', function (Blueprint $table) {
            $table->dropConstrainedForeignId('user_id');
            $table->dropConstrainedForeignId('incident_type_id');
        });
    }
}
