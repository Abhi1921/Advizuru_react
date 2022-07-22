<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return voindustry_id
     */
    public function run()
    {DB::table('industries')->delete();
        $industry =[
            [
                "industry_id" => "1",
               
                "industry_name" => "BPO , Call Centre , ITES",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "2",
               
                "industry_name" => "Accounting , Finance",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "3",
               
                "industry_name" => "FMCG , Foods , Beverage",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "4",
               
                "industry_name" => "Consumer Electronics , Appliances , Durables",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "5",
               
                "industry_name" => "Export , Import",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "6",
               
                "industry_name" => "Banparent_iding , Financial Services , Broparent_iding",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "7",
               
                "industry_name" => "IT-Hardware &amp; Networparent_iding",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "8",
               
                "industry_name" => "Industrial Products , Heavy Machinery",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "9",
               
                "industry_name" => "Insurance",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "10",
               
                "industry_name" => "Courier , Transportation , Freight , Warehousing",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "11",
               
                "industry_name" => "Media , Entertainment , Internet",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "12",
               
                "industry_name" => "Medical , Healthcare , Hospitals",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "13",
               
                "industry_name" => "Office Equipment , Automation",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "14",
               
                "industry_name" => "Pharma , Biotech , Clinical Research",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "15",
               
                "industry_name" => "Oil and Gas , Energy , Power , Infrastructure",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "16",
               
                "industry_name" => "Retail , Wholesale",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "17",
               
                "industry_name" => "IT-Software , Software Services",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "18",
               
                "industry_name" => "Education , Teaching , Training",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "19",
               
                "industry_name" => "Telecom,ISP",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "20",
               
                "industry_name" => "Semiconductors , Electronics",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "21",
               
                "industry_name" => "Architecture , Interior Design",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "22",
               
                "industry_name" => "Fresher , Trainee , Entry Level",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "23",
               
                "industry_name" => "Advertising , PR , MR , Event Management",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "24",
               
                "industry_name" => "Agriculture , Dairy",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "25",
               
                "industry_name" => "Recruitment , Staffing",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "26",
               
                "industry_name" => "Gems , Jewellery",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "27",
               
                "industry_name" => "Legal",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "28",
               
                "industry_name" =>
                    "NGO , Social Services , Regulators , Industry Associations",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "29",
               
                "industry_name" => "Printing , Pacparent_idaging",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "30",
               
                "industry_name" => "Real Estate , Property",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "31",
               
                "industry_name" => "Security , Law Enforcement",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "32",
               
                "industry_name" => "Fertilizers , Pesticindustry_ides",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "33",
               
                "industry_name" => "Government , Defence",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "34",
               
                "industry_name" => "Pulp and Paper",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "35",
               
                "industry_name" => "Shipping , Marine",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "36",
               
                "industry_name" => "Tyres",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "37",
               
                "industry_name" => "Aviation , Aerospace Firms",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "38",
               
                "industry_name" => "Facility Management",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "39",
               
                "industry_name" => "parent_idPO , Research , Analytics",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "40",
               
                "industry_name" => "Glass , Glassware",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "41",
               
                "industry_name" => "Brewery , Distillery",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "42",
               
                "industry_name" => "Water Treatment , Waste Management",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "43",
               
                "industry_name" => "Strategy , Management Consulting Firms",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "44",
               
                "industry_name" => "Iron and Steel",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "45",
               
                "industry_name" => "Mining , Quarrying",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "46",
               
                "industry_name" => "Electricals , Switchgears",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "47",
               
                "industry_name" => "Animation , Gaming",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "48",
               
                "industry_name" => "Food Processing",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "49",
               
                "industry_name" => "Publishing",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "50",
               
                "industry_name" => "Wellness , Fitness , Sports",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "51",
               
                "industry_name" => "Ceramics , Sanitary ware",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "52",
               
                "industry_name" => "Ventilation , Air Conditioning",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "53",
               
                "industry_name" => "Internet , Ecommerce",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "54",
               
                "industry_name" => "Sugar",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "55",
               
                "industry_name" => "Broadcasting",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "56",
               
                "industry_name" => "Leather",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "57",
               
                "industry_name" => "Travel , Hotels , Restaurants , Airlines , Railways",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "58",
               
                "industry_name" => "Textiles , Garments , Accessories",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "59",
               
                "industry_name" => "Automobile , Auto Anciliary , Auto Components",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
            [
                "industry_id" => "60",
               
                "industry_name" => "Chemicals , PetroChemical , Plastic , Rubber",
                "industry_status" => "1",
                "created_at" => "2021-05-19 10:21:18",
                "updated_at" => "2021-05-19 10:21:18",
            ],
    ];
    DB::table('industries')->insert($industry);
}
}
