<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('predictions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('location_id');
            $table->enum('event_type', ['Earthquake', 'Volcano', 'Flood']);
            $table->dateTime('predicted_at');
            $table->unsignedBigInteger('sensor_data_id')->nullable();
            $table->unsignedBigInteger('api_data_id')->nullable();
            $table->enum('severity', ['Low', 'Medium', 'High'])->nullable();
            $table->text('description')->nullable();
            $table->foreign('location_id')->references('id')->on('locations')->onDelete('cascade');
            $table->foreign('sensor_data_id')->references('id')->on('sensor_data')->onDelete('set null');
            $table->foreign('api_data_id')->references('id')->on('api_data')->onDelete('set null');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('predictions');
    }
};
