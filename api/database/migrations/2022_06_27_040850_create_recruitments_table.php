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
        Schema::create('recruitments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('designation_id')->nullable();
            $table->foreign('designation_id')->references('id')->on('designations'); 
            $table->unsignedBigInteger('industry_id')->nullable();
            $table->foreign('industry_id')->references('industry_id')->on('industries');
            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('state_id')->on('states');
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('city_id')->on('cities');
            $table->unsignedBigInteger('skill_id')->nullable();
            $table->foreign('skill_id')->references('id')->on('all_skills');
            $table->unsignedBigInteger('education_qualification')->nullable();
            $table->foreign('education_qualification')->references('id')->on('degrees');
            $table->string('title',100)->nullable();
            $table->integer('min_experience')->nullable();
            $table->integer('max_experience')->nullable();
            $table->double('minimum_budget')->nullable();
            $table->double('max_budget')->nullable();
            $table->string('upload_image')->nullable();
            $table->string('notes')->nullable();
            $table->string('vendor_recruitment_company')->nullable();
            $table->double('recruitment_consulting_pct')->nullable();
            $table->string('recruiter_email')->unique();
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
        Schema::dropIfExists('recruitments');
    }
};
