<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Remuneration extends Model
{
    use HasFactory;
    
    protected $fillable = [
        
        'daily_rate',
        'country_id',
        'hourly_rate',
        'monthly_rate',
        'annually_rate',
        'currency_id'
        
    ];
    protected $casts = [
        'currency_id' => 'integer',
        'country_id' => 'integer',
        'user_id' => 'integer',
    ];
}
