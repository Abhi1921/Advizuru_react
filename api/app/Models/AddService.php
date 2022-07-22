<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddService extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'user_id',
        'service_type_id',
        'category_id',
        'country_id',
        'industry_id',
        'state_id',
        'city_id',
        'skill_id',
        'title',
        'service_cost',
    ];

        /**
 * The attributes that should be cast to native types.
 *
 * @var array
 */
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
