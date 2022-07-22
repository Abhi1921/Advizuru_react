<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organisation extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'company_name',
        'company_size',
        'industry_id',
        'company_profile',
        'website_url',
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
