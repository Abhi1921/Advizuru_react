<?php

namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

use Illuminate\Database\Eloquent\Model;

class freelancer extends Authenticatable 
{
    use HasFactory;
    
        /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'full_name',
        'gender',
        'dob',
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
