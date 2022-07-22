<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    
$this->call([
StateSeeder::class
]);

$this->call([
    CountriesSeeder::class
    ]);
    
    $this->call([
        CitiesSeeder::class
        ]);
        $this->call([
            CurrencySeeder::class
            ]);
            $this->call([
                IndustrySeeder::class
                ]);
                $this->call([
                    DesignationSeeder::class
                    ]);
                    $this->call([
                        DegreeSeeder::class
                        ]);
                        $this->call([
                            InstituteSeeder::class
                            ]);
                            $this->call([
                                allskillSeeder::class
                                ]);
                
            
}
}
