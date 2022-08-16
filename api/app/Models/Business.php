<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'service_type_id',
        'category_id',
        'country_id',
        'industry_id',
        'state_id',
        'city_id',
        'skill_id',
        'heading',
        'effort_required',
        'effort_type',
        'contact_person',
        'expected_cost_currency',
        'contact_person_email',
        'contact_person_mobile',
        'starte_date',
        'description',
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
    public function alskills(){
        return $this->belongsTo(allSkills::class,'skill_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function industryall(){
        return $this->belongsTo(industry::class,'industry_id');
    }
}
