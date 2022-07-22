<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'full_name',
        'designation',
       'phone_number',
        'mobile_number',
        'city',
        'state',
        'country',
        'address',
        'pincode',
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
