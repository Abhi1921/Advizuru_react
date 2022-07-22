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
        Schema::create('rate_cards', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('industry_id')->nullable();
            $table->foreign('industry_id')->references('industry_id')->on('industries');
            $table->string('job_profile')->nullable();
            $table->string('skill_level')->nullable();      
            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('state_id')->on('states');
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('city_id')->on('cities');
            $table->unsignedBigInteger('skill_id')->nullable();
            $table->foreign('skill_id')->references('id')->on('all_skills');
            $table->double('total_num_of_res')->nullable();
            $table->double('total_num_of_avl_res')->nullable();
            $table->string('years_of_experience')->nullable();
            $table->double('expected_cost')->nullable();
            $table->string('workingrate')->nullable();
            $table->unsignedBigInteger('currency_id')->nullable();
            $table->foreign('currency_id')->references('id')->on('currencies');         
            $table->string('availability')->nullable();
            $table->string('Relocation')->nullable();
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
        Schema::dropIfExists('rate_cards');
    }
};
