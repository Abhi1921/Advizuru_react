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
        Schema::create('professional__information', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users'); 
            $table->string('skills')->nullable();   
            $table->enum('available',['Freelancer','Full_time','Part_time'])->default('Freelancer')->nullable();      
            $table->string('full_time_available')->nullable();   
            $table->string('part_time_available')->nullable();   
            $table->string('total_experience')->nullable();   
            $table->integer('current_company')->nullable();   
            $table->integer('profile_id')->nullable();   
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
        Schema::dropIfExists('professional__information');
    }
};
