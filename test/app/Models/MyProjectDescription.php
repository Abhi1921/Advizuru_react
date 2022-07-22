<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyProjectDescription extends Model
{
    use HasFactory;
    protected $fillable = [
        'project_description',
        'project_name',
        'client_name',
        'user_id',
        'skill_id',
        'industry_id',
       
        
    ];

    protected $casts = [
        'skill_id' => 'integer',
        'user_id' => 'integer',
        'industry_id'=>'integer',
    ];
}
