<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;
    protected $fillable = [
        'description',
        'project_name',
        'project_duration_month',
        'user_id',
        'skill_id'
       
        
    ];
    protected $casts = [
        'degree_id' => 'integer',
        'industry_id' => 'integer',
        'user_id' => 'integer',
    ];
}
