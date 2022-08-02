<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trainer_programs', function (Blueprint $table) {
            $table->id();
            $table->integer('tittle')->nullable(); 
            $table->unsignedBigInteger('skill_id')->nullable();
            $table->foreign('skill_id')->references('id')->on('all_skills');
            $table->string('location')->nullable(); 
            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('state_id')->on('states');
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('city_id')->on('cities');
            $table->string('mode')->nullable(); 
            $table->string('agenda')->nullable();           
            $table->date('start_date')->nullable(); 
             $table->date('end_date')->nullable();         
            $table->string('hours')->nullable();     
            $table->string('session')->nullable(); 
            $table->integer('number_of_student')->nullable(); 
            $table->string('conducting_days')->nullable(); 
            $table->string('description')->nullable();          
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trainer_programs');
    }
};
