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
        Schema::create('add_services', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('service_type_id')->nullable();
            $table->foreign('service_type_id')->references('id')->on('services'); 
            $table->unsignedBigInteger('industry_id')->nullable();
            $table->foreign('industry_id')->references('industry_id')->on('industries');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('industry_id')->on('industries');
            $table->unsignedBigInteger('skill_id')->nullable();
            $table->foreign('skill_id')->references('id')->on('all_skills');         
            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('state_id')->on('states');
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('city_id')->on('cities');
            $table->string('title')->nullable();
            $table->double('expected_cost')->nullable();
            $table->double('service_cost')->nullable();
            $table->string('expected_cost_currency')->nullable();
            $table->string('upload_image')->nullable();
            $table->string('notes')->nullable();
            $table->string('facebook_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->string('linkedin_url')->nullable();
           $table->string('upload_document')->nullable();
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
        Schema::dropIfExists('add_services');
    }
};
