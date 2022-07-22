<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('currencies')->delete();
        $currency = [

            ["id"=> "1","country_id"=> "99","name"=> "INR","currency_code"=> "&#8377","status"=> "1","created_at"=> "2021-04-07 17:40:16","updated_at"=> "2021-04-07 17:40:16"],
            ["id"=> "2","country_id"=> "230","name"=> "USD","currency_code"=> "$","status"=> "1","created_at"=> "2021-04-09 21:15:37","updated_at"=> "2021-04-09 21:15:37"]
            
        ];
		DB::table('currencies')->insert($currency);
    }
}
