<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class myProject extends Model
{
    use HasFactory;
    protected $fillable = [
        'project_description',
        'project_name',
        'project_duration_month',
        'user_id',
        'skill_id'
       
        
    ];

    protected $casts = [
        'skill_id' => 'integer',
        'user_id' => 'integer',
    ];
}
