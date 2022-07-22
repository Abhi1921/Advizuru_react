<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class professional_Information extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'part_time_available',
        'full_time_available',
        'total_experience',
        'current_company',
        'skills',
        'available',
        'profile_id',
        
    ];

    protected $casts = [
    'skill_id' => 'integer',
    'city_id' => 'integer',
    'country_id' => 'integer',
    'state_id' => 'integer',
    'service_type_id' => 'integer',
    'category_id' => 'integer',
    'industry_id' => 'integer',
    'user_id' => 'integer',
];
}
