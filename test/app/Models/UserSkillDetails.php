<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSkillDetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'description',
        'year_of_experience',
        'support_project',
        'implementation',
        'current_company',
        'skill_level',
        'self_assesment',
        'available',
        'profile_id',
        'skill_id',

    ];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'skill_id' => 'integer',
    ];

}
