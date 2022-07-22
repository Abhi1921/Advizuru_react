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
        Schema::create('freelancers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users'); 
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('full_name');
            $table->string('gender');         
            $table->date('dob')->nullable();          
            $table->string('mobile_number')->nullable();
            $table->string('phone_number');
            $table->string('country');
            $table->string('state');
            $table->string('city')->nullable();
            $table->string('address');
            $table->integer('pincode');   
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
        Schema::dropIfExists('freelancers');
    }
};
