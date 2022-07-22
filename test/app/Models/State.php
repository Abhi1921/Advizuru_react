<?php

namespace App\Models;
use App\Models\City;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;
    protected $table = 'states';
    protected $fillable = ['state_id','state_name','country_id'];

    public function fetchcity(){
        return $this->belongTo(City::class,'state_id');
    }
}
