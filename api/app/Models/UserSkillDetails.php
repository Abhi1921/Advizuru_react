<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSkillDetails extends Model
{
    use HasFactory;
   
    public function alskills(){
        return $this->belongsTo(allSkills::class,'skill_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
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
        'user_id'

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
