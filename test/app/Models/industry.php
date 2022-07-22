<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class industry extends Model
{
    use HasFactory;
     
    protected $fillable = [
        'industry_id',
        
'industry_name',
'industry_status',
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
