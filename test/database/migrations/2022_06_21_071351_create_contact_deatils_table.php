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
        Schema::create('contact_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users'); 
            $table->string('full_name')->nullable();   
            $table->string('country')->nullable();   
            $table->string('designation')->nullable();     
            $table->string('mobile_number')->nullable();   
            $table->string('phone_number')->nullable();    
            $table->string('landline_number')->nullable();   
            $table->string('state')->nullable();   
            $table->string('city')->nullable();   
            $table->string('address')->nullable();   
            $table->integer('pincode')->nullable();     
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
        Schema::dropIfExists('contact_deatils');
    }
};
