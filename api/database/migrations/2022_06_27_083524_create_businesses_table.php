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
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('service_type_id')->nullable();
            $table->foreign('service_type_id')->references('id')->on('services'); 
            $table->unsignedBigInteger('industry_id')->nullable();
            $table->foreign('industry_id')->references('industry_id')->on('industries');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('industry_id')->on('industries');
            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('state_id')->on('states');
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('city_id')->on('cities');
            $table->unsignedBigInteger('skill_id')->nullable();
            $table->foreign('skill_id')->references('id')->on('all_skills');         
            $table->string('heading',50)->nullable();
            $table->string('effort_required',100)->nullable();
            $table->enum('effort_type',['days','weeks','months','year'])->default('days')->nullable();  
            $table->double('expected_cost',100)->nullable();
            $table->double('recruitment_consulting_pct',100)->nullable();
            $table->string('expected_cost_currency',100)->nullable();
            $table->enum('contact_person',['self','other'])->default('self')->nullable();  
            $table->date('start_date')->nullable();
            $table->string('description',100)->nullable();
            $table->enum('lead_type',['business','normal'])->default('business')->nullable();  
            $table->string('image',100)->nullable();
            $table->string('status')->nullable();
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
        Schema::dropIfExists('businesses');
    }
};
