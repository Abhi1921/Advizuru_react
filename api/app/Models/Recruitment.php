<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recruitment extends Model
{
    use HasFactory;
    protected $fillable = [
        'designation',
        'user_id',
        'title',
        'industry_id',
        'education_qualification',
        'city_id',
        'state_id',
        'country_id',
        'min_experience',
        'max_experience',
        'minimim_budget',
        'max_budget',
        'notes',
        'vendor_recruitment_company',
        'recruitment_consulting_pct',
        'recruiter_email',
        'status'
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
