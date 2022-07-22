<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RateCard extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
    'job_profile',
    'skill_id',
    'skill_level',
    'years_of_experience',
    'industry_id',
    'expected_cost',
'currency',
'workingrates',
'availability',
'country_id',
'state_id',
'city_id',
'Relocation',
'description',
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