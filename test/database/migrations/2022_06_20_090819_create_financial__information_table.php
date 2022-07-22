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
        Schema::create('financial__information', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');  
            $table->string('currency')->nullable();   ;
            $table->double('hourly_rate')->nullable();   ;
            $table->double('daily_rate')->nullable();   ;
            $table->double('monthly_rate')->nullable();   ;
            $table->double('annually_rate')->nullable();   ;
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
        Schema::dropIfExists('financial__information');
    }
};
