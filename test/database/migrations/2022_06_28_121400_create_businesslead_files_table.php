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
        Schema::create('businesslead_files', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('business_lead_id')->nullable();
            $table->foreign('business_lead_id')->references('id')->on('businesses');
            $table->string('path')->nullable();
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
        Schema::dropIfExists('businesslead_files');
    }
};
