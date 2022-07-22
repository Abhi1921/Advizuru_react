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
        Schema::create('add_sub_contracts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('countries');
            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('state_id')->on('states');
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('city_id')->on('cities');
            $table->unsignedBigInteger('functional_id')->nullable();
            $table->foreign('functional_id')->references('id')->on('functional_areas');
            $table->unsignedBigInteger('industry_id')->nullable();
            $table->foreign('industry_id')->references('industry_id')->on('industries');
            $table->unsignedBigInteger('skill_id')->nullable();
            $table->foreign('skill_id')->references('id')->on('all_skills');   
            $table->string('project_name')->nullable();
            $table->string('availability')->nullable();
            $table->integer('effort_required')->nullable();
            $table->enum('effort_type',['days','weeks','months','year'])->default('days')->nullable();  
            $table->date('start_date')->nullable(); 
            $table->date('end_date')->nullable(); 
            $table->enum('payment_type',['fixed','hourly','daily','monthly'])->default('fixed')->nullable(); 
            $table->double('estimated_cost')->nullable(); 
            $table->unsignedBigInteger('currency_id')->nullable();
            $table->foreign('currency_id')->references('id')->on('currencies');
            $table->string('experienced_required')->nullable();
            $table->unsignedBigInteger('qualification_desired')->nullable();
            $table->foreign('qualification_desired')->references('id')->on('degrees');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->string('other_requirement')->nullable();
            $table->integer('vendor_recruitment_company')->nullable();
            $table->string('notes')->nullable();
            $table->double('recruitment_consulting_pct')->nullable(); 
            $table->string('recruiter_email')->unique();
            $table->string('status',20)->nullable(); 
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
        Schema::dropIfExists('add_sub_contracts');
    }
};
